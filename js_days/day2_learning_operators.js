


const b=34;
console.log(a=b+1);
let yoo=7;
console.log(foo = yoo - 1);
console.log(yoo%5);
console.log(yoo**yoo);
console.log(yoo<<=1)
console.log(yoo);
console.log(yoo^=2);
yoo = 6;


function fibo(arg){
    if(arg<=0)
    {
        return 0;
    }
    else if(arg == 1){
          return 1;
    }
    else{
        return fibo(arg - 1) + fibo(arg - 2);
    }
}
const temp = fibo(5);
console.log(temp);




console.log(typeof "value");
console.log(typeof 3.14);
console.log(typeof 'h');

console.log(typeof Math.sin);
console.log(typeof class c{})
console.log(typeof function a(){})




function* generatorFunction ()
{
    yield 5;
    yield 2;
    yield 3;

}
const generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);



let emp = {
FirstName: 'Aabhushan',
LastName: "Dhakal",
salary: 1001000
}
//  console.log(delete emp.firstName);
console.table(emp)

function fun1()
{
    console.log("one");
    return 'one';
}
function fun2()
{
    console.log("two");
    return 'two';
}
function fun3()
{
    console.log("three");
    return 'three';
}
let x=(fun1(),fun2(),fun3());
console.log(x);



function happy()
{
    const array = ['Aabhushan', 'dhakal', 'suman', 'amit'];

    console.log(0 in array);
    console.log(1 in array);
    console.log(2 in array);
    console.log('length' in array);
}
happy();

function abd()
{
    let value = 5 * (5+5);
    console.log(value);
     
    value = 5 * 5 + 5;
    console.log(value);
}
abd();