const sql = require('mssql');
const config = require('../config');

exports.connect = () => {
    var connectionData = config.environments[config.environment].databaseConnection;
    var connect = new sql.ConnectionPool(connectionData);
    return connect.connect();
};