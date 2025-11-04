-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 04, 2025 at 08:15 AM
-- Server version: 9.5.0
-- PHP Version: 8.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hitech`
--
CREATE DATABASE IF NOT EXISTS `hitech` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `hitech`;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `group_name`, `created_at`, `updated_at`) VALUES
('6c4b3d2e-b954-11f0-8e63-2e0bdaeb4ec5', 'React Cool Group', '2025-11-04 07:59:45', '2025-11-04 07:59:45'),
('6c4b68bd-b954-11f0-8e63-2e0bdaeb4ec5', 'Express Speed Group', '2025-11-04 07:59:45', '2025-11-04 07:59:45'),
('6c4b8560-b954-11f0-8e63-2e0bdaeb4ec5', 'Docker Embracing Group', '2025-11-04 07:59:45', '2025-11-04 07:59:45');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `meeting_start` datetime NOT NULL,
  `meeting_finish` datetime NOT NULL,
  `meeting_description` text NOT NULL,
  `meeting_room` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `group_id`, `meeting_start`, `meeting_finish`, `meeting_description`, `meeting_room`, `created_at`, `updated_at`) VALUES
('40807aca-b956-11f0-8e63-2e0bdaeb4ec5', '6c4b3d2e-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-27 10:10:28', '2025-11-27 15:10:28', 'React meeting for utilizing new secret project... it\'s very secretive! So no disclosing here...', 'Ice Cold Room', '2025-11-04 08:10:24', '2025-11-04 08:10:24'),
('40808c86-b956-11f0-8e63-2e0bdaeb4ec5', '6c4b8560-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-19 12:10:28', '2025-11-19 23:10:28', 'Meeting for the fun for Docker workers. Celebration Day! Don\'t forget to bring sweets!', 'The Great Hall', '2025-11-04 08:10:24', '2025-11-04 08:10:24'),
('40809873-b956-11f0-8e63-2e0bdaeb4ec5', '6c4b68bd-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-13 10:10:28', '2025-11-13 15:10:28', 'Express meeting for being so quick, it\'s now the ultimate challenge of who can code faster.', 'Bullet Train Room', '2025-11-04 08:10:24', '2025-11-04 08:10:24'),
('4080b5f6-b956-11f0-8e63-2e0bdaeb4ec5', '6c4b3d2e-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-12 10:10:28', '2025-11-12 16:10:28', 'React Social Meeting to break the ice for those who feel uncomfortable', 'The Great Hall', '2025-11-04 08:10:24', '2025-11-04 08:10:24'),
('67bb6dd8-b955-11f0-8e63-2e0bdaeb4ec5', '6c4b3d2e-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-03 12:00:27', '2025-11-03 16:11:27', 'React Meeting For the implementation of new hook designs while playing Taki on the fly', 'Polar Bear Room', '2025-11-04 08:03:22', '2025-11-04 08:03:22'),
('67bb8fa2-b955-11f0-8e63-2e0bdaeb4ec5', '6c4b68bd-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-12 10:03:27', '2025-11-12 14:03:27', 'Node Meeting for implementing new joi content while eating Doritos on the fly', 'Train Room', '2025-11-04 08:03:22', '2025-11-04 08:03:22'),
('67bbaca7-b955-11f0-8e63-2e0bdaeb4ec5', '6c4b8560-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-05 12:03:27', '2025-11-05 15:03:27', 'Docker Meeting for containing new containers while playing 1,2,3 Salted Fish on the fly... it\'s Heavy! ', 'Whale Room', '2025-11-04 08:03:22', '2025-11-04 08:03:22'),
('67bbc3f9-b955-11f0-8e63-2e0bdaeb4ec5', '6c4b8560-b954-11f0-8e63-2e0bdaeb4ec5', '2025-11-13 11:19:27', '2025-11-13 20:03:27', 'Docker Meeting for the tutoring of new juniors while juggling on the fly', 'Polar Bear Room', '2025-11-04 08:03:22', '2025-11-04 08:03:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
