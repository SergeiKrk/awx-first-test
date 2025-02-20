let positiveProgress = 65; // переменная для задания прогресса
let negativeProgress = 100 - positiveProgress;

function updateProgressBarWidth() {
  const statBlocks = document.querySelectorAll(".progress-bar-stat");
  const statWidth = statBlocks[0].offsetWidth;
  const progressBars = document.querySelectorAll(".progress-bar");
  const progressBarSpans = document.querySelectorAll(".progress-bar .bar span");
  const positiveBars = document.querySelectorAll(".progress-bar .bar.positive");
  const negativeBars = document.querySelectorAll(".progress-bar .bar.negative");

  progressBars.forEach((bar) => {
    bar.style.minWidth = `${statWidth}px`;
  });

  progressBarSpans.forEach((span) => {
    span.style.minWidth = `${statWidth}px`;
  });

  positiveBars.forEach((bar) => {
    bar.style.width = `${positiveProgress}%`;
  });

  negativeBars.forEach((bar) => {
    bar.style.width = `${negativeProgress}%`;
  });
}

window.addEventListener("load", updateProgressBarWidth);
window.addEventListener("resize", updateProgressBarWidth);
