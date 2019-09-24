const express = require('express');
const stockRt = express.Router();
const stockCtObj = require('../controller/stockCt');

stockRt.get('/GetClientBOQ', stockCtObj.GetClientBOQ);
stockRt.post('/InsertClientBOQ', stockCtObj.InsertClientBOQ);
stockRt.post('/InsertItemDefine', stockCtObj.InsertItemDefine);

module.exports = stockRt;