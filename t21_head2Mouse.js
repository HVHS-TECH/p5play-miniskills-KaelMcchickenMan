/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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

Tomato.rotationSpeed = 2;	
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
if (mouse.pressing()) {

Circle.moveTo(mouseX, mouseY, 5);

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/