const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrop = 100;
var umbrella, rand, night;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreateFrame = 0;

function preload(){
    night = loadImage("images/nightrain.jpg");
    thunder1 = loadImage("images/thunderbolt/1");
    thunder2 = loadImage("images/thunderbolt/2");
    thunder3 = loadImage("images/thunderbolt/3");
    thunder4 = loadImage("images/thunderbolt/4");
    
}

function setup(){

    var canvas = createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500);

    for(var i = 0; i < maxDrop; i++){
        drops.push(new createDrop(random(0,500),random(0,500)));
    }
}

function draw(){

    Engine.update(engine);
    background(night);


    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        Thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : Thunder.addImage(thunder1);
            break;
            case 2 : Thunder.addImage(thunder2);
            break;
            case 3 : Thunder.addImage(thunder3);
            break;
            case 4 : Thunder.addImage(thunder4);
            break;
            default: break;
        }
        
        Thunder.scale= 0.6;
    }

    if(thunderCreateFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; 1 < maxDrop; i++){
        drops[i].display();
        drops[i].update();
    }
    drawSprites();

    
}   

