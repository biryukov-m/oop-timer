import './css/style.css';

import Timer from './modules/Timer';

const timer = new Timer(5);

const startBtn = document.querySelector('#startBtn') as HTMLElement;
const pauseBtn = document.querySelector('#pauseBtn') as HTMLElement;
const resetBtn = document.querySelector('#resetBtn') as HTMLElement;

function toggleButtons() {
  if (timer.isRunning) {
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
  } else {
    startBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
    resetBtn.classList.add('hidden');
  }
}

pauseBtn.onclick = () => {
  timer.pause();
  toggleButtons();
};

resetBtn.onclick = () => {
  timer.reset();
  toggleButtons();
};

startBtn.onclick = () => {
  timer.init();
  toggleButtons();
};

toggleButtons();
