package postgres

import (
	"context"
	"fmt"
	"log"

	"github.com/jackc/pgx/v5/pgxpool"
	db "github.com/ntuananhdevs/hyper-app/internal/repository/postgres/sqlc"
)

func NewPostgres(ctx context.Context, connString string) (*db.Queries, *pgxpool.Pool) {
	poolConfig, err := pgxpool.ParseConfig(connString)
	if err != nil {
		log.Fatalf("Failed to parse connection string: %v", err)
	}

	connPool, err := pgxpool.NewWithConfig(ctx, poolConfig)
	if err != nil {
		log.Fatalf("Failed to create connection pool: %v", err)
	}

	err = connPool.Ping(ctx)
	if err != nil {
		log.Fatalf("Failed to ping connection pool: %v", err)
	}

	fmt.Println("Connected to PostgreSQL")

	return db.New(connPool), connPool
}