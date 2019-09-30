function add(a , callback)
{
    var rubi ="value of a ," +a;
    callback(rubi);
}    

function addtion(a)
{
    console.log(a);
}

add("hello world", addtion);
