
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,paperImg;
var ground;
var boxLeft,boxRight,boxCentre;
var dustbin,dustbinImg;
function preload()
{
  dustbinImg = loadImage("dustbingreen.png");
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper= new Paper(100,100,40);

  ground =new Ground(400,690,800,20);
   boxLeft =new Box(600,630,20,100);
   boxRight =new Box(700,630,20,100);
   boxCentre =new Box(650,675,100,20);
  dustbin = createSprite(600,600);
  dustbin.addImage(dustbinImg);
  dustbin.scale =0.9;
}


function draw() {
 
  background(200);
  rectMode(CENTER);
  drawSprites();
  paper.display();
  ground.display();
  boxLeft.display();
  boxRight.display();
  boxCentre.display();
  keyPressed();

  drawSprites();
}
function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-15})

  }
}


