// const person={
//   name:'adel',
//   age:27,
//   location:{
//     city:'Monastir',
//     temp:19
//   }
// }; 
// const {name:firstName='Anonymous',age,location}=person;
// const {city,temp:temperature}=location;
// console.log(`${firstName} is ${age}.`);

// if(city&&temperature){
// console.log(`it  is ${temperature} in ${city}.`);
// };


// const book={
//   title:'Ego is the Enemy',
//   author:'Ryan Holiday',
//   publisher:{
//     name:'Penguin',

//   }
// };

// const {name:publisherName='self published'}=book.publisher;

// console.log(publisherName);



//array distruction

const address=['mars 20','bennane','monastir','5025'];
const [,city,state]=address;
console.log(`you are in ${city} ${state}`)

const item=['Coffe (hot)','$2.00','$2.5','$2.75']; 

const [coffe,,mediumPrice]=item;
console.log(`A medium ${coffe} costs ${mediumPrice}.`);