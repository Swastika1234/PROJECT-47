var bgImg,boy,boyImg,sun,sunImg,virus,virus1,virus2,virus3,virus4,virus5,bomb,bombImg,chomper,chomperImg,shooter,
shooterImg,shooter2,shooter2Img,pumpkin,pumpkinImg,flower,flowerImg,plant,plantImg
var bg



function preload(){
bgImg=loadImage("background.png")
boyImg=loadImage("boy.png")
sunImg=loadImage("sun.png")
virus1=loadImage("virus 1.png")
virus2=loadImage("virus 2.png")
virus3=loadImage("virus 3.png")
virus4=loadImage("virus 4.png")
virus5=loadImage("virus 5.png")
bombImg=loadImage("cherry bomb.png")
chomperImg=loadImage("chomper.png")
shooterImg=loadImage("peashooter.png")
shooter2Img=loadImage("snow peashooter.png")
pumpkinImg=loadImage("pumpkin.png")
flowerImg=loadImage("sunflower.png")
plantImg=loadImage("threepeater.png")
}
function setup() {
  createCanvas(1350,650);
 bg=createSprite(750, 600, 2000, 100);
 bg.shapeColor="green"
boy=createSprite(100,600,10,10)
boy.addImage(boyImg)
boy.scale=0.09
// plant=createSprite(350,550,10,10)
// plant.addImage(plantImg)
// plant.scale=0.2
c1=createSprite(150,550,10,200)
c1.shapeColor="black"
c2=createSprite(82,450,200,10)
c2.shapeColor="black"
  
}


function draw() {
  background("yellow");
  for(var i=80;i<400;i+=120){
        plant=createSprite(40,i,10,10)
        plant.addImage(plantImg)
        plant.scale=0.2
        
  }  
  for(var i=50;i<500;i+=120){
        pumpkin=createSprite(140,i,10,10)
        pumpkin.addImage(pumpkinImg)
        pumpkin.scale=0.2
  }
  for(var i=80;i<400;i+=120){
        shooter=createSprite(240,i,10,10)
        shooter.addImage(shooterImg)
        shooter.scale=0.2
  }
  for(var i=50;i<500;i+=120){
        pumpkin=createSprite(340,i,10,10)
        pumpkin.addImage(pumpkinImg)
        pumpkin.scale=0.2
  }
  for(var i=80;i<400;i+=120){
        shooter2=createSprite(440,i,10,10)
        shooter2.addImage(shooter2Img)
        shooter2.scale=0.3
  }
   for(var i=50;i<500;i+=120){
        pumpkin=createSprite(540,i,10,10)
        pumpkin.addImage(pumpkinImg)
        pumpkin.scale=0.2
  }
  for(var i=80;i<400;i+=120){
        chomper=createSprite(640,i,10,10)
        chomper.addImage(chomperImg)
        chomper.scale=0.09
  } 
   for(var i=50;i<500;i+=120){
        pumpkin=createSprite(740,i,10,10)
        pumpkin.addImage(pumpkinImg)
        pumpkin.scale=0.2
  }
   for(var i=80;i<400;i+=120){
        bomb=createSprite(840,i,10,10)
        bomb.addImage(bombImg)
        bomb.scale=0.4
   }   
    for(var i=50;i<500;i+=120){
        pumpkin=createSprite(940,i,10,10)
        pumpkin.addImage(pumpkinImg)
        pumpkin.scale=0.2
  }
       
         




 
  spawnVirus();
  drawSprites();
  textSize(20)
  fill ("black")
  text(mouseX+","+mouseY,mouseX,mouseY);
  textSize(20)
  fill("white")
  text("PROTECT THE BOY BY DESTROYING THE VIRUS",200,600)
  textSize(20)
  fill("white")
  text("PRESS SPACE TO ACTIVATE BULLETS,HIT THE VIRUS 5 TIMES TO DESTROY IT",200,650)

}
function spawnVirus() {
  if(frameCount % 60 === 0) {
    var virus = createSprite(1219,73,10,10);
    //obstacle.debug = true;
    virus.velocityX = -(6);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: virus.addImage(virus1);
              break;
      case 2: virus.addImage(virus2);
              break;
      case 3: virus.addImage(virus3);
              break;
      case 4: virus.addImage(virus4);
              break;
      case 5: virus.addImage(virus5);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    virus.scale = 0.09;
   }
}
