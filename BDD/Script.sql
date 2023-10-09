CREATE TABLE Advertisement
(
    idAd           INT,
    nomAd          VARCHAR(200),
    dateCreationAd DATETIME,
    descriptionAd  TEXT,
    salaireAd      INT,
    typeAd         VARCHAR(50),
    PRIMARY KEY (idAd)
);

CREATE TABLE UserApplicant
(
    idUser BYTE,
    nameUser         VARCHAR(100) NOT NULL,
    emailUser        VARCHAR(255) NOT NULL,
    passwordUser     TEXT,
    dateCreationUser DATETIME,
    usernameUser     VARCHAR(50)  NOT NULL,
    PRIMARY KEY (idUser)
);

CREATE TABLE UserCom
(
    idUserCom BYTE,
    nameUserCom         VARCHAR(100) NOT NULL,
    emailuserCom        VARCHAR(255) NOT NULL,
    passwordUserCom     TEXT,
    dateCreationUserCom DATETIME,
    usernameUserCom     VARCHAR(50)  NOT NULL,
    PRIMARY KEY (idUserCom)
);

CREATE TABLE Companie
(
    idCom BYTE,
    nomCom         VARCHAR(100),
    descriptionCom TEXT,
    addressCom     VARCHAR(150),
    villeCom       VARCHAR(100),
    nbEmployeeCom  INT,
    idAd           INT NOT NULL,
    idUserCom BYTE NOT NULL,
    PRIMARY KEY (idCom),
    FOREIGN KEY (idAd) REFERENCES Advertisement (idAd),
    FOREIGN KEY (idUserCom) REFERENCES UserCom (idUserCom)
);

CREATE TABLE JobApplication
(
    idAd           INT,
    idUser BYTE,
    dateCreationJA DATETIME,
    PRIMARY KEY (idAd, idUser),
    FOREIGN KEY (idAd) REFERENCES Advertisement (idAd),
    FOREIGN KEY (idUser) REFERENCES UserApplicant (idUser)
);
