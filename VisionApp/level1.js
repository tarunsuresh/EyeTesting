class Level1{

    constructor(){
        this.input = createInput()
        this.nextButton = createButton("next");
        this.word = createElement("h2");
        this.flag = 0;
        this.back = createButton("back");
       
    }

    display(){
        this.input.position(displayWidth/2-80,displayHeight/2+20);
        this.back.position(displayWidth/2-80,displayHeight/2+20);

       //displaying button 3 and the word
        this.nextButton.position(displayWidth/2-20, displayHeight/2+60);
        var randText = wordGen.getRandomWord(5);

        //if(this.flag === 0){
        this.word.style("fontSize","20px");
        this.word.style("color","red");
        
        this.word.html(randText);
        
        this.word.position(displayWidth/2-20, displayHeight/2-20);
        //}
       
        this.nextButton.mousePressed(()=>{
            this.flag++;
            var textSt = this.input.value();
            if(textSt.trim().toLowerCase() === randText.toLowerCase()){
                score++;
            } 
            console.log(score);
            randText = wordGen.getRandomWord(5);
            this.word.html(randText);
            //this.word.position(displayWidth/2-20, displayHeight/2-20);
            
            if(score === 2){
                console.log(score);
                this.input.hide();
                this.nextButton.hide();
                textSize(20);
                text("you won the level ",displayWidth/2+30,displayHeight/2-30);
                this.word.hide();
              
               

                this.back.mousePressed(()=>{
                    console.log("back");
                    this.back.hide();
                    var levelButton = new LevelButton(displayWidth/2-20, displayHeight/2+20);
                    levelButton.display();
                });

    

            } 


        
    
        }
    }

}    
