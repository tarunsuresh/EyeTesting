class Level{

    constructor(){
        this.input = createInput();
        this.nextButton = createButton("next");
        this.word = createElement("h2");
        this.back = createButton("back");
        this.currentQuestion = 0;
        this.maxQuestions = 2;
        this.viewScore= createButton("viewScore");
    }

     hideText(){
         this.word.hide();
        console.log("hi");

    }

    display(currentLevel){
        this.viewScore.hide();
        this.currentQuestion = 1;
        this.maxQuestions = 5;

         
        this.input.show();
        this.nextButton.show();
        this.word.show();


        //for(var timer = 10;timer>0;timer--){
          //  console.log(timer);
        //}

       // if(frameCount%50 === 0){
         //   this.timer--;
           // console.log(this.timer);
        //}

        this.input.position(displayWidth/2-80,displayHeight/2+20);

       //displaying button 3 and the word
        this.nextButton.position(displayWidth/2-20, displayHeight/2+60);
        var randText = wordGen.getRandomWord(5);

        if(currentLevel === 1){
        this.word.style("fontSize","20px");
        }
        else if(currentLevel === 2){
            this.word.style("fontSize","15px");
        }
        else if(currentLevel === 3){
            this.word.style("fontSize","8px");
        }

        this.word.style("color","red");

        this.word.html(randText);
        
        this.word.position(displayWidth/2-20, displayHeight/2-20);

        if(currentLevel === 3){
            var that = this;
            setTimeout(function () {
                that.word.hide();
            }, 5000);
        }

        //}
       
        this.nextButton.mousePressed(()=>{
            var textSt = this.input.value();
            this.currentQuestion++;
            if(textSt.trim().toLowerCase() === randText.toLowerCase()){
                score++;
                
            } 

            this.input.value("");

            if(currentLevel === 3){
                var that = this;
                setTimeout(function () {
                    that.word.hide();
                }, 5000);
            }

            console.log(score);
            randText = wordGen.getRandomWord(5);
            this.word.html(randText);
            this.word.show();
            //this.word.position(displayWidth/2-20, displayHeight/2-20);
            
            if(this.currentQuestion > this.maxQuestions){
                console.log(score);
                this.input.hide();
                this.nextButton.hide();
                textSize(20);
                text("you won the level ",displayWidth/2+30,displayHeight/2-30);
                this.word.hide();
                this.back.position(displayWidth/2-80,displayHeight/2+20);
                this.back.show();
                if(currentLevel === 3){
                    this.viewScore.show();
                    this.viewScore.position(displayWidth/2-80,displayHeight/2+20);
                    this.viewScore.mousePressed(()=>{
                        var scoreBoard = new ScoreBoard();
                    });
                }
            }       
                
        }); 

        this.back.mousePressed(()=>{
            console.log("back");
            this.back.hide();
            var levelButton = new LevelButton(displayWidth/2-20, displayHeight/2+20);
            levelButton.display();
        });


    }

    
    

}

