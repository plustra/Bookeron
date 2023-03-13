import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import dbconnection from './database/connection.js';

dotenv.config();

const app = express();
app.use(express.json());

// Close DB connection
app.on('close', () => {
    dbconnection.end();
});

// Load routers
fs.readdirSync('./routers').forEach(async (file) => {
    const { default: router, path } = await import(`./routers/${file}`);
    app.use(path, router);
});

// Inicia el servidor
const port = process.env.PORT || 8080;
app.listen(port);
