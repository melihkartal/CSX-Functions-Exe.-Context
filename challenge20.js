// Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. 
// When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' 
// When it's at 3, print 'I'm about to explode with excitement!' 
// When the counter is finished, print 'That was kind of a let down'.

function imAboutToExplodeWithExcitement(n){
    let i = n;
 while(i > 0){
   
   if(i === 5) 
     console.log("'Oh wow, I can't handle the anticipation!'");
   
   
   else if(i===3) 
     console.log("'I'm about to explode with excitement!'");
     
   console.log(i);
   i--;
 }
   
   console.log("'That was kind of a let down'");
}


imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'