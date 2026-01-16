package utils

import (
	"fmt"
	"github.com/spf13/viper"
)

type Config struct {
	DBDriver   string `mapstructure:"DB_DRIVER"`
	DBHost     string `mapstructure:"DB_HOST"`
	DBPort     int    `mapstructure:"DB_PORT"`
	DBDatabase string `mapstructure:"DB_DATABASE"`
	DBUsername string `mapstructure:"DB_USERNAME"`
	DBPassword string `mapstructure:"DB_PASSWORD"`

	ServerAddress string `mapstructure:"SERVER_ADDRESS"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigFile(".env") 
	viper.SetConfigType("env")  

	// 2. Tự động đọc biến môi trường (nếu có trên server thật/Docker)
	// Để sau này deploy, bạn set env trên server nó sẽ ưu tiên đè lên file .env
	viper.AutomaticEnv()

	// 3. Đọc file config
	err = viper.ReadInConfig()
	if err != nil {
		// Nếu không tìm thấy file .env cũng không sao (có thể chạy bằng env hệ thống)
		// Nhưng nếu lỗi định dạng file thì return lỗi
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			return
		}
	}

	// 4. MA THUẬT NẰM Ở ĐÂY:
	// Viper tự động map toàn bộ dữ liệu vào struct Config dựa trên tag mapstructure
	err = viper.Unmarshal(&config)
	return
}

func (c *Config) GetDBSource() string {
	return fmt.Sprintf("postgres://%s:%s@%s:%d/%s?sslmode=disable",
		c.DBUsername,
		c.DBPassword,
		c.DBHost,
		c.DBPort,
		c.DBDatabase,
	)
}