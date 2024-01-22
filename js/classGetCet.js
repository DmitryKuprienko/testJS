class Car {
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
}

class CarAutom extends Car {
  constructor({ modelAutom = 'korbka', ...restObject } = {}) {
    super(restObject);
    this.modelAutom = modelAutom;
  }
}

class CarColor extends CarAutom {
  constructor({ color = 'color', ...restObject } = {}) {
    super(restObject);

    this._color = color;
  }
  get color() {
    return this._color;
  }
  set color(newColor) {
    this._color = newColor;
  }
}

// console.log('🚀 ~ Carautom:', car2);

const car3 = new CarColor({
  color: 'blue',
  modelAutom: 'auto',
  brand: 'Ford',
  model: 'Fiesta',
  price: 25000,
});
console.log('🚀 ~ CarColor:', car3);

car3.model = 'focus';
car3.color = 'red';
car3.price = 35000;

console.log('🚀 ~ CarColor2:', car3);

const car4 = new CarColor({
  color: 'blek',
  modelAutom: 'auto',
  brand: 'Audi',
  model: 'Q4',
  price: 65000,
});

console.log('🚀 ~ CarColor4:', car4);

// console.log('🚀 ~ car1:', car1);
// console.log('🚀 ~ Car ~ getmodel ~ get:', car1.model);

// car1.model = 'Focus';

// console.log('🚀 ~ car1:', car1);
