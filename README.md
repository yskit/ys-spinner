# ys-spinner

nodejs loading spinner for ys framework

# Install

```shell
npm i ys-spinner --save
```

# Usage 

```javascript
const ConsoleSpinner = require('ys-spinner');
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
```

# License

It is [MIT licensed](https://opensource.org/licenses/MIT).