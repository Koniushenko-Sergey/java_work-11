const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  timerId = setInterval(changeBodyColor, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  clearInterval(timerId);
});

function changeBodyColor() {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  body.style.backgroundColor = currentColor;
}
