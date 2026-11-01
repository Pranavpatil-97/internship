USE student_management;

-- a badly designed flat table with repeated data
CREATE TABLE flat_enrollments (
  student_name VARCHAR(100),
  student_email VARCHAR(150),
  course_title VARCHAR(100),
  course_fee DECIMAL(10,2)
);

INSERT INTO flat_enrollments VALUES
  ('Pranav', 'pranav@example.com', 'React.js', 4000),
  ('Pranav', 'pranav@example.com', 'Node.js', 4500),
  ('Aarav', 'aarav@example.com', 'React.js', 4000);

-- find repeated data
SELECT student_email, COUNT(*) AS repeats
FROM flat_enrollments
GROUP BY student_email
HAVING COUNT(*) > 1;

SELECT course_title, COUNT(*) AS repeats
FROM flat_enrollments
GROUP BY course_title
HAVING COUNT(*) > 1;

DROP TABLE flat_enrollments;

-- duplicate check on the real tables (should return nothing)
SELECT email, COUNT(*) FROM students GROUP BY email HAVING COUNT(*) > 1;

SELECT student_id, course_id, COUNT(*)
FROM enrollments
GROUP BY student_id, course_id
HAVING COUNT(*) > 1;