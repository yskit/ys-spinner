const ConsoleSpinner = require('./index');
const arr = ['log', 'info', 'error', 'success', 'warn', 'debug', 'test'];
const hk = new ConsoleSpinner('Master');
let i = 0;
hk.start();
const timer = setInterval(() => {
  if (i > 10) {
    hk.stop();
    return clearInterval(timer);
  }
  const j = i % arr.length;
  hk[arr[j]]('use count:', i++);
}, 1000);