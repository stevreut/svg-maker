const Shape = require('./shape.js');

class Text extends Shape {
    constructor (centerX, centerY, color, content) {
        super(centerX, centerY, color);
        this.content = content;
    }
    render() {
        let str = `<text x="${this.centerX}" y="${this.centerY}" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
        return str;
    }
}

module.exports = Text;