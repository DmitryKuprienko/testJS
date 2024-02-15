const formRef = document.querySelector('.js-form');
console.log( formRef)

const formInputRef = document.querySelector('#name-input');
const outpuRef = document.querySelector('#name-output');
// console.dir(outpuRef);

// console.dir(formInputRef);

// formInputRef.addEventListener('input', event => {
//   if ((outpuRef.textContent = '')) {
//     outpuRef.textContent = 'Anonymous';
//   }
//   outpuRef.textContent = event.currentTarget.value;
// });

formRef.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();
  
  console.log(event);
}