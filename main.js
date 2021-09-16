import './style.css'

const increase = document.getElementById('increase');
const dcrease = document.getElementById('dcrease');
const reset = document.getElementById('reset');
const counter = document.getElementById('counter');

let count = 0;

increase.addEventListener('click', () => {
  count ++;
  counter.innerHTML = count;
})
dcrease.addEventListener('click', () => {
  count --;
  counter.innerHTML = count;
})
reset.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = count;
})

