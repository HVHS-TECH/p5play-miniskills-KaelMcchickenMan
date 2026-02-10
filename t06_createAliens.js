/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(700, 700);
world.gravity.y = 3;
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
for (i = 0; i < Alien; i++) {

  alien = new Sprite(Alien);

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('rgb(235, 95, 95)');
}

/*******************************************************/
//  END OF APP
/*******************************************************/