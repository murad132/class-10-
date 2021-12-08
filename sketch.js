var groundImage;
var trex ,trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage ("ground2.png");
}

function setup(){
  createCanvas(600,200)
  ground = createSprite (300,180, 600, 10);
  ground.addImage("ground", groundImage);
  ground.velocityX = - 3;
  //create a trex sprite
  trex = createSprite(50, 150, 30, 40);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.4;
}

function draw(){
  background("white");
  console.log(ground.x);
  if(ground.x <0){
    
    ground.x = 300;
  }
  trex.collide(ground);
  if(keyDown("space")){
    trex.velocityY = -10;

  }
  trex.velocityY = trex.velocityY + 0.5; 
  
  drawSprites();
}
