
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash;
var ground;
var wall1,wall2,wall3

function setup() {
	createCanvas(800, 700);
	background(0);
	engine = Engine.create();
	world = engine.world;
	ground = createSprite (400,650,800,50);
	wall1 = createSprite (650,625,200,25);
	wall2 = createSprite (550,600,10,50);
	wall3 = createSprite (750,600,10,50);
	ground.shapeColor= (255);
	trash = new paper (100,600,50);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  trash.display();
  drawSprites();
}

function keyPressed(){
		if (keyCode === UP_ARROW) {
Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85})
		}
}

