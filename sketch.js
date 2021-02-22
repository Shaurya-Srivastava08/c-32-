var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImg;
var gameState = "play"

function preload(){
  towerImg = loadImage("D1_Tower.png");
  doorImg = loadImage("118-1184184_venom-marvels-spider-man-venom-hd-png-download.png");

  ghostImg = loadImage("98b81935e799059c7e93d8a88bc2e712.png");

}

function setup(){
  createCanvas(600,600);
 // spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  
  ghost = createSprite(200,200);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.1



  
  

  doorsGroup = new Group();
}
function draw(){
  background(0);
  if (gameState === "play") {
   
    if(keyDown("up")){
      ghost.y = ghost.y  -3;
    }
    if(keyDown("left_arrow")){ 
      ghost.x = ghost.x - 3;
    } 
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }

    
    
    
  
    // add on left and right arrow
    
    
   
    spawnDoors();
    
    if(doorsGroup.isTouching(ghost)){
      gameState="end"
      ghost.destroy();
      tower.velocityY = 0;
doorsGroup.setVelocityEach = 0;
      
    }
  }
  
  if (gameState === "end"){
    fill("red");
    textSize(20);
    text("Game Over", 230,250)
  }
    drawSprites();

if (gameState === "end"){
  fill("red");
  textSize(20);
  text("Game Over", 230,250)
} 

}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, 50);
    door.x = Math.round(random(120,400));
   door.addImage(doorImg);   
    door.velocityY = 1;
    var climber = createSprite(200,95);
    
   //assign lifetime to the variable
    door.lifetime = 800;
    
   
    //add each door to the group
    doorsGroup.add(door);

    
  }
}
