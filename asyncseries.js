const async=require('async');
async.series([
    function(callback)
    {
        console.log("hello world");
        callback(null,1);
    },
    function(callback)
    {
        console.log("this is my series program");
        callback(null , 2)
    },   
],
function(err, results){
    console.log(results);
}
);