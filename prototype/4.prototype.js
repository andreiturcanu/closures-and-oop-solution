function Circle(radius) {
  this.radius = radius;
}

// -------- add -----------
Circle.prototype.draw = function () {
  console.log('draw');
};

const circle1 = new Circle(10);
const circle2 = new Circle(20);
