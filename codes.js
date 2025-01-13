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