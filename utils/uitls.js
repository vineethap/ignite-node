const moment = require('moment');

exports.getDate = () => {
    return moment().format('YYYY/MM/DD HH:mm:ss');
};