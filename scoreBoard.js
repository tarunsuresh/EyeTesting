class ScoreBoard{
    constructor(){
        this.text1  = createElement("h1");
        this.text2 = createElement("h2");
        this.text3 = createElement("h2");
        this.text4 = createElement("h2");
        this.text5 = createElement("h2");
    }

    display(){
        //text(,displayWidth/2-20,displayHeight/2-20);
        //text(score + " / 15",displayWidth/2-20,displayHeight/2+20);
        
        this.text1.html("Congratulations! You have completed vision test");
        this.text1.position(displayWidth/2-100,displayHeight/2-300);
        this.text1.style("color","red");

        this.text2.html("Your score is : " + score + " / 15");
        this.text2.position(displayWidth/2-50,displayHeight/2-190);
        this.text2.style("color","red");

        if(score <= 5){
           // text("You have to test your eyes",displayHeight/2-20,displayHeight/2+40);
           this.text3.html("You have to test your eyes");
           this.text3.position(displayHeight/2+200,displayHeight/2+40);
           this.text3.style("color","red");
   
        }
        else if(score>5 && score<=10){
           // text("Your eyes have minor problem",displayHeight/2-20,displayHeight/2+40);
           this.text4.html("Your eyes have minor problem");
           this.text4.position(displayWidth/2-20,displayHeight/2+40);
           this.text4.style("color","red");
   
        }
        else if(score>10 && score<=15){
           // text("Your eyes are good! You dont need to check your eyes",displayHeight/2-20,displayHeight/2+40);
           this.text5.html("Your eyes are good! You dont need to check your eyes");
           this.text5.position(displayWidth/2-20,displayHeight/2+40);
           this.text5.style("color","red");
   
        }
    }
}