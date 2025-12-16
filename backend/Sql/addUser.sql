USE checkitdb;

DELIMITER $$

DROP PROCEDURE IF EXISTS addUser$$

CREATE PROCEDURE addUser(
    IN emailParam VARCHAR(255),
    IN passwordParam VARCHAR(255),
    IN typeParam VARCHAR(50),
    IN activeParam TINYINT(1)
)
BEGIN
    INSERT INTO users (email, password, type, active)
    VALUES (emailParam, passwordParam, typeParam, activeParam);
END$$

DELIMITER ;

CALL addUser("usamaashraf471@yahoo.com","Salah2018","user",1);