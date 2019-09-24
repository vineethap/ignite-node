const baseSetting = {
    environment: 'dev',
    environments: {
        dev: {
            port: 5555,
            baseUrl: '/Node_Api/',
            databaseConnection: {
                server: "FTS-LAP003\\SQL2017",
                database: "Ignite",              
                user: "sa",
                password: "$ql2017",
                port: 1433
            }
        },
        
        production: {
            port: process.env.PORT,
            baseUrl: '/Node_Api/',
            databaseConnection: {
                server: "FTS-LAP003\\SQL2017",
                database: "TEST",
                user: "sa",
                password: "$ql2017",
                port: 1433
            }
        }
    }
};


module.exports = baseSetting;