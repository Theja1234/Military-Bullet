var speed, weight;
var car, wall;
var deformation;



function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,60,100);

speed=random(0,5);
weight=random(400,1500);

car.velocityX = speed;

}

function draw() {
  background("black");
  
  if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0;
   deformation = 0.5 * weight * speed * speed ;
  if (deformation>180){
  car.shapeColor = ("red");  
  }
  if(deformation<180 && deformation>100){
  car.shapeColor="yellow";  
  }
  if(deformation<100){
  car.shapeColor="green";  
  }
  } 
drawSprites();
  }