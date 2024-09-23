const form = document.querySelector('form');
const display = document.querySelector('.display');

form.addEventListener('input', (evt) => {
evt.preventDefault();
const radioVal = document.querySelector('input[type="radio"]:checked').value;

display.innerHTML = '';

let img1 = document.createElement('img');
let img2 = document.createElement('img');
let title = document.createElement('h2');

img1.src = `${radioVal}1.jpg`;
img2.src = `${radioVal}2.jpg`;

img1.alt = `${radioVal}`;
img2.alt = `${radioVal}`;

title.textContent = `${radioVal}`.toUpperCase();

display.append(title)
display.append(img1);
display.append(img2);
})