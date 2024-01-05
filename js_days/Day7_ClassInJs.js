// class vechile{

//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
// getdetail()
// {
//     return (`The name of the bike is ${this.name} and this is made by ${this.maker} and it has ${this.engine} powered engine.`)
// }
// }
// let bike1 = new vechile('Hayabusa','suzuki', '1030cc');
// let bike2 = new vechile('Ninja','kawasaki', '1030cc');
// let bike3 = bike2;
// console.log(bike1.name);
// console.log(bike2.name);
// console.log(bike1.getdetail());
// console.log(bike2.getdetail());
// console.log(bike3.getdetail());



// function Vechile(name,maker,engine)
// {
//     this.name= name,
//     this.maker = maker,
//     this.engine= engine

// };

//  Vechile.prototype.getDetails = function(){
//     return 'The name of the bike is ' + this.name;
// }
 
// let bike1 =new Vechile('Hayabusa','suzuki', '1030cc');
// let bike2 =new Vechile('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike2.getDetails());


// Encapulation example is this code => wrapping code in single line is the encapulation 
// class person {
// constructor(name,Id){
//     this.name = name;
//     this.Id = Id;
// }
// add_Address(add){
//     this.add=add;
// }

// getDetail()
// {
//     console.log(`Name is ${this.name}, Address is : ${this.add} Id is ${this.Id}`);

// }
// }

// let person1 = new person('aabhushan',1);
// person1.add_Address('kathmandu.');
// person1.getDetail();

// class person{
//      constructor(name)
//      {
//         this.name = name;
//      }
//      toString(){
//         return (`The name of the person is ${this.name}`);
//      }
// }

// class student_Extended extends person{
//     constructor(name, Id){
//         super(name);
//         this.Id=Id
//     }
//     toString(){
//         return (`${super.toString()} ,Student Id ${this.Id}`)
//     }
// }

// let student1 = new student_Extended('Aabhushan', 101);

// console.log(student1.toString());



