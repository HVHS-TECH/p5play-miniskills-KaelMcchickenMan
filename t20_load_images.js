/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {

	imgFace = loadImage('../assets/images/face.png');

  imgBG  = loadImage('../assets/images/space.jpg');

  

}

function setup() {
	console.log("setup: ");
cnv = new Canvas(700, 700);
ball_1 = new Sprite(50, 50, 50, 'd');

ball_1.bounciness = 1;

ball_1.friction   = 0;

ball_1.image = (imgFace);

imgFace.resize(50, 50);

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