console.clear();

let audio, amp;

function preload() {
  audio = loadSound("../assets/void_in_the_night_1.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  audio.setVolume(0.05);
  audio.play();
  amp = new p5.Amplitude();
}

function draw() {
  noStroke();
  background(225, 225, 225);
  const volume = amp.getLevel();
  const mapVolume = map(volume, 0, 0.05, 0, 1000);
  const mapColor = map(volume, 0, 0.05, 255, 175);

  fill(mapColor, mapColor, mapColor);
  translate(width / 2, height / 2);
  rect(0, 0, mapVolume, 500);
}

function mouseClicked() {
  if (audio.isPlaying()) {
    audio.pause();
  } else {
    audio.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
