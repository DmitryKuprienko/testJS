const listWithId = document.querySelector('#menu');

listWithId.classList.add('menus-one');
console.log('🚀 ~ listWithId:', listWithId);

// listWithId.style.fontSize = '32px';
// console.log('🚀 ~ listWithId:', listWithId.childNodes);
// console.log('🚀 ~ listWithId:', listWithId.children[2]);
//функція перебиранння списку UL повертає масив значень li
// function listWithIdname(arrys) {
//   const arrysValue = [];
//   for (const arr of arrys) {
//     arrysValue.push(arr.innerHTML);

//     console.log('🚀 ~ arr:', arr.innerHTML);
//   }
//   return arrysValue;
// }

// console.log(listWithIdname(listWithId.children));

const listWithClass = document.querySelector('.menu');
// console.log('🚀 ~ listWithClass:', listWithClass);

const menuItemsByTagName = document.querySelectorAll('li');
// console.log('🚀 ~ menuItemsByTagName:', menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log('🚀 ~ menuItemsByClass:', menuItemsByClass);

const firstMenuItem = document.querySelector('.menu-item');

firstMenuItem.style.color = 'tomato';
// console.log('🚀 ~ firstMenuItem:', firstMenuItem);
// ============================================================

// console.log('🚀 ~ document:', document);

const body = document.body;
// console.dir(document);
const list = body;
// console.log('🚀 ~ list:', list);

const firstListItem = list.firstElementChild;
// console.log('🚀 ~ firstListItem:', firstListItem);

const listItems = list.children;

// =======================================================
//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// // image.src = "https://placeimg.com/640/480/tech";

// ========================================================
// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";
// ==================================================

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// // console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// // text.classList.add("a", "b", "c");
// // console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class
// console.log(text.classList);

// // classList has a forEach method
// text.classList.forEach((cls) => {
//   console.log(cls); // text, red, new-class
// });
// ==============================================
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"
// image.removeAttribute("alt");
// console.log(image.attributes);
// image.setAttribute("alt", "Amazing nature");
// console.log(image.attributes);
// console.log(image.getAttribute("alt")); // Amazi
// =====================================================
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// console.log(dishes);
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });
