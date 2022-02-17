//1
let weight;

//2
console.log(typeof weight);

//3
let name = "Henrique";
let age = 31;
let stars = 4.5;
let isSubscribed = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof stars);
console.log(typeof isSubscribed);

//4
let student = {
     name: "Henrique",
     age: 31,
     stars: 4.5,
     weight: 98.5,
     isSubscribed: true,
};

console.log( student);

//4.2
console.log(`${student.name} tem a idade de ${student.age} anos e pesa ${student.weight} Kg`)

let students = [];

//6
 students = [
    student
];

console.log(students);

//7

console.log(students[0]);

//8

const student2 = {
    name: "Kaen",
     age: 26,
     stars: 4.9,
     weight: 73.5,
     isSubscribed: true,
}

students[1] = student2;

console.log(students);

//9

console.log(a);
var a = 1;