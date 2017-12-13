CREATE DATABASE  IF NOT EXISTS `mudb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mudb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: mudb
-- ------------------------------------------------------
-- Server version	5.7.20-log

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
-- Table structure for table `artifacts`
--

DROP TABLE IF EXISTS `artifacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artifacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `basic_effect` text,
  `per_level_increase` double DEFAULT NULL COMMENT 'This is the percentage per level that the artifact increases it''s effect.',
  `lvl20_effect` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artifacts`
--

LOCK TABLES `artifacts` WRITE;
/*!40000 ALTER TABLE `artifacts` DISABLE KEYS */;
INSERT INTO `artifacts` VALUES (1,'Growing Sprout','Attacks create a 5% (0.25% *{Growth Level})% chance of increasing Attack by 5% for 2 seconds.',0.25,'Increases Defense by 5%.'),(2,'Endurance','When attacked by an enemy, increases Defenses by 2.4% (2% +{Growth Level/50})% for 3 seconds. (Max Stacks: 10)',0.02,'Increased Defense, when max-stacked, increases HP Recovery per second by 30% for 5 seconds.'),(3,'Sunrise','Attacks create a 4.2% (0.2% +{Growth Level/5})% chance of casting Rugard\'s Touch around you.',0.2,'Creates a very low chance of casting Bulcan\'s Gaze.'),(4,'Frozen Heart','Increases Critical Rate by 9% (5% +{Growth Level/5})% at the cost of HP Recovery per Second.',0.2,'Causes Cold Explosion with every enemy killed by Critical hit. (Cooldown: 15 seconds)'),(5,'Rainbow','Attacks create a 4.2% (0.2% +{Growth Level/5})% chance of casting a random buff on you.',0.2,'Attacks create a very low chance of casting all buff at once. This effect persists for 10 seconds.'),(6,'Mask Performance','When your HP drops to 30% or lower, this artifact casts Stealth for 5 seconds and increases Evasion Rate by 15% (5% +{Growth Level/2})%. (Cooldown: 20 seconds)',0.5,'Increases Movement Speed by 50% and ignores unit collision for 5 seconds.'),(7,'Tenacity','Knocked back and Airborne enemies increase your Attack by 30% (10% +{Growth Level})% for 3 seconds.',1,'Damage from enemies\' Crowd Control skills decrease your incoming damage by 20% and increase Movement Speed by 10% for 5 seconds. (Cooldown: 20 seconds)'),(8,'Frenzy','Attacks increase Attack by 1.4% (1% +{Growth Level/50})% for 2 seconds. (Max Stacks: 10)',0.02,'Increased Attack, when max-stacked, increases all speeds by 15% for 10 seconds.'),(9,'Allegro','Successful dodges decrease Attack and Defense for surrounding enemies by 10% +({Growth Level/2})% for 3 seconds.',0.5,'2 successful dodges in a row inflict great damage on a narrow area and Stun the enemies. (Cooldown: 20 seconds)'),(10,'Hysteria','Decreases basic Damage by 30% and increases Critical Damage by 50% (10% +{Growth Levelx2})%.',2,'Critical attacks create a very low chance of inflicting additional 400% damage.');
/*!40000 ALTER TABLE `artifacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auras`
--

DROP TABLE IF EXISTS `auras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auras`
--

LOCK TABLES `auras` WRITE;
/*!40000 ALTER TABLE `auras` DISABLE KEYS */;
INSERT INTO `auras` VALUES (1,'Attack Aura'),(2,'Defense Aura'),(3,'Healing Aura'),(4,'Attack Acceleration'),(5,'Defense Acceleration'),(6,'Skin'),(7,'Ignite'),(8,'Cold'),(9,'Rage: Ensnare'),(10,'Rage: Freeze'),(11,'Invincibility Aura'),(12,'Rage: Knockback'),(13,'Fiery Chain'),(14,'Rage: Stun'),(15,'Rage: Fear'),(16,'Great Oblivion Explosion'),(17,'Lightning Ring'),(18,'Fire Ring'),(19,'Mana Burn'),(20,'Multiplication'),(21,'Rage: Slow'),(22,'Weakening Curse'),(23,'Fiery Crash'),(24,'Rage: Airborne'),(25,'Rage: Blind'),(26,'Oblivion Explision'),(27,'Wave'),(28,'Swamp Aura'),(29,'Swamp Ghost'),(30,'Fire Ghost'),(31,'Black Hole'),(32,'Bulwark'),(33,'Big Fish'),(34,'Catch Him'),(35,'Contaminated Area'),(36,'Tsunami'),(37,'Oblivion Explosion'),(38,'Buckshot');
/*!40000 ALTER TABLE `auras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'Dark Lord'),(2,'Blader'),(3,'War Mage'),(4,'Whisperer'),(5,'Spellbinder');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endless_tower`
--

DROP TABLE IF EXISTS `endless_tower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `endless_tower` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stage_id` int(11) NOT NULL,
  `mobs_id` int(11) DEFAULT NULL,
  `auras_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mobs_has_auras_auras1_idx` (`auras_id`),
  KEY `fk_mobs_has_auras_mobs1_idx` (`mobs_id`),
  KEY `fk_mobs_has_auras_endless_tower_idx` (`stage_id`),
  CONSTRAINT `fk_mobs_has_auras_auras1` FOREIGN KEY (`auras_id`) REFERENCES `auras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_mobs_has_auras_endless_tower` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_mobs_has_auras_mobs1` FOREIGN KEY (`mobs_id`) REFERENCES `mobs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endless_tower`
--

LOCK TABLES `endless_tower` WRITE;
/*!40000 ALTER TABLE `endless_tower` DISABLE KEYS */;
INSERT INTO `endless_tower` VALUES (1,1,1,1),(2,2,2,2),(3,3,3,3),(4,4,3,4),(5,5,4,5),(6,5,5,5),(7,6,6,4),(8,7,7,5),(9,8,7,6),(10,9,8,7),(11,10,8,8),(12,11,9,6),(13,12,9,7),(14,13,10,3),(15,14,11,9),(16,14,NULL,10),(17,15,12,11),(18,15,NULL,12),(19,16,13,10),(20,16,NULL,13),(21,17,14,14),(22,17,NULL,12),(23,18,15,14),(24,18,NULL,7),(25,19,16,4),(26,20,17,6),(27,21,18,15),(28,21,NULL,3),(29,22,18,1),(30,22,NULL,16),(31,23,19,17),(32,23,NULL,16),(33,24,19,18),(34,24,NULL,11),(35,25,20,19),(36,25,NULL,4),(37,37,21,19),(38,27,22,3),(39,27,23,NULL),(40,28,23,2),(41,28,NULL,20),(42,29,24,19),(43,29,NULL,20),(44,30,24,4),(45,30,NULL,1),(46,30,NULL,2),(47,31,25,3),(48,31,26,19),(49,32,27,3),(50,32,NULL,21),(51,33,27,5),(52,33,NULL,22),(53,34,27,3),(54,34,NULL,4),(55,35,25,1),(56,35,28,NULL),(57,36,29,23),(58,36,30,NULL),(59,37,31,6),(60,37,NULL,22),(61,38,11,22),(62,38,NULL,24),(63,39,11,11),(64,39,NULL,19),(65,39,NULL,12),(66,40,32,6),(67,40,18,22),(68,41,33,16),(69,41,NULL,13),(70,42,34,8),(71,42,35,NULL),(72,43,36,25),(73,43,NULL,37),(74,44,36,16),(75,44,NULL,19),(76,45,37,2),(77,45,38,27),(78,46,39,3),(79,46,38,4),(80,47,34,4),(81,47,40,7),(82,48,41,6),(83,48,NULL,19),(84,49,30,23),(85,49,NULL,11),(86,50,29,23),(87,50,30,NULL),(88,51,42,28),(89,51,43,29),(90,52,44,28),(91,52,43,30),(92,52,NULL,16),(93,53,45,12),(94,53,10,3),(95,53,NULL,31),(96,54,10,5),(97,54,NULL,4),(98,54,NULL,7),(99,55,46,4),(100,57,NULL,23),(101,57,NULL,19),(102,58,34,5),(103,58,34,13),(104,58,47,32),(105,59,48,4),(106,59,49,28),(107,60,50,17),(108,60,NULL,22),(109,61,51,33),(110,61,NULL,34),(111,61,NULL,11),(112,61,NULL,3),(113,62,28,13),(114,62,19,32),(115,62,NULL,19),(116,62,NULL,35),(117,64,52,36),(118,64,52,NULL),(119,64,53,29),(120,66,54,11),(121,66,55,32),(122,66,NULL,33),(123,67,56,18),(124,67,57,3),(125,67,NULL,4),(126,68,56,37),(127,68,56,14),(128,68,58,12),(129,69,59,34),(130,69,60,30),(131,69,NULL,18),(132,70,59,38),(133,70,59,20),(134,70,60,17),(135,71,61,38),(136,71,61,NULL),(137,71,62,6),(138,72,63,28),(139,72,63,12),(140,72,62,3),(141,72,NULL,38);
/*!40000 ALTER TABLE `endless_tower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mob_types`
--

DROP TABLE IF EXISTS `mob_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mob_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mob_types`
--

LOCK TABLES `mob_types` WRITE;
/*!40000 ALTER TABLE `mob_types` DISABLE KEYS */;
INSERT INTO `mob_types` VALUES (1,'Demon'),(2,'Magic'),(3,'Insect'),(4,'Mutant'),(5,'Undead'),(6,'Beast'),(7,'Humanoid');
/*!40000 ALTER TABLE `mob_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobs`
--

DROP TABLE IF EXISTS `mobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `is_boss` tinyint(1) unsigned zerofill DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobs`
--

LOCK TABLES `mobs` WRITE;
/*!40000 ALTER TABLE `mobs` DISABLE KEYS */;
INSERT INTO `mobs` VALUES (1,'Goblins',0),(2,'Pamkuma',0),(3,'Larva',0),(4,'Gold Ingot Spider',0),(5,'Spider',0),(6,'Dark Spider',0),(7,'Garuda',0),(8,'Gold Mane Gnoll',0),(9,'Kobold',0),(10,'Skeleton',0),(11,'Frozen Skeleton',0),(12,'Frozen Zombie',0),(13,'Zombie',0),(14,'Budge Dragon',0),(15,'Dragon',0),(16,'Jade Elemental',0),(17,'Elemental',0),(18,'Bull Horn',0),(19,'Dark Follower',0),(20,'Paper Devil',0),(21,'Forbidden Book Devil',0),(22,'Larva King',1),(23,'Kunikulus',0),(24,'Fallen Templar',0),(25,'Gargoyle',1),(26,'Thrasher',0),(27,'Dullahan Knight',0),(28,'Orman',1),(29,'Tall',1),(30,'Whirlwind Knight',0),(31,'Flame Worshipper',0),(32,'Magic Gem-intoxicated Venti',1),(33,'Sand Monkey',0),(34,'Heston',1),(35,'Sand Devil',0),(36,'Broll',0),(37,'Menacing Venti',1),(38,'Gremlin',0),(39,'Boobalus',1),(40,'Red Kiconius',0),(41,'Blue Kiconius',0),(42,'Kisellos',1),(43,'Nipper',0),(44,'Gainox',1),(45,'Belgaterm',1),(46,'Blood Tooth Fighter',0),(47,'Nobility Alliance',0),(48,'Cheerful Aries',1),(49,'Mixed Paper',0),(50,'Mimic',0),(51,'Paper Clown',0),(52,'Bloodlust Tall',0),(53,'Infected Dracans',0),(54,'Swift Pamela',1),(55,'Dark Zealot',0),(56,'Ruthless Vachenrode',1),(57,'Black Abyssal Balrog',0),(58,'Deosizer',1),(59,'Anilata',1),(60,'Crusader',0),(61,'Salkless',1),(62,'Evil Larva',0),(63,'Zurataken',1);
/*!40000 ALTER TABLE `mobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobs_mob_types`
--

DROP TABLE IF EXISTS `mobs_mob_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mobs_mob_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mob_types_id` int(11) NOT NULL,
  `mobs_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mob_types_has_mobs_mobs1_idx` (`mobs_id`),
  KEY `fk_mob_types_has_mobs_mob_types1_idx` (`mob_types_id`),
  CONSTRAINT `fk_mob_types_has_mobs_mob_types1` FOREIGN KEY (`mob_types_id`) REFERENCES `mob_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_mob_types_has_mobs_mobs1` FOREIGN KEY (`mobs_id`) REFERENCES `mobs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobs_mob_types`
--

LOCK TABLES `mobs_mob_types` WRITE;
/*!40000 ALTER TABLE `mobs_mob_types` DISABLE KEYS */;
INSERT INTO `mobs_mob_types` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4),(5,3,5),(6,3,6),(7,1,7),(8,1,8),(9,4,9),(10,5,10),(11,5,11),(12,5,12),(13,5,13),(14,6,14),(15,6,15),(16,2,16),(17,2,17),(18,4,18),(19,7,19),(20,1,20),(21,1,21),(22,1,22),(23,1,23),(24,2,24),(25,1,25),(26,1,26),(27,5,27),(28,2,28),(29,1,29),(30,7,30),(31,1,31),(32,1,32),(33,1,33),(34,7,34),(35,1,35),(36,1,36),(37,1,37),(38,1,38),(39,1,39),(40,1,40),(41,1,41),(42,7,42),(43,4,43),(44,4,44),(45,1,45),(46,1,46),(47,7,47),(48,7,48),(49,2,49),(50,2,50),(51,2,51),(52,1,52),(53,1,53),(54,7,54),(55,7,55),(56,7,56),(57,1,57),(58,7,58),(59,7,59),(60,7,60),(61,2,61),(62,1,62),(63,1,63);
/*!40000 ALTER TABLE `mobs_mob_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `damage` int(11) DEFAULT NULL,
  `kind` text NOT NULL,
  `type` text NOT NULL,
  `class_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_class_skills_idx` (`class_id`),
  CONSTRAINT `fk_class_skills` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Call of Destruction','Vicious strikes at a target, inflicting damage at 100% Attack. This skill\'s third attack sends forth a wave of fury, inflicting AoE damage at 100% attack.',100,'Active','Weapon',1),(2,'Rupturing Thrust','Delivers a home thrust, inflicting damage at 135% Attack. Creates a chance of rupturing around the wound and inflicting additional damage at 150% Attack.',135,'Active','Weapon',1),(3,'Shield Bash','Forcefully strikes an enemy downward, inflicting damage at 105% Attack. The skill\'s third attack makes your character make a wide swing with its shield, inflicting AoE damage at 110% attack, and increases your Shield Block Rate for 5.0 seconds.',NULL,'Active','Weapon',1),(4,'Cyclone Strike','Shoots a twister at enemies in front, inflicting damage at 100% Attack. Using this skill multiple times increases the number of twisters it summons and their damage.',100,'Active','Weapon',1),(5,'Holy Wallop','Delivers a Holy Wallop at enemies in front, inflicting AoE damage at 125% Attack. Temporarily decreases the enemies\' Movement Speed by 15% and Defense by 10%.',125,'Active','Weapon',1),(6,'Dogged March','Inflicts AoE damage on enemies in front at 95% Attack and pulls them toward you. Using this skill multiple times increases its pulling range and damage.',95,'Active','Weapon',1),(7,'Fire Bludgeon','Hammers the ground with a fiery chain, inflicting AoE damage on enemies in front of you at 160% Attack. The chain temporarily sets the ground within its range ablaze, inflicting DoT damage at 35% Attack.',195,'Active','Class',1),(8,'Spin Attack','Enables you to quickly spin and inflict damage on all surrounding enemies at 340% Attack. Decreases the enemies\' Defense by 20% for 3.0 seconds. Increases their Aggro by 100%.',340,'Active','Class',1),(9,'Protective Touch','Attacks a selected area at 250% Attack. If cast on an ally, this skill throws powder of blessing, which restores 20% Max HP and temporarily increases Movement Speed for you and the party member. For enemies, it Silences them for 2.0 seconds and temporarily slows their Movement Speed.',250,'Active','Class',1),(10,'Fire Burst','Detonates fiery chain planted in the target area, inflicting AoE damage at 400% Attack. An additional explosion occurs in 1.5 seconds, inflicting damage at 100% Attack.',500,'Active','Class',1),(11,'Call of Thunder','Hammer the ground with the power of lightning, inflicting AoE damage on all surrounding enemies at 580% Attack and knocking them backward.',580,'Active','Class',1),(12,'Eternal Flames','A fiery twister circles around you for 20.0 seconds, inflicting continuous AoE damage on all surrounding enemies at 55% Attack while absorbing 5% incoming damage for 20.0 seconds.',55,'Active','Class',1),(13,'Holy Light','A Holy Light descends, immedaitely restoring 20% HP for you and surrounding allies and decreasing MP costs by 25% for 5.0 seconds.',NULL,'Active','Class',1),(14,'Vicious Charge','Enables you to charge at a selected spot, inflicting AoE damage on enemies in front of you at 495% Attack, and Taunt them, forcing them to attack you for 2.5 seconds.',495,'Active','Class',1),(15,'Monarch\'s Touch','Throws a hook at enemies in front, inflicting damage at 645% Attack and pulling all of them toward you. The target lose 50% Movement Speed for 3.0 seconds.',645,'Active','Class',1),(16,'Ice Claw','Shoots ice claws in all four directions, inflicting AoE damage on all surrounding enemies at 435% Attack, Freezing them for 2.0 seconds, and increasing their Aggro by 100%.',435,'Active','Class',1),(17,'Weapon Throw','Throws a weapon at a selected location, inflicting damage at 840% Attack. This weapon attacks enemies in its path at 630% Attack and Stuns them for 1.5 seconds.',840,'Active','Class',1),(18,'Purification','A purifying light removes Abnormal Status effects cast on you and surrounding allies, and grants immunity to the effects for 2.0 seconds. Immediately restores 50% MP for you.',NULL,'Active','Class',1),(19,'Rugard\'s Protection','Creates a giant shield, increasing your party\'s Defense by 50% for 20.0 seconds and temporarily Stunning surrounding enemies.',NULL,'Active','Class',1),(20,'Destruction Tremor','Explodes your inner power and causes an earthquake, inflicting (55/75/100)% continuous AoE damage on surround enemies for 8.0 seconds. The enemies lose 80% Movement Speed for 4.0 seconds.',100,'Active','Class',1),(21,'Madness Absorption','Instantly pulls all surrounding enemies toward you, and then explodes the condensed energy, inflicting AoE damage at 435% Attack.',435,'Active','Expert',1),(22,'Guardian\'s Authority','Attacks create a 10% chance of increasing Attack by 10% for 5.0 seconds.',NULL,'Passive','Expert',1),(23,'Pain Immunity','Makes you Invincible for 4.0 seconds, during which your Attack Speed also increases by 30% and Attack by 10%.',NULL,'Active','Expert',1),(24,'Defender\'s Shield','Increases Defense by 5% for party members within 20m.',NULL,'Passive','Expert',1),(25,'Dark Horse','Enables you to ride a dark horse. Grants immunity to 30% of all damage and ignores collisions with enemies. Disables all skills except Earth Shake, Inflicts AoE damage on surrounding enemies and decreases their Movement Speed by 30%.',320,'Active','Expert',1),(26,'Transcendence Shield','Increases Shield Block rate by 10%, and instantly restores 1% max HP after a successful block.',NULL,'Passive','Expert',1),(27,'Rugard\'s Rage','Summons a Rugard\'s statue on a certain spot, inflicting (650/900/1,450)% AoE damage with the Stun effect.',1450,'Active','Expert',1),(28,'Monarch\'s Encouragement','Periodically restores 1% Max HP for surrounding party members.',NULL,'Passive','Expert',1),(29,'Attack Order','Increases surrounding party members\' Attack by 20%, Movement Speed by 30%, Attack Speed by 20%, and Critical Rate by 5%.',NULL,'Active','Expert',1),(30,'Valiant Passion','Weapon skills decrease their targets\' Defense by 5% for 5.0 seconds. This effect can stack up to 5 times.',NULL,'Passive','Expert',1),(31,'Follower\'s Spirit','Creates a pentacle around a selected location from which spirits ascend, inflicting DoT damage on enemies at 235% Attack.',235,'Active','Expert',1),(32,'Mock','Increases your Aggro gain by 20%.',NULL,'Passive','Expert',1),(33,'Dismember','Quickly cuts at a target, inflicting damage at 130% Attack. Using this skill multiple times causes 130% AoE damage sideways.',130,'Active','Weapon',2),(34,'Piercing Slash','Forcefully attacks a target, inflicting damage at 125% Attack. This skill\'s third attack attacks enemies in front, inflicting 145% AoE damage.',125,'Active','Weapon',2),(35,'Assault','Enables you to concentrate your mind and inflict damage at 125% Attack. In this skill\'s fourth attack, your character makes a wide swing, inflicting 155% AoE damage.',125,'Active','Weapon',2),(36,'Blood Pillage','Gathers absobent energy and delivers triple slashes, inflicting AoE damage at 160% Attack. Absorbs 1% outgoing damage as HP.',160,'Active','Weapon',2),(37,'Sweep','Enebles you to brandish your weapon and deliver triple slashes, inflicting damage at 150% Attack. This skill\'s third attack forcefully strikes its target downward, inflicting 250% damage.',150,'Active','Weapon',2),(38,'Shatter','Enables you to forcefully slam your weapon to the ground in front, sending forth a shockwave. This shockwave attacks all surrounding target at 168% Attack and causes Bleeding, which inflict as much damage as 1% of your Max HP for a set duration.',168,'Active','Weapon',2),(39,'Crush','Strikes at enemies in front, inflicting AoE damage at 360% Attack.',360,'Active','Class',2),(40,'Threatening Roar','Enables you to let out a battle cry, attacking surrounding enemies at 210% Attack, decreasing their Attack by 15%, and increasing their Aggro by 50% for 10.0 seconds.',210,'Active','Class',2),(41,'Leap Attack','Enables you to leap over to a selected location and slam the ground as you land, attacking all surrounding enemies at 365% Attack and decreasing their Movement Speed by 20% for 2.0 seconds.',365,'Active','Class',2),(42,'Cyclone Slash','Enables you to spin and create a cyclone, inflicting AoE damage at 215% Attack. Increases your Movement Speed by 5% for its duration.',215,'Active','Class',2),(43,'Fierce Rage','Forcefully hammers the ground, inflicting damage to all surrounding enemies at 790% Attack and launching them into the air. The enemies land Stunned.',790,'Active','Class',2),(44,'Sonorous Roar','Enables you to let out an encouraging shout, increasing Attack and Movement Speed of surrounding allies by 5% for 10 seconds. Also adds 50% Aggro to monsters in its range.',NULL,'Active','Class',2),(45,'Rampage','Enables you to forcefully strike at enemies in front. Each blow attacks at 195% Attack and temporarily Stuns its targets.',195,'Active','Class',2),(46,'Redemption','Enables you to move fluidly, evading all attacks for 2.0 seconds. Attacks surrounding enemies and increases their Aggro by 50% in 2.0 seconds.',NULL,'Active','Class',2),(47,'Charge','Enables you to charge at a certain location, attacking at 315% Attack and causing Stun for 2.0 seconds.',315,'Active','Class',2),(48,'Wallop','Enables you to charge forward and deliver a decisive blow at the cost of 20% Max HP. 70% of the consumed HP inflict Defense Penetrating damage.',NULL,'Active','Class',2),(49,'Last-ditch Effort','Creates a shield that increases Attack by 5% and blocks damage for 10.0 seconds. This shield absorbs as much damage as 20% Max HP.',NULL,'Active','Class',2),(50,'Turning Blow','Enables you to swing your fist at enemies in front, inflicting damage at 890% Attack. The enemies lose 30% Defense for 3.0 seconds.',890,'Active','Class',2),(51,'Focused Strike','Weapon skill attacks inflic 50% additional damage and increase Attack Speed by 20% for 8.0 seconds.',NULL,'Active','Class',2),(52,'Earth Cleaver','Enables you to slam your weapon to the ground in front, attacking enemies in a traight line at 715% Attack, and pushing them away from the cracks formed across the ground.',715,'Active','Class',2),(53,'Cruel Pain','Increases Attack by 10% when you have 50% or lower HP.',NULL,'Passive','Expert',2),(54,'Raging Shout','Enables you to shout at enemies in front and inflic damage at 610% Attack. The enemies lose 40% Movement Speed and receive 50% more damage from all attacks for 2.0 seconds.',610,'Active','Expert',2),(55,'Indomitable Courage','Increases Attack by 10% if there are 5 or more enemies within 10m.',NULL,'Passive','Expert',2),(56,'Iron Armor','Instantly summons iron armor on you, absorbings 80% incoming damage for 3.0 seconds. 40% of absorbed damage is converted to your HP.',NULL,'Active','Expert',2),(57,'Frenzy','Weapon skills increase Attack Speed by 5% with every hit. This effect stacks up to 5 times.',NULL,'Passive','Expert',2),(58,'Reversed Rage','Enables you to unleash your anger. Enlarges your character, significantly increases your Max HP, and inflicts DoT damage on surrounding enemies for 15.0 seconds. Restores 5% MP every second.',NULL,'Active','Expert',2),(59,'Indomitable Spirit','Increases Evasion Rate by 5% and Max HP by 10%.',NULL,'Passive','Expert',2),(60,'Gravity Deflection','Enables you to forcefully slam the ground in front of you, launching enemies within this skill\'s range into the air, one by one. All targets receive damage at 925% Attack, get launched in the air, and receive additional 100% damage as they land.',925,'Active','Expert',2),(61,'Endure','Incoming damage decreases subsequent incoming damage by 20% for 3 seconds.',NULL,'Passive','Expert',2),(62,'Sweep Fray','Enables you to move forward while spinning your wsord 360 degrees, inflicting damage at 475% Attack. This skill can be charged up to 5 times. Charged once every 4 seconds.',475,'Active','Expert',2),(63,'Propulsion','Leap Attack and Charge increase Movement Speed by 50% for 2 seconds.',NULL,'Passive','Expert',2),(64,'Infinite Charge','Decreases Charges and Leap Attack cooldown time by 50% for 7 seconds.',NULL,'Active','Expert',2),(65,'Chaos Orb','Shoots mana orb, inflicting damage at 110% Attack. This orb also attacks enemies behind its target.',110,'Active','Weapon',3),(66,'Energy Explosion','Shoots an energy orb at enemies in front. This orb explodes and inflics AoE damage at 105% Attack. If enemies die in the explosion, this skill causes additional explosions.',105,'Active','Weapon',3),(67,'Shockwave','Drops a condensed energy concussion bomb onto a selected location, inflicting AoE damage at 135% Attack and decreasing Movement Speed by 15% for 3 seconds.',135,'Active','Weapon',3),(68,'War Veteran','Imbues your sword with the energy of darkness, inflicting damage at 110% Attack. This skill\'s third attack pushes away enemies in front and decrease their Defense by 15%.',110,'Active','Weapon',3),(69,'Marching Blade','Shoots a blade that inflicts AoE damage at 105% Attack with a chance of penetrating 10% Defense for 2 seconds.',105,'Active','Weapon',3),(70,'Torment Wave','Radiates afflictive energy, inflicting damage on enemies in front at 130% Attack. This skill\'s third attack generates a shockwave, inflicting aditional damage on 3 surrounding enemies.',130,'Active','Weapon',3),(71,'Fire Clutches','Sets a selected area ablaze, inflicting AoE damage at 190% Attack and causing DoT damage at 15% Attack.',190,'Active','Class',3),(72,'Radiant Chain','Concentrates the power of lightning onto a certain spot. This power of lightning remains for 3 seconds, causing DoT damage on enemies in its range at 82% Attack.',82,'Active','Class',3),(73,'Power Slash','Shoots mana fragments that attack at 158% Attack and decrease Movement Speed by 20% for 2.0 seconds.',158,'Active','Class',3),(74,'Fire Curtain','Sets ablaze the ground in front of you. The fire attacks enemies at 240% Attack and causes DoT damage at 125% Attack for 5.0 seconds.',240,'Active','Class',3),(75,'Cold Murder','Enables you to quickly spin, attacking surrounding enemies at 358% Attack and Stunning them for 1.5 seconds.',358,'Active','Class',3),(76,'Full Throttle','Teleports you to a front area and detonates your original location, inflicting AoE damage at 325% Attack and casting Stealth on you for 1.5 seconds.',325,'Active','Class',3),(77,'Reaper\'s Light','Shoots a deadly ray at enemies in front. The ray causes DoT damage on all enemies in its path at (210/320/450)% Attack.',450,'Active','Class',3),(78,'Specter Shield','Creates a shield that absorbs 20% damage for 20 seconds. This shield, when destroyed, shatters into flying shrapnel, inflicting AoE damage at 350% Attack and knocking all surrounding targets backward. This shield absorbs as much damage as 20% Max HP.',350,'Active','Class',3),(79,'Bloodfest','Enables you to rush into a selected area and deliver a flurry of attacks, inflicting 232% AoE damage. Makes you Invincible for its duration.',232,'Active','Class',3),(80,'Binding Blizzard','Summons a powerful blizzard on a certain spot. This blizzard remains for 4 seconds, causing DoT damage on enemies in its range at 117% Attack. The enemies lose 40% Movement Speed for 2.0 seconds.',117,'Active','Class',3),(81,'Cruel Touch','Enables you to attack enemies in front at 125% Attack as retreating. Pushes the enemies backward, decrease their Movement Speed by 50%, and plants condensed mana, which explodes in 3 seconds, inflicting damage at 200% Attack.',125,'Active','Class',3),(82,'Mana Racer','Shoots a powerful mana orb. This orb slowing moves forward, attacking enemies in its path at 172% Attack.',172,'Active','Class',3),(83,'Danse Macabre','Enables you to teleport to a selected location and swing your sword, inflicting damage at 412% Attack. Recasting this skill in 2 seconds brings you back to your original spot.',412,'Active','Class',3),(84,'Hallucinatory Infection','Infects the mind of a target in a selected area, inflicting DoT damage at 570% Attack for 4.0 seconds. If the target dies, this skill\'s effect is transferred to a nearby enemy and your MP.increases by 25% Max MP.',570,'Active','Class',3),(85,'Persevering Strike','Using this skill 5 times enables the following skill attack to stun its target for 1.5 seconds.',NULL,'Passive','Expert',3),(86,'Glacier Prison','Freezes you and makes you invincible for 3 seconds. After 3 seconds, ice shards are fired from your body that inflict AoE damage on surrounding enemies at 850% Attack.',NULL,'Active','Expert',3),(87,'Dark Shade','Decreases Magic Defense by 20% for enemies within 20m.',NULL,'Passive','Expert',3),(88,'Specter','Summons a pecter that inflicts continuous AoE damage on surrounding enemies at 295% Magic Attack with a chance of causing Confusion for 2 seconds.',NULL,'Active','Expert',3),(89,'Mind Concentration','Decreases skill MP cost by 10%.',NULL,'Passive','Expert',3),(90,'Meteor Drop','Drops a massive meteor onto a certain area, inflicting AoE damage at 440% Magic Attack. All targets are pushed a long distance in all directions and receive continous Fire Damage at 100% Magic Attack. Inflicts additional 150% damage on enemies further than 10m away.',NULL,'Active','Expert',3),(91,'Dark Benediction','Increases Max HP by 10% and Magic Defense by 10%. Increases Specter Shield\'s damage reduction by 5%.',NULL,'Passive','Expert',3),(92,'Final Notice','Delivers a blow to the front at 770% Magic Attack. Inflicts additional 60% Magic Damage if the target\'s HP is 30% or less. Recasting this skill in 2 seconds shoots energy to the front, pushing its target a long distance.',NULL,'Active','Expert',3),(93,'TBD','TBD',NULL,'TBD','Expert',3),(94,'TBD','TBD',NULL,'TBD','Expert',3),(95,'TBD','TBD',NULL,'TBD','Expert',3),(96,'TBD','TBD',NULL,'TBD','Expert',3),(97,'Piercing Arrow','Shoots a penetrating arrow, attacking a target and enemies behind him at 105% Attack. The enemies lose 10% Movement Speed for 1.0 seconds.',105,'Active','Weapon',4),(98,'Poison Arrow','Shoots a poisonous arrow that attacks at 90% Attack and Poisons its target, causing DoT damage at 10% for 4.0 seconds. Sics poisonous insects on the target.',90,'Active','Weapon',4),(99,'Multi Arrows','Shoots multiple arros, attacking enemies in front at 65% Attack.',65,'Active','Weapon',4),(100,'Frontal Shot','Fires a bullet, inflicting AoE damage at 110% Attack and decreasing its target\'s Movement Speed.',110,'Active','Weapon',4),(101,'Flamethrower','Shoots flames, inflicting DoT damage on enemies in front at (100/110/125)% Attack with chance of Igniting them.',100,'Active','Weapon',4),(102,'Salvo','Fires a series of bullets, inflicting damage at 15% Attack.',45,'Active','Weapon',4),(103,'Electric Explosion','Condenses eletric energy into an orb that explodes on contact, inflicting damage on all surrounding enemies at 215% Attack and decreasing their Movement Speed by 20% for 2.0 seconds.',215,'Active','Class',4),(104,'Multi Shot','Shoots multiple arrows, inflicting damage on enemies in front at 340% Attack.',340,'Active','Class',4),(105,'Roll','Enables you to roll forward. Increases Attack by 5% for 3.0 seconds.',NULL,'Active','Class',4),(106,'Swift Shot','Quickly shoots arrows, attacking enemies in front at (130/150/180)% Attack. Starts shooting explosive arrows at level 2 and above. This skill continously cosumes MP for its duration.',180,'Active','Class',4),(107,'Multi Kill','Showers a selected area with arrows, inflicting AoE damage at 585% Attack and decreaseing enemies\' Attack Speed by 15% for 5.0 seconds.',585,'Active','Class',4),(108,'Wind Sprint','The power of wind increases your Movement Speed by 50% for 8.0 seconds, and enables you to evade all attacks for 1.5 seconds. Ignores colliding targets for its duration.',NULL,'Active','Class',4),(109,'Condensed Shot','Fires a large condensed projectile that attacks enemies in front at (635/705/825)% Attack and pushes them far away.',825,'Active','Class',4),(110,'Chaser\'s Trap','Sets up a trap in a selected area that explodes when stepped on, inflicting AoE damage at 635% Attack. Enemies caught in the explosion are Ensnared for 3.0 seconds. This trap automatically disappears in 20 seconds if left untouched.',635,'Active','Class',4),(111,'Natural Assimilation','Enables you to blend in with nature and avoid detection for 3.0 seconds. During Stealth, you become immune to Abnormal Status effects.',NULL,'Active','Class',4),(112,'Will of the Wild','Shoots an enemy in its ankle with an arrow, inflicting damage at 795% Attack and ensnaring it for 2.5 seconds.',795,'Active','Class',4),(113,'Smokescreen','Detonates a smoke bomb that inflicts DoT damage on enemies within its range at 105% Attack for 6.0 seconds and Blinds them for 2.0 seconds. Blinded targets lose 50% Accuracy.',105,'Active','Class',4),(114,'Death Sentence','Marks a target for death. The marked target loses 50% Defense and 100% HP Recovery per Second for 5 seconds. After 5 seconds he explodes, inflicting damage at 450% Attack.',450,'Active','Class',4),(115,'Green Sanctum','Transforms your surroundings into a plain, increasing Attack Speed for you and your party by 50% for 10.0 seconds.',NULL,'Active','Class',4),(116,'Explosive Shot','Shoots volleys of arrows for 2.0 seconds, attacking enemies in front at 310% Attack and temporarily decreasing their Movement Speed by 90%.',310,'Active','Class',4),(117,'Earth\'s Blessing','Hearnesses the energy of earth, decreasing Defense for enemies within 10m by 5%.',NULL,'Passive','Expert',4),(118,'Bombardment','Summons a tracker that bombards a selected area in 1 second. Numerous arrows drop onto that area multiple times, inflicting AoE damage at 1,552% Attack.',1552,'Active','Expert',4),(119,'Soul Attack','Increases Attack by 3%.',NULL,'Passive','Expert',4),(120,'Tree of the Otherworld','The Tree of the Otherworld appears on a selected spot, pulling surrounding enemies. This tree remains for 10 seconds, and pulls a single target closer to it.',NULL,'Active','Expert',4),(121,'Guardian Spirit','Using or hitting this skill 5 times summons a Guardian Elemental that helps you fight.',NULL,'Passive','Expert',4),(122,'Earth Elemental','Summons an earth elemental that helps you fight. A different elemental is summoned depending on the type of your weapon, and it automatically perishes when you switch to a different weapon.',NULL,'Active','Expert',4),(123,'Initiating Sprint','Increases Movement Speed by 5%.',NULL,'Passive','Expert',4),(124,'Torment Wall','Summons a circular wall around a selected area, inflicting AoE damage at 135% Attack and imprisoning enemies for 4.0 seconds. The wall shoots thorns inward, inflicting DoT damage at 70% Attack.',205,'Active','Expert',4),(125,'Defense Conversion','Incoming Damage increases Defense by 2% for 2.- seconds. Stacks up to 5 times.',NULL,'Passive','Expert',4),(126,'Torment Magnetic Field','Enables you to set up two traps abreast and step backward. The traps generate a magnetic field between them and move forward, attacking targets at their path at 310% Attack and Stunning them for 0.5 seconds.',310,'Active','Expert',4),(127,'Swift Attack','Increases Attack Speed by 8% when you have 90% or more HP.',NULL,'Passive','Expert',4),(128,'Madness Power','Reinforces your weapon, increasing its Attack by 50% for 5 seconds. Also increases your MP Recovery per Second by 200% for the same duration.',NULL,'Active','Expert',4),(129,'Non-detective','At the same time, it attacks 5 stabs in succession, dealing 120% of damage. (Soul Specialization) Increases attack speed by 5%.',120,'Active','Weapon',5),(130,'Bigeom Diffusion','Combine a sword with a sword that inflicts 130% of your damage to the target, causing your sword to spread in 5 directions for additional damage. (Soul Specialization) Increases attack speed by 5%.',130,'Active','Weapon',5),(131,'Ghost Bigeom','Throws a sword forward for 120% of attack damage. Additionally, a Blood Sword pursuing an enemy deals 120% additional damage to two random targets. (Soul Specialization) Increases attack speed by 5%.',120,'Active','Weapon',5),(132,'Blade Boomerang','Chakram that rotates at high speed deals 70% damage and deals 70% more damage when returning. (Chakram Specialization) Decreases the defense strength of a target that has hit the main weapon by 10% for 5 seconds.',70,'Active','Weapon',5),(133,'Twinggigi Blade','Throws Chakram to hit, causing damage by 130% of attack power and up to 5 other damage to nearby enemies. (Chakram Specialization) Decreases the defense strength of a target that has hit the main weapon by 10% for 5 seconds.',130,'Active','Weapon',5),(134,'Rotating Blade','Summons Chakram, which spins at high speed, to attack points and inflicts 55% of their damage periodically for 3.0 seconds. (Chakram Specialization) Decreases the defense strength of a target that has hit the main weapon by 10% for 5 seconds.',55,'Active','Weapon',5),(135,'Shuriken Storm','Throws a wielder in front of you, dealing 250% of your damage.',250,'Active','Class',5),(136,'Blood flower','Bloody blossoms at that point, damaging enemies in range by 385% of ATK and reducing movement speed by 40% for 3.0 seconds.',385,'Active','Class',5),(137,'Steel Archor','Causes a steel auspicious in front of you, causing range damage by 485% of attack power. Damaged target bleeds and inflicts 25% additional damage periodically for 3.0 seconds.',485,'Active','Class',5),(138,'Worry Afterimage','Instantly moves to the point and infuses nearby friendly units with a fast-paced movement speed by 8% for 2.0 seconds.',NULL,'Active','Class',5),(139,'Kiss of Enamored','Fires an aura of temptation in front of you, inflicts 370% of your damage, and fascinates you for 2.0 seconds, allowing you to slowly approach yourself. Attack power per hit target equals 2% for 5.0 seconds. (Up to 5 overlaps)',370,'Active','Class',5),(140,'Chains of Fighting Back','Unlocking the Counterattack and climbing over the Enchantment increases your ATK by 5% for 5.0 sec. (Applies only half for friendly). Deals 520% ??of ATK to enemies and reduces ATK by 10% for 5.0 seconds.',520,'Active','Class',5),(141,'Doors Welcome','Summons a Gate of Illusion for 5.0 seconds to a specific point, inflicts 210% of all Attack Damages on all targets in the area, and reduces movement speed by 50% for 3.0 seconds.',210,'Active','Class',5),(142,'Chains of Protection','Unlocking the Protection Clarity and hovering above the Clarity reduces damage by 10% for 5.0 seconds. (Affected forces only apply half.) Periodically inflicts 95% of attack power on enemies and reduces armor by 20% for 5.0 seconds. You are immune to all damage for 1.5 seconds.',95,'Active','Class',5),(143,'Death Flower','Spreads the energy of death to all nearby enemies and inflicts ranged damage by 425% of attack power. The victim gets a marker for 3.0 seconds, and the marker deals 75% damage when it disappears. If an enemy with a Marker dies, it explodes and deals 75% damage to nearby enemies. Explosion damage can damage up to 5 people.',425,'Active','Class',5),(144,'Call of Hope','Spreads the energy of hope around you, damages your opponent by 540% of your ATK, and stuns for 1.5 seconds.',540,'Active','Class',5),(145,'Light Feet','Wraps itself with the power of light and inflicts 110% damage around you periodically for 8.0 seconds. Movement speed is increased by 50% and all conflicts are ignored during the duration of light\'s power.',110,'Active','Class',5),(146,'Mental Breakdown','Releases a mysterious light forward to inflict 775% of all damage to all targets in the area, reducing the mana cost of your target by 50% of max mana.',775,'Active','Class',5),(147,'Variation','Creates a mutational aura that deals damage by 615% of attack power and mutates form for up to 5 people for 2.5 seconds. Mutated objects become inoperable and their armor is reduced by 100%.',615,'Active','Class',5),(148,'Chakram Blade','Throws a huge Chakram in front of you and inflicts 350% of your attacking damage periodically.',350,'Active','Class',5),(149,'Mental Stimulation','If you have more than 5 enemies within 10m of nearby, your damage will be reduced by 5%.',NULL,'Passive','Expert',5),(150,'Phantom of Rain','Sheds an ancient weapon from the heavens and deals 105% of your damage for 5.0 seconds. Damaged targets are reduced in movement speed by 60% for 1.0 sec.',105,'Active','Expert',5),(151,'Regular Absorbtion','If you kill an enemy with a critical hit, you regain 5% of your maximum health.',NULL,'Passive','Expert',5),(152,'Environment Rifle','Summons ancient weapons at a specific point and inflicts 270% of damage per second for 5.0 seconds.',270,'Active','Expert',5),(153,'Heavenly Prayer','Increases your buff skill and your debuff duration by 20%.',NULL,'Passive','Expert',5),(154,'Chains of Life','Unlocks the Enchantment of Life and regenerates your stamina periodically by 5%. (Inflicts only half on friendly). Inflicts an Inflicting periodic damage to the enemy by 160% of his ATK and reduces his Life Recovery per Second by 100% for 5.0 sec.',160,'Active','Expert',5),(155,'Time Warp','When your stamina is above 80%, your attack speed and movement speed increase by 3%.',NULL,'Passive','Expert',5),(156,'Storm Sorm','Creates a powerful acute storm, inflicting 470% damage to enemies and bringing them to the area.',470,'Active','Expert',5),(157,'Will Hope','Reduces the cooldown of all your enchantments by 1 second.',NULL,'Passive','Expert',5),(158,'Time Enchantment','Unlocks the buff of the time, buffing all friendly units around you for 3.0 seconds, and increases your movement speed by 20% for 5.0 seconds. (Affects only half of the enemy units.) Inflicts 850% of attack damage on enemies and reduces movement speed by 90% for 5.0 seconds.',850,'Active','Expert',5),(159,'Mana Energy','Increases your mana per second recovery by 15%.',NULL,'Passive','Expert',5),(160,'Guidance of Despair','Empire Sai infuses the target with energy of despair, inflicting 250% damage and periodic damage to the target and surrounding area for 3.0 seconds. During this skill period, Amphisia will not be able to do any other action, and if any other action or inaction fails, the inactive action will be canceled.',250,'Active','Expert',5);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stage_rewards`
--

DROP TABLE IF EXISTS `stage_rewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stage_rewards` (
  `id` int(11) NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_stage_rewards_stages1` FOREIGN KEY (`id`) REFERENCES `stages` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stage_rewards`
--

LOCK TABLES `stage_rewards` WRITE;
/*!40000 ALTER TABLE `stage_rewards` DISABLE KEYS */;
/*!40000 ALTER TABLE `stage_rewards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stages`
--

DROP TABLE IF EXISTS `stages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `details` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stages`
--

LOCK TABLES `stages` WRITE;
/*!40000 ALTER TABLE `stages` DISABLE KEYS */;
INSERT INTO `stages` VALUES (1,'2 Attack Aura'),(2,'2 Defense Aura'),(3,'1 Elite + 1 Healing Aura'),(4,'1 Elite + 2 Attack Acceleration'),(5,'1 Elite + 2 Defense Acceleration'),(6,'1 Elite + 2 Attack Acceleration'),(7,'1 Elite + 2 Defense Acceleration'),(8,'1 Elite + 4 Skin'),(9,'1 Elite + 2 Ignite'),(10,'1 Elite Cold + 1 Elite + 1 Cold'),(11,'1 Elite + 4 Skin'),(12,'1 Elite Ignite + 2 Ignite'),(13,'1 Elite + 2 Healing Aura'),(14,'1 Elite Rage: Ensnare + 1 Elite Rage: Freeze + 1 Rage: Freeze'),(15,'1 Elite Invincibility Aura + 1 Elite + 2 Rage: Knockback'),(16,'1 Elite Fiery Chain + 1 Elite + 3 Rage: Freeze'),(17,'2 Elite Rage: Knockback + 2 Rage: Stun'),(18,'1 Elite Ignite, 3 Rage: Stun, sehr viele ranged'),(19,'2 Elite Attack Acceleration + 3 Attack Acceleration'),(20,'2 Elite Skin'),(21,'2 Elite + 2 Healing Aura + 2 Rage: Fear'),(22,'2 Elite Attack Aura + 1 Great Oblivion Explosion'),(23,'2 Lightning Ring + 2 Great Oblivion Explosion'),(24,'1 Elite Fire Ring + 1 Invincibility Aura'),(25,'2 Elite Attack Acceleration + 2 Mana Burn'),(26,'1 Elite Mana Burn + 1 Elite + 4 Mana Burn'),(27,'Boss + 2 Elite + 2 Healing Aura'),(28,'2 Elite Defense Aura + 4 Multiplication'),(29,'2 Mana Burn + 3 Multiplication'),(30,'1 Defense Aura + 1 Attack Aura + 5 Attack Acceleration'),(31,'Boss + 1 Elite Healing Aura + 5 Mana Burn'),(32,'1 Elite Healing Aura + 1 Elite + 1 Healing Aura + 3 Rage: Slow'),(33,'2 Elite Defense Acceleration + 2 Elite + 4 Weakening Curse'),(34,'4 Elites'),(35,'2 Bosses Attack Aura, Adds spawn during fight'),(36,'Boss Fiery Crash + 4 Fiery Crash'),(37,'6 Skin + 4 Weakening Curse'),(38,'2 Elite Weakening Curse + 4 Rage: Airborne'),(39,'1 Elite Invincibility + 1 Elite Mana Burn + 4 Rage: Knockback'),(40,'Boss Weakening Curse + 8 Skin'),(41,'2 Elite Fiery Chain + ?? Great Obvlivion Explosion'),(42,'Boss + Boss Image + 4 Cold'),(43,'2 Elite Oblivion Explosion + 4 Rage: Blind'),(44,'1 Elite + 6 Mana Burn + 4 Great Oblivion Explosion'),(45,'Boss + 1 Elite Wave + 6 Defense Aura'),(46,'Boss Healing Aura + 2 Elite Attack Acceleration'),(47,'Boss Attack Acceleration + Boss Image + 4 Ignite'),(48,'10 Skin + 4 Mana Burn'),(49,'2 Invincibility Aura + 4 Fiery Crash'),(50,'Boss Fiery Crash + 4 Fiery Crash'),(51,'Boss + 4 Swamp Aura + 2 Swamp Ghost'),(52,'Boss Swamp Aura + 2 Great Oblivion Explosion + 4 Fire Ghost'),(53,'4 Elite Rage: Knockback + 2 Healing Aura + 2 Black Hole'),(54,'2 Elite Defense Acceleration + 4 Attack Acceleration + 4 Ignite'),(55,'4 Elite Attack Acceleration'),(56,'TBD'),(57,'2 Bosses Fiery Crash + 10 Mana Burn'),(58,'2 Bosses + Images + 2 Elite Defense Acceleration + 2 Fiery Chain + 2 Bulwark'),(59,'Boss Attack Acceleration + 2 Elite Swamp Aura + 2 Elite + 2 Swamp Aura'),(60,'3 Elite Lightning Ring + 3 Elite + 6 Weakening Curse'),(61,'2 Elite Big Fish + 2 Elite Catch Him + 2 Invincibility Aura + 2 Healing Aura'),(62,'Boss Fiery Chain + 2 Elite Bulwark + 3 Mana Burn + 3 Contaminated Area'),(63,'TBD'),(64,'2 Bosses Tsunami + 2 Swamp Ghost'),(65,'TBD'),(66,'Boss Invincibility Aura + 2 Elite Bulwark + 2 Elite Big Fish + 2 Elite'),(67,'2 Elite Fire Ring + 4 Healing Aura + 9 Attack Acceleration'),(68,'Boss Rage: Stun + Boss Oblivion Explosion + Boss Rage: Knockback'),(69,'Boss + 2 Elite Catch Him + 5 Fire Ghost + 5 Fire Ring'),(70,'1 Boss Buckshot + 1 Boss + 4 Elite Multiplication + 1 Elite Lightning Ring + 1 Elite'),(71,'Rage'),(72,'1 Boss Swamp Aura + 1 Boss Rage: Knockback + 2 Elite Healing Aura + 4 Buckshot'),(73,'TBD'),(74,'TBD'),(75,'TBD'),(76,'TBD'),(77,'TBD'),(78,'TBD'),(79,'TBD'),(80,'TBD'),(81,'TBD'),(82,'TBD'),(83,'TBD'),(84,'TBD'),(85,'TBD'),(86,'TBD'),(87,'TBD'),(88,'TBD'),(89,'TBD'),(90,'TBD'),(91,'TBD'),(92,'TBD'),(93,'TBD'),(94,'TBD'),(95,'TBD'),(96,'TBD'),(97,'TBD'),(98,'TBD'),(99,'TBD'),(100,'TBD');
/*!40000 ALTER TABLE `stages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subclasses`
--

DROP TABLE IF EXISTS `subclasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subclasses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `class_id` int(11) NOT NULL,
  `main_equipment` varchar(30) NOT NULL,
  `main_stats` varchar(20) NOT NULL,
  `attack` int(11) NOT NULL,
  `hp` int(11) NOT NULL,
  `coop` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_class_subclass_idx` (`class_id`),
  CONSTRAINT `fk_class_subclass` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subclasses`
--

LOCK TABLES `subclasses` WRITE;
/*!40000 ALTER TABLE `subclasses` DISABLE KEYS */;
INSERT INTO `subclasses` VALUES (1,'Command',1,'Scepter and Shield','Health',4,10,9,'The Dark Lord took up the role of leading battles on the frontline. Various recovery and support skills allow him to maximize the combat efficiency of party members.'),(2,'Destruction',1,'Two-handed Bludgeon','Strength',8,8,6,'A type of Dark Lord that wields a two-handed club instead of a shield to focus on dealing damage. His powerful area attacks and crowd crontol skills ravage the enemies.'),(3,'Madness',2,'Greatsword','Strength',10,6,5,'Blader is a versatile assault warrior who can respond to any situation that arises. Powerful instant survival skills allow him to survive even behind enemy lines.'),(4,'Savage',2,'Twin Blade','Strength',6,8,8,'A high attack speed and a wide range of movement skills allow for fast-paced combat. You can inflict great damage immediately by using area attack skills with short casting times.'),(5,'Magic',3,'Staff','Intelligence',9,5,8,'Specializes in ranged area attacks. You can stand in the rear and deal massive damage over a wide area.'),(6,'Assassin',3,'Magic Sword','Intelligence',9,6,6,'A unique way to level up focusing on melee attacks by using a magic sword instead of a staff. Despite a lack of area attacks, you can still perform fast and elaborate attacks.'),(7,'Strategy',4,'Bow','Dexterity',7,7,8,'A whisperer is a class optimized for forcing battles to fit their preferences. They are powerful ranged damage dealers that are capable of controlling the balance of a battle.'),(8,'Wild Shot',4,'Wing Gun','Dexterity',8,7,9,'A Wing Gun is a mid-range weapon with less range than a bow. You can become a pure damage dealer, shooting powerful arrows at multiple enemies at mid-range.');
/*!40000 ALTER TABLE `subclasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mudb'
--

--
-- Dumping routines for database 'mudb'
--
/*!50003 DROP PROCEDURE IF EXISTS `simpleproc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `simpleproc`(IN name varchar(100),IN is_boss TINYINT)
BEGIN
	TRUNCATE TABLE mobs;
    insert into mobs (name,is_boss) values (in_name ,in_is_boss);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-13 13:41:17
