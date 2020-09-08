const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create(); 
  world = engine.world;
  ground = new Ground(240,height,width,20);
  
//Creating Divisions
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

//Creating 4 Rows of Plinkos
  for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

  for (var j = 15; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

  for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

  for (var j = 15; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    }
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  
//Displaying Divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

 //Displaying Plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

 //Creating Particle 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

 //Displaying Particles 
 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  drawSprites();
}