const async=require('async');
async.parallel(
    [
        function(callback)
        {
            setTimeout(function(){
                console.log("hello girl");
                callback(null ,1);
            },200);
        },
        function(callback)
        {
            sertimeout(function()
            {
                console.log("hey girl");
                callback(null,2);
            },100);
        }
    ],
)