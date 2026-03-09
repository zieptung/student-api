# Student API
Backend REST API for managing student data.

## Tech Stack
* Node.js
* Express.js
* MySQL
* dotenv
* cors

## Project Structure
```
student-api
│
├─ config
│   └─ db.js              # MySQL database connection
│
├─ controllers
│   └─ studentController.js   # Business logic for student operations
│
├─ models
│   └─ studentModel.js        # Database queries
│
├─ routes
│   └─ studentRoutes.js       # API endpoints
│
├─ server.js                  # Main server entry
├─ .env                       # Environment variables
├─ package.json
```

## Installation
1. Clone repository
```
git clone https://github.com/your-username/student-api.git
```

2. Install dependencies
```
npm install
```

3. Create `.env` file
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=studentdb
PORT=5000
```

4. Run server
```
node server.js
```

Server will run at:
```
http://localhost:5000
```

## Database Setup
Example SQL:

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

## API Endpoints

### Get all students
```
GET /students
```

### Get student by id
```
GET /students/:id
```

### Create student
```
POST /students
```

Body example:
```
{
  "name": "Nguyen Van A",
  "email": "a@example.com",
  "age": 20
}
```

### Update student
```
PUT /students/:id
```

### Delete student
```
DELETE /students/:id
```

## Testing API

You can test APIs using:
* Postman
* Insomnia

## Author
Diệp Tùng
