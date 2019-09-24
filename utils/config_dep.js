
const baseSetting = {
    environment: 'dev',
    connectionName: 'TEST', // not need 
    environments: {
        dev: {
            port: 5555,
            baseUrl: '/Node_Api/',
            databaseConnection: 
            {
                server: "FTS-CPU006\SQL2017",
                database: "TEST",
                user: "sa",
                password: "$ql2017",
                port: 1433
            }
        },
        test: 
        {
            port: process.env.PORT,
            baseUrl: '/Node_Api/',
            databaseConnection: 
            {
                server: "FTS-CPU006\SQL2017",
                database: "TEST",
                user: "sa",
                password: "$ql2017",
                port: 1433
            }
        },
        production: 
        {
            port: process.env.PORT,
            baseUrl: '/Node_Api/',
            databaseConnection: 
            {
                server: "FTS-CPU006\\SQL2017",
                database: "TEST",
                user: "sa",
                password: "$ql2017",
                port: 1433
            }
        }
       
    }
};


module.exports = baseSetting;