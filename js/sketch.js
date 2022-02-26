const Engine = Matter.Engine;
const Body = Matter.Body;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
const Render = Matter.Render;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground,rope,fruit,fruitconstraint;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,680,600,20);

  rope = new Rope(6,{x:45,y:30});

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruitconstraint = new Link(rope,fruit);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  rope.show();

  ellipse(fruit.position.x,fruit.position.y,15,15)
}
