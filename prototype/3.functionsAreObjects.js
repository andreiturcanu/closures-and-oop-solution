// Functions are objects
const Circle = new Function(
  'radius',
  `
  this.radius = radius;
  this.draw = function () {
    console.log('drawing a circle');
  };
`
);

// -------- add -----------
// In JavaScript, functions are objects. They have properties and methods.
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function
Circle.apply({}, [1]);

const another = new Circle(1);
console.log(another);
