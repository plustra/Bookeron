CREATE DATABASE bookeron;
USE bookeron;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    birthdate DATE NOT NULL,
    address VARCHAR(100) NOT NULL
);

CREATE TABLE author (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    address VARCHAR(100) NOT NULL,
    biography TEXT
);

CREATE TABLE book (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    synopsis TEXT,
    genre VARCHAR(50),
    pages INT NOT NULL,
    copies INT NOT NULL,
    publication_date DATE NOT NULL,
    publisher VARCHAR(50) NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES author (id)
);

CREATE TABLE loan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    loan_date DATE NOT NULL,
    loan_end_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (book_id) REFERENCES book (id)
);
