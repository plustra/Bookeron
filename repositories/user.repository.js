import dbconnection from '../database/connection.js';

/**
 * Create a new user
 * @param {string} guid
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {Date} birthdate
 * @param {string} address
 * @returns {Promise<number>} New user's ID
 */
function create(guid, name, email, phone, birthdate, address) {
    const values = [guid, name, email, phone, birthdate, address];
    const query = 'INSERT INTO user (guid, name, email, phone, birthdate, address) VALUES (?, ?, ?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, rows) => {
            if (error) {
                reject(error);
            }

            resolve(rows.insertId);
        });
    });
}

/**
 * Find users by params
 * @param {{} | undefined} params
 * @returns {Promise<user[]>} Finded users
 */
function find(params) {
    const keys = Object.keys(params);
    const values = params ? Object.values(params) : undefined;
    const query = `SELECT * FROM user ${params ? `WHERE ${keys.map((key) => `${key} = ?`).join(' AND ')}` : ''}`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, rows) => {
            if (error) {
                reject(error);
            }

            resolve(rows.insertId);
        });
    });
}

/**
 * Update user by GUID
 * @param {string} guid
 * @param {string} name
 * @param {string} email
 * @param {string} phone
 * @param {Date} birthdate
 * @param {string} address
 * @returns {Promise<void>}
 */
function update(guid, name, email, phone, birthdate, address) {
    const values = [name, email, phone, birthdate, address, guid];
    const query = 'UPDATE user SET name = ?, email = ?, phone = ?, birthdate = ?, address = ? WHERE guid = ?';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error) => {
            if (error) {
                reject(error);
            }
        });
    });
}

/**
 * Remove user by GUID
 * @param {string} guid
 * @returns {Promise<void>}
 */
function remove(guid) {
    const values = [guid];
    const query = 'DELETE FROM user WHERE guid = ?';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error) => {
            if (error) {
                reject(error);
            }
        });
    });
}

export default {
    create,
    find,
    update,
    remove,
};
