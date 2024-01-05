
let computerChoice;
function ComputerChoice(){

let randomNumber = Math.random() * 3;
 
if(randomNumber > 0  &&  randomNumber <=1 ){
     computerChoice = 'Bat';
       // console.log('Computer choice is Bat');
   }
   else if(randomNumber > 1 && randomNumber <=2){
       computerChoice ='Ball';
       // console.log('Computer choice is Ball');
   }
   else{
        computerChoice = 'Stump';
       // console.log('Computer choice is Stump');
   }
}
