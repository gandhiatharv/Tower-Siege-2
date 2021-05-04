
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3,ground4;
var holder;
var box1;
var ball;
var slingshot;
var polygonIMG;

function preload()
{
   polygonIMG=loadImage("yellow.png");
}

function setup() {
  createCanvas(1200,500);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ball = createSprite(100,200,20)
  ground3 = new Ground(600,490,1200,20);

  ground1 = new Ground2(500,390,250,12);
  ground2 = new Ground2(900,250,200,12);
  //ground4 = new Ground(80,600,20,10);

  box1 = new Box(410,370,30,40);
  box2 = new Box(440,370,30,40);
  box3 = new Box(470,370,30,40);
  box4 = new Box(500,370,30,40);
  box5 = new Box(530,370,30,40);
  box6 = new Box(560,370,30,40);
  box7 = new Box(590,370,30,40);

  box8 = new Box(440,330,30,40);//460
  box9 = new Box(470,330,30,40);
  box10 = new Box(500,330,30,40);
  box11 = new Box(530,330,30,40);
  box12 = new Box(560,330,30,40);

  box13 = new Box(470,290,30,40);//420
  box14 = new Box(500,290,30,40);
  box15 = new Box(530,290,30,40);

  box16 = new Box(500,250,30,40);

  box17 = new Box(840,225,30,40);
  box18 = new Box(870,225,30,40);
  box19 = new Box(900,225,30,40);
  box20 = new Box(930,225,30,40);
  box21 = new Box(960,225,30,40);

  box22 = new Box(870,185,30,40);
  box23 = new Box(900,185,30,40);
  box24 = new Box(930,185,30,40);

  box25 = new Box(900,145,30,40);

  ball = Bodies.circle(400,200,20);
  World.add(world,ball);

  //slingshot = new SlingShot(ball,{x:80,y:530});
  slingshot = new SlingShot(ball,{x:50,y:200});

  

  Engine.run(engine);

}

function draw() {
  background(0); 
  //rectMode(CENTER);
  //Engine.update(engine);

  textSize(18);
  fill("yellow");
  stroke("white");
  text("Drag the hexagon stone and release it, to launch it toward the blocks. Press space to try again.", 300, 60);
  stroke("brown");
  fill("brown");

  ground1.display();
  ground2.display();
  ground3.display();
  //ground4.display();
  // ball.display();
  
  fill("lightgreen");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("skyblue");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink")
  box13.display();
  box14.display();
  box15.display();
  fill("orange");
  box16.display();
  fill("red");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("yellow");
  box22.display();
  box23.display();
  box24.display();
  fill("purple");
  box25.display();


  

  imageMode(CENTER)
  image(polygonIMG ,ball.position.x,ball.position.y,40,40);

  slingshot.display();
   
  //drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(ball, {x:150, y:400})
    slingshot.attach(ball);
  }
}