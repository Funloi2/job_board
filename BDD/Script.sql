-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 13 oct. 2023 à 12:01
-- Version du serveur :  10.3.38-MariaDB-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `JobBoard`
--

-- --------------------------------------------------------

--
-- Structure de la table `Advertisement`
--

CREATE TABLE `Advertisement` (
  `idAd` int(11) NOT NULL,
  `nomAd` varchar(200) DEFAULT NULL,
  `dateCreationAd` datetime DEFAULT NULL,
  `descriptionAd` text DEFAULT NULL,
  `salaireAd` int(11) DEFAULT NULL,
  `typeAd` varchar(50) DEFAULT NULL,
  `contractAd` varchar(50) DEFAULT NULL,
  `VilleAd` varchar(50) NOT NULL,
  `idCom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Advertisement`
--

INSERT INTO `Advertisement` (`idAd`, `nomAd`, `dateCreationAd`, `descriptionAd`, `salaireAd`, `typeAd`, `contractAd`, `VilleAd`, `idCom`) VALUES
(1, 'Poste dev 1', '2023-10-09 14:43:40', 'super poste', 300, 'CDI', 'FULL REMOTE', 'Montpellier', 1),
(2, 'Réseau', '2023-10-09 14:43:40', 'sijdnzdzabdukcqfre', 301, 'CDI', 'SEMI REMOTE', 'Agde', 1),
(3, 'Dev Php', '2023-10-11 16:55:55', 'Super job, cookie gratuit', 30, 'Present', 'CDD', 'Chez Benoit', 1),
(4, 'Hey 1', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Sauvian', 1),
(5, 'Hey 2', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Valros', 1),
(6, 'Hey 3', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Montpellier', 1),
(7, 'Hey 4', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Sete', 1),
(8, 'Hey 5', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Chez Nans', 1),
(9, 'Hey 6', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Chez Charles', 1),
(10, 'Hey 7', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Epietch', 1),
(11, 'Hey 8', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Nimes', 1),
(12, 'Hey 9', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Nimes', 1),
(13, 'Hey 10', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Nimes', 1),
(14, 'Hey 10', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Ales', 1),
(15, 'Hey 12', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Ales', 1),
(16, 'Hey 13', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Ales', 1),
(17, 'Hey 14', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Paris', 1),
(18, 'Hey 15', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Marseille', 1),
(19, 'Hey 16', '2023-10-11 16:57:26', 'zdzdzd', 52, 'Present', 'CDI', 'Nimes', 1);

-- --------------------------------------------------------

--
-- Structure de la table `Companie`
--

CREATE TABLE `Companie` (
  `idCom` int(11) NOT NULL,
  `nomCom` varchar(100) DEFAULT NULL,
  `descriptionCom` text DEFAULT NULL,
  `addressCom` varchar(150) DEFAULT NULL,
  `villeCom` varchar(100) DEFAULT NULL,
  `nbEmployeeCom` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Companie`
--

INSERT INTO `Companie` (`idCom`, `nomCom`, `descriptionCom`, `addressCom`, `villeCom`, `nbEmployeeCom`) VALUES
(1, 'Ubisoft', 'dzdzdzdz', 'dzdzd', 'Montpellier', 50);

-- --------------------------------------------------------

--
-- Structure de la table `JobApplication`
--

CREATE TABLE `JobApplication` (
  `idAd` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `dateCreationJA` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `UserApplicant`
--

CREATE TABLE `UserApplicant` (
  `idUser` int(11) NOT NULL,
  `nameUser` varchar(100) NOT NULL,
  `emailUser` varchar(255) NOT NULL,
  `passwordUser` text DEFAULT NULL,
  `dateCreationUser` datetime DEFAULT NULL,
  `usernameUser` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `UserApplicant`
--

INSERT INTO `UserApplicant` (`idUser`, `nameUser`, `emailUser`, `passwordUser`, `dateCreationUser`, `usernameUser`) VALUES
(1, 'dorian', 'dndjzu@fefef', 'dzfefe', '2023-10-09 14:42:58', 'Doddo');

-- --------------------------------------------------------

--
-- Structure de la table `UserCom`
--

CREATE TABLE `UserCom` (
  `idUserCom` int(11) NOT NULL,
  `nameUserCom` varchar(100) NOT NULL,
  `emailuserCom` varchar(255) NOT NULL,
  `passwordUserCom` text DEFAULT NULL,
  `dateCreationUserCom` datetime DEFAULT NULL,
  `usernameUserCom` varchar(50) NOT NULL,
  `idCom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `UserCom`
--

INSERT INTO `UserCom` (`idUserCom`, `nameUserCom`, `emailuserCom`, `passwordUserCom`, `dateCreationUserCom`, `usernameUserCom`, `idCom`) VALUES
(1, 'gerard', 'zde', 'azerty', '2023-10-09 14:45:36', 'root', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Advertisement`
--
ALTER TABLE `Advertisement`
  ADD PRIMARY KEY (`idAd`),
  ADD KEY `idCom` (`idCom`);

--
-- Index pour la table `Companie`
--
ALTER TABLE `Companie`
  ADD PRIMARY KEY (`idCom`);

--
-- Index pour la table `JobApplication`
--
ALTER TABLE `JobApplication`
  ADD PRIMARY KEY (`idAd`,`idUser`),
  ADD KEY `idUser` (`idUser`);

--
-- Index pour la table `UserApplicant`
--
ALTER TABLE `UserApplicant`
  ADD PRIMARY KEY (`idUser`);

--
-- Index pour la table `UserCom`
--
ALTER TABLE `UserCom`
  ADD PRIMARY KEY (`idUserCom`),
  ADD KEY `idCom` (`idCom`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Advertisement`
--
ALTER TABLE `Advertisement`
  MODIFY `idAd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `Companie`
--
ALTER TABLE `Companie`
  MODIFY `idCom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `UserApplicant`
--
ALTER TABLE `UserApplicant`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `UserCom`
--
ALTER TABLE `UserCom`
  MODIFY `idUserCom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Advertisement`
--
ALTER TABLE `Advertisement`
  ADD CONSTRAINT `Advertisement_ibfk_1` FOREIGN KEY (`idCom`) REFERENCES `Companie` (`idCom`);

--
-- Contraintes pour la table `JobApplication`
--
ALTER TABLE `JobApplication`
  ADD CONSTRAINT `JobApplication_ibfk_1` FOREIGN KEY (`idAd`) REFERENCES `Advertisement` (`idAd`),
  ADD CONSTRAINT `JobApplication_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `UserApplicant` (`idUser`);

--
-- Contraintes pour la table `UserCom`
--
ALTER TABLE `UserCom`
  ADD CONSTRAINT `UserCom_ibfk_1` FOREIGN KEY (`idCom`) REFERENCES `Companie` (`idCom`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;