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

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

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

const valuse = prompt("Please enter a number!");
console.log(typeof valuse); // "string"
console.log(valuse); // "5"
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