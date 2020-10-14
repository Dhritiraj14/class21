var movingRectangle,fixedRectangle;

var gameObject1,gameObject2,gameObject3,gameObject4;





function setup() {
  createCanvas(800,400);
  movingRectangle=createSprite(400, 200, 80, 30);
movingRectangle.shapeColor="red";

  fixedRectangle=createSprite(400,200,50,80);
  fixedRectangle.shapeColor="yellow";

  gameObject1=createSprite(100,50,50,50);
  gameObject1.shapeColor="yellow";
  gameObject2=createSprite(200,50,50,50);
  gameObject2.shapeColor="yellow";
  gameObject3=createSprite(300,50,50,50);
  gameObject3.shapeColor="yellow";
  gameObject4=createSprite(400,50,50,50);
  gameObject4.shapeColor="yellow";
}

function draw() {
  background(255,255,255);
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  console.log(movingRectangle.x-fixedRectangle.x);
  console.log(fixedRectangle.width/2+movingRectangle.width/2);
  if(isTouching(gameObject2,movingRectangle)){
    gameObject2.shapeColor="green";
    movingRectangle.shapeColor="green";

  }
  else{
    gameObject2.shapeColor="pink";
    movingRectangle.shapeColor="pink";
  }



  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x < object2.width/2+object1.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2 &&
     object1.y-object2.y < object2.height/2+object1.height/2&&
     object2.y-object1.y < object2.height/2+object1.height/2){
return true;

  }
else{
  return false;

}
}