/*
Exercise 1: FizzBuzz
Write a function fizzBuzz(n) that takes an integer n as input. For every number 
from 1 to n:\n\n- Print "Fizz" if the number is divisible by 3.\n- Print "Buzz" if 
the number is divisible by 5.\n- Print "FizzBuzz" if the number is divisible by 
both 3 and 5.\n- Otherwise, print the number itself.\n\n---
*/


// let n = 6;

// function fizzBuzz(n){
//     for (let i = 1; i <= n; i++) {
//        if(n % 3 === 0){
//         console.log("Fizz")
//        }else if(n % 5 === 0){
//         console.log("Buzz")
//        }else if(n % 3 === 0 && n % 5 ===0){
//         console.log("FizzBuzz")
//        }else{
//         console.log(n)
//        }
//     }
// }

// fizzBuzz(n);

/*
let n = 6;

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(n)

*/

//////////////////////////////////////////////////
/*

Exercise 2: Reverse an Array
Write a function reverseArray(arr) that takes an array arr as input and
returns a new array with the elements in reverse order. Do not use the built-in reverse() method.

*/

let arr = [1,2, 3, 4, 5];

function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    console.log(newArr)
}

reverseArray(arr);