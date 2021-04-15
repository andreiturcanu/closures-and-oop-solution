const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function () {
    console.log('walking');
  }
};

const canSwim = {
  swim: function () {
    console.log('swimming');
  }
};

function Person() {}

function Fish() {}

// -------- add -----------
Object.assign(Person.prototype, canEat, canWalk);
// -------- add -----------
Object.assign(Fish.prototype, canEat, canSwim);

const person = new Person();
const goldFish = new Fish();

console.log(person);
console.log(goldFish);

// make more readable
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

// mixin(Fish.prototype, canEat, canSwim);
