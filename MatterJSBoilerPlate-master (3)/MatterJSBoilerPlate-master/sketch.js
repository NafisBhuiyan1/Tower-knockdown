
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground2, poly
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10
var block11, block12,block13,block14,block15,block16,block17,block18,block19,block20,block21

function preload() {

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(350, 450, 300, 20, { isStatic: true });
	World.add(world, ground)

	ground2 = Bodies.rectangle(700, 300, 300, 20, { isStatic: true });
	World.add(world, ground2)

	poly = Bodies.rectangle(mouseX, mouseY, 35, 35, { isStatic: false });
	World.add(world, poly)
	
	Engine.run(engine);


	block1 = new Blocks(225, 400, 50, 50)
	block2 = new Blocks(275, 400, 50, 50)
	block3 = new Blocks(325, 400, 50, 50)
	block4 = new Blocks(375, 400, 50, 50)
	block5 = new Blocks(425, 400, 50, 50)
	block6 = new Blocks(475, 400, 50, 50)

	block7 = new Blocks(250, 350, 50, 50)
	block8 = new Blocks(300, 350, 50, 50)
	block9 = new Blocks(350, 350, 50, 50)
	block10 = new Blocks(400, 350, 50, 50)
	block11 = new Blocks(450, 350, 50, 50)

	block12 = new Blocks(275, 300, 50, 50)
	block13 = new Blocks(325, 300, 50, 50)
	block14 = new Blocks(375, 300, 50, 50)
	block15 = new Blocks(425, 300, 50, 50)

	block17 = new Blocks(775, 250, 50, 50)
	block18 = new Blocks(625, 250, 50, 50)
	block19 = new Blocks(675, 250, 50, 50)
	block20 = new Blocks(725, 250, 50, 50)

	block21 = new Blocks(650, 200, 50, 50)
	block22 = new Blocks(700, 200, 50, 50)
	block23 = new Blocks(750, 200, 50, 50)

	block24 = new Blocks(675, 150, 50, 50)
	block25 = new Blocks(725, 150, 50, 50)

	block26 = new Blocks(700, 100, 50, 50)
}


function draw() {
	rectMode(CENTER);
	background(0);
	rect(ground.position.x, ground.position.y, 300, 20)
	rect(ground2.position.x, ground2.position.y, 300, 20)
	rect(poly.position.x, poly.position.y, 35, 35)
	poly.position.y = mouseY
	poly.position.x = mouseX
	drawSprites();
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block6.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block17.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	block22.display();
	block23.display();
	block24.display();
	block25.display();
	block26.display();

}



