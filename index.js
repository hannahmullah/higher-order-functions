//Higher order functions -> takes a function as a paramter or returns a function

//activity 1
const logMessage = () => {
    console.log('Hello Codenation');
}

const loopFunc = (functionToLog) => {
    for (let i = 0; i < 5; i++) {
        functionToLog();
    }
}
loopFunc(logMessage);

//activity 2
let numbers = [1, 2, 3, 4, 5];

let newNumArr = numbers.map((num) => { //this is a function in the .map()
    return num * 3
})

console.log(newNumArr)

//activity 3
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
const doMaths = (num1) => { //this is a higher order function
    return (num2, fn) => {
        return fn(num1, num2);
    }; //return statement means that it takes teh value and store it in the function call
    //so when the function is called it stores the value there
};

console.log(doMaths(4)(2, add))

//fn is a reference short for function, same as num2 which is a refence 

const testFunc = () => {
    return "hello" //hello is stored in the return
}

let string = testFunc()
console.log(string) //this prints hello


const adding = (a, b) => {
    return a + b
}

console.log(adding(5, 8))