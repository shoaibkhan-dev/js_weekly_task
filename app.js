// ARRAY DESTRUCTURING TASK

// 1.⁠ ⁠Basic Array Destructuring
// Extract the first two fruits from the array.
const fruits = ["apple", "banana", "mango"];
const [fruit1, fruit2] = fruits;
console.log(fruit1);
console.log(fruit2);


// 2.⁠ ⁠Swap Variables
// Use array destructuring to swap a and b.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);


// 3.⁠ ⁠Destructuring with Default Values
// Destructure three values from colors, provide default if a value is missing.
const colors = ["red"];
const [color1 = "blue", color2 = "green", color3 = "black"] = colors;
console.log(color1);
console.log(color2);
console.log(color3);


// 4.⁠ ⁠Skip Items in Array
// Extract the first and third numbers only.
const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log(first);
console.log(third);


// 5.⁠ ⁠Rest Operator in Destructuring
// Get the first number as first, and the rest as others.
const nums = [1, 2, 3, 4, 5];
const [firsts, ...others] = nums
console.log('firsts: ', firsts);
console.log('others: ', others);


// OBJECT DESTRUCTURING TASKS

//  6.⁠ ⁠Basic Object Destructuring
// Extract name and age from the object.
const person = { name: "Ali", age: 25, city: "Lahore" };
const {name, age} = person;
console.log('name: ', name);
console.log('age: ', age);



// 7.⁠ ⁠Rename Variables While Destructuring
// Destructure name as personName.
const user = { name: "Sara", email: "sara@gmail.com" };
const {name: personName} = user;
console.log('personName: ', personName);


//  8.⁠ ⁠Default Values in Object Destructuring
// Destructure title and rating with default value 5.
const book = { title: "JavaScript Basics" };
const {title, rating = 5} = book;
console.log('title: ', title);
console.log('rating: ', rating);


// 9.⁠ ⁠Nested Object Destructuring
// Destructure the city from inside address.
const users = {
  id: 1,
  address: {
    city: "Islamabad",
    zip: "44000"
  }
};
const {
  address : {city}
} = users
console.log(city);


// 10.⁠ ⁠Partial Object Destructuring
// Destructure only brand and model from the object.
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  price: 250000,
  color: "Silver"
};

const {brand, model} = laptop;
console.log('brand: ', brand);
console.log('model: ', model);



// Function Parameter Destructuring

// 11.⁠ ⁠Destructure in Function Parameters (Object)
// Create a function that accepts an object and destructures name and role.

function greet({name, role}) {
  console.log(`hello Mr ${name}, your role is ${role}`);
}

greet({ name: "Osama", role: "Teacher" });



// 12.⁠ ⁠Destructure in Function Parameters (Array)
// Create a function that takes an array [x, y] and returns their sum.
function add([x, y]) {
  return [x + y];
}

console.log(add([5, 7]));


// 13.⁠ ⁠Return Multiple Values from Function
// Return an array of two values and destructure them on the receiving end.

function getUserInfo() {
    const name1 = "Shoaib";
    const email = "shoaib@example.com";
    return [name1, email];
  }
  
  // Destructuring the returned array
  const [name1, email] = getUserInfo();
  
  console.log(name1);  // Output: Shoaib
  console.log(email);



// 14.⁠ ⁠Destructure from Array of Objects
// Destructure the title of the first two posts.

const posts = [
  { id: 1, title: "Hello" },
  { id: 2, title: "World" }
];
const [{title: title1}, {title: title2}] = posts;
console.log(title1);
console.log(title2);



// 15.⁠ ⁠Destructure Object with Array Property
// Destructure skills from the object and get the first skill.

const developer = {
  name: "Ali",
  skills: ["JavaScript", "React", "Node"]
};
  const {skills: [firstskill]} = developer;
  console.log('firstskill: ', firstskill);










