
CREATE DATABASE grupo03;
USE grupo03;


CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   PRIMARY KEY (`id`),
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
`email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
`telefono` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
`password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
`imagen` varchar(100) COLLATE utf8_unicode_ci NOT null
`categoria` int(1) unsigned NOT NULL
)

