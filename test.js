const ConsoleSpinner = require('./index');
const arr = ['log', 'info', 'error', 'success', 'warn', 'debug', 'test'];
const hk = new ConsoleSpinner('Master');
let i = 0;
hk.start();
const timer = setInterval(() => {
  if (i > 10) {
    return delay(100).then(() => {
      hk.stop();
      clearInterval(timer);
    })
    // hk.stop();
    // return clearInterval(timer);
  }
  const j = i % arr.length;
  hk[arr[j]]('use count:', i++);
}, 1000);

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}