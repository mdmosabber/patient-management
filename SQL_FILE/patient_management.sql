-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2024 at 07:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `patient_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_06_09_160848_create_patients_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(191) NOT NULL,
  `last_name` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `phone` varchar(191) NOT NULL,
  `address` text NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `age` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `first_name`, `last_name`, `email`, `phone`, `address`, `gender`, `age`, `date`, `time`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Nettie', 'Bartoletti', 'lgibson@example.net', '+1-608-216-2592', '25884 Koepp Mountains\nSouth Kailey, NM 32353', 'male', 66, '1986-02-17', '04:21:08', 'https://via.placeholder.com/640x480.png/00bb55?text=sed', '2024-06-29 11:35:54', '2024-06-29 11:35:54'),
(2, 'Stefan', 'Johnston', 'niko82@example.net', '1-281-955-8895', '209 Savanah Summit Apt. 955\nLueilwitzville, MI 43942-6151', 'female', 60, '2004-07-21', '06:41:16', 'https://via.placeholder.com/640x480.png/006666?text=voluptas', '2024-06-29 11:35:54', '2024-06-29 11:35:54'),
(3, 'Camren', 'Nitzsche', 'king.cristopher@example.net', '+16292178849', '43798 Hickle Pass\nHoweville, TN 73219', 'female', 7, '1980-02-17', '06:01:11', 'https://via.placeholder.com/640x480.png/0011dd?text=libero', '2024-06-29 11:35:54', '2024-06-29 11:35:54'),
(4, 'Enrico', 'Bins', 'ronaldo74@example.com', '740-941-2570', '7228 Reynold Turnpike Apt. 553\nWest Augustusborough, KY 52276-9654', 'male', 5, '1985-04-19', '00:14:32', 'https://via.placeholder.com/640x480.png/00aabb?text=tenetur', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(5, 'Amelie', 'Dooley', 'iroberts@example.com', '971.387.2720', '299 Dulce Union\nLake Omer, CO 27328-5021', 'female', 53, '1984-02-21', '06:36:59', 'https://via.placeholder.com/640x480.png/00ccaa?text=rem', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(6, 'Lavada', 'Kerluke', 'akuhn@example.net', '1-863-589-5614', '89847 Considine Garden\nHettingermouth, CT 91697', 'male', 64, '2023-05-03', '09:22:29', 'https://via.placeholder.com/640x480.png/008899?text=dolor', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(7, 'Garett', 'Schmeler', 'misael.osinski@example.org', '+13517837634', '9616 Ebert Neck\nFridafort, WV 30834-6875', 'male', 45, '2003-03-05', '13:43:38', 'https://via.placeholder.com/640x480.png/005566?text=excepturi', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(8, 'Tracey', 'Stroman', 'spencer.marie@example.net', '+1.361.382.6762', '186 Darron Port Apt. 241\nLake Ryannville, MA 22637-4074', 'male', 36, '1995-06-09', '16:10:40', 'https://via.placeholder.com/640x480.png/002222?text=optio', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(9, 'Rod', 'Medhurst', 'anastasia03@example.com', '662.835.1454', '3474 Ruecker Crescent\nBeiershire, AZ 14846-2935', 'female', 89, '2001-09-11', '06:35:32', 'https://via.placeholder.com/640x480.png/00ddcc?text=aut', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(10, 'Braeden', 'Gibson', 'demetrius82@example.net', '1-304-360-9315', '300 Lindgren Park Suite 547\nDawsonmouth, DE 79125-3972', 'male', 17, '1995-10-14', '19:47:24', 'https://via.placeholder.com/640x480.png/00ee00?text=quas', '2024-06-29 11:35:55', '2024-06-29 11:35:55'),
(11, 'abc', 'hossen', 'abc@gmail.com', '01723267508', 'Hello', 'male', 23, '2024-07-05', '12:22:00', 'assets/images/patient/66804636c36f8_1719682614_patient_image.png', '2024-06-29 11:36:54', '2024-06-29 11:36:54');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `created_by` varchar(191) DEFAULT NULL,
  `updated_by` varchar(191) DEFAULT NULL,
  `deleted_by` varchar(191) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `image`, `email_verified_at`, `password`, `created_by`, `updated_by`, `deleted_by`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'admin', 'admin@gmail.com', '+1 (517) 577-7552', NULL, '2024-06-29 11:35:54', '$2y$10$ElyZqlQuk8QpWwa11LSO3u8Jai.9Doqk7JnHdiASGva6SPGh3Hr96', NULL, NULL, NULL, 'dIYcQ7QmIJ', '2024-06-29 11:35:54', '2024-06-29 11:35:54', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `patients_email_unique` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
