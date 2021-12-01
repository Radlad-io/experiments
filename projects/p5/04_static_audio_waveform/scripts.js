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
  background(225, 225, 225);
  translate(0, height / 2);
  const volume = amp.getLevel();
  stroke(10);
  const waveform = audio.getPeaks();
  for (let i = 0; i < waveform.length; i++) {
    line(i, waveform[i] * 100, i, waveform[i] * -100);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
