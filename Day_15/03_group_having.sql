USE student_management;

-- students per course
SELECT c.title, COUNT(e.id) AS total_students
FROM courses c
LEFT JOIN enrollments e ON e.course_id = c.id
GROUP BY c.id, c.title
ORDER BY total_students DESC;

-- courses with at least 2 students (HAVING filters groups)
SELECT c.title, COUNT(e.id) AS total_students
FROM courses c
JOIN enrollments e ON e.course_id = c.id
GROUP BY c.id, c.title
HAVING COUNT(e.id) >= 2;

-- total fee per student
SELECT s.name, SUM(c.fee) AS total_fee
FROM students s
JOIN enrollments e ON e.student_id = s.id
JOIN courses c ON c.id = e.course_id
GROUP BY s.id, s.name
ORDER BY total_fee DESC;

-- WHERE filters rows BEFORE grouping, HAVING filters AFTER
SELECT s.city, COUNT(*) AS students, ROUND(AVG(s.age), 1) AS avg_age
FROM students s
WHERE s.age >= 20
GROUP BY s.city
HAVING COUNT(*) >= 2;

-- enrollment status summary
SELECT status, COUNT(*) AS total
FROM enrollments
GROUP BY status;

-- students per city
SELECT city, COUNT(*) AS total
FROM students
GROUP BY city
ORDER BY total DESC;