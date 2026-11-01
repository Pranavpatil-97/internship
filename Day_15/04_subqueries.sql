USE student_management;

-- courses costing more than the average fee
SELECT title, fee FROM courses
WHERE fee > (SELECT AVG(fee) FROM courses);

-- students enrolled in React.js
SELECT name FROM students
WHERE id IN (
  SELECT e.student_id
  FROM enrollments e
  JOIN courses c ON c.id = e.course_id
  WHERE c.title = 'React.js'
);

-- students with no enrollment (NOT EXISTS)
SELECT name FROM students s
WHERE NOT EXISTS (
  SELECT 1 FROM enrollments e WHERE e.student_id = s.id
);

-- the most expensive course
SELECT title, fee FROM courses
WHERE fee = (SELECT MAX(fee) FROM courses);

-- subquery in FROM (MySQL requires the alias "t")
SELECT s.name, t.course_count
FROM students s
JOIN (
  SELECT student_id, COUNT(*) AS course_count
  FROM enrollments
  GROUP BY student_id
) t ON t.student_id = s.id
WHERE t.course_count > 1;

-- correlated subquery: each student's number of courses
SELECT name,
  (SELECT COUNT(*) FROM enrollments e WHERE e.student_id = s.id) AS courses_taken
FROM students s;