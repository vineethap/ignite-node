const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const sql = require('mssql');
const moment = require('moment');
const squelObj = require('squel');
const baseSetting = require('./config');
const connection = require('./utils/connection');

/** Routers list */

const stockRouter = require('./routers/stockRt');
// http:localhite/almin_ul/control/method
const baseUrl = baseSetting.environments[baseSetting.environment].baseUrl;


/** Body parser */
app.use(bodyParser.json({ limit: '50mb', extended: true }));         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '50mb', extended: true
}));

/** Base controller */
app.use(baseUrl + '*', (req, res, next) => {
    if (baseSetting.environment == 'dev' || baseSetting.environment == 'productionLocalTest'
        || baseSetting.environment == 'productionTest2' || baseSetting.environment == 'devTest'
       
    ) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR");
        if (req.headers.origin) {
            res.header('Access-Control-Allow-Origin', req.headers.origin);
        }
        if (req.method === 'OPTIONS') {
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
            return res.status(200).json({});
        }
    }
    next();
});

app.use(baseUrl + 'stock', stockRouter);


/** 404 url */
app.use('/', (req, res, next) => {
    res.send({ Result: false, Message: '404 Error' });
});

app.listen(baseSetting.environments[baseSetting.environment].port);
