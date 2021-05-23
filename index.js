const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('body button[data-action="start"]'),
  stopBtn: document.querySelector('body button[data-action="stop"]'),
  myBodyColor: document.querySelector('body'),
};

const PROM_DALEY = 1000;
let timeoutId = null;

refs.startBtn.addEventListener('click', startTimerColor);
refs.stopBtn.addEventListener('click', stopTimerColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorBar() {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.myBodyColor.style.background = randomColor;
  refs.startBtn.disabled = true;
}

function startTimerColor() {
  timeoutId = setInterval(() => {
    startColorBar();
  }, PROM_DALEY);
}

function stopTimerColor() {
  refs.startBtn.disabled = false;
  clearInterval(timeoutId);
}
