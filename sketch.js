var rectangle,rectangle2;
var box,box2;

function setup() {
  createCanvas(800,400);

  box=createSprite(200,300,80,50);
  box2=createSprite(500,300,80,50);

  box.shapeColor="blue";
  box2.shapeColor="brown";

  box.debug=true;
  box2.debug=true;

  box.velocityX=4;
  box2.velocityX=-4;

 rectangle=createSprite(200,200,50,100)
 rectangle2=createSprite(300,200,50,100)
 rectangle.debug=true;

 rectangle.shapeColor="red";
 rectangle2.shapeColor="green";
 rectangle2.debug=true;

}

function draw() {
  background(0); 
 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  
  if(rectangle2.x-rectangle.x<rectangle.width/2+rectangle2.width/2&&
    rectangle.x-rectangle2.x<rectangle.width/2+rectangle2.width/2&&
    rectangle2.y-rectangle.y<rectangle.height/2+rectangle2.height/2&&
    rectangle.y-rectangle2.y<rectangle.height/2+rectangle2.height/2){
    rectangle.shapeColor="white";
    rectangle2.shapeColor="white";
  }else {
    rectangle.shapeColor="red";
    rectangle2.shapeColor="green";
  }

if(box.x-box2.x<box.width/2+box.width/2&& box2.x-box.x<box.width/2+box2.width/2){
  box.velocityX=box.velocityX*(-1);
  box2.velocityX=box2.velocityX*(-1);

}
if(box.y-box2.y<box.height/2+box2.height/2&&
  box2.y-box.y<box.height/2+box2.height/2){
    box.velocityY=box.velocityY*(-1);
    box2.velocityY=box2.velocityY*(-1);
  }

  drawSprites();
}