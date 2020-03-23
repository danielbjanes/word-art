var can;
var fontRoboto;

function setup() {
  can = createCanvas(600, 600);
  centerCanvas();
	fontRoboto = loadFont('/assets/Roboto/Roboto-Medium.ttf');
}

function draw() {
	background(250, 245, 227);

	/* github info */
	textFont(fontRoboto);
	textSize(14);
	text("github.com/danielbjanes", 435, 587);

}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  can.position(x, y);
}

function windowResized() {
  centerCanvas();
}
