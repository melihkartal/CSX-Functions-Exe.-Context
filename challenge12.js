// Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

function getRemainder(num1, num2) {
    let remainderOfTwo = 0;
     
     if(num1 > num2){
       remainderOfTwo =(num1 % num2)
         return remainderOfTwo;
     }
         else{
           remainderOfTwo = (num2 % num1);
       return remainderOfTwo;
     }
   }
   
       console.log(getRemainder(17, 5)); // => 2
       console.log(getRemainder(20, 5)); // => 0
       console.log(getRemainder(8, 22)); // => 6	
       console.log(getRemainder(7, 42)); // => 0