const Nautilus = require('./lib/nautilus.js');
let naut = new Nautilus(50,50,process.argv[2],50);
let str = naut.render();
console.log('nautilus rendered = "' + str + '"');

