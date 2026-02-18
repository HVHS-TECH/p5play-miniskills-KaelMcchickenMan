//BEGIN
function setup() {
	 let isOnFloor = 0;
	console.log("setup: ");
	cnv = new Canvas(700, 700);
	
	world.gravity.y = 25;
	floorGroup = new Group();
	hitboxGroup = new Group();
    ladderGroup = new Group();
	
    

// BACKGROUND

	Bg = new Sprite(400, 550, 50, 200, 'n')
	Bg.color = 'rgb(156, 0, 0)';
	Bg.strokeWeight = 0; 
    Bg2 = new Sprite(190, 580, 50, 200, 'n')
	Bg2.color = 'rgb(156, 0, 0)';
	Bg2.strokeWeight = 0; 

// FLOOR

	Floor = new Sprite(350, 670, 700, 75, 'k')
	Floor.color = 'rgb(255, 0, 0)';
	Floor.strokeWeight = 0; 

	Floor2 = new Sprite(500, 650, 50, 200, 'k')
	Floor2.color = 'rgb(255, 0, 0)';
	Floor2.strokeWeight = 0; 
	
	Floor3 = new Sprite(400, 450, 50, 20, 'k')
	Floor3.color = 'rgb(255, 0, 0)';
	Floor3.strokeWeight = 0; 

    Floor4 = new Sprite(190, 475, 50, 20, 'k')
	Floor4.color = 'rgb(255, 0, 0)';
	Floor4.strokeWeight = 0; 
    Floor5 = new Sprite(155, 565, 20, 200, 'k')
	Floor5.color = 'rgb(255, 0, 0)';
	Floor5.strokeWeight = 0; 
	
// HITBOXES
	hitbox = new Sprite(350, 636, 700, 10, 'k')
	hitbox.color = 'rgb(255, 0, 242)';
	hitbox.strokeWeight = 0; 
	hitbox.color.setAlpha(1);

	hitbox2 = new Sprite(500, 554, 50, 10, 'k')
	hitbox2.color = 'rgb(255, 0, 242)';
	hitbox2.strokeWeight = 0; 
	hitbox2.color.setAlpha(1);

	hitbox3 = new Sprite(400, 442, 50, 5, 'k')
	hitbox3.color = 'rgb(255, 0, 242)';
	hitbox3.strokeWeight = 0; 
	hitbox3.color.setAlpha(1);

    hitbox4 = new Sprite(180, 468, 70, 10, 'k')
	hitbox4.color = 'rgb(255, 0, 242)';
	hitbox4.strokeWeight = 0; 
	hitbox4.color.setAlpha(1);

// LADDERS
ladder = new Sprite(50, 400, 15, 200, 'k')
	ladder.color = 'rgb(255, 146, 146)';
	ladder.strokeWeight = 0; 

// PLAYER
Circle = new Sprite(350, 550, 25, 25, 'd');
Circle.color = 'rgb(131, 79, 255)';

// FOREGROUND



// GROUPS
	floorGroup.add(Floor);
	floorGroup.add(Floor2);
	
	hitboxGroup.add(hitbox);
	hitboxGroup.add(hitbox2);
	hitboxGroup.add(hitbox3);
    hitboxGroup.add(hitbox4);
    ladderGroup.add(ladder);
}
	
// DRAW
function draw() {
	background('rgb(235, 95, 95)'); 


// TEXT
text("Mouse X = " + round(mouse.x), 350, 350);
text("Mouse Y = " + round(mouse.y), 350, 375);

// KEYBOARD
Circle.vel.x = Circle.vel.x / 1.1;
Circle.rotationSpeed = Circle.rotationSpeed / 1.05;
	if (kb.pressing ('a') && !kb.pressing ('e')) {

		Circle.vel.x = -3;
		Circle.rotationSpeed = -5;

	} 
	if (kb.pressing ('d') && !kb.pressing ('e')){

	Circle.vel.x = 3;
	Circle.rotationSpeed = 5;
	} 
    if (kb.pressing ('a') && kb.pressing ('e')) {

		Circle.vel.x = -1;
		Circle.rotationSpeed = -2.5;

	} 
	if (kb.pressing ('d') && kb.pressing ('e')){

	Circle.vel.x = 1;
	Circle.rotationSpeed = 2.5;
	} 
	if (kb.pressing ('space') && isOnFloor == 1) {

	Circle.vel.y = -10;
	} 

    if (kb.pressing ('space') && isOnLadder == 1) {

	Circle.vel.y = -5;
	} 
// COLLISION
	 if (Circle.colliding(hitboxGroup)) {
 isOnFloor = 1
} else if (!Circle.colliding(hitboxGroup)) {
 isOnFloor = 0
}

	 if (Circle.colliding(ladderGroup)) {
 isOnLadder = 1
} else if (!Circle.colliding(ladderGroup)) {
 isOnLadder = 0
}

}
