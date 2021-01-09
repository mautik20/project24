const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  ground=new Ground(400,380,800,10);
  dustbin3=new Dustbin(720,305,10,125);
  dustbin2=new Dustbin(580,305,10,125);
  dustbin1=new Dustbin(650,370,150,10);
  garbage=new Garbage(50,350,50);



}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
        
    dustbin3.display(); 
    dustbin2.display();    
    dustbin1.display();   
    garbage.display();
}