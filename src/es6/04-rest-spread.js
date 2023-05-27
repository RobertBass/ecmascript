// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a,b);

// Object destructuring
let user = {username: 'Roberto', age: 37};
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);

// Spread Operator
let person = {name: 'Roberto', age: 37};
let country = 'EC';

let data = { ...person, country};
console.log(data);

let data2 = {id: 2352, ...person, country};
console.log(data2);

// Rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3)