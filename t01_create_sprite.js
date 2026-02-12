/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
width = random(300,600);
height = random(300,600);

// and the sprites keep changing too!
spriteX= random(50,150);
spriteY=  random(50,150);  ;

cnv = new Canvas(width, height);


red = new Sprite(spriteX/2, spriteY/2, spriteX, spriteY);
red.color = 'red';

green = new Sprite(width - spriteX/2, spriteY/2, spriteX, spriteY);
green.color = 'green';

blue = new Sprite(width -spriteX/2, height - spriteY/2, spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite(spriteX/2, height - spriteY/2,  spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite(width/2 - spriteX/2, height/2 - spriteY/2,  spriteX, spriteY);
purple.color = 'purple';
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