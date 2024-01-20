class Car {
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this.price = price;
  }

  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }
}

const car1 = new Car({
  brand: 'Ford',
  model: 'Fiesta',
  price: 25000,
});

console.log('🚀 ~ car1:', car1);
console.log('🚀 ~ Car ~ getmodel ~ get:', car1.model);

car1.model = 'Focus';

console.log('🚀 ~ car1:', car1);
