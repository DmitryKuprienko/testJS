const basketOfGoods = {
  velue: 0,
  addValue() {
    console.log('викликав addValue=>', this.velue);
    this.velue += 1;
  },
  minusValue() {
    console.log('викликав minusValue=>', this.velue);
    this.velue -= 1;
  },
};

const addButton = document.querySelector('#js-addButton');
const minusButton = document.querySelector('#js-minusButton');
const counter = document.querySelector('#js-counter');

addButton.addEventListener('click', function () {
  basketOfGoods.addValue();
  counter.textContent = basketOfGoods.velue;
});

minusButton.addEventListener('click', function () {
  if (basketOfGoods.velue > 0) {
    basketOfGoods.minusValue();
    counter.textContent = basketOfGoods.velue;
  }
});
