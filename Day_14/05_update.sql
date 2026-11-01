USE student_management;

-- update one student
UPDATE students SET city = 'Bhusawal' WHERE id = 1;

-- update multiple columns
UPDATE students SET phone = '9111111111', age = 24 WHERE email = 'karan@example.com';

-- update many rows
UPDATE courses SET fee = fee + 500 WHERE id IN (1, 2);

-- change enrollment status
UPDATE enrollments SET status = 'completed' WHERE student_id = 3 AND course_id = 1;

-- verify
SELECT * FROM students WHERE id IN (1, 5);
SELECT * FROM courses;