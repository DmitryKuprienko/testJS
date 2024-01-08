// const basket = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   addItems(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   removeItems(nameDel) {
//     for (let i = 0; i < this.items.length; i++) {
//       const { name } = this.items[i];
//       if (name === nameDel) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clearItems() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     for (const item of this.items) {
//       console.log(item);
//       totalPrice += item.quantity * item.price;
//     }
//     return totalPrice;
//   },

//   increaseQuntity(name) {
//     const item = this.items.find(item => item.name === name);
//     // console.log('its item', item);
//     if (item) {
//       item.quantity += 1;
//     }
//   },
//   decreaseQuntity(name) {
//     const item = this.items.find(item => item.name === name);

//     // if (!item) console.log('it is not ', name);
//     if (item && item.quantity > 0) {
//       item.quantity -= 1;
//       if (item.quantity === 0) {
//         this.removeItems(name);
//       }
//     }
//   },
// };

// basket.addItems({ name: 'apple', price: 20 });
// basket.addItems({ name: 'cherry', price: 80 });
// basket.addItems({ name: 'plum', price: 50 });
// basket.addItems({ name: 'apricot', price: 105 });
// basket.addItems({ name: 'plum', price: 50 });
// basket.addItems({ name: 'plum', price: 50 });
// basket.addItems({ name: 'plum', price: 50 });

// console.table('1 виклик=>', basket.getItems());
// // basket.clearItems();

// // basket.removeItems('cherry');/
// // console.table('очищення масиву', basket.getItems());
// // console.log('Сума замовлення=>', basket.countTotalPrice());

// // // basket.increaseQuntity('apricot');
// // console.table('збільшення  в масиві ', basket.getItems());

// basket.decreaseQuntity('apricot');
// console.table('зменшення в масиві ', basket.getItems());

// const fna1 = function (mesedge, calbeck) {
//   calbeck(mesedge);
// };

// fna1('приві456', function (mesenger) {
//   console.log(mesenger);
// });

// const doMatch = function (a, b, calbeck) {
//   return console.log(calbeck(a, b));
// };

// const sum = (x, y) => x + y;
// const difference = (x, y) => x - y;
// const dobutok = (x, у) => x * у;

// // doMatch(5, 6, sum);
// // doMatch(122, 22, difference);
// // doMatch(6, 8, dobutok);

// const clickBtn = document.querySelector('.js-btn');

// const hendBtnClick = a => console.log('привіт нажав ');
// // console.dir(clickBtn);
// clickBtn.addEventListener('click', hendBtnClick);

// function secsess(position) {
//   console.log('привіт', position);
// }

// console.log(window.navigator.geolocation.getCurrentPosition(secsess, error));

// function error() {
//   console.log('пока ');
// }

function arrey1(a, calbeck) {
  const refArey = [];
  for (const a1 of a) {
    if (calbeck(a1)) {
      console.log(a1);
      refArey.push(a1);
    }
  }
  return refArey;
}

const r1 = arrey1([1, 2, 3, 4, 5, 6, 7, 8], x => x >= 3);
const r2 = arrey1([1, 2, 3, 4, 5, 6, 7], x => x <= 4);

console.log(r1);
console.log(r2);

const fruits = [
  { name: 'appel', quantity: 120, status: true },
  { name: 'cherry', quantity: 200, status: false },
  { name: 'kivi', quantity: 90, status: true },
  { name: 'tomato', quantity: 156, status: false },
];

const fruit = arrey1(fruits, fruit => fruit.quantity >= 130);
console.log(fruit);