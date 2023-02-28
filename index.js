import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import database from './database/database_connection';

dotenv.config();

const app = express();
app.use(express.json());

// Close DB connection
app.on('close', () => {
    database.end();
});

// Load routers
fs.readdirSync('./routers').forEach((file) => {
    const { default: router, path } = import(`./routers/${file}`);
    app.use(path, router);
});

// Inicia el servidor
const port = process.env.PORT || 8080;
app.listen(port);
