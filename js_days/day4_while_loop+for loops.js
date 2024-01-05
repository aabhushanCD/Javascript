// let x = 0;
// while(x<10)
// {
//     console.log(x);
//     x++;
// }



// let x = 0;
// do{
// //    console.log("Hello aabhushan");
//    console.log(x);
//    x++;
// }
// while(x<10)


const courses = {
    First_Semester : "C_program Stastistic IIT",
    Second_Semester : "Statistic_II  C++ math_II"
    };

    const student1 = Object.create(courses);

    student1.id = 101;
    student1.Name = "Aabhushan Dhakal";
    student1.showEnrolledCources = function ()
    {
    console.log(courses);
    }

for(let prop in student1){
    if(student1.hasOwnProperty(prop))
    {
        console.log(prop + '->' + student1[prop]);
    }
}



// const array=[10,20,30,40,50];
// let x = array.legngth;
// let temp;
// for( temp of array){

//     console.log(temp);
// }
    



