
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
paperIMG=loadImage("paper.png");
dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	base = new Ground(400,550,800,10);
	 
	garbage = new Paper(180,480,0.01); 
	
	
	dustbin = new Dustbin(650,460,180,170);
	
	
	
	

	Engine.run(engine);
	
}

function draw() {
	rectMode(CENTER);
	background("white");
	base.display();

	garbage.display();
	

	
	dustbin.display();
	
	

	
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(garbage.body,garbage.body.position,{x:55,y:-55});
	}
   }



