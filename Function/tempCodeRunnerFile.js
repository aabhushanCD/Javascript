// 1--------------------------------
function Number(x){
if(x%2 === 0){
   return console.log('Your number is even');
}
return console.log('Your number is odd');
}
Number(9);
Number(2);
Number(1);


// 2--------------------------------

function larger(x,y){

    // if(x>y){
    //     return x;
    // }
    // else return y;

    return x>y ? x :y
}
let c = larger(5,5);
console.log(c);

// 3-------------------------------------

function conversion(x){
    let y = (9/5)* x + 32;
    console.log(`${x} degree celsius is converte into ${y} degree fahrenheit`);
}