USE student_management;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE enrollments;
TRUNCATE TABLE students;
TRUNCATE TABLE courses;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO students (name, email, phone, city, age) VALUES
  ('Pranav', 'pranav@example.com', '9000000001', 'Jalgaon', 20),
  ('Aarav', 'aarav@example.com', '9000000002', 'Pune', 22),
  ('Sneha', 'sneha@example.com', '9000000003', 'Mumbai', 21),
  ('Riya', 'riya@example.com', '9000000004', 'Pune', 19),
  ('Karan', 'karan@example.com', '9000000005', 'Nashik', 23),
  ('Meera', 'meera@example.com', '9000000006', 'Pune', 20);

INSERT INTO courses (title, duration_weeks, fee) VALUES
  ('React.js', 6, 4000),
  ('Node.js', 6, 4500),
  ('MongoDB', 4, 3000),
  ('PostgreSQL', 5, 3500),
  ('Docker', 3, 2500);

INSERT INTO enrollments (student_id, course_id, status) VALUES
  (1, 1, 'active'), (1, 2, 'active'), (2, 2, 'completed'),
  (3, 1, 'completed'), (3, 3, 'active'), (4, 4, 'active'),
  (5, 1, 'dropped'), (2, 1, 'active');

SELECT COUNT(*) AS students FROM students;
SELECT COUNT(*) AS courses FROM courses;
SELECT COUNT(*) AS enrollments FROM enrollments;