const Shape = require('./shape.js');

class Circle extends Shape {
    constructor (centerX, centerY, color, radius) {
        super(centerX, centerY, color);
        this.radius = intTypeFix(radius);
    }
    render() {
        let str = `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />`;
        return str;
    }
}

module.exports = Circle;