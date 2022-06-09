// 1) For the given JSON iterate over all for loops (for, for in, for of, forEach)


var object = [
    { "person": "Mohan", "age": 2, "company": "Guvi" },
    { "person": "Rohan", "age": 3, "company": "Guvi Geeks" },
    { "person": "Raju", "age": 4, "company": "Guvi Geek Network" },
  ];
//normal for loop
// for(let i=0;i<object.length;i++){
// console.log(`Person:${object[i].person}
// age: ${object[i].age}
// company:${object[i].company}
// `)
// }

//for in loop
// for(let i in object){
// console.log(`Person:${object[i].person}
// age: ${object[i].age}
// company:${object[i].company}
// `)
// }

//forEach loop
// object.forEach((item) =>{
//     console.log(`Person:${item.person}
// age: ${item.age}
// company:${item.company}
// `)
// });

//for of loop
for(let i of object) {
console.log(`Person:${i.person}
age: ${i.age}
company:${i.company}
`)
}