-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2022 a las 23:51:55
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo03`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Aceites'),
(2, 'Cremas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `user_id`) VALUES
(1, 5),
(3, 66);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `weight` int(11) NOT NULL,
  `description` text DEFAULT 'SIN DESCRIPCION',
  `image` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `weight`, `description`, `image`, `category_id`) VALUES
(1, 'Hemp Oil', 575, 450, 'CBD de Cañamo Organico', '1660523251922aceiteCanamo.jpg', 1),
(2, 'Crema Extrafuerte de Cañamo', 575, 450, 'Crema Extra Strong', '1660523052771cremaExtrafuerte.jpg', 2),
(3, 'Aceite de Cañamo', 575, 450, 'Aceite de Semilla de Cañamo', '1660523150356aceiteSemilla.png', 1),
(4, 'CBD', 575, 450, 'Autentico CBD OIL', '1660522440733autenticoCbdOil.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `categoria` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `telefono`, `password`, `imagen`, `categoria`) VALUES
(5, 'Juvenal Garcia Perez', 'jg@jg.com', '12345678', '$2a$10$YqPDlCtFX.QpV6IrMXf1quqiimuhtO.Ol6iuOGqnytmvQbt3Iw1E2', '1656790940073img-banner-02.jpg', 2),
(14, 'Mario Glaisto', 'mg@mg.com', '12345678', '$2a$10$7lyPbR5e83icVHXDwjGqKOIwkP0OPugRtXwdjigkTrhrmavH.YdNy', '1655931049430002.JPG', 2),
(42, 'Adriana Epelbaun', 'ae@ae.com', '12345678', '$2a$10$ubSKC8wv3iH5JS3HkiNFCeTl3cn.7vHqecOSFw.em0pAq7CctCLYO', '1656772094134img-banner-02.jpg', 2),
(48, 'Andres Garcia', 'ag@ag.com', '1111111111111111', '$2a$10$KZeaO/JWFDvmsc78.bTCJuZawdIkn/6OVegz63rQuibuLXAkNIdRi', '1656704910573004.JPG', 2),
(49, 'Rodolfo Guaresti', 'rg@rg.com', '123654', '$2a$10$/BneeCxOov4FrgNYMGP5OO355iNRBDtZ7xtM4qbRwRMoQqDeLQrvC', '1656790940073img-banner-02.jpg', 2),
(50, 'ADMINISTRADOR', 'adm@adm.com', '111111', '$2a$10$Vlca.RcW18UoplgsRky6Su9ht1PLowDCgusnLhz65zN91PESFr3qe', '1656790940073img-banner-02.jpg', 1),
(54, 'Sebastian Galeano', 'sg@sg.com', '12345678', '$2a$10$xX6cXzMQGTeaFfrRUULFxeI2ud8HTcu9b5Ryvl.yDpTKezntlB8Wm', '1656797568655img-banner-03.png', 2),
(55, 'Rafa Souto', 'rs@rs.com', '12345678', '$2a$10$kCRsnAnWQUBXi9dXmCdkt.VZ4IpelLyRbUmTjJX5JKVWhAJ1PMUJe', '1656790940073img-banner-02.jpg', 2),
(56, 'Jose Sold', 'js@js.com', '12345678', '$2a$10$ZLFkY9uOVG8W.6ZO1aH6AudEk3gPYFUfJYhhoodheUeN/WlXyhwVe', '1656790940073img-banner-02.jpg', 2),
(58, 'Paolo Pasolini', 'pp@pp.com', '12345678', '$2a$10$BaLuin3JXc58YR8GHa2O7eftxRMRMdUkAzpY2hgpnIVyzV1wszUyS', '1656799516937img-banner-01.png', 2),
(59, 'Roberto Padovani', 'rp@rp.com', '12345678', '$2a$10$sFZUEGyxQOrsYw5gL4RPeeZb3jDkwXMD15b8vraBuOv2QhMHVnxoG', '1656963127249img-banner-01.png', 2),
(60, 'Alberto Boca', 'ab@ab.com', '12345678', '$2a$10$aPUqBc6XyjqRriWWaPWlGeFFRgtQzynpWLGM5Wj2b.tCl5LDczNQG', '1656966222000img-banner-01.png', 2),
(61, 'Samuel Rigos', 'sr@sr.com', '12345678', '$2a$10$3TaKREaoVRpIG/cGe0kkueQcdHDFRtJhjXm9aBVx0fIXHSMutZrPq', '16570258261971656772094134img-banner-02.jpg', 2),
(64, 'Sebastian Perez', 'sp@sp.com', '12345678', '$2a$10$/8.hJrWXVNszfVJpfNTp6.ly3YfR7U/FzPRQ4rGEBQgemdfbGp4wq', '1657331226901img-banner-02.jpg', 2),
(65, 'Armando Casals', 'ac@ac.com', '12345678', '$2a$10$oIeqnqalji53JaPtjzO3qet0ysRlzI1A3bGu9P0ldB9WFEGv9QJ0G', '1658699155001img-banner-02.jpg', 2),
(66, 'Jose Alperin', 'ja@ja.com', '123456789', '$2a$10$CTv.G8Bolol5QPRCH/l5j.KDYCH0DVVm.JFu6xAI3k5DvAz/5C1kO', '1660521776600002.jpg', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `order_details_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
