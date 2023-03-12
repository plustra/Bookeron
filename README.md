# Bookeron

Bookeron is a Node.js and Express server designed to manage book loans in a library.

## Prerequisites

To run this server, you must have Node.js and MySQL installed on your local computer or server where the application will be hosted.

## Dependencies

-   [Express](https://expressjs.com/es/) A popular web framework for Node.js used to build web applications and APIs.

-   [MySQL](https://expressjs.com/es/) A relational database management system that uses Structured Query Language (SQL) to manage data.

-   [Dotenv](https://github.com/motdotla/dotenv) A zero-dependency module that loads environment variables from a .env file into process.env.

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

3. Create the necessary database and tables by executing the SQL script located in `database/schema.sql`.

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
-   `GET /users/:guid`: Get information about the user with the specified GUID.
-   `POST /users`: Create a new user.
-   `PUT /users/:guid`: Update the information of the user with the specified GUID.
-   `DELETE /users/:guid`: Delete the user with the specified GUID.

### Authors

-   `GET /authors`: Get all registered authors.
-   `GET /authors/:guid`: Get information about the author with the specified GUID.
-   `POST /authors`: Create a new author.
-   `PUT /authors/:guid`: Update the information of the author with the specified GUID.
-   `DELETE /authors/:guid`: Delete the author with the specified GUID.

### Books

-   `GET /books`: Get all registered books.
-   `GET /books/:guid`: Get information about the book with the specified GUID.
-   `POST /books`: Create a new book.
-   `PUT /books/:guid`: Update the information of the book with the specified GUID.
-   `DELETE /books/:guid`: Delete the book with the specified GUID.

### Loans

-   `GET /loans`: Get all registered loans.
-   `GET /loans/:guid`: Get information about the loan with the specified GUID.
-   `POST /loans`: Create a new loan.
-   `PUT /loans/:guid`: Update the information of the loan with the specified GUID.
-   `DELETE /loans/:guid`: Delete the loan with the specified GUID.

_Consult the source code for more details on the implementation of the routes._

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
