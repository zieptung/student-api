# Student Management API
Student Management API là một **RESTful Backend API** dùng để quản lý thông tin sinh viên.
Hệ thống cung cấp các endpoint để **tạo, đọc, cập nhật và xoá dữ liệu sinh viên** trong cơ sở dữ liệu.

Project được xây dựng nhằm minh hoạ cách phát triển backend sử dụng Node.js, Express.js và MySQL theo mô hình MVC.

# Công nghệ sử dụng
* Node.js
* Express.js
* MySQL
* dotenv
* cors

# Cấu trúc project
```
student-api
│
├── config
│   └── db.js                # Kết nối cơ sở dữ liệu MySQL
│
├── controllers
│   └── studentController.js # Xử lý logic cho các API sinh viên
│
├── models
│   └── studentModel.js      # Truy vấn dữ liệu từ database
│
├── routes
│   └── studentRoutes.js     # Định nghĩa các API endpoint
│
├── server.js                # File khởi động server
├── .env                     # Biến môi trường
├── package.json
└── README.md
```

# Cách hoạt động của hệ thống
Luồng xử lý request trong project:

```
Client
  ↓
Routes
  ↓
Controllers
  ↓
Models
  ↓
MySQL Database
```

1. Client gửi request đến API.
2. Routes nhận request và chuyển đến controller.
3. Controller xử lý logic nghiệp vụ.
4. Model thực hiện truy vấn database.
5. Server trả dữ liệu JSON về client.

# Cài đặt project

## 1. Clone repository
```
git clone https://github.com/your-username/student-api.git
```

## 2. Cài đặt dependencies
```
npm install
```

# Cấu hình biến môi trường
Tạo file `.env` trong thư mục gốc project.

Ví dụ:

```
# Server configuration
PORT=5000

# Database configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=studentdb

```

# Thiết lập cơ sở dữ liệu
Tạo database và bảng `students` trong MySQL:

```
CREATE DATABASE studentdb;
USE studentdb;
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);
```

# Chạy server
Khởi động server:
```
node server.js
```

Server sẽ chạy tại:
```
http://localhost:5000
```

# Danh sách API Endpoints

## Lấy danh sách sinh viên
```
GET /students
```

## Lấy thông tin sinh viên theo ID
```
GET /students/:id
```

## Thêm sinh viên mới
```
POST /students
```

Ví dụ body request:
```
{
  "name": "Nguyen Van A",
  "email": "a@example.com",
  "age": 20
}
```

## Cập nhật thông tin sinh viên
```
PUT /students/:id
```

## Xoá sinh viên
```
DELETE /students/:id
```

# Kiểm thử API
Có thể sử dụng các công cụ sau để test API:

* Postman
* Insomnia

# Tác giả
Diệp Tùng
