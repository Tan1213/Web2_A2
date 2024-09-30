/*
 Navicat Premium Dump SQL

 Source Server         : wyt
 Source Server Type    : MySQL
 Source Server Version : 80039 (8.0.39)
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db

 Target Server Type    : MySQL
 Target Server Version : 80039 (8.0.39)
 File Encoding         : 65001

 Date: 27/09/2024 11:12:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
-- If the category table exists, delete it first
DROP TABLE IF EXISTS `category`;
-- Create category table
CREATE TABLE `category`  (
  `category_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
-- Insert data into the category table
INSERT INTO `category` VALUES (1, 'medical');
INSERT INTO `category` VALUES (2, 'education');
INSERT INTO `category` VALUES (3, 'social impact');
INSERT INTO `category` VALUES (4, 'crisis relief');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `fundraiser_id` int NOT NULL,
  `organizer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `caption` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `target_funding` decimal(20, 2) NOT NULL,
  `current_funding` decimal(20, 2) NOT NULL,
  `city` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`fundraiser_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Anna Williams', 'Help Us Create a Community Library!', 125000.00, 10000.00, 'XiZang', 1, 2);
INSERT INTO `fundraiser` VALUES (2, 'Mark Davis', 'Support Our Mental Health Awareness Campaign!', 2000.00, 0.00, 'ShanDong', 1, 3);
INSERT INTO `fundraiser` VALUES (3, 'Sophia Chen', 'Fund Our Wildlife Conservation Efforts!', 30000.00, 2500.00, 'BeiJing', 1, 4);
INSERT INTO `fundraiser` VALUES (4, 'Ryan Patel', 'Launch a MobileApp for Local Farmers!', 100000.00, 10000.00, 'BeiJing', 1, 3);
INSERT INTO `fundraiser` VALUES (5, 'Megan Clark', 'Help Us Organize a Community Clean-Up Day!', 1000.00, 500.00, 'LiaoNing', 1, 1);

SET FOREIGN_KEY_CHECKS = 1;
