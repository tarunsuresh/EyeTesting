class LevelButton{

    constructor(x, y){
      
     
    }

    display(){
     
       

        //creating level1 Button
        this.level1Button = createButton("level1");
        this.level1Button.position(displayWidth/2-130, displayHeight/2+20);

        this.level1Button.mousePressed(()=>{
            level1 = new Level1();
    
            this.level1Button.hide();
            this.level2Button.hide();
            this.level3Button.hide();
            level1.display();
        });
         //creating level2 Button   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            this.level2Button = createButton("level2");
            this.level2Button.position(displayWidth/2-20, displayHeight/2+20);
        if(score === 10){    
            this.level2Button.mousePressed(()=>{
                level2 = new Level2();

                level2.display();
                this.level1Button.hide();
                this.level2Button.hide();
                this.level3Button.hide();

             });
        }     


        //creating level3 Button        
        this.level3Button = createButton("level3");
        this.level3Button.position(displayWidth/2+80, displayHeight/2+20);

        this.level3Button.mousePressed(()=>{
           
            level3 = new Level3();

           level3.display();
           this.level1Button.hide();
            this.level2Button.hide();
            this.level3Button.hide();

        });

     


    }
}
