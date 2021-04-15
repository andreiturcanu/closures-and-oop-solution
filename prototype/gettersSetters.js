function Circle(radius) {
  this.radius = radius;

  const defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log('drawing a circle');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error('invalid location');
      }

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
