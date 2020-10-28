const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup(){

  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  for(var i = 75; i < 300; i = i + 200){
    for(var j = 40; j <= width; j = j + 50){
      plinkos.push(new Plinko(j, i));
    }
  }

  for(var i = 175; i < 400; i = i + 200){
    for(var j = 15; j <= width - 10; j = j + 50){
      plinkos.push(new Plinko(j, i));
    }
  }

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  Engine.run(engine);

}

function draw(){

  background(0);

  ground.display();

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(Math.round(random(width/2 - 10, width/2 + 10)), 10));
  }

  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }

}