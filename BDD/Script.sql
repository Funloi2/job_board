

CREATE TABLE Advertisement(
                              idAd INT NOT NULL AUTO_INCREMENT,
                              nomAd VARCHAR(200),
                              dateCreationAd DATETIME,
                              descriptionAd TEXT,
                              salaireAd INT,
                              typeAd VARCHAR(50),
                              contractAd VARCHAR(50),
                              PRIMARY KEY(idAd)
);

CREATE TABLE UserApplicant(
                              idUser INT NULL AUTO_INCREMENT,
                              nameUser VARCHAR(100) NOT NULL,
                              emailUser VARCHAR(255) NOT NULL,
                              passwordUser TEXT,
                              dateCreationUser DATETIME,
                              usernameUser VARCHAR(50) NOT NULL,
                              PRIMARY KEY(idUser)
);

CREATE TABLE UserCom(
                        idUserCom INT NULL AUTO_INCREMENT,
                        nameUserCom VARCHAR(100) NOT NULL,
                        emailuserCom VARCHAR(255) NOT NULL,
                        passwordUserCom TEXT,
                        dateCreationUserCom DATETIME,
                        usernameUserCom VARCHAR(50) NOT NULL,
                        PRIMARY KEY(idUserCom)
);

CREATE TABLE Companie(
                         idCom INT NULL AUTO_INCREMENT,
                         nomCom VARCHAR(100),
                         descriptionCom TEXT,
                         addressCom VARCHAR(150),
                         villeCom VARCHAR(100),
                         nbEmployeeCom INT,
                         PRIMARY KEY(idCom)

);

CREATE TABLE JobApplication(
                               idAd INT,
                               idUser INT,
                               dateCreationJA DATETIME,
                               PRIMARY KEY(idAd, idUser),
                               FOREIGN KEY(idAd) REFERENCES Advertisement(idAd),
                               FOREIGN KEY(idUser) REFERENCES UserApplicant(idUser)
);
