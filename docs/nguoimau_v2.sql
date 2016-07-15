/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : model

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-07-12 18:11:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `activations`
-- ----------------------------
DROP TABLE IF EXISTS `activations`;
CREATE TABLE `activations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of activations
-- ----------------------------
INSERT INTO `activations` VALUES ('1', '1', 'nTl9XNlf96nAdXcx9wMSnrnGzXrg1bSE', '1', '2016-06-09 18:23:20', '2016-06-09 18:23:20', '2016-06-09 18:23:20');
INSERT INTO `activations` VALUES ('2', '2', 'Z7Oa7IIIIIIIAME9ui0P8h7ZvH7VamBK', '1', '2016-06-29 18:46:46', '2016-06-29 18:46:46', '2016-06-29 18:46:46');
INSERT INTO `activations` VALUES ('3', '4', 'zaVrX2wao4vYNrRZliXUM6um353R5xpa', '1', '2016-06-29 18:50:34', '2016-06-29 18:50:34', '2016-06-29 18:50:34');
INSERT INTO `activations` VALUES ('4', '6', 'dC7Ws9J14Gvd4nuSZArIvKUjM318KvXV', '1', '2016-06-30 03:14:07', '2016-06-30 03:14:07', '2016-06-30 03:14:07');
INSERT INTO `activations` VALUES ('5', '8', 'HKrot3MYnIEAuPbMPKq8dUqQpCkFsqgc', '1', '2016-06-30 03:14:49', '2016-06-30 03:14:49', '2016-06-30 03:14:49');
INSERT INTO `activations` VALUES ('6', '9', 'PLpdRhgbrdumHxK4v7k9ozabcpMTl0M2', '1', '2016-06-30 03:18:25', '2016-06-30 03:18:25', '2016-06-30 03:18:25');
INSERT INTO `activations` VALUES ('7', '11', 'slKCcm1Q8q1tVC8h5OwKjpXPxdfNQrKI', '1', '2016-06-30 03:23:46', '2016-06-30 03:23:46', '2016-06-30 03:23:46');
INSERT INTO `activations` VALUES ('8', '12', 'IqcQkXhnRiqFdSqWNfBUKfgI1xPQHcHn', '1', '2016-06-30 04:36:24', '2016-06-30 04:36:24', '2016-06-30 04:36:24');
INSERT INTO `activations` VALUES ('9', '14', '9QALM5dXFXTNiaXHt7hJWCpjenSmbZl2', '1', '2016-06-30 04:37:05', '2016-06-30 04:37:05', '2016-06-30 04:37:05');
INSERT INTO `activations` VALUES ('10', '16', '1RggNtnfHwBpQPtQcJQFMX7QrNINOSEs', '1', '2016-06-30 04:37:30', '2016-06-30 04:37:30', '2016-06-30 04:37:30');
INSERT INTO `activations` VALUES ('11', '18', 'T3ujuPf9XfQADL6dAXeBtVLj4BlUtISa', '1', '2016-06-30 04:37:43', '2016-06-30 04:37:43', '2016-06-30 04:37:43');
INSERT INTO `activations` VALUES ('12', '20', 'at2pBHph4W94nVAtqPN4DqEcy8hDg3Hi', '1', '2016-06-30 09:17:16', '2016-06-30 09:17:16', '2016-06-30 09:17:16');
INSERT INTO `activations` VALUES ('13', '21', 'tnB44SldW1C1RboqJIUIukCV4TQqzJKt', '1', '2016-06-30 09:22:19', '2016-06-30 09:22:19', '2016-06-30 09:22:19');
INSERT INTO `activations` VALUES ('14', '24', 'iyklB06HKYOiT8NvNyla7ZsCRVVkwbVJ', '1', '2016-06-30 09:24:02', '2016-06-30 09:24:02', '2016-06-30 09:24:02');
INSERT INTO `activations` VALUES ('15', '25', '0IqenaNAv1yypwY81CNv7Mn0dv3eyXZe', '1', '2016-06-30 09:26:29', '2016-06-30 09:26:29', '2016-06-30 09:26:29');
INSERT INTO `activations` VALUES ('16', '27', 'cHMuB0HZfq5hT2VQzcBArTAHQSXevIQr', '1', '2016-06-30 09:28:12', '2016-06-30 09:28:12', '2016-06-30 09:28:12');

-- ----------------------------
-- Table structure for `booking`
-- ----------------------------
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) DEFAULT NULL,
  `agent_id` int(11) DEFAULT NULL,
  `start_time` timestamp NULL DEFAULT NULL,
  `end_time` timestamp NULL DEFAULT NULL,
  `status` tinyint(6) DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of booking
-- ----------------------------
INSERT INTO `booking` VALUES ('1', '1', null, '2016-01-01 12:12:00', '2016-03-01 12:12:00', '0', '2016', '2016');
INSERT INTO `booking` VALUES ('2', '1', null, '2016-01-01 12:12:00', '2016-03-01 12:12:00', '0', '2016', '2016');
INSERT INTO `booking` VALUES ('3', '1', null, '2016-01-01 12:12:00', '2016-03-01 12:12:00', '0', '2016', '2016');
INSERT INTO `booking` VALUES ('4', '1', null, '2016-03-01 12:12:00', '2016-01-01 12:12:00', '0', '2016', '2016');
INSERT INTO `booking` VALUES ('5', '1', null, '2016-03-01 12:12:00', '2016-01-01 12:12:00', '0', '2016', '2016');

-- ----------------------------
-- Table structure for `galleries`
-- ----------------------------
DROP TABLE IF EXISTS `galleries`;
CREATE TABLE `galleries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `images` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of galleries
-- ----------------------------
INSERT INTO `galleries` VALUES ('1', '1', '/uploads/nguyentuan27-0.jpg', '2016-06-30 09:28:13', '2016-06-30 09:28:13');
INSERT INTO `galleries` VALUES ('2', '1', '/uploads/nguyentuan27-1.jpg', '2016-06-30 09:28:13', '2016-06-30 09:28:13');
INSERT INTO `galleries` VALUES ('3', '1', '/uploads/nguyentuan27-2.jpg', '2016-06-30 09:28:13', '2016-06-30 09:28:13');
INSERT INTO `galleries` VALUES ('4', '1', '/uploads/nguyentuan27-3.jpg', '2016-06-30 09:28:13', '2016-06-30 09:28:13');
INSERT INTO `galleries` VALUES ('5', '1', '/uploads/nguyentuan27-4.png', '2016-06-30 09:28:13', '2016-06-30 09:28:13');

-- ----------------------------
-- Table structure for `locations`
-- ----------------------------
DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of locations
-- ----------------------------
INSERT INTO `locations` VALUES ('1', 'HN', 'Hà Nội');
INSERT INTO `locations` VALUES ('2', 'HCM', 'TP Hồ Chí Minh');
INSERT INTO `locations` VALUES ('3', 'DN', 'Đà Nẵng');
INSERT INTO `locations` VALUES ('4', 'CT', 'Cần Thơ');
INSERT INTO `locations` VALUES ('5', 'HP', 'Hải Phòng');
INSERT INTO `locations` VALUES ('6', 'AG', 'An Giang');
INSERT INTO `locations` VALUES ('7', 'BRVT', 'Bà Rịa - Vũng Tàu');
INSERT INTO `locations` VALUES ('8', 'BG', 'Bắc Giang');
INSERT INTO `locations` VALUES ('9', 'BK', 'Bắc Kạn');
INSERT INTO `locations` VALUES ('10', 'BL', 'Bạc Liêu');
INSERT INTO `locations` VALUES ('11', 'BN', 'Bắc Ninh');
INSERT INTO `locations` VALUES ('12', 'BT', 'Bến Tre');
INSERT INTO `locations` VALUES ('13', 'BD', 'Bình Định');
INSERT INTO `locations` VALUES ('14', 'BDG', 'Bình Dương');
INSERT INTO `locations` VALUES ('15', 'BP', 'Bình Phước');
INSERT INTO `locations` VALUES ('16', 'BTN', 'Bình Thuận');
INSERT INTO `locations` VALUES ('17', 'CM', 'Cà Mau');
INSERT INTO `locations` VALUES ('18', 'CB', 'Cao Bằng');
INSERT INTO `locations` VALUES ('19', 'DL', 'Đắk Lắk');
INSERT INTO `locations` VALUES ('20', 'DN', 'Đắk Nông');
INSERT INTO `locations` VALUES ('21', 'DB', 'Điện Biên');
INSERT INTO `locations` VALUES ('22', 'DNI', 'Đồng Nai');
INSERT INTO `locations` VALUES ('23', 'DT', 'Đồng Tháp');
INSERT INTO `locations` VALUES ('24', 'GL', 'Gia Lai');
INSERT INTO `locations` VALUES ('25', 'HG', 'Hà Giang');
INSERT INTO `locations` VALUES ('26', 'HNM', 'Hà Nam');
INSERT INTO `locations` VALUES ('27', 'HT', 'Hà Tĩnh');
INSERT INTO `locations` VALUES ('28', 'BD', 'Hải Dương');
INSERT INTO `locations` VALUES ('29', 'HGG', 'Hậu Giang');
INSERT INTO `locations` VALUES ('30', 'HB', 'Hòa Bình');
INSERT INTO `locations` VALUES ('31', 'HY', 'Hưng Yên');
INSERT INTO `locations` VALUES ('32', 'KH', 'Khánh Hòa');
INSERT INTO `locations` VALUES ('33', 'KG', 'Kiên Giang');
INSERT INTO `locations` VALUES ('34', 'KT', 'Kon Tum');
INSERT INTO `locations` VALUES ('35', 'LC', 'Lai Châu');
INSERT INTO `locations` VALUES ('36', 'LD', 'Lâm Đồng');
INSERT INTO `locations` VALUES ('37', 'LS', 'Lạng Sơn');
INSERT INTO `locations` VALUES ('38', 'LCI', 'Lào Cai');
INSERT INTO `locations` VALUES ('39', 'LA', 'Long An');
INSERT INTO `locations` VALUES ('40', 'ND', 'Nam Định');
INSERT INTO `locations` VALUES ('41', 'NA', 'Nghệ An');
INSERT INTO `locations` VALUES ('42', 'NB', 'Ninh Bình');
INSERT INTO `locations` VALUES ('43', 'NT', 'Ninh Thuận');
INSERT INTO `locations` VALUES ('44', 'PT', 'Phú Thọ');
INSERT INTO `locations` VALUES ('45', 'QB', 'Quảng Bình');
INSERT INTO `locations` VALUES ('46', 'QN', 'Quảng Nam');
INSERT INTO `locations` VALUES ('47', 'QNI', 'Quảng Ngãi');
INSERT INTO `locations` VALUES ('48', 'QNH', 'Quảng Ninh');
INSERT INTO `locations` VALUES ('49', 'QT', 'Quảng Trị');
INSERT INTO `locations` VALUES ('50', 'ST', 'Sóc Trăng');
INSERT INTO `locations` VALUES ('51', 'SL', 'Sơn La');
INSERT INTO `locations` VALUES ('52', 'TN', 'Tây Ninh');
INSERT INTO `locations` VALUES ('53', 'TB', 'Thái Bình');
INSERT INTO `locations` VALUES ('54', 'TNN', 'Thái Nguyên');
INSERT INTO `locations` VALUES ('55', 'TH', 'Thanh Hóa');
INSERT INTO `locations` VALUES ('56', 'TTH', 'Thừa Thiên Huế');
INSERT INTO `locations` VALUES ('57', 'TG', 'Tiền Giang');
INSERT INTO `locations` VALUES ('58', 'TV', 'Trà Vinh');
INSERT INTO `locations` VALUES ('59', 'TQ', 'Tuyên Quang');
INSERT INTO `locations` VALUES ('60', 'VL', 'Vĩnh Long');
INSERT INTO `locations` VALUES ('61', 'VP', 'Vĩnh Phúc');
INSERT INTO `locations` VALUES ('62', 'YB', 'Yên Bái');
INSERT INTO `locations` VALUES ('63', 'PY', 'Phú Yên');

-- ----------------------------
-- Table structure for `migrations`
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('2014_07_02_230147_migration_cartalyst_sentinel', '1');
INSERT INTO `migrations` VALUES ('2014_04_24_110151_create_oauth_scopes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_110304_create_oauth_grants_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_110403_create_oauth_grant_scopes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_110459_create_oauth_clients_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_110557_create_oauth_client_endpoints_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_110705_create_oauth_client_scopes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_110817_create_oauth_client_grants_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111002_create_oauth_sessions_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111109_create_oauth_session_scopes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111254_create_oauth_auth_codes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111403_create_oauth_auth_code_scopes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111518_create_oauth_access_tokens_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111657_create_oauth_access_token_scopes_table', '2');
INSERT INTO `migrations` VALUES ('2014_04_24_111810_create_oauth_refresh_tokens_table', '2');

-- ----------------------------
-- Table structure for `oauth_access_tokens`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `session_id` int(10) unsigned NOT NULL,
  `expire_time` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `oauth_access_tokens_id_session_id_unique` (`id`,`session_id`),
  KEY `oauth_access_tokens_session_id_index` (`session_id`),
  CONSTRAINT `oauth_access_tokens_ibfk_1` FOREIGN KEY (`session_id`) REFERENCES `oauth_sessions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('4hpGQRzGfhkBo6IjSNT4E5a4f1uIY7XkvQ0OcPNV', '1', '1465500470', '2016-06-09 18:27:50', '2016-06-09 18:27:50');
INSERT INTO `oauth_access_tokens` VALUES ('5UWVQBcfAx16U12XcYzy6MUw9CSwg4hXtQwpDuqQ', '7', '1465585997', '2016-06-10 18:13:17', '2016-06-10 18:13:17');
INSERT INTO `oauth_access_tokens` VALUES ('GGwGpE0owvBLB59itQxOu8nBMD1vNT7hlXq2gBcI', '8', '1465703212', '2016-06-12 02:46:52', '2016-06-12 02:46:52');
INSERT INTO `oauth_access_tokens` VALUES ('hfD89KFi0sYIfc5ZOJGYsBjsE70URdSbiXSUMExj', '6', '1465585995', '2016-06-10 18:13:15', '2016-06-10 18:13:15');
INSERT INTO `oauth_access_tokens` VALUES ('j1GijMb5VpXxcHmgJkmMsKWsMPWIBRatBSNWAYop', '4', '1465579257', '2016-06-10 16:20:57', '2016-06-10 16:20:57');
INSERT INTO `oauth_access_tokens` VALUES ('rOVb8sYdVSXJHeKK8oOoXTTL9bZdGOVi09p67Dhi', '2', '1465500602', '2016-06-09 18:30:02', '2016-06-09 18:30:02');
INSERT INTO `oauth_access_tokens` VALUES ('vk7rzAffLBLmwCVBHhR8IkOcjDB1NhkBgCFgAJBM', '5', '1465579285', '2016-06-10 16:21:25', '2016-06-10 16:21:25');
INSERT INTO `oauth_access_tokens` VALUES ('voTcdPrjWg4I4OEmhqf02cRivyeh1g9BLToK9AAA', '3', '1465500639', '2016-06-09 18:30:39', '2016-06-09 18:30:39');
INSERT INTO `oauth_access_tokens` VALUES ('XZmJXVVEtZU15VC7VGPRQDEQqJprydiBwFazdecb', '9', '1465726091', '2016-06-12 09:08:11', '2016-06-12 09:08:11');

-- ----------------------------
-- Table structure for `oauth_access_token_scopes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_token_scopes`;
CREATE TABLE `oauth_access_token_scopes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `access_token_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `scope_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_token_scopes_access_token_id_index` (`access_token_id`),
  KEY `oauth_access_token_scopes_scope_id_index` (`scope_id`),
  CONSTRAINT `oauth_access_token_scopes_ibfk_1` FOREIGN KEY (`access_token_id`) REFERENCES `oauth_access_tokens` (`id`) ON DELETE CASCADE,
  CONSTRAINT `oauth_access_token_scopes_ibfk_2` FOREIGN KEY (`scope_id`) REFERENCES `oauth_scopes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_access_token_scopes
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_auth_codes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `session_id` int(10) unsigned NOT NULL,
  `redirect_uri` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expire_time` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_session_id_index` (`session_id`),
  CONSTRAINT `oauth_auth_codes_ibfk_1` FOREIGN KEY (`session_id`) REFERENCES `oauth_sessions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_auth_codes
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_auth_code_scopes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_code_scopes`;
CREATE TABLE `oauth_auth_code_scopes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `auth_code_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `scope_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_code_scopes_auth_code_id_index` (`auth_code_id`),
  KEY `oauth_auth_code_scopes_scope_id_index` (`scope_id`),
  CONSTRAINT `oauth_auth_code_scopes_ibfk_1` FOREIGN KEY (`auth_code_id`) REFERENCES `oauth_auth_codes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `oauth_auth_code_scopes_ibfk_2` FOREIGN KEY (`scope_id`) REFERENCES `oauth_scopes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_auth_code_scopes
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_clients`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `secret` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `oauth_clients_id_secret_unique` (`id`,`secret`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES ('1', '123', 'IdeasVN-Development', null, null);

-- ----------------------------
-- Table structure for `oauth_client_endpoints`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_client_endpoints`;
CREATE TABLE `oauth_client_endpoints` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `redirect_uri` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `oauth_client_endpoints_client_id_redirect_uri_unique` (`client_id`,`redirect_uri`),
  CONSTRAINT `oauth_client_endpoints_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_client_endpoints
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_client_grants`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_client_grants`;
CREATE TABLE `oauth_client_grants` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `grant_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_client_grants_client_id_index` (`client_id`),
  KEY `oauth_client_grants_grant_id_index` (`grant_id`),
  CONSTRAINT `oauth_client_grants_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `oauth_client_grants_ibfk_2` FOREIGN KEY (`grant_id`) REFERENCES `oauth_grants` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_client_grants
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_client_scopes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_client_scopes`;
CREATE TABLE `oauth_client_scopes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `scope_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_client_scopes_client_id_index` (`client_id`),
  KEY `oauth_client_scopes_scope_id_index` (`scope_id`),
  CONSTRAINT `oauth_client_scopes_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `oauth_client_scopes_ibfk_2` FOREIGN KEY (`scope_id`) REFERENCES `oauth_scopes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_client_scopes
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_grants`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_grants`;
CREATE TABLE `oauth_grants` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_grants
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_grant_scopes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_grant_scopes`;
CREATE TABLE `oauth_grant_scopes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grant_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `scope_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_grant_scopes_grant_id_index` (`grant_id`),
  KEY `oauth_grant_scopes_scope_id_index` (`scope_id`),
  CONSTRAINT `oauth_grant_scopes_ibfk_1` FOREIGN KEY (`grant_id`) REFERENCES `oauth_grants` (`id`) ON DELETE CASCADE,
  CONSTRAINT `oauth_grant_scopes_ibfk_2` FOREIGN KEY (`scope_id`) REFERENCES `oauth_scopes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_grant_scopes
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_refresh_tokens`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `access_token_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `expire_time` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`access_token_id`),
  UNIQUE KEY `oauth_refresh_tokens_id_unique` (`id`),
  CONSTRAINT `oauth_refresh_tokens_ibfk_1` FOREIGN KEY (`access_token_id`) REFERENCES `oauth_access_tokens` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_scopes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_scopes`;
CREATE TABLE `oauth_scopes` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_scopes
-- ----------------------------

-- ----------------------------
-- Table structure for `oauth_sessions`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_sessions`;
CREATE TABLE `oauth_sessions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `owner_type` enum('client','user') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user',
  `owner_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `client_redirect_uri` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_sessions_client_id_owner_type_owner_id_index` (`client_id`,`owner_type`,`owner_id`),
  CONSTRAINT `oauth_sessions_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `oauth_clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_sessions
-- ----------------------------
INSERT INTO `oauth_sessions` VALUES ('1', '1', 'user', '1', null, '2016-06-09 18:27:50', '2016-06-09 18:27:50');
INSERT INTO `oauth_sessions` VALUES ('2', '1', 'user', '1', null, '2016-06-09 18:30:02', '2016-06-09 18:30:02');
INSERT INTO `oauth_sessions` VALUES ('3', '1', 'user', '1', null, '2016-06-09 18:30:39', '2016-06-09 18:30:39');
INSERT INTO `oauth_sessions` VALUES ('4', '1', 'user', '1', null, '2016-06-10 16:20:57', '2016-06-10 16:20:57');
INSERT INTO `oauth_sessions` VALUES ('5', '1', 'user', '1', null, '2016-06-10 16:21:25', '2016-06-10 16:21:25');
INSERT INTO `oauth_sessions` VALUES ('6', '1', 'user', '1', null, '2016-06-10 18:13:15', '2016-06-10 18:13:15');
INSERT INTO `oauth_sessions` VALUES ('7', '1', 'user', '1', null, '2016-06-10 18:13:17', '2016-06-10 18:13:17');
INSERT INTO `oauth_sessions` VALUES ('8', '1', 'user', '1', null, '2016-06-12 02:46:52', '2016-06-12 02:46:52');
INSERT INTO `oauth_sessions` VALUES ('9', '1', 'user', '1', null, '2016-06-12 09:08:11', '2016-06-12 09:08:11');

-- ----------------------------
-- Table structure for `oauth_session_scopes`
-- ----------------------------
DROP TABLE IF EXISTS `oauth_session_scopes`;
CREATE TABLE `oauth_session_scopes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `session_id` int(10) unsigned NOT NULL,
  `scope_id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_session_scopes_session_id_index` (`session_id`),
  KEY `oauth_session_scopes_scope_id_index` (`scope_id`),
  CONSTRAINT `oauth_session_scopes_ibfk_1` FOREIGN KEY (`scope_id`) REFERENCES `oauth_scopes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `oauth_session_scopes_ibfk_2` FOREIGN KEY (`session_id`) REFERENCES `oauth_sessions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of oauth_session_scopes
-- ----------------------------

-- ----------------------------
-- Table structure for `persistences`
-- ----------------------------
DROP TABLE IF EXISTS `persistences`;
CREATE TABLE `persistences` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `persistences_code_unique` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of persistences
-- ----------------------------
INSERT INTO `persistences` VALUES ('1', '1', 'zjgif3jJB3k5JLmqBnk3SXBTUVrLDGmT', '2016-06-09 18:27:15', '2016-06-09 18:27:15');
INSERT INTO `persistences` VALUES ('2', '1', 'UkzMWCtNkMzl0XyuXBoS25zJMND5UTxV', '2016-06-09 18:27:50', '2016-06-09 18:27:50');
INSERT INTO `persistences` VALUES ('3', '1', 'VmxJSkGLCSZqAy2vrJV8Ltd2OfA5iMi1', '2016-06-09 18:30:02', '2016-06-09 18:30:02');
INSERT INTO `persistences` VALUES ('4', '1', 'sHWdgBf01c7TW4bs1cNyW7Gdrr4nlMJM', '2016-06-09 18:30:39', '2016-06-09 18:30:39');
INSERT INTO `persistences` VALUES ('5', '1', '2Canj2lxIXK92PNodl2jGvdj3Bg6SJ4c', '2016-06-10 16:20:57', '2016-06-10 16:20:57');
INSERT INTO `persistences` VALUES ('6', '1', 'GaVDp34Pjhr5Lh1IdWreXAYUutoVlbBl', '2016-06-10 16:21:25', '2016-06-10 16:21:25');
INSERT INTO `persistences` VALUES ('7', '1', 'p0rVIMWkfiimLh4ReFfF758BL7sbgdym', '2016-06-10 18:13:15', '2016-06-10 18:13:15');
INSERT INTO `persistences` VALUES ('8', '1', 'yP6y4ZPZwWX6XnMPpVcBJn9FYoUkvy1I', '2016-06-10 18:13:17', '2016-06-10 18:13:17');
INSERT INTO `persistences` VALUES ('9', '1', 'ybB48P37DRerhjnwFp0uTh2yXkiU3Wqv', '2016-06-12 02:46:52', '2016-06-12 02:46:52');
INSERT INTO `persistences` VALUES ('10', '1', 'Lhzfp5b20t5WBFG5qE1THX4eLnK40ckr', '2016-06-12 09:08:11', '2016-06-12 09:08:11');

-- ----------------------------
-- Table structure for `profiles`
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `height` decimal(10,0) NOT NULL COMMENT 'Chiều cao',
  `round_breast` int(11) NOT NULL COMMENT 'Vòng ngực',
  `waist_size` int(11) NOT NULL COMMENT 'Vòng eo',
  `round_hip` int(11) NOT NULL COMMENT 'Vòng mông',
  `dress_size` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT 'Cỡ áo',
  `shore_size` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hair_color` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Màu tóc',
  `eye_color` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Màu mắt',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of profiles
-- ----------------------------
INSERT INTO `profiles` VALUES ('1', '1', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 03:23:46', '2016-06-30 03:23:46');
INSERT INTO `profiles` VALUES ('2', '0', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 04:37:43', '2016-06-30 04:37:43');
INSERT INTO `profiles` VALUES ('3', '0', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 09:17:16', '2016-06-30 09:17:16');
INSERT INTO `profiles` VALUES ('4', '0', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 09:22:19', '2016-06-30 09:22:19');
INSERT INTO `profiles` VALUES ('5', '0', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 09:24:02', '2016-06-30 09:24:02');
INSERT INTO `profiles` VALUES ('6', '0', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 09:26:29', '2016-06-30 09:26:29');
INSERT INTO `profiles` VALUES ('7', '0', '167', '30', '40', '30', '50', '39', 'Đen', 'Nâu', '2016-06-30 09:28:13', '2016-06-30 09:28:13');

-- ----------------------------
-- Table structure for `reminders`
-- ----------------------------
DROP TABLE IF EXISTS `reminders`;
CREATE TABLE `reminders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of reminders
-- ----------------------------

-- ----------------------------
-- Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------

-- ----------------------------
-- Table structure for `role_users`
-- ----------------------------
DROP TABLE IF EXISTS `role_users`;
CREATE TABLE `role_users` (
  `user_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of role_users
-- ----------------------------

-- ----------------------------
-- Table structure for `throttle`
-- ----------------------------
DROP TABLE IF EXISTS `throttle`;
CREATE TABLE `throttle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ip` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `throttle_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of throttle
-- ----------------------------

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8_unicode_ci,
  `last_login` timestamp NULL DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` tinyint(4) DEFAULT '0',
  `phone` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `type` tinyint(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ideasvn@hotmail.com', '$2y$10$guIb.IqsPSH.59GzIkO7DukoC7QFPWRmlN5/X/gL8L6aRCWd5G/bi', null, '2016-06-12 09:08:11', null, null, '0', null, '2016-06-17', null, null, '2016-06-09 18:23:20', '2016-06-12 09:08:11');
INSERT INTO `users` VALUES ('2', 'sieu@gmail.com', '$2y$10$QJws9MXFiYkV2oeaoAZGSOW5H/.jfLgRhV9nZDmQat2Ihrv4XzrJu', null, null, 'Nguyen', 'Tuan', '0', null, null, null, null, '2016-06-29 18:46:46', '2016-06-29 18:46:46');
INSERT INTO `users` VALUES ('4', 'sieu1@gmail.com', '$2y$10$q0mbye6aTCpXVj4NGUQTEea.bj8I6rhwT9oZJF9Grjj9mbUXpTOzS', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-29 18:50:34', '2016-06-29 18:50:34');
INSERT INTO `users` VALUES ('6', 'sieu2@gmail.com', '$2y$10$D8wQc4NpRBTrTfPYgjbLT.FrVvnGORbmk5U/e5L6esBhJyupjpwx.', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 03:14:06', '2016-06-30 03:14:06');
INSERT INTO `users` VALUES ('8', 'sieu3@gmail.com', '$2y$10$IGPomwK8abZCdruazpAYsu8rXGrDtgwkFVYfqBLo/XG/qeoPCyw0u', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 03:14:49', '2016-06-30 03:14:49');
INSERT INTO `users` VALUES ('9', 'sieu4@gmail.com', '$2y$10$DYHRdcZznL836rsE/s8SX.Bjvan6A4eYUYwQJ4yNUNCnKvBkpqRse', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 03:18:25', '2016-06-30 03:18:25');
INSERT INTO `users` VALUES ('11', 'sieu5@gmail.com', '$2y$10$DB2i0sr4vcqx7D2QIV8J/OW7LkTtJ.Toq7c2.dw8LdxxViPmie9NK', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 03:23:46', '2016-06-30 03:23:46');
INSERT INTO `users` VALUES ('12', 'sieu6@gmail.com', '$2y$10$D.0zCu8Y42le1UVvoGEtJ.Nh/nUmev5riNm6cLjR0WMdckc9rkiRu', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 04:36:24', '2016-06-30 04:36:24');
INSERT INTO `users` VALUES ('14', 'sieu7@gmail.com', '$2y$10$XgWyzgEfdAsiWuB0QQRYruDQVlTFsqcDLo4rgXUCVIdbm6bZbhyMq', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 04:37:05', '2016-06-30 04:37:05');
INSERT INTO `users` VALUES ('16', 'sieu8@gmail.com', '$2y$10$4wSa822zsfJVr3eFoT9CMeYyikhM8DPuzd8KjnBMVVDfwuWWhplXG', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 04:37:30', '2016-06-30 04:37:30');
INSERT INTO `users` VALUES ('18', 'sieu9@gmail.com', '$2y$10$4a/y0LKaZ15FXIb9dR6cEuqjjfnd5xmCF/KtbxsEd.SRfTLD7Pj7a', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 04:37:43', '2016-06-30 04:37:43');
INSERT INTO `users` VALUES ('20', 'sieu10@gmail.com', '$2y$10$DDnD6taSzOLuJKrHzXLfMuJxXhftoIEoEXS5dX420HZyYsx7SslrG', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 09:17:16', '2016-06-30 09:17:16');
INSERT INTO `users` VALUES ('21', 'sieu11@gmail.com', '$2y$10$Bp4Biluhf.P.2oP7Wn81zeJVxm4/Y5sFu3eSMiDsN6ebusvJIC73q', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 09:22:19', '2016-06-30 09:22:19');
INSERT INTO `users` VALUES ('24', 'sieu12@gmail.com', '$2y$10$JT84bszEj2usi1wmnfVCfuAHUsfsThiQAL6ZQV3qzOf15cdmdF/4G', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 09:24:02', '2016-06-30 09:24:02');
INSERT INTO `users` VALUES ('25', 'sieu13@gmail.com', '$2y$10$Vic8lNGCkf0qbOo62e7gVOdQ3ZYb6BVn6BsQSd5w2PIHpkhcqbD6.', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 09:26:29', '2016-06-30 09:26:29');
INSERT INTO `users` VALUES ('27', 'sieu14@gmail.com', '$2y$10$NkSc4APxtEdruMwfv5lk6.BI1pK4Fnfj/oXc9YbBLaL0kRC5u2tqW', null, null, 'Nguyen', 'Tuan', '1', '9999', '2016-06-17', '1', '0', '2016-06-30 09:28:12', '2016-06-30 09:28:12');
