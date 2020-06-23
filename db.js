


const sql = require('mysql');

const connect = () => {
    const pool = sql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT

    });
    global.db = pool;
};
module.exports = {
    connect: connect
}