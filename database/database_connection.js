import dotenv from 'dotenv';
import { createConnection } from 'mysql';
import { promisify } from 'util';

dotenv.config();

const database = createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

database.connect();

export const querify = promisify(database.query).bind(database);
export default database;
