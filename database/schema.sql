CREATE DATABASE IF NOT EXISTS bookeron;
USE bookeron;

CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    guid VARCHAR(36) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    birthdate DATE,
    address VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS author (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    guid VARCHAR(36) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthdate DATE,
    biography TEXT
);

CREATE TABLE IF NOT EXISTS book (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    guid VARCHAR(36) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT,
    genre VARCHAR(255),
    pages INT,
    copies INT,
    publication_date DATE,
    publisher VARCHAR(255),
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES author (id)
);

CREATE TABLE IF NOT EXISTS loan (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    guid VARCHAR(36) NOT NULL UNIQUE,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    loan_date DATE,
    loan_end_date DATE,
    return_date DATE,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (book_id) REFERENCES book (id)
);
