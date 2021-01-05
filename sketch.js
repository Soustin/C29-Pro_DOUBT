const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 350, 300, 9);
    ground2 = new Ground(1000, 200, 250, 9);
    
    box1 = new Box(500, 340, 30, 50);
    box2 = new Box(520, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);
    box1 = new Box(500, 340, 30, 50);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground2.display();

    box1.display();
    box2.display();
    
}

