USE checkitdb;

CREATE PROCEDURE spGetUsers() 

BEGIN
    SELECT *
    FROM users;
END $$ DELIMITER;


Call spGetUsers();