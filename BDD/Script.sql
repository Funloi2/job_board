-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 17 oct. 2023 à 14:51
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
  `dateCreationAd` datetime DEFAULT curtime(),
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
(1, 'Developpeur Supreme', '2023-10-09 14:43:40', 'Soyez l\'élu', 5000, 'Present', 'Temp-partiel', 'Montpellier', 1),
(2, 'Ingénieur Logiciel Innovant', '2023-10-09 14:43:40', ' Vous êtes un créateur passionné de code ? Rejoignez-nous pour façonner l\'avenir de la technologie en développant des solutions logicielles révolutionnaires.', 3010, 'FULL REMOTE', 'CDI', 'Agde', 2),
(3, 'Développeur Full Stack Multidisciplinaire\r\n', '2023-10-11 16:55:55', 'Êtes-vous prêt à jongler avec les aspects front-end et back-end du développement ? Postulez pour créer des applications complètes et polyvalentes.', 1300, 'Present', 'CDD', 'Chez Benoit', 2),
(4, 'Architecte Logiciel Visionnaire\r\n', '2023-10-11 16:57:26', 'Concevez des architectures logicielles de pointe. Si vous êtes prêt à imaginer et créer le cadre technologique du futur, rejoignez notre équipe.', 1250, 'Present', 'Alternance', 'Sauvian', 1),
(5, 'Développeur Mobile Agile\r\n', '2023-10-11 16:57:26', 'Êtes-vous un expert en développement d\'applications mobiles ? Rejoignez-nous pour créer des expériences mobiles exceptionnelles et adaptées aux besoins des utilisateurs.', 1450, 'SEMI REMOTE', 'CDD', 'Valros', 1),
(6, 'Ingénieur en Sécurité des Données\r\n', '2023-10-11 16:57:26', 'Protégez l\'avenir numérique en rejoignant notre équipe de sécurité. Participez à la défense des données et à la prévention des cyberattaques.', 2140, 'FULL REMOTE', 'CDI', 'Montpellier', 2),
(7, 'Développeur de Jeux Interactifs\r\n', '2023-10-11 16:57:26', 'Plongez dans le monde du jeu vidéo. Créez des expériences ludiques, immersives et interactives pour les joueurs du monde entier.', 1870, 'FULL REMOTE', 'Alternance', 'Sete', 1),
(8, 'Développeur Web Responsive\r\n', '2023-10-11 16:57:26', 'Révolutionnez l\'expérience en ligne en créant des sites web réactifs. Si vous êtes passionné par le web, postulez pour rejoindre notre équipe.', 2500, 'SEMI REMOTE', 'CDI', 'Chez Nans', 2),
(9, 'Analyste de Données Curieux', '2023-10-11 16:57:26', 'Transformez des données en informations exploitables. Si vous avez un esprit curieux et analytique, postulez pour explorer l\'univers des données.', 2146, 'Present', 'CDI', 'Chez Charles', 2),
(10, 'Développeur Cloud Agile', '2023-10-11 16:57:26', 'Embarquez pour le cloud. Créez des applications évolutives et exploitables dans un environnement infonuagique en constante évolution.', 1796, 'Present', 'Temp-Partiel', 'Epietch', 1),
(11, 'Développeur d\'Intelligence Artificielle Enthousiaste', '2023-10-11 16:57:26', 'Joignez-vous à la révolution de l\'IA. Développez des systèmes intelligents et apprenez des machines pour résoudre des problèmes complexes.', 3010, 'SEMI REMOTE', 'CDI', 'Nimes', 1),
(12, 'Ingénieur DevOps Agile', '2023-10-11 16:57:26', 'Unifier le développement et les opérations. Si vous êtes passionné par l\'automatisation, la livraison continue et la collaboration, rejoignez notre équipe DevOps.', 2010, 'FULL REMOTE', 'CDI', 'Nimes', 1),
(13, 'Développeur de Logiciels Embarqués', '2023-10-11 16:57:26', 'Explorez le monde des systèmes embarqués. Concevez des logiciels intégrés dans des appareils et des systèmes pour donner vie à des innovations technologiques.', 3010, 'Present', 'Alternance', 'Nimes', 2),
(14, 'Développeur Blockchain Visionnaire', '2023-10-11 16:57:26', 'Êtes-vous prêt à révolutionner les transactions et les contrats numériques ? Rejoignez notre équipe pour développer des applications blockchain de pointe.', 3010, 'FULL REMOTE', 'Alternance', 'Ales', 1),
(15, 'Spécialiste en Interfaces Utilisateur Intuitives', '2023-10-11 16:57:26', 'Créez des interfaces utilisateur conviviales qui enchantent les utilisateurs. Si vous avez un sens aigu du design et de l\'expérience utilisateur, postulez pour transformer des idées en réalité.', 1969, 'SEMI REMOTE', 'CDI', 'Ales', 2),
(16, 'Développeur de Logiciels Éducatifs', '2023-10-11 16:57:26', 'Faites une différence dans l\'éducation en créant des logiciels éducatifs innovants. Rejoignez notre mission d\'améliorer l\'apprentissage à l\'ère numérique.', 2001, 'Present', 'CDI', 'Ales', 2),
(17, 'Ingénieur en Automatisation Industrielle', '2023-10-11 16:57:26', 'Révolutionnez les opérations industrielles grâce à l\'automatisation. Créez des systèmes intelligents qui optimisent la production et la logistique.', 5247, 'Present', 'CDI', 'Paris', 1);

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
  `nbEmployeeCom` int(11) DEFAULT NULL,
  `mailCom` varchar(200) NOT NULL,
  `passCom` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Companie`
--

INSERT INTO `Companie` (`idCom`, `nomCom`, `descriptionCom`, `addressCom`, `villeCom`, `nbEmployeeCom`, `mailCom`, `passCom`) VALUES
(1, 'Ubisoft', 'Ubisoft Montpellier est un studio français de développement de jeux vidéo fondé en 1994 et situé à Castelnau-le-Lez, en périphérie de Montpellier.', '85 Rue Didier Daurat, 34170', 'Castelnau-le-Lez', 50, '123456', '123456'),
(2, 'Amazon', 'Développeur Logiciel chez Amazon : Explorez. Innovez. Impactez. Joignez-vous à notre équipe et redéfinissez l\'avenir de la technologie. Postulez dès maintenant et faites partie de l\'entreprise qui ne cesse de réinventer l\'expérience client. #AmazonTechJobs', '67, boulevard du Général Leclerc, 92110', 'Clichy', 258, '123', '123');

-- --------------------------------------------------------

--
-- Structure de la table `JobApplication`
--

CREATE TABLE `JobApplication` (
  `idAd` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `dateCreationJA` datetime DEFAULT curtime()
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
  `dateCreationUser` datetime DEFAULT curtime(),
  `usernameUser` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `UserApplicant`
--

INSERT INTO `UserApplicant` (`idUser`, `nameUser`, `emailUser`, `passwordUser`, `dateCreationUser`, `usernameUser`) VALUES
(1, 'dorian', '123456', '123456', '2023-10-09 14:42:58', 'Doddo');

-- --------------------------------------------------------

--
-- Structure de la table `UserCom`
--

CREATE TABLE `UserCom` (
  `idUserCom` int(11) NOT NULL,
  `nameUserCom` varchar(100) NOT NULL,
  `emailuserCom` varchar(255) NOT NULL,
  `passwordUserCom` text DEFAULT NULL,
  `dateCreationUserCom` datetime DEFAULT curtime(),
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
  ADD PRIMARY KEY (`idCom`),
  ADD UNIQUE KEY `mailCom` (`mailCom`);

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
  MODIFY `idCom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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

alter table advertisement
    alter column dateCreationAd set default (current_time);

alter table jobapplication
    alter column dateCreationJA set default (current_time);

alter table userapplicant
    alter column dateCreationUser set default (current_time);

alter table usercom
    alter column dateCreationUserCom set default (current_time);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;