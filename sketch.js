
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
	}
	
	ground = Bodies.rectangle(400,690,800,15,ground_options);
    World.add(world,ground);

    paper = new Paper(100,300);
	Engine.run(engine);

	fill("brown");
	box1= new Dustbin(500,680,200,18);
	box2 = new Dustbin(390,635,18,100);
	box3 = new Dustbin(590,635,18,100);

}


function draw() {
  background(0);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,15);
  
  drawSprites();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-45});
	}
}



