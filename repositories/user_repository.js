import { querify } from '../database/database_connection.js';

/**
 * Find users by params
 * @param {{}} params
 * @returns {Promise<user[]>} Finded users
 */
async function find(params) {
    const keys = Object.keys(params);
    const values = params ? Object.values(params) : undefined;
    const query = `SELECT * FROM user${params ? ` WHERE ${keys.map((key) => `${key} = ?`).join(' AND ')}` : ''}`;

    const rows = await querify(query, values);
    return rows;
}

/**
 * Create a new user
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {Date} birthdate
 * @param {string} address
 * @returns {Promise<number>} New user's ID
 */
async function create(name, email, phone, birthdate, address) {
    const values = [name, email, phone, birthdate, address];
    const query = 'INSERT INTO user (name, email, phone, birthdate, address) VALUES (?, ?, ?, ?, ?)';

    const rows = await querify(query, values);
    return rows.insertId;
}

/**
 * Update user by ID
 * @param {number} id
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {Date} birthdate
 * @param {string} address
 * @returns {Promise<void>}
 */
async function update(id, name, email, phone, birthdate, address) {
    const values = [name, email, phone, birthdate, address, id];
    const query = 'UPDATE user SET name = ?, email = ?, phone = ?, birthdate = ?, address = ? WHERE id = ?';

    await querify(query, values);
}

/**
 * Remove user by ID
 * @param {number} id
 * @returns {Promise<void>}
 */
async function remove(id) {
    const values = [id];
    const query = 'DELETE FROM user WHERE id = ?';

    await querify(query, values);
}

export default { find, create, update, remove };
