CREATE DATABASE student_management;
USE student_management;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  phone VARCHAR(15),
  city VARCHAR(50),
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT chk_age CHECK (age >= 16)
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL UNIQUE,
  duration_weeks INT NOT NULL,
  fee DECIMAL(10, 2) NOT NULL,
  CONSTRAINT chk_fee CHECK (fee >= 0)
);

CREATE TABLE enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  enrolled_on DATE DEFAULT (CURRENT_DATE),
  status VARCHAR(20) DEFAULT 'active',
  UNIQUE (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

SHOW TABLES;
DESCRIBE students;