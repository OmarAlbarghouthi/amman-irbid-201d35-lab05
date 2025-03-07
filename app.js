'use strict';
/////////////////////////////////////

function getArraySum(total, num) {
  return total + num;
}

function getArrayProduction(total, num) {
  return total * num;
}
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b, c) {
	var sum = 0;
	var message = null;
	if (Array.isArray(a)){
	 sum = a.reduce(getArraySum,0);
     message = 	`${a.join()} was passed in as an array of numbers, and ${sum} is their sum.`
	}else{
    let x = (c === undefined) ? 0 : c;
    sum = a + b + x;
	message = (c === undefined) ? `The sum of ${a} and ${b} is ${sum}.` : `The sum of ${a} and ${b} and ${c} is ${sum}.`;
	}
	return [sum, message];


}
// Here is the test for sum(); uncomment it to run it
 sum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b, c) {
	var multiply = 0;
	var message = null;
	if (Array.isArray(a)){
     multiply = a.reduce(getArrayProduction,1);
     message = 	`The numbers ${a.join()} have a product of ${multiply}.`
	}else{
	let x = (c === undefined) ? 1 : c;
     multiply = a * b * x;
     message = (c === undefined) ?`The product of ${a} and ${b} is ${multiply}.` : `The product of ${a} and ${b} and ${c} is ${multiply}.`;}
	return [multiply,message];
}


// Here is the test for multiply(); uncomment it to run it
 multiply(5,9);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
   let output = [];
   let SumValues = sum(a,b,c);
   let production = multiply(a,b,c)
   output.push(SumValues[0], production[0], SumValues[1], production[1]);
   
   return output;
}



// Here is the test for sumAndMultiply(); uncomment it to run it
sumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here



function sumArray(sumArr) {
 let output = sum(sumArr);
 return output;
}

// // Here is the test for sumArray(); uncomment it to run it
 var testArraySum= [1,2,3];
 sumArray(testArraySum);



function sumArray(sumArr) {
  let output = sum(sumArr);
  return output;
 }

// // // Here is the test for sumArray(); uncomment it to run it
  var testArraySum= [1,2,3];
  sumArray(testArraySum);



function sumArray(sumArr) {

  let output = sum(sumArr);
  return output;
 }

// // // Here is the test for sumArray(); uncomment it to run it
  var testArraySum= [1,2,3];
  sumArray(testArraySum);

//  let output = sum(sumArr);
//  return output;
 }

// // // Here is the test for sumArray(); uncomment it to run it
//  var testArraySum= [1,2,3];
//  sumArray(testArraySum);




// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {

 	let output = multiply(multArr)
	return output


 	let output = multiply(multArr);
 	return output;

// 	let output = multiply(multArr)
// 	return output


}



// // Here is the test for multiplyArray(); uncomment it to run it

// var testArrayMul= [1,2,3];
// multiplyArray(testArrayMul);


 var testArrayMul= [1,2,3];
 multiplyArray(testArrayMul);

// var testArrayMul= [1,2,3];
// multiplyArray(testArrayMul);



// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here


 function multiplyAnyArray(dynamicArray) {

 	let output = multiply(dynamicArray);
 	return output;
}

// // Here is the test for multiplyArray(); uncomment it to run it
 var testDynamicArrayMul = [1,2,3,4,5,6,9];
 multiplyAnyArray(testDynamicArrayMul);

// 	let output = multiply(dynamicArray);
// 	return output;
}

// // Here is the test for multiplyArray(); uncomment it to run it
// var testDynamicArrayMul = [1,2,3,4,5,6,9];
// multiplyAnyArray(testDynamicArrayMul);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.