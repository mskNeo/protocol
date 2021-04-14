
const prompts = [
  "Prompt 1",
  "Prompt 2",
  "Prompt 3",
  "Prompt 4",
  "Prompt 5",
  "Prompt 6",
];

const up = document.querySelector('.up');
const down = document.querySelector('.down');
const promptEle = document.querySelector('#prompts');
let count = 0;

window.addEventListener('load', () => {
  promptEle.dataset.text = prompts[count];
  promptEle.textContent = promptEle.dataset.text;
});

up.addEventListener('click', () => {
  if (count > 0) {
    count--;
    promptEle.dataset.text = prompts[count];
    promptEle.textContent = promptEle.dataset.text;
  }
});

down.addEventListener('click', () => {
  if (count < prompts.length - 1) {
    count++;
    promptEle.dataset.text = prompts[count];
    promptEle.textContent = promptEle.dataset.text;
  }
});