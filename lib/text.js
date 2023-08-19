const Shape = require('./shape.js');

class Text extends Shape {
    constructor (centerX, centerY, color, content) {
        super(centerX, centerY, color);
        this.content = content;
        this.adjustedCenterY = this.centerY+12;
    }
    render() {
        let str = `<text x="${this.centerX}" y="${this.adjustedCenterY}" font-size="40" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
        return str;
    }
}

module.exports = Text;