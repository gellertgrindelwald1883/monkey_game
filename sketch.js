
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,500);
  monkey=createSprite(50,350,50,50);
 monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  ground=createSprite(250,410,500,10)
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(0);
  monkey.collide(ground);
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  var survivalTime=0; 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  stroke("white");
  textSize(20);
  fill("black"); survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50); 

  spawnbananas();
  spawnobstacles();
 drawSprites(); 
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    //adding cloud to the group
   FoodGroup.add(banana);
    }
}
function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     obstacle = createSprite(500,365,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
   
     //assign lifetime to the variable
    obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);
    
    }
}





