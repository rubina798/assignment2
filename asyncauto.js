const async = require('async');

async.auto({
    a: function (callback) {
        console.log('using a');
        callback(null, 'a')
    },
    b: function (callback) {
        console.log('using b');
        callback(null, 'b')
    },
    c: ['a', 'b', function (callback, results) {
        console.log('a' + ' ' + 'b');
        callback(null, 'c');
    }],
},
    function (err, results) {
        console.log('err=', err);
        console.log('results=', results);
    }
);