-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 03, 2025 at 09:46 AM
-- Server version: 9.4.0
-- PHP Version: 8.2.29

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
('1d7dd3a5-b899-11f0-ac17-e29cc1fe9c3b', 'Globus the Golden', '2025-11-03 09:39:27', '2025-11-03 09:39:27'),
('1d7df0d1-b899-11f0-ac17-e29cc1fe9c3b', 'Alien Meetings Whoooosh', '2025-11-03 09:39:27', '2025-11-03 09:39:27'),
('1d7df9cd-b899-11f0-ac17-e29cc1fe9c3b', 'Zombie Horror Films!', '2025-11-03 09:39:27', '2025-11-03 09:39:27');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `meeting_name` varchar(255) NOT NULL,
  `meeting_time` datetime NOT NULL,
  `meeting_length` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `group_id`, `meeting_name`, `meeting_time`, `meeting_length`, `created_at`, `updated_at`) VALUES
('9d8f3f88-b899-11f0-ac17-e29cc1fe9c3b', '1d7df0d1-b899-11f0-ac17-e29cc1fe9c3b', 'Haizarim Meofefim', '2025-11-12 08:54:37', 100, '2025-11-03 09:42:28', '2025-11-03 09:42:28'),
('9d8f51c8-b899-11f0-ac17-e29cc1fe9c3b', '1d7df9cd-b899-11f0-ac17-e29cc1fe9c3b', 'Dracula: Returning for the 300th time', '2025-11-10 07:56:37', 155, '2025-11-03 09:42:28', '2025-11-03 09:42:28'),
('9d8f59e9-b899-11f0-ac17-e29cc1fe9c3b', '1d7dd3a5-b899-11f0-ac17-e29cc1fe9c3b', 'The iron maiden who farms', '2025-11-03 18:59:37', 98, '2025-11-03 09:42:28', '2025-11-03 09:42:28'),
('9d8f61e4-b899-11f0-ac17-e29cc1fe9c3b', '1d7dd3a5-b899-11f0-ac17-e29cc1fe9c3b', 'Love is in the air', '2025-11-25 04:59:37', 99, '2025-11-03 09:42:28', '2025-11-03 09:42:28'),
('da0b06f8-b899-11f0-ac17-e29cc1fe9c3b', '1d7df9cd-b899-11f0-ac17-e29cc1fe9c3b', 'The skeleoton revived!', '2025-11-18 11:44:11', 123, '2025-11-03 09:44:05', '2025-11-03 09:44:05'),
('da0b1068-b899-11f0-ac17-e29cc1fe9c3b', '1d7dd3a5-b899-11f0-ac17-e29cc1fe9c3b', 'Boat of Misery', '2025-11-19 11:44:11', 160, '2025-11-03 09:44:05', '2025-11-03 09:44:05'),
('da0b190c-b899-11f0-ac17-e29cc1fe9c3b', '1d7df0d1-b899-11f0-ac17-e29cc1fe9c3b', 'Alien Choopi Choopi', '2025-11-13 11:44:11', 120, '2025-11-03 09:44:05', '2025-11-03 09:44:05'),
('da0b2192-b899-11f0-ac17-e29cc1fe9c3b', '1d7dd3a5-b899-11f0-ac17-e29cc1fe9c3b', 'The dog who saved Pamela\'s life', '2025-11-14 11:44:11', 80, '2025-11-03 09:44:05', '2025-11-03 09:44:05');

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
