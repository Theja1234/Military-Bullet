var speed, weight, thickness;
var car, wall;
var gameState="Start";
// var gameState=End;
// var gameState=Start;


function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 20, 10);
  car.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);

speed=random(0,15);
weight=random(400,1500);
thickness=random(22,83);

car.velocityX = 10;

}

function draw() {
  background("green");

  if (gameState === "Start"){
   fill("white");
   text("Press Space Bar", 800,75);
  }
 
  if (keyDown("SPACE")){
   gameState="PLAY"; 
  }

  if (gameState === "PLAY"){
  if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
   var damage = 0.5 * weight * speed * speed;
   
   if(damage>10){
    wall.shapeColor="red";  
    }
  if(damage<10){
  wall.shapeColor="green";
  }
  }
  }

  if (keyDown("P")){
    car.velocityX=0;
   }
 
   if (keyDown("o")){
    car.velocityX = 10; 
   }

   fill("white");
   text("Press r to create more bullets", 800,100);
   fill("white");
   text("Press P to pause bullet", 800,50);
   fill("white");
   text("Press o to unpause bullet", 800,200);
  
  if(keyDown("r")){
    car = createSprite(50, 200, 20, 10);
    car.shapeColor="white";
    wall = createSprite(1200,200,thickness,height/2);
  
  speed=random(0,15);
  weight=random(400,1500);
  thickness=random(22,83);
  
  car.velocityX = 10;

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
     var damage = 0.5 * weight * speed * speed;
     
     if(damage>10){
      wall.shapeColor="red";  
      }
    if(damage<10){
    wall.shapeColor="green";
    }
    }
    }
  
    if (keyDown("P")){
      car.velocityX=0;
     }
   
     if (keyDown("o")){
      car.velocityX = 10; 
     }



  

  drawSprites()
}