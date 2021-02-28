
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,670,1200,20);
	hammer = new Hammer(50,100,70,70);
	stone = new Stone(400,400,80,80);
	sand1 = new Sand(100,500);
	sand2 = new Sand(110,500);
	sand3 = new Sand(120,500);
	sand4 = new Sand(130,500);
	sand5 = new Sand(140,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");

  hammer.display();
  stone.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  
  drawSprites();
 
}



