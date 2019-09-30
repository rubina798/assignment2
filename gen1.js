function* rubina()
{
var rub=12;
rub++;
yield rub;
rub-=6;
rub++;
yield rub;
console.log(rub);
}
var a=rubina();
a.next();
a.next();
a.next();


