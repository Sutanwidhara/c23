const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  ComputerBase = new ComputerBase(300,random(450,height-300),180,150);
  Playerbase = new PlayerBase(1050,random(450,height-300),180,150);
  Player = new Player(285,Playerbase.body.position.y-153,50,180);
  Computerplayer = new ComputerPlayer(1050,ComputerBase.body.position.y-153,50,180);
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  ComputerBase.display();
  Playerbase.display();
   //display Player and computerplayer
  Player.display();
  Computerplayer.display();
}
