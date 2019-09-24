

exports.resultMsg = (doctNo, success_msg = false, error_msg = false, recordSet = [], DataSet = []) => {
    return {
        ItemCd: (success_msg != false) ? doctNo : 0,
        Result: {
            result_code: 0,
            success_msg: success_msg,
            error_msg: error_msg,
            recordSet: recordSet
        },
        ...DataSet
    };
}

