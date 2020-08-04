
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg,paperImg

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(400,670,800,20);
     ball = new Ball(100,100,20);
     basket1= new Basket(500,610,20,100);
     basket2= new Basket(600,650,180,20);
     basket3= new Basket(700,610,20,100);
     

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  
  background(0);
  ground.display();
  ball.display();
  basket1.display();
  basket2.display();
  basket3.display();


  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-60} )
  }

}


