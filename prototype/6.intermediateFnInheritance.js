// -------- add -----------
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  // -------- add -----------
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius, color) {
  // -------- add -----------
  // Calling the super constructor
  Shape.call(this, color);

  this.radius = radius;
}

// -------- add -----------
extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log('drawing a circle');
};

function Square(size) {
  this.size = size;
}

// -------- add -----------
extend(Square, Shape);

const c1 = new Circle(10, 'red');
