
const prompts = [
  "Draw a dream you had recently. (Please nothing explicit, thank you)",
  "Go outside and walk for 10 minutes. Draw your pathing from memory. (Don't die on your walk, we are not liable for that so don't take us to court)",
  "Draw how you feel when you listen to your favorite song. (Crying emojis are acceptable)",
  "Go to Google Maps and go to 23.708443, 90.405792. Draw what you see.",
  "Draw your favorite childhood memory. (or food if that's your personality, in which case, respect.)",
  "Draw (or write if you want to rebel) a list of some goals you want to accomplish in the next 3 months.",
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