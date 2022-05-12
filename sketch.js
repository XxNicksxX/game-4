var fundo 
var player,playerimg,playerrun
function preload(){
  
fundo=loadImage("ala.gif.gif")
playerimg=loadImage("eu.gif")
playerrun=loadImage("eurun.gif")

}

function setup() {
	createCanvas(900,500);
    player=createSprite(-250,150,20,20)
    player.addImage("parado",playerimg)
    player.addImage("run",playerrun)
    player.scale= 0.16
	//Crie os Corpos aqui.



  player.mirrorX(-1)
}


function draw() {
background("black");
  image(fundo,-360,-100,1000,600)
  
  controls()
  drawSprites();
  camera.x= player.x 
  camera.y= player.y
}
  function controls(){
   
    if(keyDown("D")){
      player.changeImage("run")
      player.x += 10 
      player.mirrorX(-1)
    }
    
    else if(keyDown("A")){
      player.changeImage("run")
      player.x -= 10 
      player.mirrorX(+1)
    }
     else {
       player.changeImage("parado")
     }
  }


