//Students need to score at least 70 points to pass an exam. The given program declares an array with results.
//Write a program to count and output to the console the number of students who pass the exam.

//part I got
let scores = [68,95,54,84,77,75,63,74,69,80,71,63]

//my code
//create variable that call function trough filter methode
let over70 = scores.filter(exam);
//The filter() method creates a new array with array elements that passes a test.

//creating a test function
function exam(value) {
    //filter trough scores all values that are larger than 70
    return value > 70
}
//log how many have passed
console.log(over70.length)