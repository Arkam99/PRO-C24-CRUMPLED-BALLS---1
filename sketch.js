
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 790, 10);
    
	leftSide = new Dustbin(550, 620, 20, 100);

	bottomSide = new Dustbin(610, 660, 100, 20);

	rightSide = new Dustbin(670, 620, 20, 100);

	waste = new Waste(100, 600, 10);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  leftSide.display();
  bottomSide.display();
  rightSide.display();
  waste.display();



  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(waste.body,waste.body.position,{x:15, y:-15});
	}
}


