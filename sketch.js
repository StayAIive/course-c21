const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var b_up, b_right;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);

  b_up = createImg ("up.png");
  b_up.position(70,70);
  b_up.size(25,25);
  b_up.mouseClicked(v_force);

  b_right = createImg ("right.png");
  b_right.position(330,70);
  b_right.size(25,25);
  b_right.mouseClicked(h_force);

  var options = {
    restitution: 1.0
  }

  ball = Bodies.circle(200, 200, 20, options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);

  fill ("Yellow");

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 20);


  Engine.update(engine);
}

function h_force() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function v_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}