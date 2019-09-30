const async = require('async');
async.waterfall([
    function (callback) {
        callback(null, '1', '2');
    },
    function (arg1, arg2, callback) {
        let s = arg1 + 'and' + arg2;
        callback(null, null, s);
    },
    function (arg1, s, callback) {
        let value = arg1 + 'and' + s;
        callback(null, value);
    }
], function (err, results) {
    console.log(results);
} );

