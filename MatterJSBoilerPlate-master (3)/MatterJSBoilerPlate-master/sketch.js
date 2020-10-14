
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground2
var block1

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(350,450,300,20, {isStatic:true} );
	World.add(world, ground)

	ground2 = Bodies.rectangle(700,300,300,20, {isStatic:true} );
	World.add(world, ground2)

	Engine.run(engine);

	block1 = new Blocks (200,200,20,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,300,20)
  rect(ground2.position.x,ground2.position.y,300,20)
  drawSprites();
  block1.display();
}



