//question:Flattern an array of arrays
// let arr = [[0,1],[2,3],[4,5]]

// let flattern = arr.reduce((prev,curr) => prev.concat(curr),[])
// console.log(flattern)



//expected output : [0,1,2,3,4]

////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// question:find the lagest prime number in an array using reduce method
const arr = [1, 45, 73, 97, 2];

// Function to check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Find the largest prime number using reduce
let largeNum = arr.reduce((prev, curr) => {
    if (isPrime(curr) && curr > prev) {
        return curr;
    }
    return prev;
}, 0); // Initial value set to 0 (assuming all numbers are positive)

console.log(largeNum);