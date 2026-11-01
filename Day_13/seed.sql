USE student_management;

INSERT INTO students (name, email, phone, city) VALUES
  ('Pranav', 'pranav@example.com', '9000000001', 'Jalgaon'),
  ('Aarav', 'aarav@example.com', '9000000002', 'Pune'),
  ('Sneha', 'sneha@example.com', '9000000003', 'Mumbai');

INSERT INTO courses (title, description, duration_weeks, fee) VALUES
  ('React.js', 'Frontend library basics', 6, 4000),
  ('Node.js', 'Backend with Express', 6, 4500),
  ('MongoDB', 'NoSQL database', 4, 3000);

INSERT INTO enrollments (student_id, course_id) VALUES
  (1, 1), (1, 2), (2, 2), (3, 1), (3, 3);