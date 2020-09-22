const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	   
	bob1=new Bob(310,300);
	bob2=new Bob(350,300);
	bob3=new Bob(390,300);
	bob4=new Bob(430,300);
	bob5=new Bob(470,300);
	roof=new Roof(400,150,200,20);
	rope1=new Rope(bob1.body,roof.body,-90,0);
  rope2=new Rope(bob2.body,roof.body,-50,0);
	rope3=new Rope(bob3.body,roof.body,-10,0);
  rope4=new Rope(bob4.body,roof.body,30,0);
  rope5=new Rope(bob5.body,roof.body,70,0);
	
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(132,135,0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display(); 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}