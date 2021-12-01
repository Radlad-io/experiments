console.clear();

let posX = 0;
let posY = 0;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  background(225, 225, 225);

  const mapBoth = map(mouseY + mouseX, 0, width + height, 0, 500);
  translate(width / 2, height / 2);

  ellipse(posX, posY, mapBoth, mapBoth);
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      posX = posX - 10;
      break;
    case RIGHT_ARROW:
      posX = posX + 10;
      break;
    case UP_ARROW:
      posY = posY - 10;
      break;
    case DOWN_ARROW:
      posY = posY + 10;
      break;
    case 32:
      posX = 0;
      posY = 0;
      break;
    default:
      break;
  }
}

function mouseClicked() {
  fill(random(0, 255), random(0, 255), random(0, 255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
