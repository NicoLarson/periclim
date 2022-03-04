-- MySQL Script generated by MySQL Workbench
-- Fri Mar  4 12:19:47 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_doc_periclim
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_doc_periclim
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_doc_periclim` DEFAULT CHARACTER SET utf8 ;
USE `db_doc_periclim` ;

-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_author` (
  `a_id` INT NOT NULL AUTO_INCREMENT,
  `a_first_name` VARCHAR(45) NOT NULL,
  `a_last_name` VARCHAR(45) NOT NULL,
  `a_middle_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`a_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 36
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_book` (
  `b_id` INT NOT NULL AUTO_INCREMENT,
  `b_title` VARCHAR(255) NOT NULL,
  `b_publisher_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`b_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_journal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_journal` (
  `j_id` INT NOT NULL AUTO_INCREMENT,
  `j_name` MEDIUMTEXT CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`j_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_subject_area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_subject_area` (
  `sa_id` INT NOT NULL AUTO_INCREMENT,
  `sa_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`sa_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_document`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_document` (
  `d_id` INT NOT NULL AUTO_INCREMENT,
  `d_title` VARCHAR(255) NOT NULL,
  `d_type` VARCHAR(45) NOT NULL,
  `d_year` INT NULL DEFAULT NULL,
  `d_abstract` LONGTEXT NULL DEFAULT NULL,
  `d_url` VARCHAR(255) NULL DEFAULT NULL,
  `d_doi` VARCHAR(255) NULL DEFAULT NULL,
  `d_standard_number` VARCHAR(255) NOT NULL,
  `d_fk_journal_id` INT NULL DEFAULT NULL,
  `d_fk_book_id` INT NULL DEFAULT NULL,
  `d_fk_subject_area_id` INT NOT NULL,
  PRIMARY KEY (`d_id`),
  INDEX `d_fk_journal_id` (`d_fk_journal_id` ASC) VISIBLE,
  INDEX `d_fk_book_id` (`d_fk_book_id` ASC) VISIBLE,
  INDEX `d_fk_subject_area_id` (`d_fk_subject_area_id` ASC) VISIBLE,
  CONSTRAINT `d_fk_book_id`
    FOREIGN KEY (`d_fk_book_id`)
    REFERENCES `db_doc_periclim`.`dp_book` (`b_id`),
  CONSTRAINT `d_fk_journal_id`
    FOREIGN KEY (`d_fk_journal_id`)
    REFERENCES `db_doc_periclim`.`dp_journal` (`j_id`),
  CONSTRAINT `d_fk_subject_area_id`
    FOREIGN KEY (`d_fk_subject_area_id`)
    REFERENCES `db_doc_periclim`.`dp_subject_area` (`sa_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_document_has_dp_author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_document_has_dp_author` (
  `dha_fk_document_id` INT NOT NULL,
  `dha_fk_author_id` INT NOT NULL,
  PRIMARY KEY (`dha_fk_document_id`, `dha_fk_author_id`),
  INDEX `dha_fk_author_id` (`dha_fk_author_id` ASC) VISIBLE,
  INDEX `dha_fk_document_id` (`dha_fk_document_id` ASC) VISIBLE,
  CONSTRAINT `dha_fk_author_id`
    FOREIGN KEY (`dha_fk_author_id`)
    REFERENCES `db_doc_periclim`.`dp_author` (`a_id`),
  CONSTRAINT `dha_fk_document_id`
    FOREIGN KEY (`dha_fk_document_id`)
    REFERENCES `db_doc_periclim`.`dp_document` (`d_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_key_word`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_key_word` (
  `kw_id` INT NOT NULL AUTO_INCREMENT,
  `kw_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`kw_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_doc_periclim`.`dp_document_has_dp_key_word`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_doc_periclim`.`dp_document_has_dp_key_word` (
  `dhkw_fk_document_id` INT NOT NULL,
  `dhkw_fk_key_word_id` INT NOT NULL,
  PRIMARY KEY (`dhkw_fk_document_id`, `dhkw_fk_key_word_id`),
  INDEX `dhkw_fk_key_word_id` (`dhkw_fk_key_word_id` ASC) VISIBLE,
  INDEX `dhkw_fk_document_id` (`dhkw_fk_document_id` ASC) VISIBLE,
  CONSTRAINT `dhkw_fk_document_id`
    FOREIGN KEY (`dhkw_fk_document_id`)
    REFERENCES `db_doc_periclim`.`dp_document` (`d_id`),
  CONSTRAINT `dhkw_fk_key_word_id`
    FOREIGN KEY (`dhkw_fk_key_word_id`)
    REFERENCES `db_doc_periclim`.`dp_key_word` (`kw_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
