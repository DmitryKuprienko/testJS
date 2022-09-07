
// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags:["premium", "promoted", "top"],

// };
// console.log(apartment);
// =============================================================
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
//  з інформацією про власника.Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name :"Henry",
//     phone:"982-126-1588",
//  email:"henry.carter@aptmail.com"},
// };

// ==============================================================================

// Доповни код, присвоївши оголошеним змінним вирази звернення
// до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// ================================================

// Доповни код, присвоївши оголошеним змінним вирази звернення
// до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// ==============================================================

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.owner.name)
// ==================================================================

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// // console.table(apartment);

// apartment.area = 60;
// apartment.rooms = 3;
// // apartment.location = ();
// apartment.location = {};
// apartment.location.country = "Jamaica"
// apartment.location.city = "Kingston"
// console.table(apartment);

// console.log(apartment.location.country);
// console.log(apartment.location.city );
// ==================================================================

// Доповни код оголошення об'єкта таким чином,
// щоб у нього були властивості name, price, image і tags
// зі значеннями зі змінних з аналогічними іменами.
//   Обов'язково використовуй синтаксис коротких властивостей.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//  name,
//  price,
//  image,
//  tags ,
//   // Change code above this line
// };
// ==================================================================

/*Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: 
email і password, імена яких зберігаються у змінних emailInputName і
passwordInputName.

Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
  а значенням властивості password - рядок "jqueryismyjam".*/

//   const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]:"henry.carter@aptmail.com",
// [passwordInputName]:"jqueryismyjam",

//   // Change code above this line
// };
// console.table(credentials);
// ==================================================================================

// Перебери об'єкт apartment, використовуючи цикл for...in,
//  і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// };
// console.log(keys, values);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Тому під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість.
// Навіть якщо зараз ми впевнені у тому, що об'єкт не містить невласні властивості, це захистить від можливих помилок в майбутньому.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// console.table(apartment)

// for (const key in apartment) {
//   // Change code below this line
// if ( apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// };
//   // Change code above this line
// };
// console.log(keys.length)

// ========================================================================
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
//  Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys =[];
  
// for (const key in object) {
//   // Change code below this line
// if ( object.hasOwnProperty(key)) {
//   keys.push(key);
// propCount = keys.length;
// };
//   // Change code above this line
// };
//   return propCount;
// }

// console.log(countProps({}))
// console.log(countProps({ name: "Mango", age: 2 }));
//  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ============================================================
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//  Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key])

// }
//  console.log(keys)
//  console.log(values)

// ======================================================================================

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
//   можливо, але не обов'язково, цикл for...of.



// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
// // for (const key of keys) {
// //   propCount = keys.length;
// // }


//   propCount = Object.keys(object).length;


//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));// повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); //повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));// повертає 3

// ========================================================
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей.
//  Використовуй методи Object.keys() і Object.values().


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);
// =====================================================================================
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника,
//  а значення властивості - це зарплата.
//  Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
//  Використовуй змінну totalSalary для зберігання загальної суми зарплати.



//  function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
//   for (let value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));// повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));// повертає 330
// console.log( countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) );//повертає 400
// =========================================================================

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex,
//   а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// ===============================================================================

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
//  Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).
//  Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let priceProduct =  null;
// for (let product of products) {
//   if (productName === product.name) {
//     priceProduct = product.price
//   }
// }
//   return priceProduct;
// }
// console.log(getProductPrice("Radar") );// 1300.
// console.log(getProductPrice("Grip") );// 1200.
// console.log(getProductPrice("Scanner") );// 2700.
// console.log(getProductPrice("Droid") );// 400.
// console.log(getProductPrice("Engine") );// null.
// =================================================================================

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
 
  let propertyValues = [];
  

  
  for (const product of products) {
    // console.log(Object.keys(product));
    
 propertyValues.push(product[propName])
    if (propName === Object.keys(product)) {
      propertyValues.push(product[propName]);
   }
     
  }
  return propertyValues;
  

  // Change code above this line
}

console.log(getAllPropValues("name"));// повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity"));// повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price"));// повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));// повертає []