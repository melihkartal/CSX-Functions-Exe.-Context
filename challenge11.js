// Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd.

let outputMessage= "";
function iLoveEvenNumbers(number){
  if (number %2 === 0){
    outputMessage = "Oh Yeah Evens!";
  }
  else{
     outputMessage = "I am too normal for odd numbers";
  }
  return outputMessage;
}

	console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
	console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
