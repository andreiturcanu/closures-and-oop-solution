// Private Properties and Methods
function Circle(radius) {
  this.radius = radius;
  // -------- add -----------
  const defaultLocation = { x: 0, y: 0 };
  // -------- add -----------
  const computeOptimumLocation = function () {
    console.log(defaultLocation);
  };

  this.draw = function () {
    // -------- add -----------
    computeOptimumLocation();

    console.log('drawing a circle');
  };
}

const circle = new Circle(10);
// circle.computeOptimumLocation();
circle.draw();
