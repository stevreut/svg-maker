const Shape = require('./shape.js');

class Circle extends Shape {
    constructor (centerX, centerY, color, radius) {
        super(centerX, centerY, color);
        console.log('circle radius before = ' + radius + ' with type of ' + typeof radius);
        this.radius = this.intTypeFix(radius);
        console.log('circle radius after = ' + this.radius + ' with type of ' + typeof this.consoleradius);
    }
    render() {
        let str = `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />`;
        return str;
    }
}

module.exports = Circle;