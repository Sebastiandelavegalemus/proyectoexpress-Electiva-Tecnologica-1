/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.4.6-MariaDB : Database - lenpro2
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`lenpro2` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `lenpro2`;

/*Table structure for table `asignar_materia_docente` */

DROP TABLE IF EXISTS `asignar_materia_docente`;

CREATE TABLE `asignar_materia_docente` (
  `id_administrador` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `materia` varchar(100) DEFAULT NULL,
  `periodo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_administrador`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `asignar_materia_docente` */

insert  into `asignar_materia_docente`(`id_administrador`,`nombre`,`materia`,`periodo`) values 
(1,'Cindy','sistemas','4'),
(2,'Leonardo','Lenguaje','5'),
(3,'Carlos','Electiva ','4');

/*Table structure for table `docentes` */

DROP TABLE IF EXISTS `docentes`;

CREATE TABLE `docentes` (
  `id_docentes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` varchar(100) DEFAULT NULL,
  `correo` varbinary(100) DEFAULT NULL,
  PRIMARY KEY (`id_docentes`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `docentes` */

insert  into `docentes`(`id_docentes`,`nombre`,`edad`,`correo`) values 
(1,'Cindy','35','cindy@gmail.com'),
(2,'Leonardo','35','leonardo@gmail.com'),
(3,'Carlos','38','carlos@gmail.com');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiantes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `edad` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_estudiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`id_estudiantes`,`nombre`,`edad`,`correo`) values 
(1,'Sebastian','22','sebas@gmail.com'),
(2,'Camilo','18','camilo@gmail.com'),
(3,'Francisco','20','francisco@gmail.com');

/*Table structure for table `materias` */

DROP TABLE IF EXISTS `materias`;

CREATE TABLE `materias` (
  `id_materias` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_materias`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `materias` */

insert  into `materias`(`id_materias`,`materia`) values 
(1,'Lenguaje'),
(2,'Fundamentos de Investigación'),
(3,'Electiva ');

/*Table structure for table `notas` */

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `id_notas` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) DEFAULT NULL,
  `Materia` varchar(100) DEFAULT NULL,
  `Periodo` varchar(100) DEFAULT NULL,
  `Nota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_notas`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `notas` */

insert  into `notas`(`id_notas`,`Nombre`,`Materia`,`Periodo`,`Nota`) values 
(1,'Cindy','Sistemas','4','5.0'),
(2,'Leonardo','Lenguaje','4','5.0'),
(3,'Carlos','Electiva ','4','5.0');

/*Table structure for table `periodo_academico` */

DROP TABLE IF EXISTS `periodo_academico`;

CREATE TABLE `periodo_academico` (
  `id_periodos` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_periodos`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `periodo_academico` */

insert  into `periodo_academico`(`id_periodos`,`periodo`) values 
(1,'4'),
(2,'6'),
(3,'2');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
