var dog,happydog,database,foodS,foodStock;
function preload()
{

  
  happydog=loadImage("sprites/dogImg1.png");
  dog=loadImage(sprites/dogImg.png);
}


function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(200,200);
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  dog.addImage(dog);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}



