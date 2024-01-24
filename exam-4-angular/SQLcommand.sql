CREATE DATABASE  IF NOT EXISTS `exam-4` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `exam-4`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: exam-4
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_actions`
--

DROP TABLE IF EXISTS `account_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_num` varchar(45) NOT NULL,
  `action` varchar(45) NOT NULL,
  `amount` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `payments` varchar(45) DEFAULT NULL,
  `return_date` varchar(45) DEFAULT NULL,
  `interest` varchar(45) DEFAULT '3%',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_actions`
--

LOCK TABLES `account_actions` WRITE;
/*!40000 ALTER TABLE `account_actions` DISABLE KEYS */;
INSERT INTO `account_actions` VALUES (1,'3223262','deposit','200','09/07/2023',NULL,NULL,NULL),(2,'123125','witdraw','300','09/07/2023',NULL,NULL,NULL),(3,'1111112','loan','120','09/07/2023','2','11/07/2023','3%'),(4,'1111112','deposit','500','09/07/2023',NULL,NULL,NULL),(5,'1234','deposit','123','09/07/2023',NULL,NULL,NULL),(17,'1111112','loan','2300','09/07/2023','4','12/07/2023','3%'),(25,'1234','loan','9500','09/07/2023','5','2000-04-12','3%');
/*!40000 ALTER TABLE `account_actions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-09 14:19:58
