package main

import (
	"context"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/ntuananhdevs/hyper-app/internal/config"
	"github.com/ntuananhdevs/hyper-app/internal/repository/postgres"
)

func main() {
	cfg, err := config.LoadConfig(".")
	if err != nil {
		log.Fatalf("Failed to load config: %v", err)
	}

	_, connPool := postgres.NewPostgres(context.Background(), cfg.GetDBSource())
	defer connPool.Close()

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message":   "pong",
			"db_status": "connected",
		})
	})

	r.Run(cfg.ServerAddress)

}
