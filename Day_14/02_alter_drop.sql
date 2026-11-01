USE student_management;

-- add a column
ALTER TABLE students ADD COLUMN gender VARCHAR(10);

-- change a column type (MySQL uses MODIFY)
ALTER TABLE students MODIFY COLUMN phone VARCHAR(20);

-- rename a column (MySQL 8.0+)
ALTER TABLE students RENAME COLUMN gender TO sex;

-- remove a column
ALTER TABLE students DROP COLUMN sex;

-- practice DROP on a throwaway table
CREATE TABLE temp_test (id INT);
DROP TABLE temp_test;

DESCRIBE students;