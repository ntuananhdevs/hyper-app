```
my-streaming-app/
├── cmd/                                    # 🚀 ĐIỂM KHỞI CHẠY (Entry points)
│   ├── api/
│   │   └── main.go                         # Chạy API server: go run cmd/api/main.go
│   └── worker/
│       └── main.go                         # Chạy Worker đồng bộ/xử lý ngầm: go run cmd/worker/main.go
│
├── config/                                 # ⚙️ CẤU HÌNH
│   ├── config.yaml                         # File chứa: DB host, API Key, Port...
│   └── config.go                           # Code load config (thường dùng Viper)
│
├── db/                                     # 🗄️ QUẢN LÝ SCHEMA & MIGRATIONS (Không chứa code Go logic)
│   ├── postgres/
│   │   ├── migrations/                     # File SQL versioning (tạo/sửa bảng)
│   │   │   ├── 000001_init_users.up.sql
│   │   │   └── 000001_init_users.down.sql
│   │   ├── queries/                        # Input cho sqlc đọc
│   │   │   └── user.sql                    # VD: -- name: GetUser :one
│   │   └── schema.sql                      # Schema dump (dùng cho sqlc analysis)
│   └── scylla/
│       ├── migrations/                     # File CQL versioning
│       │   └── 000001_init_chat_logs.cql
│       └── schema.cql                      # Schema tham khảo
│
├── internal/                               # 🔒 MÃ NGUỒN CHÍNH (Private - Logic cốt lõi)
│   ├── core/                               # 👉 BUSINESS LOGIC LAYER (Độc lập với DB/Web)
│   │   ├── domain/                         # Entities (Struct thuần túy)
│   │   │   ├── user.go                     # Struct User
│   │   │   └── chat_log.go                 # Struct ChatLog
│   │   ├── port/                           # Interfaces (Hợp đồng giao tiếp)
│   │   │   ├── user_repo.go                # Interface: CreateUser(ctx, u *User) error
│   │   │   └── chat_repo.go                # Interface: SaveLog(ctx, l *ChatLog) error
│   │   └── service/                        # Use Cases (Logic nghiệp vụ)
│   │       ├── auth_service.go             # Xử lý logic đăng nhập -> gọi user_repo
│   │       └── stream_service.go           # Xử lý logic stream -> gọi chat_repo
│   │
│   └── adapter/                            # 👉 INFRASTRUCTURE LAYER (Triển khai kết nối)
│       ├── http/                           # Giao tiếp ra ngoài (REST/gRPC)
│       │   ├── handler/
│       │   │   ├── auth_handler.go         # Parse request -> gọi auth_service
│       │   │   └── chat_handler.go         # Parse request -> gọi stream_service
│       │   └── router.go                   # Định nghĩa route (Gin/Echo/Fiber)
│       └── storage/                        # Triển khai DB (Implement Interfaces ở port)
│           ├── postgres/
│           │   ├── db.go                   # Kết nối pgxpool
│           │   ├── repository.go           # Implement user_repo (dùng code sqlc)
│           │   └── sqlc/                   # Code Go sinh tự động bởi sqlc
│           │       ├── db.go
│           │       ├── models.go
│           │       ├── querier.go
│           │       └── user.sql.go
│           └── scylla/
│               ├── session.go              # Kết nối gocql session
│               └── repository.go           # Implement chat_repo
│
├── pkg/                                    # 📦 THƯ VIỆN DÙNG CHUNG (Public)
│   ├── logger/                             # Cấu hình log (Zap/Logrus)
│   └── utils/                              # Hàm tiện ích (UUID, Hash password...)
│
├── sqlc.yaml                               # File cấu hình sinh code cho sqlc
├── Makefile                                # Các lệnh tắt: make migrate, make sqlc, make run
├── docker-compose.yml                      # Chạy Postgres + Scylla local
├── go.mod
└── go.sum
```