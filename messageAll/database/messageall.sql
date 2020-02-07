-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: messageAll
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `senderId` int(11) DEFAULT NULL,
  `text` text,
  `receiverId` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `senderId` (`senderId`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=232 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (7,6,'asd',NULL,NULL,'unread','2020-01-21 05:15:09'),(8,6,'asd',NULL,NULL,'unread','2020-01-21 05:15:10'),(10,6,'learn',NULL,NULL,'unread','2020-01-21 06:13:25'),(11,6,'lol',NULL,NULL,'unread','2020-01-21 06:13:33'),(13,6,'Hello',NULL,NULL,'unread','2020-01-21 07:48:56'),(14,6,'hi',NULL,NULL,'unread','2020-01-21 08:03:59'),(16,8,'hi',NULL,NULL,'unread','2020-01-21 08:27:41'),(18,6,'hi',NULL,NULL,'unread','2020-01-21 08:29:25'),(19,6,'uo',NULL,NULL,'unread','2020-01-21 08:38:46'),(20,6,'hi',NULL,NULL,'unread','2020-01-21 08:38:58'),(21,6,'hello',NULL,NULL,'unread','2020-01-21 08:39:03'),(22,8,'you are a cartoon',NULL,NULL,'unread','2020-01-21 08:39:23'),(23,8,'you are a cartoonlaksjdmlaskdlaksdlkasd kasjdhaksjdaksdjlkasjd',NULL,NULL,'unread','2020-01-21 08:40:18'),(24,9,'yo Im bilson',NULL,NULL,'unread','2020-01-21 08:46:54'),(25,9,'yes',NULL,NULL,'unread','2020-01-21 08:55:08'),(26,9,'hi',NULL,NULL,'unread','2020-01-21 11:34:12'),(27,8,'hi',NULL,NULL,'unread','2020-01-21 11:34:24'),(28,8,'hi',NULL,NULL,'unread','2020-01-21 11:34:38'),(29,8,'hi',NULL,NULL,'unread','2020-01-21 11:34:43'),(30,8,'hi',NULL,NULL,'unread','2020-01-21 11:35:01'),(31,8,'hi',NULL,NULL,'unread','2020-01-21 11:35:01'),(32,8,'hi',NULL,NULL,'unread','2020-01-21 11:35:06'),(33,8,'hi',NULL,NULL,'unread','2020-01-21 11:35:19'),(34,9,'hi',NULL,NULL,'unread','2020-01-21 11:35:24'),(35,8,'hi',NULL,NULL,'unread','2020-01-21 11:35:29'),(36,8,'hello',NULL,NULL,'unread','2020-01-21 11:35:49'),(37,9,'hi',NULL,NULL,'unread','2020-01-21 11:36:09'),(38,8,'hello',NULL,NULL,'unread','2020-01-21 11:36:20'),(39,9,'hi',NULL,NULL,'unread','2020-01-21 11:40:16'),(40,9,':)',NULL,NULL,'unread','2020-01-21 11:43:14'),(41,8,'&#128540;',NULL,NULL,'unread','2020-01-21 11:44:50'),(42,8,'&#128540',NULL,NULL,'unread','2020-01-21 11:44:54'),(45,8,'&#x1F354',NULL,NULL,'unread','2020-01-21 11:55:25'),(46,8,'&#x1F354;',NULL,NULL,'unread','2020-01-21 11:55:30'),(47,8,'\0x1F354;',NULL,NULL,'unread','2020-01-21 11:55:37'),(48,8,'\0x1F354;',NULL,NULL,'unread','2020-01-21 11:55:38'),(49,8,'\0x1F354;',NULL,NULL,'unread','2020-01-21 11:55:38'),(50,8,'U+0041',NULL,NULL,'unread','2020-01-21 11:56:03'),(51,9,'a',NULL,NULL,'unread','2020-01-21 12:02:01'),(52,9,'{\'\\u2728\'}',NULL,NULL,'unread','2020-01-21 12:02:15'),(60,9,'hi',NULL,NULL,'unread','2020-01-22 02:42:26'),(61,9,'hkk',NULL,NULL,'unread','2020-01-22 02:42:37'),(62,9,'bye',NULL,NULL,'unread','2020-01-22 02:44:01'),(63,8,'hi',NULL,NULL,'unread','2020-01-22 05:13:11'),(64,9,'asdkll laskdj asdkll laskdj asdkll laskdj asdkll laskdj asdkll laskdj asdkll laskdj asdkll laskdj asdkll laskdj ',NULL,NULL,'unread','2020-01-22 06:24:41'),(67,9,'',NULL,NULL,'unread','2020-01-22 07:06:03'),(78,9,'hi',NULL,NULL,'unread','2020-01-22 07:59:10'),(79,9,'hello',NULL,NULL,'unread','2020-01-22 08:36:48'),(80,8,'hi',NULL,NULL,'unread','2020-01-22 09:42:04'),(81,11,'Hi',NULL,NULL,'unread','2020-01-22 10:17:21'),(82,8,'',NULL,NULL,'unread','2020-01-22 11:51:21'),(83,8,'',NULL,NULL,'unread','2020-01-22 11:59:29'),(84,8,'',NULL,NULL,'unread','2020-01-22 11:59:54'),(85,8,'',NULL,NULL,'unread','2020-01-22 12:00:02'),(86,8,'',NULL,NULL,'unread','2020-01-22 12:00:03'),(87,8,'',NULL,NULL,'unread','2020-01-22 12:00:03'),(88,8,'',NULL,NULL,'unread','2020-01-22 12:00:03'),(89,8,'',NULL,NULL,'unread','2020-01-22 12:00:03'),(90,8,'',NULL,NULL,'unread','2020-01-22 12:00:04'),(91,8,'',NULL,NULL,'unread','2020-01-22 12:00:04'),(92,8,'',NULL,NULL,'unread','2020-01-22 12:00:04'),(93,8,'fr',NULL,NULL,'unread','2020-01-22 12:00:21'),(94,8,'',NULL,NULL,'unread','2020-01-22 12:00:56'),(95,8,'',NULL,NULL,'unread','2020-01-22 12:01:11'),(96,8,'',NULL,NULL,'unread','2020-01-22 12:01:34'),(97,8,'',NULL,NULL,'unread','2020-01-22 12:01:36'),(98,8,'',NULL,NULL,'unread','2020-01-22 12:01:41'),(99,8,'',NULL,NULL,'unread','2020-01-22 12:03:00'),(100,8,'',NULL,NULL,'unread','2020-01-22 12:03:39'),(101,9,'asdasd',NULL,NULL,'unread','2020-01-23 02:36:45'),(102,9,'asd',NULL,NULL,'unread','2020-01-23 02:36:55'),(103,9,'',NULL,NULL,'unread','2020-01-23 02:36:56'),(104,9,'',NULL,NULL,'unread','2020-01-23 02:36:59'),(105,8,'hi',NULL,NULL,'unread','2020-01-23 02:38:50'),(106,9,'hi',NULL,NULL,'unread','2020-01-23 02:39:19'),(107,9,'',NULL,NULL,'unread','2020-01-23 02:39:20'),(108,9,'',NULL,NULL,'unread','2020-01-23 02:41:09'),(109,9,'',NULL,NULL,'unread','2020-01-23 02:41:11'),(110,9,'',NULL,NULL,'unread','2020-01-23 02:41:12'),(111,9,'',NULL,NULL,'unread','2020-01-23 02:41:12'),(112,9,'',NULL,NULL,'unread','2020-01-23 02:41:13'),(113,8,'',NULL,NULL,'unread','2020-01-23 02:41:15'),(114,8,'',NULL,NULL,'unread','2020-01-23 02:41:16'),(115,8,'',NULL,NULL,'unread','2020-01-23 02:41:22'),(116,8,'',NULL,NULL,'unread','2020-01-23 02:41:23'),(117,8,'',NULL,NULL,'unread','2020-01-23 02:41:24'),(119,9,'',NULL,NULL,'unread','2020-01-23 02:41:27'),(120,9,'',NULL,NULL,'unread','2020-01-23 02:41:27'),(121,9,'',NULL,NULL,'unread','2020-01-23 02:41:28'),(122,9,'',NULL,NULL,'unread','2020-01-23 02:41:29'),(145,8,'',NULL,NULL,'unread','2020-01-23 05:33:15'),(146,8,'',NULL,NULL,'unread','2020-01-23 05:33:47'),(147,8,'',NULL,NULL,'unread','2020-01-23 05:34:08'),(148,8,'',NULL,NULL,'unread','2020-01-23 05:34:14'),(149,8,'',NULL,NULL,'unread','2020-01-23 05:34:16'),(150,8,'',NULL,NULL,'unread','2020-01-23 05:34:42'),(151,8,'',NULL,NULL,'unread','2020-01-23 05:34:45'),(152,8,'',NULL,NULL,'unread','2020-01-23 05:35:37'),(153,8,'',NULL,NULL,'unread','2020-01-23 05:36:40'),(154,8,'',NULL,NULL,'unread','2020-01-23 05:37:09'),(155,8,'',NULL,NULL,'unread','2020-01-23 05:38:48'),(156,8,'',NULL,NULL,'unread','2020-01-23 05:39:28'),(157,8,'',NULL,NULL,'unread','2020-01-23 05:39:31'),(158,8,'',NULL,NULL,'unread','2020-01-23 05:39:40'),(159,8,'',NULL,NULL,'unread','2020-01-23 05:40:28'),(160,8,'',NULL,NULL,'unread','2020-01-23 05:41:47'),(161,8,'',NULL,NULL,'unread','2020-01-23 05:41:49'),(162,8,'',NULL,NULL,'unread','2020-01-23 05:41:51'),(163,8,'',NULL,NULL,'unread','2020-01-23 05:41:53'),(164,8,'',NULL,NULL,'unread','2020-01-23 05:41:54'),(165,8,'',NULL,NULL,'unread','2020-01-23 05:41:58'),(166,8,'',NULL,NULL,'unread','2020-01-23 05:42:00'),(167,8,'',NULL,NULL,'unread','2020-01-23 05:42:02'),(168,8,'',NULL,NULL,'unread','2020-01-23 05:42:03'),(169,8,'',NULL,NULL,'unread','2020-01-23 05:42:04'),(170,8,'',NULL,NULL,'unread','2020-01-23 05:42:05'),(171,9,'',NULL,NULL,'unread','2020-01-23 05:42:22'),(172,9,'',NULL,NULL,'unread','2020-01-23 05:44:43'),(173,9,'',NULL,NULL,'unread','2020-01-23 05:44:45'),(174,9,'',NULL,NULL,'unread','2020-01-23 05:44:47'),(175,9,'',NULL,NULL,'unread','2020-01-23 05:44:49'),(176,9,'',NULL,NULL,'unread','2020-01-23 05:45:21'),(177,9,'',NULL,NULL,'unread','2020-01-23 05:45:22'),(178,9,'',NULL,NULL,'unread','2020-01-23 06:13:41'),(179,8,'',NULL,NULL,'unread','2020-01-23 06:17:20'),(180,8,'',NULL,NULL,'unread','2020-01-23 06:17:39'),(182,8,'hi',NULL,NULL,'unread','2020-01-23 06:19:07'),(183,8,'',NULL,NULL,'unread','2020-01-23 06:20:09'),(189,8,'',NULL,NULL,'unread','2020-01-23 06:27:15'),(190,8,'',NULL,NULL,'unread','2020-01-23 06:29:50'),(191,8,'',NULL,NULL,'unread','2020-01-23 06:29:51'),(192,8,'',NULL,NULL,'unread','2020-01-23 06:30:38'),(193,8,'',NULL,NULL,'unread','2020-01-23 06:30:39'),(194,9,'hi',NULL,NULL,'unread','2020-01-23 06:30:43'),(195,9,'',NULL,NULL,'unread','2020-01-23 06:31:04'),(201,9,'',NULL,NULL,'unread','2020-01-23 06:33:27'),(202,9,'',NULL,NULL,'unread','2020-01-23 06:33:28'),(203,9,'',NULL,NULL,'unread','2020-01-23 06:33:29'),(204,9,'',NULL,NULL,'unread','2020-01-23 06:33:30'),(205,8,'',NULL,NULL,'unread','2020-01-23 06:33:32'),(206,8,'',NULL,NULL,'unread','2020-01-23 06:33:34'),(207,9,'',NULL,NULL,'unread','2020-01-23 06:53:15'),(208,9,'',NULL,NULL,'unread','2020-01-23 06:56:43'),(209,9,'',NULL,NULL,'unread','2020-01-23 06:56:45'),(210,9,'',NULL,NULL,'unread','2020-01-23 06:56:48'),(211,9,'',NULL,NULL,'unread','2020-01-23 06:57:27'),(212,9,'',NULL,NULL,'unread','2020-01-23 06:57:28'),(213,9,'',NULL,NULL,'unread','2020-01-23 08:57:22'),(214,8,'hi',NULL,NULL,'unread','2020-01-23 10:21:52'),(215,9,'hi',NULL,NULL,'unread','2020-01-23 10:21:56'),(216,8,'',NULL,NULL,'unread','2020-01-23 10:23:15'),(217,9,'',NULL,NULL,'unread','2020-01-23 10:25:01'),(218,9,'',NULL,NULL,'unread','2020-01-23 10:25:02'),(219,9,'',NULL,NULL,'unread','2020-01-23 10:25:03'),(220,9,'',NULL,NULL,'unread','2020-01-23 10:25:04'),(221,9,'',NULL,NULL,'unread','2020-01-23 10:31:21'),(222,9,'',NULL,NULL,'unread','2020-01-23 10:31:23'),(230,8,'hi',NULL,NULL,'unread','2020-01-24 04:28:53'),(231,9,'hi',NULL,NULL,'unread','2020-01-24 04:28:56');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(70) DEFAULT NULL,
  `lastName` varchar(70) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role` enum('admin','member') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'Apple','Microsoft','Nepal','12312323','apple@windows.com','$2b$10$/MdTd3Ux6MIEmKUsWQGAk.g5ETXAJyPhB4FRYF1ZwWz5U7Dm51T/S','undefined','member'),(6,'Sakura','Uchiha','Khonoha','123123123','uchiha@sasu.c','$2b$10$grn6eobkSBPN8FMCecOfOOk5w.eChq3ADTL0B8X68Y9Xm4BzYytZ6','undefined','member'),(8,'Samir','Shrestha','Kathmandu','undefined','samir@gmail.com','$2b$10$VN/z2MyPQcDdn0ZaelNx6e/LmwrBQj5pGChlpMvmBZ/ibE7uYSaf.','undefined','member'),(9,'Bilson','Naga','Bhaktapur','undefined','bilson@gmail.com','$2b$10$Zz2VR6R2mWQMQoyTCGsuwu0fE4M0U5f2m5xIYPZx5IdLmb7o4Eo92','undefined','member'),(11,'Susan','Koju','undefined','undefined','susankoju@lftechnology.com','$2b$10$xLlUxYSaK4LPgX1wo4miGOUS7e.7zxFIAqH7peSn.MC9aclA2fX8m','undefined','member'),(45,'Hello','asd','undefined','undefined','Ino@gmail.com','$2b$10$WzdIJIqFq2jwEmQApbFhPOZs5J/kJQKWIWmOIkv6hqofbsvgp5Rze','undefined','member'),(47,'Hello','asd','undefined','undefined','bilson2@gmail.com','$2b$10$Sz6TvlzBlvCbdvbeHi3sHuVQw17aMiji.dXeGwtNsKcpd3Bawkg5G','undefined','member');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-26  8:20:01
