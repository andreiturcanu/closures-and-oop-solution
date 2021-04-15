function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius) {
  this.radius = radius;
}

// -------- add -----------
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log('drawing a circle');
};

// -------- add -----------
function Square(size) {
  this.size = size;
}

// -------- add -----------
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const c1 = new Circle(10);
