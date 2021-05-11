class WordGen{
     constructor(){
        
     }

     display(){
          
     }
     //creating the letters by using for loop
     getRandomWord(length){
          
          var retString = "";
          var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

          for(var i = 0;i<length;i++){
               //console.log(i);
               retString = retString+letters.charAt(Math.floor(Math.random()*61));     
               console.log(retString);
               
               
          } 
          fill("red");
           textSize(20);
           text(retString,displayWidth/2-20, displayHeight/2+20);
  
          return retString;      
          
     }
}