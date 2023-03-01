import dotenv from 'dotenv';
import express from 'express';
import { readdirSync } from 'fs';
import database from './database/database_connection.js';

dotenv.config();

const app = express();
app.use(express.json());

// Close DB connection
app.on('close', () => {
    database.end();
});

// Load routers
readdirSync('./routers').forEach(async (file) => {
    const { default: router, path } = await import(`./routers/${file}`);
    app.use(path, router);
});

// Inicia el servidor
const port = process.env.PORT || 8080;
app.listen(port);
