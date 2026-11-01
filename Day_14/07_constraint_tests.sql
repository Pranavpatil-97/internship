USE student_management;

-- duplicate email -> Error 1062 (UNIQUE violation)
INSERT INTO students (name, email) VALUES ('Test', 'pranav@example.com');

-- age below 16 -> Error 3819 (CHECK violation)
INSERT INTO students (name, email, age) VALUES ('Kid', 'kid@example.com', 12);

-- missing NOT NULL field -> Error 1364
INSERT INTO students (email) VALUES ('noname@example.com');

-- invalid foreign key -> Error 1452
INSERT INTO enrollments (student_id, course_id) VALUES (99, 1);