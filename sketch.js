
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pap
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boxleftSprite=createSprite(550,610,20,100)
//	boxleftSprite.shapeColor = "grey"
fill("grey")
	boxleftBody = Bodies.rectangle(550,610,20,100, {isStatic:true})
	World.add(world, boxleftBody)
		 
//	boxBase=createSprite(650,650,200,20)
	//boxBase.shapeColor = "grey"
	boxBottomBody = Bodies.rectangle(650,635,200,20, {isStatic:true})
	World.add(world, boxBottomBody)
	
//	boxrightSprite=createSprite(750,610,20,100)
//	boxrightSprite.shapeColor = "grey"
	boxRightBody = Bodies.rectangle(750,610,20,100, {isStatic:true})
	World.add(world, boxRightBody)
	
	pap = new Paper(50,500,20)
	

	ground = new Ground(400,height,800,100)
	World.add(world, ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("grey")
rect(boxBottomBody.position.x,boxBottomBody.position.y,200,20) 
rect(boxleftBody.position.x,boxleftBody.position.y,20,100)
rect(boxRightBody.position.x,boxRightBody.position.y,20,100) 
ground.display()
  pap.display()

  keyPressed()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(pap.body,pap.body.position,{x:3,y:-7})
	
	}
}


