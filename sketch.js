var backgroundImg
var boy
var boyImg 
var snow 
var snowImg
function setup() {
  
  createCanvas(1000,600);
  
  boy = createSprite(600,300)
  boy.addImage(boyImg)
  boy.scale = .8
  


}

function Snowfall(){
 if(frameCount% 80 === 0){
   snow = createSprite(400,10,50,50)
   snow.x = Math.round(random(10,900))
   snow.velocityY = 2
   snow.addImage(snowImg)
   snow.scale = .09
 }

}
function preload(){
backgroundImg = loadImage("snow1.jpg")
boyImg = loadImage("boy.png")
snowImg = loadImage("snow5.webp")
}

function draw() {
  background(backgroundImg);  
  Snowfall()
  drawSprites();
}