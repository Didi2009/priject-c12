
var runner, runnerimage, runnerrunning
var path, pathimage
var coin, coinimage
var energydrink, energydrinkimage


function preload(){
  //pre-load images
  runnerrunning = loadAnimation("Runner-1.png","Runner-2.png")

  pathimage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,60,50)
  path.addImage(pathimage)
  path.velocityY=6

  runner = createSprite(200,330,50,40)
runner.addAnimation("running", runnerrunning)
runner.scale=0.1


}

function draw() {
  background(0);

 runner.x=World.mouseX
 
 if (path.y > 400){
   path.y = height/2
 }
































  drawSprites()

}

