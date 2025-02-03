/**
--------------------------------------------------------------------------------------------------------Exercise 1: 
Sum of Even Numbers in an Array

Write a function that takes an array of numbers as input and returns the sum 
of all even numbers in the array. Use a loop and conditionals to achieve this.

 */

// let arr = [1,4,3,2]

// const arrayNum = (arr) =>{
//   let total = 0;

//   for(let i = 0; i < arr.length ; i ++){

//     if(arr[i] % 2 === 0){
//         total += arr[i]
//      }  
//   }

//   return console.log(total);
// }

/////////////// improved code

// Define an array of numbers
let arr = [1, 4, 3, 2];

// Function to calculate the sum of all even numbers in the array
const arrayNum = (arr) => {
  let total = 0; // Initialize a variable to store the total sum of even numbers

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current number is even
    if (arr[i] % 2 === 0) {
      total += arr[i]; // Add the even number to the total
    }
  }

  return total; // Return the final total sum
};

// Call the function and log the result to the console
console.log(arrayNum(arr)); // Output: 6

arrayNum(arr);

//-------------------------------------------------------------------------------------------------------Exercise 2: 

/*

Exercise 2: Word Counter
Create a function that accepts a string and a word as arguments. The function should return the number of times the
word appears in the string. Use variables, loops, and conditionals to process the string
*/

let sentence = "the day i saw the sun";
let findWord = "the";

const countWord = (sentence, findWord) => {
  // Split the sentence into an array of words
  let arrWord = sentence.split(" ");

  let count = 0; // Initialize counter

  // Loop through each word in the array
  for (let i = 0; i < arrWord.length; i++) {
    // Convert both words to lowercase for case-insensitive comparison
    if (arrWord[i].toLowerCase() === findWord.toLowerCase()) {
      count++; // Increment counter if there's a match
    }
  }

  return count; // Return the count
};

// Call the function and log the result
console.log(countWord(sentence, findWord)); // Output: 3

//--------------------------------------------------------------------------------------------------------Exercise 3: 
/*
Write a function that takes an array of numbers and returns the count of all odd numbers in the array.
Example Input: [1, 4, 5, 7, 8]
Example Output: 3 (because 1, 5, and 7 are odd).
*/

let numbers = [1, 4, 5, 7, 8]

const countOdd = (numbers) => {
    let count = 0

    for(let i = 0; i < numbers.length; i++){
        if(!(numbers[i] % 2 === 0)){
            count++;
        }
    }
    return count;
}

console.log(countOdd(numbers));


//--------------------------------------------------------------------------------------------------------Exercise 4: 

/*
4: Longest Word in a Sentence

Write a function that accepts a sentence as a string and returns the longest word in the sentence. If there are multiple words of the same length, return the first one.
Example Input: "The quick brown fox jumps over the lazy dog"
Example Output: "jumps"

*/

let mainSentece = "The quick brown fox jumps over the lazy dog";

const longestWord = (mainSentece)=> {
    let wordsArr = mainSentece.split(" ");
    let longestWord = "";

    for(let i = 0;i < wordsArr.length; i++){

        if( wordsArr[i].length > longestWord.length){
            longestWord = wordsArr[i]
        }

    }
    return longestWord
      
}

console.log(longestWord(mainSentece))


//--------------------------------------------------------------------------------------------------------Exercise 5: 

/*
Challenge 5: Day of the Week
Write a function that takes a number (from 1 to 7) as input and returns the corresponding day 
of the week as a string. Use the switch statement for this task.

*/

let numWeek = Math.floor(Math.random()*10)


const weekDay = (numWeek) => {
    let dayOfWeek = ""

    switch (numWeek) {
        case 1:
            dayOfWeek = "Monday";
          break;
        case 2:
            dayOfWeek = "Tuesday";
          break;
        case 3:
            dayOfWeek = "Wednesday";
          break;
        case 4:
            dayOfWeek = "Thursday";
          break;
        case 5:
            dayOfWeek = "Friday";
          break;
        case 6:
            dayOfWeek = "Saturday";
          break;
        case 7:
            dayOfWeek = "Sunday";
          break;
        default:
          text = "No value found";
      }

      return dayOfWeek;

}


console.log(weekDay(numWeek))




/*Exercise 1: 

Write a function that takes two arguments (age and country) and returns whether
someone is eligible to vote in their 
country. The eligibility criteria are that the person must
be at least 18 years old and must be from a country where voting is
allowed (assume the country parameter is a string).
 */

let age = 18
let country = "Rwanda";

function eligibilityVote(theAge,theCountry){
    if(theAge >= 18 && theCountry === "Rwanda" ){
        console.log("allowed to vode") 
    }else{
        console.log("Not allowed") 
    }
}

eligibilityVote(age,country)


