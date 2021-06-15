const header = document.querySelector('h1');
const text = document.querySelector('p');

const textTwo = text.innerText[0].toUpperCase();

text.innerHTML = text.innerText[0].toUpperCase() + text.innerText.slice(1);

console.log(header, text);
