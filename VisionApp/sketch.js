var backGround,imgOne;
var level1,wordGen,level2,level3;
var gameState =0;
var score = 0;
function preload(){
  backGround = loadImage("background.png");
  //imgOne = loadImage("images/1image.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  level = new Level();

  wordGen  = new WordGen();
  
  var playButton = createButton("play");
  playButton.style("backgroundColor","blue");
  playButton.position(displayWidth/2-20,displayHeight/2+20);
  playButton.size(100,100);

  playButton.mousePressed(()=>{

    playButton.hide();
  //creating play button 
  var levelButton = new LevelButton(displayWidth/2-20, displayHeight/2+20);
 
  levelButton.display();

});
/*
  //creating object of level1
  level1 = new Level1();

  //creating object of level2
  level2 = new Level2();

  //creating object of level3
  level3 = new Level3();

 */
  

 
}

function draw() {
 background(backGround);  
 //imgOne = addImage(displayWidth/2-20,displayHeight/2+20,imgOne);

  drawSprites();

  fill("blue");
  
  textSize(20);
  text("score :" + score,displayWidth/2-20,displayHeight/2-150);
  
}