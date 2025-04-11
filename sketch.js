let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/ExGAAGAal/';

function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  classifyAudio();
}

function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  let emoji = "❓";
  if (label == "positivity") {
    emoji = "😀";
  } else if (label == "negativity") {
    emoji = "😥";
  } else if (label == "bewilderment") {
    emoji = "🤔";
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}
