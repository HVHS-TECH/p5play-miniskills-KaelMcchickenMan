/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {

  imgBG  = loadImage('assets/images/space.jfif');

  imgFace = loadImage('assets/images/face.png');

}

function setup() {
	console.log("setup: ");
cnv = new Canvas(700, 700);
alienGroup = new Group();
alien2Group = new Group();
world.gravity.y = 3;
randNum = random(1, 10)
wallLH  = new Sprite(0, 350, 8, 700, 'k');

wallLH.color = 'rgb(255, 32, 32)';

wallRH  = new Sprite(700, 350, 8, 700, 'k');

wallTop = new Sprite(350, 0, 700, 8, 'k');

wallBot = new Sprite(350, 700, 700, 8, 'k');
	Rectangle = new Sprite(99, 15, 25, 25);
Rectangle.color = 'rgb(0, 255, 0)';
Circle = new Sprite(125, 25, 25);

Circle.color = 'rgb(131, 79, 255)';
Tomato = new Sprite(150, 50, 25,75, 'd');

Tomato.color = 'rgb(243, 158, 0)';
Tomato2 = new Sprite(150, 250, 100,75, 's');

Tomato2.color = 'rgb(99, 92, 78)';
Floor = new Sprite(100, 200, 100,2, 'k');

Floor.color = 'rgb(104, 82, 41)';
Floor6 = new Sprite(490, 600, 100,2, 'k');

Floor6.color = 'rgb(20, 247, 197)';
Floor2 = new Sprite(15, 200, 2,180, 's');

Floor2.color = 'rgb(148, 108, 223)';
Floor3 = new Sprite(200, 75, 2,180, 's');

Floor.color = 'rgb(148, 108, 223)';
Tomato.rotationSpeed = 2;	
Floor.rotationSpeed = 4;
Floor6.rotationSpeed = 10;
Floor.friction = 2;
Tomato.bounciness = 0.96;	
Rectangle.bounciness = 0.96;
Rectangle.rotationSpeed = 2;

Circle.bounciness = 1;
Rectangle.vel.x = 0.25;
Rectangle.vel.y = 0.1;
Circle.vel.x = 0.1;
Circle.vel.y = 0.05;
Alien2 = new Sprite(150, 50, 20,20, 'd');

  Alien2.vel.x = randNum;

  Alien2.vel.y = randNum;

  Alien2.bounciness = 0.9;

  Alien2.friction = 0.25;

Alien2.image = (imgFace);
imgFace.resize(50, 50);

for (i = 0; i < 15; i++) {

  Alien = new Sprite(500, 50, 15,15, 'd');

  Alien.vel.x = randNum;

  Alien.vel.y = randNum;

  Alien.bounciness = 0.7;

  Alien.friction = 0.25;

  alienGroup.add(Alien);
  alienGroup.collides(Alien2, func2Call);
  
}


  
function func2Call(_ssss, _Alien2) {

	// Delete the alien which was hit
	_ssss.remove();

	}

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/