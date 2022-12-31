//Higher order functions

//activity 1

const greeting = () => { //this is the first function
    console.log("Hello Codenation");
}
// greeting(); //prints ("Hello Codenation")

const fiveTimes = (greetFive) => { //this is the second function and were passing a parameter greetFive which we will call once the for loop is completed 
    for (let i = 0; i < 5; i++) {
        greetFive();
    }
}
fiveTimes(greeting); //here we are calling the for loop function 5 times to call the greeeting function five times
//I ACTUALLY GOT THIS RIGHT YAYYYYYY


/*
//EXAMPLE
function formalGreeting() {
    console.log("How are you?");
}
function casualGreeting() {
    console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
    if (type === 'formal') {
        greetFormal();
    } else if (type === 'casual') {
        greetCasual();
    }
}
// prints 'What's up?'
greet('casual', formalGreeting, casualGreeting);

*/


/*const add = () => {
    return 2 + 3;
}
console.log(add()); // this logs the sum total which is 5
console.log(add); //this logs that add is a function */
/*
const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add(2)); //shows function anonymous? */
/*
const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add(2)(1)) //logs the total of 3*/


