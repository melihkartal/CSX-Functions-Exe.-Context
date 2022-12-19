// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. 
// The value returned should be an array with the low, high, and range.

function getTheRange(arr){
    let highest = arr[0];
    let lowest = arr[0];
    let diff = 0;
    let output = [];
    for (let i in arr){
      if(arr[i] > highest) highest = arr[i];
      
      if(arr[i] < lowest) lowest = arr[i];
    }
    diff = highest - lowest;
    
    output.push(lowest, highest, diff);
    
    return output;
  }
  
  
  console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]