var r;
var k = 8/5;
var slider;

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 10, 1, 0.2);
}

function draw() {
  k = slider.value();
  background(51);
  translate(width/2, height/2)
  stroke(255);
  noFill();
  strokeWeight(3);
  beginShape();
  for (var a = 0; a < TWO_PI * 5; a += 0.02) {
    var r = k*a;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}