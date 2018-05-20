const elegantSpinner = require('elegant-spinner');
const logUpdate = require('log-update');
const styles = require('./color');

module.exports = class ConsoleSpinner {
  constructor(name) {
    this.name = name;
    this.word = [];
    this.started = false;
    this.frame = elegantSpinner();
    this.update = logUpdate.create(process.stdout, {
      showCursor: true
    });
  }

  value() {
    const args = [];
    if (this.name) args.push(`${styles.gray}[${this.name}]${styles.colorClose}`);
    args.push(...this.word);
    return args;
  }

  start() {
    this.timer = setInterval(() => {
      this.update(this.frame(), ...this.value());
    }, 50);
    this.started = true;
  }

  log(...args) {
    this.word = args;
  }

  error(...args) {
    this.word = [
      `${styles.red}Error${styles.colorClose}`,
      ...args
    ]
  }

  info(...args) {
    this.word = [
      `${styles.blue}Infomation${styles.colorClose}`,
      ...args
    ];
  }

  success(...args) {
    this.word = [
      `${styles.green}Success${styles.colorClose}`,
      ...args
    ];
  }

  warn(...args) {
    this.word = [
      `${styles.yellow}Warning${styles.colorClose}`,
      ...args
    ];
  }

  debug(...args) {
    this.word = [
      `${styles.magenta}Debug${styles.colorClose}`,
      ...args
    ];
  }

  test(...args) {
    this.word = [
      `${styles.cyan}Test${styles.colorClose}`,
      ...args
    ];
  }

  stop(clear) {
    clearInterval(this.timer);
    this.word = [];
    this.started = false;
    if (clear) {
      this.update.clear();
    }
  }
};