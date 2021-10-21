var bg;
var score=0;
var fishes, garbages, treasure, treasureGroup;

function preload() {
  bg = loadImage("background.jpg");
  manImg = loadImage("fisshermaan.png");
  blueFish = loadImage("blueFish.png");
  fish1Img = loadImage("Fish01_B.png");
  fish2Img = loadImage("Fish03_A.png");
  fish3Img = loadImage("Fish04_A.png");

  bottle1 = loadImage("bottle1.png");
  bottle2 = loadImage("bottle2.png")
  apple = loadImage("apple.png");
  shoe = loadImage("shoe.png");
  tyre = loadImage("tyre.png");
  net = loadImage("net.png");
  garbageBag = loadImage("garbagebag.png");

  tr1Img = loadImage("tr1.png");
  tr2Img = loadImage("tr2.png");
  tr3Img = loadImage("tr3.png");
  tr4Img = loadImage("tr4.png");
  tr5Img = loadImage("tr5.png");
}



function setup() {
  createCanvas(800,400);
  man = createSprite(150,100,200,100);
  man.addImage(manImg);
  
  fishingCord = createSprite(300,170,10,100);

  seaLevel = createSprite(400,230,800,10);

  fishes = new Group()

  garbages = new Group()
  
  treasureGroup = new Group()
}

function draw() {
  background(bg); 
  
  text ("SCORE =" + score,700,50)

 if(keyDown(RIGHT_ARROW)){
   man.x = man.x+2
   fishingCord.x = fishingCord.x+2
 }

 if(keyDown(LEFT_ARROW)){
   man.x = man.x-2
   fishingCord.x = fishingCord.x-2
 }

 if(keyDown(UP_ARROW)){
   man.velocityY = -2;
   fishingCord.velocityY = -2;
 }

 man.velocityY = man.velocityY + .5;
 fishingCord.velocityY = fishingCord.velocityY + .5;

  spawnFishes();
  
  spawnGarbage();

  spawnTreasure();

  fishingCord.isTouching(fishes,fish_destroy);
  fishingCord.isTouching(garbages,garbage_destroy);
  
  fishingCord.isTouching(treasureGroup,treasure_destroy);

  man.collide(seaLevel);
  fishingCord.collide(seaLevel);

  drawSprites();
}

function spawnFishes(){
  if(frameCount%100===0){
fish = createSprite(800,random(150,350));
fish.velocityX = -5;
var rand = Math.round(random(1,4));
switch(rand){
  case 1: fish.addImage(blueFish);
  break;
  case 2: fish.addImage(fish1Img);
  break;
  case 3: fish.addImage(fish2Img);
  break;
  case 4: fish.addImage(fish3Img);
  break;
  default:break;
}

fish.scale = 0.1;
fishes.add(fish);
  }

}
function spawnGarbage(){
  if(frameCount%230===0){
    garbage = createSprite(800,random(200,350));
    garbage.velocityX = -5;
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1: garbage.addImage(bottle1);
      break;
      case 2: garbage.addImage(bottle2);
      break;
      case 3: garbage.addImage(apple);
      break;
      case 4: garbage.addImage(shoe);
      break;
      case 5: garbage.addImage(tyre);
      break;
      case 6: garbage.addImage(net);
      break;
      case 7: garbage.addImage(garbageBag);
      break;
      default:break;
    }
    garbage.scale = 0.5
    garbages.add(garbage);
  }
}

function fish_destroy(fishingCord,fish){
  fish.destroy();
  score = score+4;
  }

  function garbage_destroy(fishingCord,garbage){
    garbage.destroy();
    score = score-3;
  }

  function spawnTreasure(){
    if(frameCount%200===0){
  treasure = createSprite(800,random(150,350));
  treasure.velocityX = -5;
  var rand = Math.round(random(1,5));
  switch(rand){
    case 1: treasure.addImage(tr1Img);
    break;
    case 2: treasure.addImage(tr2Img);
    break;
    case 3: treasure.addImage(tr3Img);
    break;
    case 4: treasure.addImage(tr4Img);
    break;
    case 5: treasure.addImage(tr5Img);
    break;
    default:break;
  }
  
  treasure.scale = 0.5;
  treasure.rotation = treasure.rotation+20;
  treasure.rotateToDirection = true;
  treasureGroup.add(treasure);
    }
  }

  function treasure_destroy(fishingCord,treasure){
    treasure.destroy();
    score = score+25;
    }