/*******************************************************/
// P5.play: t23_displaytext
// Display text
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function setup() {
	 let isOnFloor = 0;
	console.log("setup: ");
	cnv = new Canvas(700, 700);

	world.gravity.y = 25;
	floorGroup = new Group();
	Circle = new Sprite(125, 25, 25, 25, 'd');

	Circle.color = 'rgb(131, 79, 255)';

	Floor = new Sprite(350, 670, 700, 75, 'k')
	Floor.color = 'rgb(255, 0, 0)';
	Floor2 = new Sprite(500, 600, 50, 700, 'k')
	Floor2.color = 'rgb(255, 0, 0)';
	floorGroup.add(Floor);
	floorGroup.add(Floor2);
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('rgb(235, 95, 95)'); 

// text 
text("Hello World", 50, 50) 


// keyboard stuff
Circle.vel.x = Circle.vel.x / 1.1;
Circle.rotationSpeed = Circle.rotationSpeed / 1.05;
	if (kb.pressing ('left')) {

		Circle.vel.x = -3;
		Circle.rotationSpeed = -5;

	} 
	if (kb.pressing ('right')) {

	Circle.vel.x = 3;
	Circle.rotationSpeed = 5;
	} 
	if (kb.pressing ('up') && isOnFloor == 1) {

	Circle.vel.y = -10;
	} 
	 if (Circle.colliding(floorGroup)) {
 isOnFloor = 1
} else if (!Circle.colliding(floorGroup)) {
 isOnFloor = 0
}

}


/*******************************************************/
//  END OF APP
/*******************************************************/