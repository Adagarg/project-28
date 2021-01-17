
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

stone = new Stone(100,500,20);
	ground = new Ground(175,600,1500,20);

	tree = new Tree(300,190,400,500);

	boy = new Boy(100,260,150,300)



    mango1  = new Mango(275,110,40);
	mango2 = new Mango(250,160,40);
	mango3 = new Mango(300,150,40);
	mango4 = new Mango(350,150,40);
	mango5 = new Mango(325,100,40);
	mango6 = new Mango(300,125,40);
	mango7 = new Mango(380,170,40);
	mango8 = new Mango(275,170,40);
	mango9 = new Mango(350,120,40);
		
	launch = new Launch(stone.body,{x:150,y:450});

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  
  ground.display()
  stone.display()
  tree.display()
  launch.display()
  boy.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6)
  detectollision(stone,mango7)
  detectollision(stone,mango8)
  detectollision(stone,mango9)
  

  tree.depth=stone.depth
  stone.depth=stone.depth+1
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    launch.fly()
}
function detectollision(lstone, lmango){
	var mangoBodyPosition=lmango.body.position
	var stoneBodyPosition=lstone.body.position

	var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		//console.log("qplpll")
		Matter.Body.setPosition(stone.body,{x: 140, y: 670});
		launch.attach(stone.body);
	}
}