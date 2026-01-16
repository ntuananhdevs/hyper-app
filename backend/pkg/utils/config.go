package utils

import (
	"fmt"

	"github.com/spf13/viper"
)

type Config struct {
	DB_DRIVER string `mapstructure:"DB_DRIVER"`
	DB_HOST int `mapstructure:"DB_HOST"`
	DB_PORT int `mapstructure:"DB_PORT"`
	DB_DATABASE string `mapstructure:"DB_DATABASE"`
	DB_USERNAME string `mapstructure:"DB_USERNAME"`
	DB_PASSWORD string `mapstructure:"DB_PASSWORD"`

	ServerPort string `mapstructure:"SERVER_PORT"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName(".env")
	viper.SetConfigType("env")

	viper.AutomaticEnv()
	
	err = viper.ReadInConfig() 
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}

func (c *Config) GetDBSource() string {
	return fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable",
		c.DB_USERNAME,
		c.DB_PASSWORD,
		c.DB_HOST,
		c.DB_PORT,
		c.DB_DATABASE,
	)
}