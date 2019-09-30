let promise =new promise(function(resolve,reject))
{
 var age=10;
 age+=20;
 if (age>30)
 {
   reject("rejected");
 }
 else
  {
    resolve(age);
  }
});
promise.then(function(a)
{  console.log('hello world,age='+age);
} , function(err)
{ console.log("I m a TRAINEE"+err);
});
