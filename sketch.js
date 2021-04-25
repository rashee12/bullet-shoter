
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall,thickness;
var speed,weight,bullet;

function preload()
{
	
}

function setup() {
	createCanvas(1600,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	                                               
	speed=random(223,321);
	weight=random(30,50);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
bullet.shapeColor=color(255);
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  if(wall.x-bullet.x<(bullet.Wight+wall.Wight)/2)
 {
  bullet.velocityX=0;
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation>180)
 {
   bullet.shapeColor=color(255,0,0);
 }
 if(deformation<180 &&deformation>100)
 {
   bullet.shapeColor=color(230,230,0);
 }
 if(deformation<100)
 {
  bullet.shapeColor=color(0,255,0);
 }
  
}
  

function hasCollided(bullet,wall)

if(hasCollided(bullet, wall))


{
bullet.velocityX=0;
var damage=0.5* weight* speed *speed/(thickness*thickness*thickness);


if(damage>10)

{
  wall.shapeColor=color(255,0,0);
}


if(damage>10)
{
  wall.shapeColor=color(0,255,0);
}



}























  drawSprites();
 
}



