// Complete the function holidays that accepts an array of strings and iterates through the array. 
// If the array contains the string "October", return "Happy Halloween". 
// Otherwise, return the string "Have a great day!". 
// Do not use a variable to store the result that you are returning.

function holidays(arr) {
  
    for (let i in arr){
      if(arr[i] === "October") return 'Happy Halloween';
    
    }
    return 'Have a great day!';
  }
  
  
  const months = ["April", "May", "June", "October"];
  const animals = ["Cats", "Dogs", "Pigs"];
  console.log(holidays(months)); // should return: "Happy Halloween"
  console.log(holidays(animals)); // should return: "Have a great day!"