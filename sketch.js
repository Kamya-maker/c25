
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinImg,paperImg

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(400,670,800,10);
     ball = new Ball(100,100,20);
     basket1= new Basket();
     basket2= new Basket();
     basket3= new Basket();
     

     var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  
  background("white");
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


