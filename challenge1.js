// Create a function addTwo that accepts a number, and returns the number plus 2



function addTwo (number){
  return number+=2;
}

const userInput = addTwo(2);


console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12