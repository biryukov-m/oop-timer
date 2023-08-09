import addLeadingZero from '../utils/addLeadingZero';

export default class Timer {
  initialMinutes: number;

  initialSeconds: number;

  minutes: number;

  seconds: number;

  minutesElement: HTMLDivElement;

  secondsElement: HTMLDivElement;

  status: 'initial' | 'run' | 'pause' | 'end';

  // eslint-disable-next-line no-undef
  interval: NodeJS.Timer;

  constructor(minutes: number, seconds: number) {
    this.initialMinutes = minutes;
    this.initialSeconds = seconds;
    this.minutes = minutes;
    this.seconds = seconds;
    this.minutesElement = document.querySelector('#minutes');
    this.secondsElement = document.querySelector('#seconds');
    this.status = 'initial';
  }

  init() {
    this.start();
  }

  start() {
    switch (this.status) {
      case 'run':
        break;
      case 'end':
      case 'initial':
      case 'pause':
        this.status = 'run';
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
        break;
    }
  }

  pause() {
    this.status = 'pause';
    clearInterval(this.interval);
  }

  reset() {
    switch (this.status) {
      case 'run':
        this.stop();
        this.start();
        break;
      case 'end':
      case 'pause':
        this.status = 'initial';
        this.minutes = this.initialMinutes;
        this.seconds = this.initialSeconds;
        break;
    }
    this.drawTime(this.minutes, this.seconds);
  }

  stop() {
    this.status = 'end';
    clearInterval(this.interval);
    this.minutes = this.initialMinutes;
    this.seconds = this.initialSeconds;
  }

  drawTime(minutes: number, seconds: number) {
    this.minutesElement.innerText = addLeadingZero(minutes.toString());
    this.secondsElement.innerText = addLeadingZero(seconds.toString());
  }
}
