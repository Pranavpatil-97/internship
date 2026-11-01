USE student_management;

INSERT INTO students (name, email, phone, city, age) VALUES
  ('Pranav', 'pranav@example.com', '9000000001', 'Jalgaon', 20),
  ('Aarav', 'aarav@example.com', '9000000002', 'Pune', 22),
  ('Sneha', 'sneha@example.com', '9000000003', 'Mumbai', 21),
  ('Riya', 'riya@example.com', '9000000004', 'Pune', 19),
  ('Karan', 'karan@example.com', '9000000005', 'Nashik', 23);

INSERT INTO courses (title, duration_weeks, fee) VALUES
  ('React.js', 6, 4000),
  ('Node.js', 6, 4500),
  ('MongoDB', 4, 3000),
  ('PostgreSQL', 5, 3500);

INSERT INTO enrollments (student_id, course_id) VALUES
  (1, 1), (1, 2), (2, 2), (3, 1), (3, 3), (4, 4), (5, 1);

SELECT * FROM students;