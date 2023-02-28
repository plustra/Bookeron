import database from '../database/database_connection.js';

/**
 * Get all users
 * @returns {Promise<user[]>} All users
 */
function getAll() {
    const query = 'SELECT * FROM user';

    return new Promise((resolve, reject) => {
        database.query(query, (error, rows) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(rows);
        });
    });
}

/**
 * Get one user by id
 * @param {number} id - User id
 * @returns {Promise<user>} User
 */
function getOne(id) {
    const query = 'SELECT * FROM user WHERE id = ?';
    const values = [id];

    return new Promise((resolve, reject) => {
        database.query(query, values, (error, rows) => {
            if (error) {
                reject(error);
                return;
            }

            if (rows.length === 0) {
                resolve(null);
                return;
            }

            resolve(rows[0]);
        });
    });
}

/**
 * Create a new user
 * @param {string} name - User name
 * @param {string} email - User email
 * @param {string} phone - User phone number
 * @param {Date} birthdate - User birthdate
 * @param {string} address - User address
 * @returns {Promise<number>} Id of the created user
 */
function createOne(name, email, phone, birthdate, address) {
    const query = 'INSERT INTO user (name, email, phone, birthdate, address) VALUES (?, ?, ?, ?, ?)';
    const values = [name, email, phone, birthdate, address];

    return new Promise((resolve, reject) => {
        database.query(query, values, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result.insertId);
        });
    });
}

/**
 * Update an existing user
 * @param {number} id - User id
 * @param {string} name - User name
 * @param {string} email - User email
 * @param {string} phone - User phone number
 * @param {Date} birthdate - User birthdate
 * @param {string} address - User address
 * @returns {Promise<void>}
 */
function updateOne(id, name, email, phone, birthdate, address) {
    const query = 'UPDATE user SET name = ?, email = ?, phone = ?, birthdate = ?, address = ? WHERE id = ?';
    const values = [name, email, phone, birthdate, address, id];

    return new Promise((resolve, reject) => {
        database.query(query, values, (error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });
}

/**
 * Delete an existing user
 * @param {number} id - User id
 * @returns {Promise<void>}
 */
function deleteOne(id) {
    const query = 'DELETE FROM user WHERE id = ?';
    const values = [id];

    return new Promise((resolve, reject) => {
        database.query(query, values, (error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });
}

export default {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
};
