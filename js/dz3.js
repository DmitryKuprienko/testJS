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
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   let propertyValues = [];

//   for (const product of products) {
//     // console.log(Object.keys(product));

//  propertyValues.push(product[propName])
//     if (propName === Object.keys(product)) {
//       propertyValues.push(product[propName]);
//    }

//   }
//   return propertyValues;

//   // Change code above this line
// }

// console.log(getAllPropValues("name"));// повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));// повертає [4, 3, 7, 9]
// // console.log(getAllPropValues("price"));// повертає [1300, 2700, 400, 1200]
// // console.log(getAllPropValues("category"));// повертає []
//===================================

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;ПШЕ

// ========================================================================
// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// Задай значення за замовчуванням для іконок, змінних todayIcon і
// tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: { high:highToday , low:lowToday, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",},
//   tomorrow: {high:highTomorrow, low:lowTomorrow, icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",},
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// console.log( highToday ,  lowToday,
//             todayIcon, highTomorrow, lowTomorrow, tomorrowIcon)

// =========================================================================
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) повертає 28.5
// Виклик calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) повертає 37

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const{today:{low:todayLow, high:todayHigh},
//        tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));// повертає 28.5
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));// повертає 37

// =======================================================
// У змінній scores зберігається масив результатів тестування.
//  Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал,
//   а у worstScore - найнижчий.

// Оголошена змінна scores
// Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore =Math.min(... scores) ;

// console.log(scores);
// console.log(bestScore);
// console.log(worstScore);
// ===============================================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores,];
// const bestScore = Math.max(... allScores);
// const worstScore = Math.min(... allScores);

// console.log( allScores);
// console.log(bestScore);
// console.log(worstScore);

// ======================================================

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
//   які зберігаються у змінній defaultSettings.Під час створення тесту,
//     усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і
// поверх них застосувати перевизначені налаштування.
// Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується синтаксис ...
// // const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings, };

// console.log(finalSettings);
// ==========================================================

// function makeTask(data) {

//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const{ ... text} = data;
//   // Change code above this line
// }

// // Оголошена функція makeTask(data)
// // console.log(makeTask({})); //повертає { category: "General", priority: "Normal", completed: false }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));// повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// console.log(makeTask({ category: "Finance", text: "Take interest" }));// повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));// повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// console.log(makeTask({ text: "Buy bread" }));// повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }
// ========================================================

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку кількість аргументів,
//   рахувала і повертала їх суму.

// Оголошена функція add
// Функція add використовує параметр args
// Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78
// Виклик add(74, 11, 62, 46, 12, 36) повертає 241

// Change code below this line
// function add( ...args) {
//   // Change code above this line
//   let totalArgs = 0;
//   for (const arg of args) {
//     totalArgs += arg;

//   }

//   return totalArgs;

// }
// console.log(add(15, 27));// повертає 42
// console.log(add(12, 4, 11, 48));// повертає 75
// console.log(add(32, 6, 13, 19, 8));// повертає 78
// console.log(add(74, 11, 62, 46, 12, 36));// повертає 241

// =============================================================

// Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum() таким чином,
//   щоб вона рахувала суму тільки тих аргументів, які більші за задане число.Це число повинно бути першим параметром функції.

// Оголошена функція addOverNum()
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218
// function addOverNum(first, ...args) {
//   let total = 0;

//   for (const arg of args) {
//   console.log('зминни', arg)
//     if (arg > first) {
//        total += arg;
//       console.log('totaArgs', total)
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));// повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));// повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8));// повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));// повертає 218
// ===================================================================================================

// // Change code below this line
// function findMatches(arrayFirst, ...args) {
//   // console.log(arrayFirst, args)

//   const matches = []; // Don't change this line
//   for (const first of arrayFirst) {
//     if (args.includes(first)) {
//       matches.push(first);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // повертає [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // повертає [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // повертає []

// =============================================================================
// //создаем массивы
// var array1 = ["п", "р", "ы", "в", "е", "т"];
// var array2 = ["п", "р"];

// //у каждого массива есть очень важное свойство - это длинна массива. чтобы ее узнать
// //необходимо прописать имя_массива.length т.е. array1.length
// //попробуем вывести длинну в консоль
// console.log(array1.length);
// console.log(array2.length);
// //здесь будем хранить значение элемента
// var cache;

// //сохраним длины массивов:
// var ln1 = array1.length;
// ln2 = array2.length;
// //теперь делаем цикл
// for (var i = 0; i < ln1; ++i) {
//   cache = array1[i];
//   for (var j = 0; j < ln2; ++j) {
//     if (cache == array2[j]) {
//       console.log("найдено совпадение: " + cache);
//       break;
//     }
//   }
// }
// ====================================================
// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["Останнє королівство", "Страж снів"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");
// ================================================

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>",
//   де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок "Updating book <стара назва> to <нова назва>",
//   де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.getBooks - це метод об'єкта

// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"

// Значення властивості bookShelf.addBook - це метод об'єкта

// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"

// Значення властивості bookShelf.removeBook - це метод об'єкта

// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     `Deleting book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// console.log(bookShelf.getBooks()); // повертає рядок "Returning all books"
// //Значення властивості bookShelf.addBook - це метод об'єкта
// console.log(bookShelf.addBook("Haze")); // повертає рядок "Adding book Haze"
// //Значення властивості bookShelf.removeBook - це метод об'єкта
// console.log(bookShelf.removeBook("Red sunset")); // повертає рядок "Deleting book Red sunset"
// //Значення властивості bookShelf.updateBook - це метод об'єкта
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); // повертає рядок "Updating book Sands of dune to Dune"
// ===================================================================================

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     let oldNameIndex = this.books.indexOf(oldName);
//     this.books.splice(oldNameIndex, 1, newName);
//     console.log(this);
//     // Change code above this line
//   },
// };

// // const bookShelf = {
// //   books: ["The last kingdom", "Haze", "The guardian of dreams"],
// //   updateBook(oldName, newName) {
// //     let bookIndex = this.books.indexOf(oldName);
// //     this.books.splice(bookIndex, 1, newName);
// //   },
// // };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Dune");

// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Імла");
// bookShelf.addBook("Страж снів");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
// bookShelf.removeBook("Імла");
// console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]

// ========================================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));
// ==========================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     let oldNameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(oldNameIndex, 1, newName);
//     console.log(this);

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// ======================================================================
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      const potion = this.potions[i];

      if (potion.name === potionName) {
        this.potions.splice(i, 1);
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions()); //для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },{ name: "Stone skin", price: 520 } ]

console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// // Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// // Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// // Значення властивості atTheOldToad.removePotion - це метод об'єкта
console.log(atTheOldToad.removePotion("Dragon breath"));
// // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
console.log(atTheOldToad.removePotion("Speed potion")); // у властивості potions буде масив [{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//   // Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// //  у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);
// //  у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
