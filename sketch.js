
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papero,ground;
var dustbin

function setup() {
	createCanvas(1200, 1200);
   
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=createSprite(600,1100,2000,20)
  ground.shapeColor=("white")
 papero=new Paper(600,600,50)
 dustbin=new Dustbin(1100,1000,20,20)

 /*box1=createSprite(1000,1080,200,20);
	box1.shapeColor=("red");

	box2=createSprite(900,1040,20,100);
	box2.shapeColor=("red");

box3=createSprite(1100,1040,20,100);
	box3.shapeColor=("red");
	Engine.run(engine);*/
  
}


function draw() {
  
  background(255, 248, 71);
  rectMode(CENTER);
  drawSprites();
  papero.display();
  dustbin.display();
  
  
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(papero.body,papero.body.position,{x:85,y:-85})
  }
  
}

