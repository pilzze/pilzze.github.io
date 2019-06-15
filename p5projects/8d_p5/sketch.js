var soundFile;
var radius = 150;
var angle = 0;
var speed = 0.02;
var centerX = 300;
var centerY = 300;
var panner;
var state = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  //var dir = "C:\Users\pilzze\Downloads\VA - Eurovision Song Contest 2018 (Lisbon - 2CD) [320]\CD 1"
  //soundFiles = ["01 - Eugent Bushpepa - Mall.mp3","02 - Sevak Khanagyan - Qami.mp3","03 - Jessica Mauboy - We Got Love.mp3","04 - Cesar Sampson - Nobody But You.mp3","05 - Aisel - X My Heart.mp3","06 - Sennek - A Matter of Time.mp3","07 - Equinox - Bones.mp3","08 - ALEKSEEV - Forever.mp3","09 - ZiBBZ - Stones.mp3","10 - Eleni Foureira - Fuego.mp3","11 - Mikolas Josef - Lie to Me.mp3","12 - Michael Schulte - You Let Me Walk Alone.mp3","13 - Rasmussen - Higher Ground.mp3","14 - Amaia y Alfred - Tu cancion.mp3","15 - Elina Nechayeva - La Forza.mp3","16 - Saara Aalto - Monsters.mp3","17 - Madame Monsieur - Mercy.mp3","18 - SuRie - Storm.mp3","19 - Ethno - Jazz Band Iriao - For You.mp3","20 - Yianna Terzi - Oniro Mou.mp3","21 - Franka - Crazy.mp3","22 - AWS - Viszlat nyar.mp3"];
  soundFile = loadSound('music/teardrops.mp3');
}


function setup() {
  const c = createCanvas(640, 640);
  c.drop(gotFile);
  panner = new p5.Panner3D();
  // Add an event for when a file is dropped onto the canvas
  soundFile.disconnect();
  soundFile.play();
  soundFile.connect(panner);
  recorder = new p5.SoundRecorder();

  soundFile2 = new p5.SoundFile();

  text('keyPress to record', 20, 20);
}

function gotFile(file) {
  // If it's an image file
  soundFormats('mp3', 'ogg');
  soundFile = loadSound(file.data);
}

function draw() {

    background(220);
    ellipse(centerX, centerY, 10, 10);

    var x = centerX + radius * cos(angle);
    var y = centerY + radius * sin(angle);

    ellipse(x, y, 15, 15);

    angle = angle + speed;
    noStroke();
    var panningX = map(x, 150, 450,-100.0, 100.0);
    var panningY = map(y, 150, 450, 0.0, 200.0);
    panner.set(panningX, panningY, 0);

}

function keyPressed() {
  // make sure user enabled the mic
  if (state === 0) {

    // record to our p5.SoundFile
    recorder.record(soundFile2);

    background(255,0,0);
    text('Recording!', 20, 20);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Stopped', 20, 20);
    state++;
  }

  else if (state === 2) {
    save(soundFile2, 'mySound.wav');
    state++;
  }
}