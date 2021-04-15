function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle() {}

extend(Circle, Shape);

// -------- add -----------
Circle.prototype.duplicate = function () {
  console.log('duplicate circle');
};

function Square() {}

extend(Square, Shape);

// -------- add -----------
Square.prototype.duplicate = function () {
  console.log('duplicate square');
};
// -------- add -----------
const shapes = [new Circle(), new Square()];
// -------- add -----------
for (const shape of shapes) {
  shape.duplicate();
}
