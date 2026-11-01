USE student_management;

-- index for lookups on city
CREATE INDEX idx_students_city ON students(city);

-- composite index
CREATE INDEX idx_enroll_status_date ON enrollments(status, enrolled_on);

-- list indexes
SHOW INDEX FROM students;
SHOW INDEX FROM enrollments;

-- see how MySQL runs a query
EXPLAIN SELECT * FROM students WHERE city = 'Pune';

-- remove one
DROP INDEX idx_students_city ON students;