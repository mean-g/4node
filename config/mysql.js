const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
    host: process.env.HOST,
    port: 3306,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

const connection = mysql.createPool(dbConfig);

console.log(connection)

module.exports = connection