USE student_management;

-- INNER JOIN: only students who have enrollments
SELECT s.name, c.title, e.status
FROM enrollments e
JOIN students s ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id
ORDER BY s.name;

-- LEFT JOIN: all students, even Meera
SELECT s.name, c.title
FROM students s
LEFT JOIN enrollments e ON e.student_id = s.id
LEFT JOIN courses c ON c.id = e.course_id
ORDER BY s.name;

-- students with no enrollments
SELECT s.name
FROM students s
LEFT JOIN enrollments e ON e.student_id = s.id
WHERE e.id IS NULL;

-- courses nobody has taken (Docker)
SELECT c.title
FROM courses c
LEFT JOIN enrollments e ON e.course_id = c.id
WHERE e.id IS NULL;

-- RIGHT JOIN: all courses, even those with no students
SELECT c.title, s.name
FROM enrollments e
RIGHT JOIN courses c ON c.id = e.course_id
LEFT JOIN students s ON s.id = e.student_id
ORDER BY c.title;

-- SELF JOIN: pairs of students in the same city
SELECT a.name AS student_1, b.name AS student_2, a.city
FROM students a
JOIN students b ON a.city = b.city AND a.id < b.id;

-- FULL JOIN is not supported in MySQL, so emulate it with UNION
SELECT s.name, c.title
FROM students s
LEFT JOIN enrollments e ON e.student_id = s.id
LEFT JOIN courses c ON c.id = e.course_id
UNION
SELECT s.name, c.title
FROM courses c
LEFT JOIN enrollments e ON e.course_id = c.id
LEFT JOIN students s ON s.id = e.student_id;