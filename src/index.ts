import './css/style.css';

import Timer from './modules/Timer';

const startBtn = document.querySelector('#startBtn') as HTMLButtonElement;
const startBtnText = startBtn.querySelector('.text') as HTMLSpanElement;
const pauseBtn = document.querySelector('#pauseBtn') as HTMLButtonElement;
const resetBtn = document.querySelector('#resetBtn') as HTMLButtonElement;
const minutesElement = document.querySelector('#minutes') as HTMLDivElement;
const secondsElement = document.querySelector('#seconds') as HTMLDivElement;

let timer: Timer;

function toggleButtons() {
  if (timer instanceof Timer) {
    startBtnText.innerText = 'Start timer';
    switch (timer.status) {
      case 'initial':
      case 'end':
        startBtn.classList.remove('hidden');
        pauseBtn.classList.add('hidden');
        resetBtn.classList.add('hidden');
        break;
      case 'pause':
        startBtn.classList.remove('hidden');
        startBtnText.innerText = 'Resume';
        pauseBtn.classList.add('hidden');
        resetBtn.classList.remove('hidden');
        break;
      case 'run':
        startBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
        break;
    }
  } else {
    startBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    resetBtn.classList.add('hidden');
  }
}

pauseBtn.onclick = () => {
  if (timer instanceof Timer) {
    timer.pause();
    toggleButtons();
  }
};

resetBtn.onclick = () => {
  if (timer instanceof Timer) {
    timer.reset();
    toggleButtons();
  }
};

startBtn.onclick = () => {
  if (timer instanceof Timer) {
    timer.start();
  } else {
    timer = new Timer(
      Number(minutesElement.innerText),
      Number(secondsElement.innerText)
    );
    timer.init();
  }
  toggleButtons();
};

toggleButtons();
