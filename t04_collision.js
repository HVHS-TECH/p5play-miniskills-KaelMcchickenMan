/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(700, 700);
world.gravity.y = 3;
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
Floor2 = new Sprite(15, 200, 2,180, 's');

Floor2.color = 'rgb(148, 108, 223)';
Floor3 = new Sprite(200, 75, 2,180, 's');

Floor.color = 'rgb(148, 108, 223)';
Tomato.rotationSpeed = 2;	
Floor.rotationSpeed = 4;
Floor.friction = 2;
Tomato.bounciness = 0.96;	
Rectangle.rotationSpeed = 2;

Rectangle.vel.x = 0.25;
Rectangle.vel.y = 0.1;
Circle.vel.x = 0.1;
Circle.vel.y = 0.05;
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