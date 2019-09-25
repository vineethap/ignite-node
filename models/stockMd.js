
const connectionObj = require('../utils/connection');
const squel = require('squel');
const sqlObj = require('mssql');


exports.GetClientBOQ = async (StockCd) => {
    return new Promise(async (resolve, reject) => {


        try {

            let con = await connectionObj.connect();

            const request = new sqlObj.Request(con);
            request
                .input('Item', sqlObj.VarChar(100), StockCd)

                .execute('GetClientBOQ', (err, result) => {
                    if (!err) {
                        console.log('GetClientBOQ', result.recordset);
                        resolve(result.recordset);
                    } else {

                        reject(err);
                    }
                });
        }
        catch (error) {
            reject(error);
        }

    });
};

exports.InsertClientBOQ = async (payLoad) => {
    return new Promise(async (resolve, reject) => {


        try {

            let con = await connectionObj.connect();

            const request = new sqlObj.Request(con);
            request
                .input('ItemCd', sqlObj.VarChar(20), payLoad['ItemCd'])
                .input('ItemDs', sqlObj.VarChar(100), payLoad['ItemDs'])
                .input('Qty', sqlObj.Int, payLoad['Qty'])
                .input('Unit', sqlObj.VarChar(20), payLoad['Unit'])
                .input('Rate', sqlObj.Money, payLoad['Rate'])
                .input('Amount', sqlObj.Money, payLoad['Amount'])
                .execute('InsertClientBOQ', (err, result) => {
                    if (!err) {
                        console.log('InsertClientBOQ', result.recordset);
                        resolve(result.recordset);
                    } else {

                        reject(err);
                    }
                });
        }
        catch (error) {
            reject(error);
        }

    });
};

exports.InsertMaterialItems = async (transactionObj,payLoad,ItemDefineId) => {
    return new Promise(async (resolve, reject) => {


        try {

            const request = new sqlObj.Request(transactionObj);
            request
                .input('ItemDefineId', sqlObj.Int, ItemDefineId)
                .input('MaterialItemCd', sqlObj.VarChar(20), payLoad['MaterialItemCd'])
                .input('MaterialItemDs', sqlObj.VarChar(100), payLoad['MaterialItemDs'])
                .input('MaterialQty', sqlObj.Int, payLoad['MaterialQty'])
                .input('Unit', sqlObj.
                VarChar(20), payLoad['Unit'])
                .input('Rate', sqlObj.Money, payLoad['Rate'])
                .input('Amount', sqlObj.Money, payLoad['Amount'])


                .execute('InsertMaterialItems', (err, result) => {
                    if (!err) {
                       
                        resolve(result.recordset);
                    } else {

                        reject(err);
                    }
                });
        }
        catch (error) {
            reject(error);
        }

    });
};

exports.InsertItemDefineHdr = async (transactionObj,payLoad) => {
    return new Promise(async (resolve, reject) => {


        try {

           

            const request = new sqlObj.Request(transactionObj);
            request
                .input('ItemDefineId', sqlObj.Int, payLoad['ItemDefineId'])
                .input('ItemId', sqlObj.Int, payLoad['ItemId'])
                .input('ItemCd', sqlObj.VarChar(20), payLoad['ItemCode'])
                .input('ItemDs', sqlObj.VarChar(100), payLoad['ItemDs'])
                .input('Qty', sqlObj.Int, payLoad['Qty'])
                .input('TotalMaterialCost', sqlObj.Money, payLoad['TotalMaterialCost'])
                .input('WaistPer', sqlObj.Money, payLoad['WaistPer'])
                .input('WaistAmount', sqlObj.Money, payLoad['WaistAmount'])
                .input('LabourCostPer', sqlObj.Money, payLoad['LabourCostPer'])
                .input('LabourCostAmount', sqlObj.Money, payLoad['LabourCostAmount'])
                .input('LabourCostDetailed', sqlObj.Money, payLoad['LabourCostDetailed'])
                .input('Eqp', sqlObj.Money, payLoad['Eqp'])
                .input('EqpHr', sqlObj.Money, payLoad['EqpHr'])
                .input('EqpAmount', sqlObj.Money, payLoad['EqpAmount'])
                .input('Other', sqlObj.Money, payLoad['Other'])
                .input('TotalCost', sqlObj.Money, payLoad['TotalCost'])
                .input('Margin', sqlObj.Money, payLoad['Margin'])
                .input('TotalAmount', sqlObj.Money, payLoad['TotalAmount'])
                .input('InsertUpdateMode', sqlObj.Int, payLoad['InsertUpdateMode'])

                .execute('InsertItemDefineHdr', (err, result) => {
                    if (!err) {
                        console.log('InsertItemDefineHdr', result.recordset);
                        resolve(result.recordset);
                    } else {

                        reject(err);
                    }
                });
        }
        catch (error) {
            reject(error);
        }

    });
};
