class Level2{

    constructor(){
        this.input = createInput()
        this.nextButton = createButton("next");
        this.word = createElement("h2");
        this.flag = 0;
        this.currentQuestion = 0;
        this.maxQuestions = 2;
    }

    display(){
        this.input.position(displayWidth/2-80,displayHeight/2+20);

       //displaying button 3 and the word
        this.nextButton.position(displayWidth/2-20, displayHeight/2+60);
        var randText = wordGen.getRandomWord(6);

        //if(this.flag === 0){
        this.word.style("fontSize","20px");
        this.word.style("color","red");
        
        this.word.html(randText);
        
        this.word.position(displayWidth/2-20, displayHeight/2-20);
        //}
       
        this.nextButton.mousePressed(()=>{
            this.currentQuestion++;
            this.flag++;
            var textSt = this.input.value();
            if(textSt.trim().toLowerCase() === randText.toLowerCase()){
                score++;
            } 
            console.log(score);
            randText = wordGen.getRandomWord(6);
            this.word.html(randText);
            //this.word.position(displayWidth/2-20, displayHeight/2-20);
            
            if(this.currentQuestion === this.maxQuestions){
                console.log(score);
                this.input.hide();
                this.nextButton.hide();
                textSize(20);
                text("you won the level ",displayWidth/2+30,displayHeight/2-30);
                this.word.hide();
                var back = createButton("back");
                back.position(displayWidth/2-80,displayHeight/2+20);
            } 
                
        }); 


    }
}
