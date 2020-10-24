var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud1, cloudimage 
var ob1, ob2, ob3, ob4, ob5, ob6
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudimage= loadImage("cloud.png")
  ob1=loadImage("obstacle1.png")
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")&&trex.y>120) {
    trex.velocityY = -10;
    
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  cloud();
  obstacle();
  
  trex.collide(invisibleGround);
  drawSprites();
}

function cloud()
{
  if (World.frameCount % 60===0)
    {
  cloud1=createSprite(600,200,10,10)
  cloud1.addImage("cloud.png",cloudimage)
  cloud1.velocityX=-4;
  cloud1.y=random(50,100)
  cloud1.scale=0.5
    }
  
}

function obstacle()
{
  if (World.frameCount%40===0)
    {
      obstacle1= createSprite(600,160,10,10)
      obstacle1.scale=0.5
      var r=Math.round (random(1,6))
      switch (r)
      {
          case 1: obstacle1.addImage(ob1) 
          break;
          case 2: obstacle1.addImage(ob2) 
          break;
          case 3: obstacle1.addImage(ob3) 
          break;
          case 4: obstacle1.addImage(ob4) 
          break;
          case 5: obstacle1.addImage(ob5) 
          break;
          case 6: obstacle1.addImage(ob6) 
          break;
          default:break;
      }
    obstacle1.velocityX=-4
      
    }
}














