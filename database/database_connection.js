import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const database = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

database.connect();

export default database;
