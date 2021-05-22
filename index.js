const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-modal-start]');
const stopBtn = document.querySelector('button[data-modal-stop]');
let timeoutId = null;

startBtn.addEventListener('click', startColorBar);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorBar() {
  body.
}
