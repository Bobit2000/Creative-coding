const { Engine, World, Bodies, Body, Composite, Mouse, MouseConstraint } = Matter;

let engine;
let world;
let balls = [];
let ground;
let wall;
let wall2;
let pickUp;
let TNTimg;
let TNTs = [];

function preload() {
  TNTimg = loadImage('MCTNT.jpg'); 
}

function setup() {
    createCanvas(800, 400);
    
    engine = Engine.create();
    world = engine.world;
    
    ground = new Boundary(400, height, width, 100);
    wall = new Boundary(0, 200, 50, 400);
    wall2 = new Boundary(800, 200, 50, 400);
    
  for(let i = 0; i < 100; i++){
    balls.push(new Ball(400, 200, random(10, 20))); 
  }
  
}

function mouseClicked() {
  TNTs.push(new TNT(mouseX,mouseY));
}


function draw() {
    
    background(51);
    Engine.update(engine);
    for (let i = 0; i < balls.length; i++) {
        balls[i].show();
    }
  for (let i = 0; i < TNTs.length; i++) {
        TNTs[i].timer();
        TNTs[i].show();
    }
    ground.show();
  wall.show();
  wall2.show();
}


