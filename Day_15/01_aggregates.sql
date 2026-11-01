USE student_management;

SELECT COUNT(*) AS total_students FROM students;

SELECT COUNT(phone) AS students_with_phone FROM students;

SELECT SUM(fee) AS total_fee FROM courses;

SELECT ROUND(AVG(age), 1) AS average_age FROM students;

SELECT MIN(fee) AS cheapest, MAX(fee) AS costliest FROM courses;

-- several aggregates together
SELECT COUNT(*) AS courses,
       MIN(duration_weeks) AS shortest,
       MAX(duration_weeks) AS longest,
       ROUND(AVG(fee), 2) AS avg_fee
FROM courses;

-- youngest and oldest student
SELECT MIN(age) AS youngest, MAX(age) AS oldest FROM students;