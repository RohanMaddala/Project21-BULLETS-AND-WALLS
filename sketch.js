var wall, thickness;
var bullet, speed,weight;
var damage;



function setup() {
  createCanvas(1500,800);

  //create wall,bullet
  wall=createSprite(1400, 300, thickness, 200);
  wall.shapeColor=("grey");
  thickness=random(22,83)

  bullet=createSprite(50,300,50,50);
  bullet.shapeColor=("gold");

  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() { 
  background("black"); 
  
  

  damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);


  if(hasCollied(bullet,wall)){
    
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor=("red")
    }

    if(damage<10){
      wall.shapeColor=("green")
    }
   
  }
  

  drawSprites();
}