// Create a function isOdd that accepts a number argument. 
// isOdd will return true if the number is odd and false if the number is even.

let booleanOdd = false;

function isOdd(number){
  
  if(number %2 === 0 ){
    booleanOdd = false;
  }
  
  else {
    booleanOdd = true;
  }
  
  return booleanOdd;
  
  
}


console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false