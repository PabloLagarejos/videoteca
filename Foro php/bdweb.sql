CREATE DATABASE  IF NOT EXISTS `bdweb` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `bdweb`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: bdweb
-- ------------------------------------------------------
-- Server version	5.5.25a

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `usuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `clave` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `sexo` varchar(1) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'H',
  `contador` int(11) NOT NULL,
  PRIMARY KEY (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('alfa','alfabeto','beto','omega','2000-12-31','M',1),('angel','debano','debaño','ángel','0005-01-05','H',1),('botones','sacarino','Sacarino Edulcorado','Botones','1960-05-23','H',1),('clarc','guibol','Gueibol','Clarc','1906-10-23','H',0),('domingo','leando','l','d','1995-01-01','M',1),('juanma','castro','Castro Ramos','Juan Manuel','1969-03-10','M',0),('lucia','elsol','e','l','0004-01-04','M',1),('nitiro','nitirito','','','0000-00-00','',0),('nueva','entrada','entrada','nueva','1900-01-01','M',0),('ofelia','michelinez','Michelínez Embutidos','Ofelia','1955-03-02','M',2),('pedro','medario','m','p','1990-01-01','H',1),('pepe','gotera','Gotera del Quinto','José','1950-11-15','H',3),('pol','niuman','n','p','1928-08-08','H',1),('remedios','tesalvemaria','t','r','1992-02-02','M',0),('soledad','lamano','l','s','1993-01-03','M',1),('yon','guein','g','y','1997-07-07','H',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `titulo` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cuerpo` varchar(256) COLLATE utf8_spanish_ci DEFAULT NULL,
  `usuario` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'2012-12-05','La vida es sueño','Nada es verdad y nada es mentira, todo depende...','yon'),(2,'2012-12-05','Mens sana in corpore sano','¿Dónde empieza el culto al cuerpo y dónde termina el cuidado saludable?','pol'),(3,'2012-12-05','Carpe diem','O cómo distraer la atención de lo realmente importante','yon'),(4,'2012-11-06','La dolce vita','E il dolce far niente','pol'),(13,'2012-11-06','Pienso','Luego existo','yon'),(16,'2012-11-06','Sensa una donna','No more pain, no more sorrow','yon'),(20,'2012-11-07','Eh un lugar de la Mancha...','... de cuyo nombre no quiero acordarme...','pol'),(21,'2012-11-07','La noche cambia las percepcion','... que el día aprendidas creía','yon'),(24,'2012-12-07','Donde las dan las toman ...','... y bueno es callar','nitiro'),(25,'2012-12-08','Abracadabra','Pata de cabra','pol'),(26,'2012-12-08','Nunca','Jamás','yon'),(28,'2012-12-08','John','Wayne','yon'),(29,'2012-12-09','No por mucho madrugar...','...amanece más temprano','pedro'),(30,'2012-12-11','Ya falta poco','para la Navidad','pol'),(31,'2012-12-11','Andiamo','presto e subito','yon'),(32,'2012-12-11','Come despacio','come contento','carmen'),(33,'2012-12-11','Bebe despacio','bebe contento','carmen'),(34,'2012-12-13','Buenos días','por la mañana',''),(35,'2012-12-17','Están ya cerca','las fiestas Navideñas','pol'),(36,'2012-12-17','Están ya cerca','las fiestas Navideñas','pol'),(37,'2014-02-10','Reusing','... the old machine','clarc'),(38,'2014-05-22','Alberto','es un capull','yon'),(39,'2014-06-26','Pepino','se avecina por babor','juanma'),(40,'2014-07-07','una','prueba','yon');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-07-07  8:14:13
