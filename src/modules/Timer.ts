export default class Timer {
  startSeconds: number;
  seconds: number;
  secondsElement: HTMLElement;
  isRunning: boolean;
  // eslint-disable-next-line no-undef
  interval: NodeJS.Timer;
  constructor(seconds: number) {
    this.startSeconds = seconds;
    this.seconds = seconds;
    this.secondsElement = document.querySelector('#seconds');
    this.isRunning = false;
  }

  init() {
    this.start();
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.isRunning = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  reset() {
    this.seconds = this.startSeconds;
  }
}
