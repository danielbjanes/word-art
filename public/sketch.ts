import p5 from "p5";

var sketch = function(p: p5) {
  p.setup = function() {
    p.createCanvas(600, 600);
  };

  p.windowResized = function() {
    //p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    p.background(0);
    p.circle(100, 100, 100)
  };
};

new p5(sketch);
