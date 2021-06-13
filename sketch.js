var movingRect
var fixedRect
var rect1, rect2, rect3




function setup() {
 createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 fixedRect= createSprite(400, 200, 50, 50);
 rect1= createSprite(25, 200, 10, 20)
 rect2= createSprite(30, 200, 10, 20)
 rect3= createSprite(250, 50, 10, 20)
 fixedRect.velocityX= -5
 rect1.velocityX=5

 movingRect.shapeColor="violet"
 fixedRect.shapeColor="violet"
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
console.log(movingRect.width/2+fixedRect.width/2)
console.log(movingRect.x-fixedRect.x)
 bounce(fixedRect, rect1)
  drawSprites();
}
function bounce(object1,object2)
{ if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 )
   { 
       object1.velocityX=object1.velocityX*-1
       object2.velocityX=object2.velocityX*-1
         } 
 if   (object1.y - object2.y < object2.height/2 + object1.height/2
 && object2.y - object2.y < object2.height/2 + object1.height/2){
   object1.velocityY = object1.velocityY*-1
   object2.velocityY = object2.velocityY*-1
 }

        }
