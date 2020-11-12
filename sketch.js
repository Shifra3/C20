var car,wall,speed,weight


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(60,90)
  weight=random(500,1500)
  car=createSprite(20,200,70,70)
  car.shapeColor="white"
  car.velocityX=speed
  wall=createSprite(1400,200,50,200)
  wall.shapeColor="grey"

  
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5 *weight* speed* speed/22500
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation>180 && deformation<100){
      car.shapeColor="yellow"
    }
    if(deformation<100){
      car.shapeColor="green"
    }
  }  
  drawSprites();
}