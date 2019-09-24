const stockMd = require('../models/stockMd');
const con = require('../utils/connection');
const sqlObj = require('mssql');
const resultUtil = require('../utils/errorHandling');

exports.GetClientBOQ = async (req, res, next) => {

    try {


        let StockData = await stockMd.GetClientBOQ(req.query.StockCd);

        res.send({

            'StockData': (StockData.length == 0) ? [] : StockData
        });
    }
    catch (e) {
        res.send({
            status: false,
            data: [],
            reason: e.toString(),
        });
    }
}

exports.InsertClientBOQ = async (req, res, next) => {

    try {

        let payLoad1 = req.body;
        let payLoad = payLoad1['data'];
        let ItemCd = payLoad['ItemCd'];
        let StockData = await stockMd.InsertClientBOQ(payLoad);

        res.send(resultUtil.resultMsg(ItemCd, 'inserted', false, ItemCd));

    }
    catch (e) {
        res.send({
            status: false,
            data: [],
            reason: e.toString(),
        });
    }
}
exports.InsertItemDefine = async (req, res, next) => {
    let conObj = await con.connect();
    let transactionObj = new sqlObj.Transaction(conObj);
    transactionObj.begin(async (te) => {
        try {

            let payLoad1 = req.body;
            let payLoad = payLoad1['data'];

            let header = payLoad['ItemDefineHdr'];
            let ItemId = header['ItemId'];

            let ItemDefineId = await stockMd.InsertItemDefineHdr(transactionObj, header);
            
            let MaterialItems = payLoad['MaterialItems'];
            for (const itemKey in MaterialItems) {


                let InsertMaterialItems = await stockMd.InsertMaterialItems(transactionObj, MaterialItems[itemKey],ItemDefineId[0]["ItemDefineId"]);
            }


            transactionObj.commit(er => {
                res.send(resultUtil.resultMsg(ItemId, 'inserted', false, ItemId));
            })

        } catch (error) {
            transactionObj.rollback(er => {
                res.send(resultUtil.resultMsg(0, false, error.toString()));
            })

        }
    });
}