//javascript

// 1. Create an array called petArray with 3 string items in it: "cat", "cow", "dog".
var petArray = ["cat", "cow", "dog"];

// 2. Console log the value of the second item in petArray.
var petArray = ["cat", "cow", "dog"];
console.log(petArray[1]);

// 3. Add the item "sheep" to petArray using the push method.
var petArray = ["cat", "cow", "dog"];
petArray.push("sheep");

// 4. Console log how many items there are now in petArray using the length method.
var petArray = ["cat", "cow", "dog"];
petArray.push("sheep");
console.log(petArray.length);

// 5. Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
var catObject = {
    name: "Darren",
    colour: "blue",
    age: 35
}

// 6. Console log the value of the third property of catObject.
var catObject = [
    {
        name: "Darren",
        colour: "blue",
        age: 35
    }
];

for(var i = 0; i < catObject.length; i++) {
    console.log(catObject[i].age);
}

// 7. Take the value of catObject (the {} part) and place it inside an array called catArray.
var catArray = [
    {
        name: "Darren",
        colour: "blue",
        age: 35
    }
];

// 8. Loop through catArray and console log each property of each object inside (there will be only 1 object inside).
var catArray = [
    {
        name: "Darren",
        colour: "blue",
        age: 35
    }
];

for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}


// 9. Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.
function logToConsole(animalType) {
    console.log(animalType);
}

// 10. Call the logToConsole function and pass in the value "donkey".
function logToConsole(animalType) {
    console.log(animalType);
}
logToConsole("donkey");