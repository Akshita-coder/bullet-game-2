var bullet, wall;
var speed, weight;
var deformation, thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";

  wall = createSprite(1200,200, thickness, 200);
  wall.shapeColor=color(80,80,80)

  speed = random (223, 321);
  weight = random (30, 52);
  thickness = random(22, 83);

  bullet.velocityX = speed;

}

function draw() {
  background("black");

  if(wall.x-bullet.x < (bullet.width+wall.wodth)/2){
    bullet.velocityX=0;
    var deformation=0.5 + weight + speed + speed/22509;
    if(deformation>180){
      bullet.shapeColor = "white";
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = "white";
    }
    if(deformation<100){
      bullet.shapeColor = "white";
    }
  }
  
 if (hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5 + weight + speed + speed/(thickness + thickness + thickness);

   if (damage>10) {
     wall.shapeColor="red";
     bullet.shapeColor="blue";
   }
   if (damage<10){
     wall.shapeColor="green";
     bullet.shapeColo="yellow";
   }
 }


  drawSprites();
}


function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}

