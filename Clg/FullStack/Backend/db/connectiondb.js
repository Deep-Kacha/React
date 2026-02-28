const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sampleDB',
    password: 'Deep@225',
    port: 5432,
});

module.exports = pool;