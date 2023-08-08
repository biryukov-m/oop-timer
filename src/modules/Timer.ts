import addLeadingZero from '../utils/addLeadingZero';

export default class Timer {
  initialMinutes: number;

  initialSeconds: number;

  minutes: number;

  seconds: number;

  minutesElement: HTMLDivElement;

  secondsElement: HTMLDivElement;

  isRunning: boolean;

  // eslint-disable-next-line no-undef
  interval: NodeJS.Timer;

  constructor(minutes: number, seconds: number) {
    this.initialMinutes = minutes;
    this.initialSeconds = seconds;
    this.minutes = minutes;
    this.seconds = seconds;
    this.minutesElement = document.querySelector('#minutes');
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
        this.seconds -= 1;
      } else if (this.minutes > 0) {
        this.minutes -= 1;
        this.seconds = 59;
      } else {
        this.stop();
      }
      this.drawTime(this.minutes, this.seconds);
    }, 1000);
  }

  pause() {
    this.stop();
  }

  reset() {
    this.minutes = this.initialMinutes;
    this.seconds = this.initialSeconds;
    this.drawTime(this.minutes, this.seconds);
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  drawTime(minutes: number, seconds: number) {
    this.minutesElement.innerText = addLeadingZero(minutes.toString());
    this.secondsElement.innerText = addLeadingZero(seconds.toString());
  }
}
