
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	base = new Ground(400,500,800,10);
	 
	garbage = new Paper(180,480,70); 
	
	
	dustbin1 = new Dustbin(690,530,160,20);
	dustbin2 = new Dustbin(620,455,20,180); 
	dustbin3 = new Dustbin(760,455,20,180);
	
	

	Engine.run(engine);
	
}

function draw() {
	rectMode(CENTER);
	background("white");
	base.display();

	garbage.display();
	

	image(dustbinIMG,600,300,180,200)
	

}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(garbage.body,garbage.body.position,{x:600,y:-900});
	}
   }



