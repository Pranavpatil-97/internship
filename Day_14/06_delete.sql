USE student_management;

-- delete one enrollment
DELETE FROM enrollments WHERE student_id = 5 AND course_id = 1;

-- delete a student (their enrollments go too, because of ON DELETE CASCADE)
DELETE FROM students WHERE id = 5;

-- delete with a condition
DELETE FROM enrollments WHERE status = 'dropped';

-- verify
SELECT * FROM students;
SELECT * FROM enrollments;