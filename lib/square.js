const Shape = require('./shape.js');

// Renders a square centered at (centerX, centerY) with side length 'side' and provided color
class Square extends Shape {
    constructor (centerX, centerY, color, side) {
        super(centerX, centerY, color);
        this.side = this.intTypeFix(side);
        // Calculate the upper left corner coordinates based on the provided center coordinates
        // and the length of the sides, then round to the nearest integer.
        this.x1 = Math.floor(this.centerX-this.side/2+0.5);
        this.y1 = Math.floor(this.centerY-this.side/2+0.5);
    }
    render() {
        let str = `<rect x="${this.x1}" y="${this.y1}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
        return str;
    }
}

module.exports = Square;