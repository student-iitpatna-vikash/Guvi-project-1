# Simple Calculator with Logs

A web-based calculator with persistent calculation history using Node.js, Express, and MySQL.

## Features
- Basic arithmetic operations
- Calculation history stored in MySQL
- Responsive UI with history panel

## Project Structure
```
calculator/
  public/         # Frontend (HTML, CSS, JS)
  backend/        # Backend (Node.js, Express, MySQL)
```

## Setup Instructions

### 1. MySQL Database
- Make sure MySQL is installed and running.
- Create the database and table using the provided SQL script:
  ```sql
  -- In backend/create_db.sql
  CREATE DATABASE IF NOT EXISTS calculator_db;
  USE calculator_db;
  CREATE TABLE IF NOT EXISTS logs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      expression VARCHAR(255),
      result VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

### 2. Backend
- Go to the backend folder:
  ```sh
  cd backend
  npm install
  npm start
  ```
- Edit `server.js` to match your MySQL username and password if needed.

### 3. Frontend
- Open your browser and go to `http://localhost:3000`

## Usage
- Use the calculator for basic operations.
- The right panel shows your calculation history (persisted in MySQL).

