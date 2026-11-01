USE student_management;

-- Which students are in which course?
SELECT s.name, c.title, e.status
FROM enrollments e
JOIN students s ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id
ORDER BY s.name;

-- How many students per course?
SELECT c.title, COUNT(e.id) AS total_students
FROM courses c
LEFT JOIN enrollments e ON e.course_id = c.id
GROUP BY c.title;