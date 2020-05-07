var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, sun;

function setup() {
  createCanvas(1300,400);
  sun = createSprite(100, 200, 150, 150);
  sun.shapeColor = "yellow";
  mercury = createSprite(400, 200, 75, 75);
  mercury.shapeColor = "brown";
  venus = createSprite(500, 200, 85, 85);
  venus.shapeColor = "white";
  earth = createSprite(600, 200, 90, 90);
  earth.shapeColor = "blue";
  mars = createSprite(700, 200, 80, 80);
  mars.shapeColor = "red";
  jupiter = createSprite(825, 200, 120, 120);
  jupiter.shapeColor = "orange";
  saturn = createSprite(950, 200, 115, 115);
  saturn.shapeColor = "pink";
  uranus = createSprite(1075, 200, 110, 110);
  uranus.shapeColor = "purple";
  neptune = createSprite(1200, 200, 120, 120);
  neptune.shapeColor = "blue";
}
function draw() {
  background(0,0,0);
  if (frameCount%25===0){
    sun.width = sun.width+20;
    sun.height = sun.height+20;
  }
  
  destroy(sun,mercury);
  destroy(sun,venus);
  destroy(sun,earth);
  destroy(sun,mars);
  destroy(sun,jupiter);
  destroy(sun,saturn);
  destroy(sun,uranus);
  destroy(sun,neptune);
  drawSprites();
}
function destroy(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2 && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2 && object2.y-object1.y<object2.height/2+object1.height/2){
  object2.shapeColor = "yellow";
  }
}