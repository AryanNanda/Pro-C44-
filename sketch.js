
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var button,box;
var bg;
function preload()
{
  button = createButton("MOTIVATION BEHIND",450)
  button2 = createButton("Play",450)
  bg = loadImage("images/cool-backgrounds.png")

}

function setup() {
	createCanvas(900,600);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  textFont("Burbank Big Condensed")
  fill("White")
  textSize(72)
  text("Quiz to choose Careers ",140,320)
  if(mousePressedOver(button)){
    background(0);
  }
 
}



