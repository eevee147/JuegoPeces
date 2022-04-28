var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pez;
var piraña;
var fondoMarino; 
var score=0;

function preload(){
  pezRuninng = loadAnimation("imagen/pez1.png","imagen/pez1.png","imagen/pez2.png","imagen/pez2.png","imagen/pez3.png","imagen/pez3.png");
  pezGameOver = loadImage("imagen/pezGameOver.png");
  backgroundImg = loadImage("imagen/fondoMarino.png");
  pirañaRuning = loadAnimation("imagen/piraña2.png","imagen/piraña3.png");
  coralImage = loadImage("imagen/coral.png");
  algaImage = loadImage("imagen/alga.png")
  gameOverImg = loadImage("imagen/gameOver.png");
  restartImg = loadImage("imagen/restart.png");

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    

    pez=createSprite(200,400,20,30);
    pez.addAnimation("Runing",pezRuninng);
    pez.addAnimation("pezGameOver",pezGameOver);
    pez.setCollider('circle',0,0,350)
    pez.scale = 0.50;

    piraña=createSprite(160,250,50,30)
    piraña.addAnimation("RuningPiraña",pirañaRuning)
    piraña.setCollider('circle',0,0,350)
    piraña.scale=0.40

    
    
    score = 0;
}

function draw(){
  background(backgroundImg);

  textSize(20);
  fill("black");
  text("Score: "+ score,30,50);

  pez.velocityY = pez.velocityY + 0.8;

  if (keyDown("UP_ARROW")) {
    pez.velocityY = -5; 
  }
  

  
  drawSprites();
}

