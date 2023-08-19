const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Text = require('./text.js');

class SVG {
    constructor(initials = "ABC", initsColor, shape = "square", shapeColor) {
        this.initials = initials;
        this.initsColor = initsColor;
        this.shape = shape.trim().toLowerCase();
        this.shapeColor = shapeColor;
        this.shapesArr = [];
        if (this.shape === 'circle') {
            this.shapesArr.push(new Circle(150,100,shapeColor,50));
        } else if (this.shape === 'square') {
            this.shapesArr.push(new Square(150,100,shapeColor,100));
        } else if (this.shape === 'triangle') {
            this.shapesArr.push(new Triangle(150,100,shapeColor,150));
        } else {
            console.log("Invalid shape provided - using square");
        }
        this.shapesArr.push(new Text(150,100,initsColor,initials));
    }
    hdr = '<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    trlr = '</svg>';
    render() {
        let renderStr = this.hdr + '\n';
        for (let i=0;i<this.shapesArr.length;i++) {
            renderStr += ('  ' + this.shapesArr[i].render() + '\n');
        }
        renderStr += this.trlr;
        console.log('constructed svg = \n"' + renderStr + '"');
        return renderStr;
    }
}

module.exports = SVG;