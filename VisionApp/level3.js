class Level3{

    constructor(){
        this.input = createInput();
        this.nextButton = createButton("next");
        this.word = createElement("h2");
        this.flag = 0;
        this.timer = 10;
        this.back = createButton("back");
        this.currentQuestion = 0;
        this.maxQuestions = 2;
    }

     hideText(){
         this.word.hide();
        console.log("hi");

    }

    display(){

        

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

        //if(this.flag === 0){
        this.word.style("fontSize","20px");
        this.word.style("color","red");
        
        this.word.html(randText);
        
        
        this.word.position(displayWidth/2-20, displayHeight/2-20);

        var that = this;
        setTimeout(function () {
            that.word.hide();
        }, 5000);
       

        //}
       
        this.nextButton.mousePressed(()=>{
            this.flag++;
            var textSt = this.input.value();
            this.currentQuestion++;
            if(textSt.trim().toLowerCase() === randText.toLowerCase()){
                score++;
                
            } 



            setTimeout(function () {
                that.word.hide();
            }, 5000);

            console.log(score);
            randText = wordGen.getRandomWord(5);
            this.word.html(randText);
            this.word.show();
            //this.word.position(displayWidth/2-20, displayHeight/2-20);
            
            if( this.maxQuestions === this.currentQuestion){
                console.log(score);
                this.input.hide();
                this.nextButton.hide();
                textSize(20);
                text("you won the level ",displayWidth/2+30,displayHeight/2-30);
                this.word.hide();
               this.back.position(displayWidth/2-80,displayHeight/2+20);
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

