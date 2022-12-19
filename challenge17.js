// Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.

function getTheSum(arr){
  let result = arr.reduce((x,total) => total += x)
  
  return result;
}

console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33