ifneq (,$(wildcard .env))
    include .env
    export
endif

# Build DB_SOURCE from individual DB variables if not set
DB_SOURCE ?= postgres://$(DB_USERNAME):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)?sslmode=disable

migrateup:
	migrate -path database/postgres/migrations -database "$(DB_SOURCE)" -verbose up

migratedown:
	migrate -path database/postgres/migrations -database "$(DB_SOURCE)" -verbose down

sqlc:
	sqlc generate

.PHONY: migrateup migratedown sqlc