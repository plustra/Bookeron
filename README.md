# Bookeron

Bookeron is a Node.js and Express server designed to manage book loans in a library.

## Prerequisites

To run this server, you must have Node.js and MySQL installed on your local computer or server where the application will be hosted.

## Dependencies

-   [Express](https://expressjs.com/es/) A popular web framework for Node.js used to build web applications and APIs.

-   [MySQL](https://expressjs.com/es/) A relational database management system that uses Structured Query Language (SQL) to manage data.

-   [Dotenv](https://github.com/motdotla/dotenv) A zero-dependency module that loads environment variables from a .env file into process.env.

-   [Http Status Codes](https://github.com/prettymuchbryce/http-status-codes) A collection of response status codes that can be used in HTTP responses.

-   [ESlint](https://eslint.org/) A popular tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

-   [Prettier](https://prettier.io/) An opinionated code formatter that can be used to automatically format code and enforce consistent style.

-   [Nodemon](https://nodemon.io/) A utility that monitors changes to your Node.js application and automatically restarts the server.

-   [JOI](https://joi.dev/api/?v=17.8.1) A library used for validating and sanitizing data in JavaScript. JOI provides a simple and expressive language for defining validation rules.

## Installation

1. Clone the repository from GitHub:

    ```
    git clone https://github.com/plustra/Bookeron.git
    ```

2. Install the dependencies:

    ```
    cd Bookeron
    npm install
    ```

3. Create the necessary database and tables by executing the SQL script located in `database/bookeron.sql`.

4. Configure the environment variables in the `.env` file. Example:

    ```
    PORT = 8080
    DB_PORT = 3306
    DB_HOST = localhost
    DB_USER = root
    DB_PASSWORD = 123456
    DB_DATABASE = bookeron
    ```

    _You can also see them in the `.env.example` file_

## Usage

For run the server:

```
npm run dev
```

_The application through the web browser at `http://localhost:8080`._

You can format the code whit `Prettier` using:

```
npm run format
```

You can lint the code with `ESlint` using:

```
npm run lint
```

## Routes

### Users

-   `GET /users`: Get all registered users.
-   `GET /users/:id`: Get information about the user with the specified ID.
-   `POST /users`: Create a new user.
-   `PUT /users/:id`: Update the information of the user with the specified ID.
-   `DELETE /users/:id`: Delete the user with the specified ID.

### Authors

-   `GET /authors`: Get all registered authors.
-   `GET /authors/:id`: Get information about the author with the specified ID.
-   `POST /authors`: Create a new author.
-   `PUT /authors/:id`: Update the information of the author with the specified ID.
-   `DELETE /authors/:id`: Delete the author with the specified ID.

### Books

-   `GET /books`: Get all registered books.
-   `GET /books/:id`: Get information about the book with the specified ID.
-   `POST /books`: Create a new book.
-   `PUT /books/:id`: Update the information of the book with the specified ID.
-   `DELETE /books/:id`: Delete the book with the specified ID.

### Loans

-   `GET /loans`: Get all registered loans.
-   `GET /loans/:id`: Get information about the loan with the specified ID.
-   `POST /loans`: Create a new loan.
-   `PUT /loans/:id`: Update the information of the loan with the specified ID.
-   `DELETE /loans/:id`: Delete the loan with the specified ID.

_Consult the source code for more details on the implementation of the routes._

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
