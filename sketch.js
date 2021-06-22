const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine, world;
var canvas;
var Pbase, Cbase;
var p, c;
var arrows, arrow1;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   Cbase = new base1(300, random(450, height-30),180,150);
   Pbase = new base(1200, random(450, height-30),180,150);
   p = new player(1200, Pbase.body.position.y - 153, 50, 180);
   c = new player(300, Cbase.body.position.y - 153, 50, 180);  
   arrows = new arrow(1120, Pbase.body.position.y - 173, 150, 140);
   arrow1 = new arrrow(380, Cbase.body.position.y - 173, 150, 140);
 }

function draw() {

  background(180);

  Engine.update(engine);

  arrows.yPosition = mouseY;

  // Title
  fill("#FFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  Pbase.display();
  Cbase.display();
   //display Player and computerplayer
   p.display();
   c.display();
   arrows.display();
   arrow1.display();

}