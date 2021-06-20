const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};

const DELAY = 1000;

let intervalId = null;
let btnIsActive = false;

refs.start.addEventListener('click', onStartChange);
refs.stop.addEventListener('click', onStopChange)

function onStartChange() {
    if (btnIsActive) {
        return;
    };

    btnIsActive = true;

    refs.start.setAttribute("disabled", "disabled");

    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[randomColor];
    }, DELAY);
};

function onStopChange() {
    clearInterval(intervalId);
    btnIsActive = false;
    refs.start.removeAttribute("disabled");
};