const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var manImg,man
var particles = [];
var cloudimg,cloud,cloud2


var divisionHeight = 300;
function preload(){
  manImg = loadImage('man2.png')
  cloudimg = loadImage('cloud2.png')
}

function setup() {
  createCanvas(480,800);
  var cloud = createSprite(240,110)
  cloud.addImage(cloudimg)
  cloud.scale = 1.01
  engine = Engine.create();
  world = engine.world;

  
  
  man = new Man(240,720);
  ground = new Ground(240,795,width,10);

  
}

function draw() {
  background(0);
  drawSprites();
  rectMode(CENTER);
  ellipseMode(RADIUS);
   
  fill(255);
  Engine.update(engine);

  ground.display();
  man.display()

 
 
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }



    if (frameCount%0.5 === 0) {
      particles.push(new Particle(random(0,480),222.5,5));
    } 
}
