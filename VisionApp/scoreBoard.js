class ScoreBoard{
    constructor(){

    }

    display(){
        text("Congratulations! You have completed vision test ",displayWidth/2-20,displayHeight/2-20);
        text(score + " / 15",displayWidth/2-20,displayHeight/2+20);
        
        if(score <= 5){
            text("You have to test your eyes",displayHeight/2-20,displayHeight/2+40);
        }
        else if(score>5 && score<=10){
            text("Your eyes have minor problem",displayHeight/2-20,displayHeight/2+40);
        }
        else if(score>10 && score<=15){
            text("Your eyes are good! You dont need to check your eyes",displayHeight/2-20,displayHeight/2+40);
        }
    }
}