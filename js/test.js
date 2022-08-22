// Змінні, оголошені як const, обов'язково повинні бути ініціалізовані
// значенням під час оголошення, інакше виникне помилка.
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

// Змінним, оголошеним через let, не обов'язково одразу присвоювати значення.
let age;

// Якщо змінній, оголошеній як let, не було присвоєно значення,
// вона ініціалізується спеціальним значенням undefined (не визначено).
console.log(age); // undefined

// console.log() - це метод для виведення даних у консоль браузера,
// пізніше познайомимось з ним детальніше.

// Якщо змінна оголошена як let, її значення можна перезаписати.
age = 1600;
console.log(age); // 14




let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const messager = "JavaScript is awesome!";
console.log(typeof messager); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"


// console.log(message, quantity,); // JavaScript is awesome!
// alert(message);

// // Просимо клієнта підтвердити бронювання готелю
// // і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// // Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// // і зберігаємо результат виклику prompt у змінну.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const valuse = prompt("Please enter a number!");
// console.log(typeof valuse); // "string"
// console.log(valuse); // "5"

const x = 10;
const y = 5;

// Додавання
console.log(x + y); // 15

// Віднімання
console.log(x - y); // 5

// Множення
console.log(x * y); // 50

// Ділення
console.log(x / y); // 2

// Остача від ділення
console.log(x % y); // 0

// Додавання із заміною (також є для всіх інших операторів)
let value = 5;

// Аналогічно запису value = value + 10;
value += 10;
console.log(value); // 15

const valueA = 11;
console.log(Number(valueA));
console.log(typeof Number(valueA));

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// Math.floor(num) - повертає найбільше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найменше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// Складати рядки з підставленими значеннями, використовуючи конкатенацію, - дуже незручно. На допомогу приходять шаблонні рядки та інтерполяція.

const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

const messagel = "Welcome to Bahamas!";
console.log(messagel.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"
console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false


const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true


console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

let costf;
const subscriptionf = "free";

if (subscriptionf === "pro") {
  costf = 100;
} else {
  costf = 0;
}

console.log(costf); // 0

// Якщо умова приводиться до true, тіло блока else ігнорується.

let costt;
const subscriptiont = "pro";

if (subscriptiont === "pro") {
  costt = 100;
} else {
  costt = 0;
}

// /* <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна></вираз_якщо_умова_хибна> */
console.log(costt); // 100

const num1 = 15;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10


let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}


const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// 1. Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// 2. Передача аргументів
multiply(2, 3, 5); // Результат множення дорівнює 30
multiply(4, 8, 12); // Результат множення дорівнює 384
multiply(17, 6, 25); // Результат множення дорівнює 2550