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
  // use the impl. of duplicate from parent
  // Shape.prototype.duplicate.call(this);
  console.log('duplicate circle');
};

const c1 = new Circle();
