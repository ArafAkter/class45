var player

var score = 0
var gameState = "play"

function preload(){
  die = loadSound("collided.wav")
  coin1 = loadSound("jump.wav")

  enemy1 = loadImage("trex_collided.png")

  gold_img = loadImage("sun.png")
}


function setup(){
  createCanvas(windowWidth/2 + 50,windowHeight/2 +50)
  player = createSprite(200,200,100,100)
  player.shapeColor = "blue"
  sprite = createSprite(100,100,60,30)
  obstacle1 = createSprite(500,600,30,30)
  obstacle2 = createSprite(-100,-200,30,30)
  obstacle3 = createSprite(500,-200,30,30)
  obstacle4 = createSprite(-100,600,30,30)

  
  obstacle1.shapeColor = "red"
  obstacle2.shapeColor = "red"
  obstacle3.shapeColor = "red"
  obstacle4.shapeColor = "red"
  
  barrier1 = createSprite(1500,200,400,2800)
  barrier2 = createSprite(-1100,200,400,2800)
  barrier3 = createSprite(200,1500,2800,400)
  barrier4 = createSprite(200,-1100,2800,400)
  
  coinGroup = new Group()
}

function draw(){
  background("cyan")
  
  obstacle1.collide(obstacle2)
  obstacle2.collide(obstacle3)
  obstacle3.collide(obstacle1)
  
  obstacle2.collide(obstacle1)
  obstacle3.collide(obstacle2)
  obstacle1.collide(obstacle3)
  
  obstacle4.collide(obstacle1)
  obstacle4.collide(obstacle2)
  obstacle4.collide(obstacle3)
  
  player.collide(barrier1)
  player.collide(barrier2)
  player.collide(barrier3)
  player.collide(barrier4)
  
  //camera.zoom = 1.2
  //text(windowHeight - (windowHeight/2 + 50),200,100)
  
  if(gameState === "play"){
    if(keyDown("up") || keyDown("w")){
      player.y -= 5
    }
    if(keyDown("down")|| keyDown("s")){
  player.y += 5
}
if(keyDown("left") || keyDown("a")){
  player.x -= 5
}
if(keyDown("right") || keyDown("d")){
  player.x += 5
}
spawnCoin()

obstacle1.addImage("e",enemy1)
obstacle1.scale = 0.1

obstacle2.addImage("e",enemy1)
obstacle2.scale = 0.1

obstacle3.addImage("e",enemy1)
obstacle3.scale = 0.1

obstacle4.addImage("e",enemy1)
obstacle4.scale = 0.1

if(player.isTouching(obstacle1) || player.isTouching(obstacle2)|| player.isTouching(obstacle3)|| player.isTouching(obstacle4)){
gameState = "end"
player.destroy()
die.play(); 
}
if(player.x > obstacle1.x - 60 && player.x < obstacle1.x + 60 && player.y < obstacle1.y){
  obstacle1.velocityY = -4.5
  obstacle1.velocityX = 0

}

if(player.x > obstacle1.x - 60 && player.x < obstacle1.x + 60 && player.y > obstacle1.y){
  obstacle1.velocityY = 4.5
  obstacle1.velocityX = 0

}

if(player.y > obstacle1.y - 60 && player.y < obstacle1.y + 60 && player.x < obstacle1.x){
  obstacle1.velocityX = -4.5
  obstacle1.velocityY = 0
  obstacle1.mirrorX(-1);
}

if(player.y > obstacle1.y - 60 && player.y < obstacle1.y + 60 && player.x > obstacle1.x){
  obstacle1.velocityX = 4.5
  obstacle1.velocityY = 0
  obstacle1.mirrorX(1)
}


if(player.x > obstacle2.x - 60 && player.x < obstacle2.x + 60 && player.y < obstacle2.y){
  obstacle2.velocityY = -4.5
  obstacle2.velocityX = 0
}

if(player.x > obstacle2.x - 60 && player.x < obstacle2.x + 60 && player.y > obstacle2.y){
  obstacle2.velocityY = 4.5
  obstacle2.velocityX = 0
}

if(player.y > obstacle2.y - 60 && player.y < obstacle2.y + 60 && player.x < obstacle2.x){
  obstacle2.velocityX = -4.5
  obstacle2.velocityY = 0
  obstacle2.mirrorX(-1);
}

if(player.y > obstacle2.y - 60 && player.y < obstacle2.y + 60 && player.x > obstacle2.x){
  obstacle2.velocityX = 4.5
  obstacle2.velocityY = 0
  obstacle2.mirrorX(1);
}


if(player.x > obstacle3.x - 60 && player.x < obstacle3.x + 60 && player.y < obstacle3.y){
  obstacle3.velocityY = -4.5
  obstacle3.velocityX = 0
}

if(player.x > obstacle3.x - 60 && player.x < obstacle3.x + 60 && player.y > obstacle3.y){
  obstacle3.velocityY = 4.5
  obstacle3.velocityX = 0
}

if(player.y > obstacle3.y - 60 && player.y < obstacle3.y + 60 && player.x < obstacle3.x){
  obstacle3.velocityX = -4.5
  obstacle3.velocityY = 0
  obstacle3.mirrorX(-1);
}

if(player.y > obstacle3.y - 60 && player.y < obstacle3.y + 60 && player.x > obstacle3.x){
  obstacle3.velocityX = 4.5
  obstacle3.velocityY = 0
  obstacle3.mirrorX(1);
}


if(player.x > obstacle4.x - 60 && player.x < obstacle4.x + 60 && player.y < obstacle4.y){
  obstacle4.velocityY = -4.5
  obstacle4.velocityX = 0
}

if(player.x > obstacle4.x - 60 && player.x < obstacle4.x + 60 && player.y > obstacle4.y){
  obstacle4.velocityY = 4.5
  obstacle4.velocityX = 0
}

if(player.y > obstacle4.y - 60 && player.y < obstacle4.y + 60 && player.x < obstacle4.x){
  obstacle4.velocityX = -4.5
  obstacle4.velocityY = 0
  obstacle4.mirrorX(-1);
}

if(player.y > obstacle4.y - 60 && player.y < obstacle4.y + 60 && player.x > obstacle4.x){
  obstacle4.velocityX = 4.5
  obstacle4.velocityY = 0
  obstacle4.mirrorX(1);
}
}
for(var i = 0; i < coinGroup.length; i++){
  if(coinGroup.get(i).isTouching(player)){
  coinGroup.get(i).destroy()
  score = score + 1
  coin1.play();
  }
}



camera.position.x = player.x
camera.position.y = player.y
  drawSprites();
if(gameState === "end"){
  textAlign(CENTER)
  textSize(30)
  fill("darkblue")
  text("GAME OVER!",player.x, player.y)
 
}
 //text(player.x + "    " + player.y,player.x - 75,player.y - 75)
fill(0)
textSize(20)
 text(score,player.x + 250,player.y - 175)




}

function spawnCoin() {

  if (frameCount % 225 === 0) {
    var coin = createSprite(windowWidth + 100,200,17.5,17.5);
    coin.shapeColor=("gold");
    coin.y = Math.round(random(-850,1250))   
    coin.x = Math.round(random(-800,1250))
   coin.addImage("gold1",gold_img)
   coin.scale = 0.04
    var rand = Math.round(random(1,5));
  
     //assign lifetime to the variable
    coin.lifetime = 3000;
   
    //adjust the depth 
    coin.depth = 0
 
   
   
    
    //add each cloud to the group
    coinGroup.add(coin);
  
  }
  
}