/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : mitrais

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 18/09/2020 08:19:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for phone_prefixes
-- ----------------------------
DROP TABLE IF EXISTS `phone_prefixes`;
CREATE TABLE `phone_prefixes`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prefix` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of phone_prefixes
-- ----------------------------
INSERT INTO `phone_prefixes` VALUES (1, '811');
INSERT INTO `phone_prefixes` VALUES (2, '812');
INSERT INTO `phone_prefixes` VALUES (3, '813');
INSERT INTO `phone_prefixes` VALUES (4, '821');
INSERT INTO `phone_prefixes` VALUES (5, '822');
INSERT INTO `phone_prefixes` VALUES (6, '823');
INSERT INTO `phone_prefixes` VALUES (7, '852');
INSERT INTO `phone_prefixes` VALUES (8, '853');
INSERT INTO `phone_prefixes` VALUES (9, '851');
INSERT INTO `phone_prefixes` VALUES (10, '855');
INSERT INTO `phone_prefixes` VALUES (11, '856');
INSERT INTO `phone_prefixes` VALUES (12, '857');
INSERT INTO `phone_prefixes` VALUES (13, '858');
INSERT INTO `phone_prefixes` VALUES (14, '814');
INSERT INTO `phone_prefixes` VALUES (15, '815');
INSERT INTO `phone_prefixes` VALUES (16, '816');
INSERT INTO `phone_prefixes` VALUES (17, '817');
INSERT INTO `phone_prefixes` VALUES (18, '818');
INSERT INTO `phone_prefixes` VALUES (19, '819');
INSERT INTO `phone_prefixes` VALUES (20, '859');
INSERT INTO `phone_prefixes` VALUES (21, '877');
INSERT INTO `phone_prefixes` VALUES (22, '878');
INSERT INTO `phone_prefixes` VALUES (23, '896');
INSERT INTO `phone_prefixes` VALUES (24, '897');
INSERT INTO `phone_prefixes` VALUES (25, '898');
INSERT INTO `phone_prefixes` VALUES (26, '899');
INSERT INTO `phone_prefixes` VALUES (27, '881');
INSERT INTO `phone_prefixes` VALUES (28, '882');
INSERT INTO `phone_prefixes` VALUES (29, '883');
INSERT INTO `phone_prefixes` VALUES (30, '884');
INSERT INTO `phone_prefixes` VALUES (31, '885');
INSERT INTO `phone_prefixes` VALUES (32, '886');
INSERT INTO `phone_prefixes` VALUES (33, '887');
INSERT INTO `phone_prefixes` VALUES (34, '888');
INSERT INTO `phone_prefixes` VALUES (35, '889');
INSERT INTO `phone_prefixes` VALUES (36, '828');
INSERT INTO `phone_prefixes` VALUES (37, '838');
INSERT INTO `phone_prefixes` VALUES (38, '831');
INSERT INTO `phone_prefixes` VALUES (39, '832');
INSERT INTO `phone_prefixes` VALUES (40, '833');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mobileNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `dob` date NULL DEFAULT NULL,
  `gender` enum('MALE','FEMALE') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '+6282112433414', 'Anggie', 'Gunawan', NULL, NULL, 'anggie.gunawan@email.com', '2020-09-16 13:44:54', '2020-09-16 13:44:54');

SET FOREIGN_KEY_CHECKS = 1;
