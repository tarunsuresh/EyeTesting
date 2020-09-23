class Level{

    constructor(){
        this.levelMessage = createElement("h2");
        this.info1 = createElement("h1");
        this.info2 = createElement("h1");
        this.info3 = createElement("h1");
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
        this.levelMessage.hide();
        this.viewScore.hide();
        this.currentQuestion = 1;
        this.maxQuestions = 5;
        this.info1.hide();
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


        if(score === 0){
            if(currentLevel === 1){
           // this.levelMessage.hide();
            this.word.style("fontSize","20px");
            this.info1.html("text your answers in textbox");
            this.info1.position(displayWidth/2+20,displayHeight/2+100);
            this.info1.style("color","red")
            }
        }
        
        if(score === 7){
            if(currentLevel === 3){
                this.info3.html("you have 5 sec to answer");
                this.info3.position(displayWidth/2+20,displayHeight/2+100);
                this.info3.style("color","red")
                this.word.style("fontSize","8px");
            }
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

        if(score === 2){
            if(currentLevel === 2){
               // this.levelMessage.hide();
                this.word.style("fontSize","15px");
                this.info2.html("text your answers in textbox");
                this.info2.position(displayWidth/2+20,displayHeight/2+100);
                this.info2.style("color","red");
            }

        }
       
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
               // this.levelMessage.html("level completed");
                //this.levelMessage.position(displayWidth/2+20,displayHeight/2+100);
                //this.levelMessage.style("color","red")
                this.word.hide();
                this.back.position(displayWidth/2-80,displayHeight/2+20);
                this.back.show();
                if(currentLevel === 3){
                    this.viewScore.show();
                    this.viewScore.position(displayWidth/2-80,displayHeight/2+20);
                    this.viewScore.mousePressed(()=>{
                        var scoreBoard = new ScoreBoard();
                        scoreBoard.display();
                        score.hide();
                        this.viewScore.hide();
                        this.info3.hide();
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