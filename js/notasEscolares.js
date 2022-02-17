 
 function getScore(score) {
    let scoreA = score <= 100&& score >= 90;
    let scoreB = score <= 89 && score >= 80;
    let scoreC = score <= 79 && score >= 70;
    let scoreD = score <= 69 && score >= 60;
    let scoreF = score <  60 && score >=  0;
   
    let scoreFinal;
   
   
    if (scoreA) {
        scoreFinal="A";     
    } 
   
    else if (scoreB) {
       scoreFinal="B";    
   } 
   
   else if (scoreC) {
       scoreFinal="C";    
   } 
   
   else if (scoreD) {
       scoreFinal="D";   
   } 
   
   else if (scoreF) {
       scoreFinal="F";        
   } 
   
   else {    
       scoreFinal="digite uma nota em numericos de 0 até 100";
   }

   return scoreFinal;
   
   console.log(scoreFinal);
   
 }

 console.log(getScore(101));
 console.log(getScore(-1));
 console.log(getScore(0));
 console.log(getScore(1));
 console.log(getScore(45));
 console.log(getScore(60));
 console.log(getScore(61));
 console.log(getScore(75));
 console.log(getScore(85));
 console.log(getScore(95));