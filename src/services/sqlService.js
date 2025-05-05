const sql = require('mssql');

const config = {
    user: 'omarm',
    password: 'Genpack4007!',
    server: 'your_timexpress_server_address',
    database: 'your_database_name',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

async function getFingerprintData(userName) {
    try {
        await sql.connect(config);
        const result = await sql.query`
            SELECT fingerprint_hash FROM Users WHERE full_name = ${userName}`;
        return result.recordset.length ? result.recordset[0].fingerprint_hash : null;
    } catch (err) {
        console.error('SQL Error:', err);
        return null;
    }
}

module.exports = { getFingerprintData };
