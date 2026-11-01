USE student_management;

-- all records
SELECT * FROM students;

-- specific columns
SELECT name, city FROM students;

-- WHERE with a condition
SELECT * FROM students WHERE city = 'Pune';

-- AND / OR
SELECT * FROM students WHERE city = 'Pune' AND age > 20;
SELECT * FROM students WHERE city = 'Mumbai' OR city = 'Nashik';

-- comparison, IN, BETWEEN
SELECT * FROM students WHERE age >= 21;
SELECT * FROM students WHERE city IN ('Pune', 'Jalgaon');
SELECT * FROM courses WHERE fee BETWEEN 3000 AND 4000;

-- pattern matching (LIKE is case-insensitive by default in MySQL)
SELECT * FROM students WHERE name LIKE 'a%';
SELECT * FROM students WHERE email LIKE '%@example.com';

-- NULL check
SELECT * FROM students WHERE phone IS NULL;

-- ORDER BY and LIMIT
SELECT * FROM students ORDER BY age DESC;
SELECT * FROM courses ORDER BY fee ASC LIMIT 2;
SELECT * FROM students ORDER BY name LIMIT 3 OFFSET 2;

-- DISTINCT
SELECT DISTINCT city FROM students;

-- JOIN to connect the tables
SELECT s.name, c.title, e.status
FROM enrollments e
JOIN students s ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id
ORDER BY s.name;