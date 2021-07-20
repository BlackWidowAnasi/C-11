var runner1
var ground
var leftBoundry
function preload(){
  //pre-load images
  Runner_1 = loadAnimation("Runner-1.png, ")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner1 = createSprite(50, 160, 20,50);
  runner1.addAnimation("running", Runner_1)
  ground = createSprite(300, 190, 800, 20);
  ground.addImage("ground", groundImage)
  ground.velocityX = -10
  leftBoundry = createSprite(10, 10);
  
}

function draw() {
  background(0);
  console.log(runner1.y)
  if(keyDown("RIGHT_ARROW")){
    runner1.velocityX = -10;
  }
  if(keyDown("LEFT_ARROW")){
      runner1.velocityX = 10;
  }
  runner1.collide(left_edge)
  runner1.collide(right_edge)

  drawSprites();
  }
