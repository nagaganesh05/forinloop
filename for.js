// 1 Words with Duplicate Letters: From ['apple', 'banana', 'cherry'], find words that contain duplicate letters for pattern analysis.



// const person = { name: "Alice", age: 25, country: "USA" };
// for(key in person){
//     console.log(`${key}:${person[key]}`)
// }



const person = { name: "Alice", age: 25, country: "USA" };
for(key in person){
    console.log(key+ ":" +person[key])
}


// 2 **For-of loop**: Given an array `numbers = [10, 20, 30, 40, 50]`, use a `for-of` loop to calculate the sum.



let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for(num of numbers){
    sum+=num;
}
console.log(sum)



// 3 **Object.freeze()**: Create an object and freeze it. Try modifying a property and explain what happens.


const persons = { name: "ganesh", age: 25 };
Object.freeze(persons)
console.log(persons)
persons.age=30;
console.log(persons)


// 4 **Object.seal()**: Use `Object.seal()` to prevent adding new properties. Then, try adding a property and explain.


const obj = { name: "ganesh", age: 25 };
Object.seal(obj)
console.log(obj)
obj.age=30;
obj.passedOut = 2024;
console.log(obj)



// 5 Write a function that returns all the keys of an object using `Object.keys()`.


let key = {name: "sai",age:22,marks:80};
console.log(Object.keys(key));


// 6 Create an object and return an array of its values using `Object.values()`.

let data = {name: "nithish",age:22,marks:80,study:"america"};
console.log(Object.values(data));


// 7 Use `Object.entries()` to convert an object to an array of key-value pairs.


let arr = {name: "roshan",age:22,place:"siddipet"};
console.log(Object.entries(arr))





// 8 **For-in loop with nested objects**: Write a `for-in` loop to print nested properties of an object.

let marks = {name:"ganesh",marks:{ maths:80,english:70}}
for(key in marks){
    console.log(key+ ":" +marks[key])
    console.log(marks[key])
}



// 9 **Combining for-in with Object methods**: Iterate over an object and log both keys and values using `Object.values()` for comparison.

let object = {name:"ganesh",age:22,place:"siddipet"}
for(key in object){
    console.log(key+ ":" +object[key])
}
Object.values(object).forEach((value)=>console.log(value))




// 10 **Prevent Property Modification**: Create an object with a property, freeze it, and attempt to add or modify properties.




const profile = {name:"Naga Ganesh",age:22,study:"B-Tech"};
Object.freeze(profile)
console.log(profile);
profile.cgpa = 7.2;
console.log(profile)