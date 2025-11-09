const { Pool } = require('pg');

const dbConnection = new Pool({
    host: 'switchyard.proxy.rlwy.net',
    database: 'railway',
    port: 29321,
    user: 'postgres',
    password: 'XZanYPglKbJRVyxHHwotexPXCdpNmQBH',
    ssl: { rejectUnauthorized: false }
});

dbConnection.connect()
    .then(client => {
        console.log('Conexión exitosa a la base de datos');
        client.release();
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err.message);
    });

module.exports = dbConnection;