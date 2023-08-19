const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Text = require('./lib/text.js');
const SVG = require('./lib/svg.js');

let circle = new Circle("95.5","16.2","red","5.0");
let rndr = circle.render();
console.log('circle rendered = ' + rndr);

let square = new Square("55",30,"blue","20.03");
rndr = square.render();
console.log('sqr rendered = ' + rndr);

let tri = new Triangle("55",30,"#303035",20.);
rndr = tri.render();
console.log('tri rendered = ' + rndr);

let txt = new Text("40",35,"cyan","Hello");
rndr = txt.render();
console.log('txt = ' + rndr);

let svg = new SVG('SAR','red','circle','blue');
rndr = svg.render();
console.log('test svg = ' + rndr);