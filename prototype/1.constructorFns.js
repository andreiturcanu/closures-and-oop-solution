// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: { x: 1, y: 1 },
    draw() {
      console.log('drawing a circle');
    }
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('drawing a circle');
  };
}

const c = new Circle(1);
