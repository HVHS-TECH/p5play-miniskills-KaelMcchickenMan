//BEGIN
function setup() {
	 let isOnFloor = 0;
	console.log("setup: ");
	cnv = new Canvas(700, 700);
	
	world.gravity.y = 25;
	floorGroup = new Group();
	hitboxGroup = new Group();
    ladderGroup = new Group();
	levelExitGroup = new Group();
	Level1();
    
function Level1() {
// BACKGROUND

	Bg = new Sprite(400, 550, 50, 200, 'n')
	Bg.color = 'rgb(156, 0, 0)';
	Bg.strokeWeight = 0; 
    Bg2 = new Sprite(190, 580, 50, 200, 'n')
	Bg2.color = 'rgb(156, 0, 0)';
	Bg2.strokeWeight = 0; 
	Bg3 = new Sprite(80, 410, 50, 210, 'n')
	Bg3.color = 'rgb(156, 0, 0)';
	Bg3.strokeWeight = 0; 
	Bg4 = new Sprite(120, 490, 100, 50, 'n')
	Bg4.color = 'rgb(156, 0, 0)';
	Bg4.strokeWeight = 0; 
// WALLS
leftWall = new Sprite(1, 350, 10, 700, 'k')
	leftWall.color = 'rgb(255, 0, 0)';
	leftWall.strokeWeight = 0; 
rightWall = new Sprite(699, 350, 10, 700, 'k')
	rightWall.color = 'rgb(255, 0, 0)';
	rightWall.strokeWeight = 0; 
bottomWall = new Sprite(350, 699, 700, 10, 'k')
	bottomWall.color = 'rgb(255, 0, 0)';
	bottomWall.strokeWeight = 0; 	
topWall = new Sprite(350, 1, 700, 10, 'k')
	topWall.color = 'rgb(255, 0, 0)';
	topWall.strokeWeight = 0; 
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

	Floor6 = new Sprite(80, 300, 50, 20, 'k')
	Floor6.color = 'rgb(255, 0, 0)';
	Floor6.strokeWeight = 0; 
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

	hitbox5 = new Sprite(15, 304, 15, 10, 'k')
	hitbox5.color = 'rgb(255, 0, 242)';
	hitbox5.strokeWeight = 0; 
	hitbox5.color.setAlpha(1);

	hitbox6 = new Sprite(80, 294, 50, 10, 'k')
	hitbox6.color = 'rgb(0, 255, 76)';
	hitbox6.strokeWeight = 0; 
	hitbox6.color.setAlpha(1);
// LADDERS
ladder = new Sprite(15, 425, 15, 250, 'k')
	ladder.color = 'rgb(255, 146, 146)';
	ladder.strokeWeight = 0; 
// BUTTONS
button1 = new Sprite(50, 628, 50, 5, 'k')
	button1.color = 'rgb(150, 59, 255)';
	button1.strokeWeight = 0; 

//NEXT LEVEL
Level2 = new Sprite(200, 600, 50, 20, 'k')
	Level2.color = 'rgb(31, 153, 37)';
	Level2.strokeWeight = 0; 

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
	hitboxGroup.add(hitbox5);
	hitboxGroup.add(hitbox6);
    ladderGroup.add(ladder);
	levelExitGroup.add(Level2);
}



	}
// DRAW


function draw() {
	background('rgb(235, 95, 95)'); 


// TEXT
text("Mouse X = " + round(mouse.x), 25, 25);
text("Mouse Y = " + round(mouse.y), 25, 50);

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

	Circle.vel.y = Circle.vel.y - 2.28;
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
	 if (Circle.colliding(button1)) {
 button1On = 1
} else if (!Circle.colliding(button1)) {
 button1On = 0
}

 if (Circle.colliding(levelExitGroup)) {
 console.log("exit level");
	Floor.remove();
	Floor2.remove();
	Floor3.remove();
	Floor4.remove();
	Floor5.remove();
	Floor6.remove();
	hitbox.remove();
	hitbox2.remove();
	hitbox3.remove();
	hitbox4.remove();
	hitbox5.remove();
	hitbox6.remove();
	ladder.remove();
	Circle.remove();
	Level2();

} 


if (button1On == 1) {
	Floor5.remove();
}

function Level2() {
// BACKGROUND

	Bg = new Sprite(400, 550, 50, 200, 'n')
	Bg.color = 'rgb(156, 0, 0)';
	Bg.strokeWeight = 0; 
    Bg2 = new Sprite(190, 580, 50, 200, 'n')
	Bg2.color = 'rgb(156, 0, 0)';
	Bg2.strokeWeight = 0; 
	Bg3 = new Sprite(80, 410, 50, 210, 'n')
	Bg3.color = 'rgb(156, 0, 0)';
	Bg3.strokeWeight = 0; 
	Bg4 = new Sprite(120, 490, 100, 50, 'n')
	Bg4.color = 'rgb(156, 0, 0)';
	Bg4.strokeWeight = 0; 
// WALLS
leftWall = new Sprite(1, 350, 10, 700, 'k')
	leftWall.color = 'rgb(255, 0, 0)';
	leftWall.strokeWeight = 0; 
rightWall = new Sprite(699, 350, 10, 700, 'k')
	rightWall.color = 'rgb(255, 0, 0)';
	rightWall.strokeWeight = 0; 
bottomWall = new Sprite(350, 699, 700, 10, 'k')
	bottomWall.color = 'rgb(255, 0, 0)';
	bottomWall.strokeWeight = 0; 	
topWall = new Sprite(350, 1, 700, 10, 'k')
	topWall.color = 'rgb(255, 0, 0)';
	topWall.strokeWeight = 0; 
// FLOOR


	Floor = new Sprite(350, 60, 700, 75, 'k')
	Floor.color = 'rgb(255, 0, 0)';
	Floor.strokeWeight = 0; 

	Floor2 = new Sprite(50, 650, 50, 200, 'k')
	Floor2.color = 'rgb(255, 0, 0)';
	Floor2.strokeWeight = 0; 
	
	Floor3 = new Sprite(40, 450, 50, 20, 'k')
	Floor3.color = 'rgb(255, 0, 0)';
	Floor3.strokeWeight = 0; 

    Floor4 = new Sprite(190, 45, 50, 20, 'k')
	Floor4.color = 'rgb(255, 0, 0)';
	Floor4.strokeWeight = 0; 

    Floor5 = new Sprite(155, 565, 20, 200, 'k')
	Floor5.color = 'rgb(255, 0, 0)';
	Floor5.strokeWeight = 0; 

	Floor6 = new Sprite(80, 300, 50, 20, 'k')
	Floor6.color = 'rgb(255, 0, 0)';
	Floor6.strokeWeight = 0; 
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

	hitbox5 = new Sprite(15, 304, 15, 10, 'k')
	hitbox5.color = 'rgb(255, 0, 242)';
	hitbox5.strokeWeight = 0; 
	hitbox5.color.setAlpha(1);

	hitbox6 = new Sprite(80, 294, 50, 10, 'k')
	hitbox6.color = 'rgb(0, 255, 76)';
	hitbox6.strokeWeight = 0; 
	hitbox6.color.setAlpha(1);
// LADDERS
ladder = new Sprite(15, 425, 15, 250, 'k')
	ladder.color = 'rgb(255, 146, 146)';
	ladder.strokeWeight = 0; 
// BUTTONS
button1 = new Sprite(50, 628, 50, 5, 'k')
	button1.color = 'rgb(150, 59, 255)';
	button1.strokeWeight = 0; 

//NEXT LEVEL
Level1Exit = new Sprite(200, 600, 50, 20, 'k')
	Level1Exit.color = 'rgb(31, 153, 37)';
	Level1Exit.strokeWeight = 0; 

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
	hitboxGroup.add(hitbox5);
	hitboxGroup.add(hitbox6);
    ladderGroup.add(ladder);
	levelExitGroup.add(Level1Exit);
}


}
