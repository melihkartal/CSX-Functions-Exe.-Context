// Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.

function mergingElements(array1, array2){
    let outputArray = [];
   
   
       outputArray = array1.map(function(element, index){
           
           return element + array2[index];
       });
      return outputArray;
      }
     
     
     console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
     console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
   