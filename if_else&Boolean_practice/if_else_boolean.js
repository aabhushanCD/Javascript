
let age=8,gender='male',finalDiscount,price=500,Totalprice;

if(age<=5)
{
   finalDiscount=100;
}
else if(gender==='female' || age<=8)
{
    finalDiscount = 50;
}

else if(age>=65){
    finalDiscount = 30;
}
else{
    
   finalDiscount = 0;
}

Totalprice = price - ((finalDiscount/100)*price ); 
console.log(`Your final discounted price is ${finalDiscount}%.\n \tYour bill amount is:`+ Totalprice);