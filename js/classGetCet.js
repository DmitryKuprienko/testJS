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

class Carautom extends Car {
  constructor({ modelAutom = 'korbka', brand, model, price } = {}) {
    super(brand, model, price);

    this.modelAutom = modelAutom;
  }
}

const car2 = new Carautom({
  modelAutom: 'auto',
  brand: 'Ford',
  model: 'Fiesta',
  price: 25000,
});
console.log('🚀 ~ Carautom:', car2);

// console.log('🚀 ~ car1:', car1);
// console.log('🚀 ~ Car ~ getmodel ~ get:', car1.model);

// car1.model = 'Focus';

// console.log('🚀 ~ car1:', car1);
