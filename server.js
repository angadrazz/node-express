// const express = require("express")
// const app = express()

// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.set("view engine", "ejs")

// const userRouter = require("./routes/users")

// app.use("/users", userRouter)

// app.listen(3000)
// console.log("hello")

let x = 15;
let y = 54;
console.log(x <= y)

let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'SuzuKi';   // Using single quotes
console.log(carName1,carName2)

// JAVASCRIPT ARRAYS

const name_number = ["Angad", "Chunnoo", "Nitish"];
const name_number1 = ["Angad", "Chunnoo", "Nitish"];
const name_number2 = ["Angad", "Chunnoo", "Nitish"];

console.log(name_number,name_number1,name_number2);
// object
const student = {
    firstName: 'ram',
    class: 10,
    Enrollment: "000291102020BB",
    section: 'B'

};

console.log(student)

const cars = {
    first_name: 'angad',
    class: 12,
    section: '0415b00548767845478',
    EnrollmentID: "0029110d2020"
};
console.log(cars)

const object_name = {
    key1: 25,
    key2: 50
 }
 console.log(object_name)

//  javascript object creation
 
// object creation
const person = {
    name: 'John',
    age: 20
};
console.log(typeof person); // object

const personUS = {
    name: 'John',
    age: 20,
};

// accessing property
console.log(personUS.age, personUS.name); // John
console.log(personUS["name","age","name"])

// nested object
const user = {
    name: 'John',
    age: 2520,
    marks: {
        science: 70,
        math: 75
    }
}
let id = {
    firstname: 'Angad kumar',
    Lastname: 'Mandal',
    age: 19,
    id_number: {
        Mob: 45527,
        Mob1: 54,
        Mob3: 2567
    }
}
console.log(id)

// accessing property of student object
console.log(user.age); // {science: 70, math: 75}
console.log(user);
console.log(user.marks)
// accessing property of marks object
console.log(user.marks.science); // 70

console.log(id.id_number)

// JavaScript Object Methods

const userf = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello','agad') }
}

userf.greet(); // hello

function sumOfRange(start, end, sum = 0) {
    if (start > end) {
      return sum;
    }
  
    let current = start; // for readability
    sum += current;
    return sumOfRange(current + 1, end, sum);
  }
  
  sumOfRange(10, 20);

  for(let i=1;i<5;i++) {
    console.log(i);
    }
