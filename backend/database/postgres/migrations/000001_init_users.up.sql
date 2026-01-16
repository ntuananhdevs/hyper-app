CREATE TABLE users (
    id bigserial PRIMARY KEY,
    username varchar(50) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password_hash varchar(255) NOT NULL,
    full_name varchar(100),
    created_at timestamptz NOT NULL DEFAULT now()
);
