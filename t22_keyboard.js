/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(700, 700);

	world.gravity.y = 50;

	Circle = new Sprite(125, 25, 25, 25, 'd');

	Circle.color = 'rgb(131, 79, 255)';

	Floor = new Sprite(350, 670, 700, 75, 'k')
	Floor.color = 'rgb(255, 0, 0)';
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('rgb(235, 95, 95)'); 
Circle.vel.x = Circle.vel.x / 1.1;
Circle.vel.y = Circle.vel.y / 1.1;
Circle.roatationSpeed = Circle.rotationSpeed / 1.05;
	if (kb.pressing ('left')) {

		Circle.vel.x = -3;
		Circle.rotationSpeed = -5;

	} 
	if (kb.pressing ('right')) {

	Circle.vel.x = 3;
	Circle.rotationSpeed = 5;
	} 
	if (kb.pressing ('up') && Circle.y <= 600) {

	Circle.vel.y = -25;
	} 
	
	}


/*******************************************************/
//  END OF APP
/*******************************************************/