const Shape = require('./shape.js');

class Text extends Shape {
    validateTextContent(txtCont) {
        if (txtCont === null || txtCont === undefined) {
            console.log('\n\nProvided text content was null or undefined, using "XYZ"\n');
            return "XYZ";
        }
        txtCont = txtCont.trim().toUpperCase();
        if (txtCont.length === 0) {
            console.log('\n\nNo text content entered, defaulting to "XYZ"\n');
            return "XYZ";
        } else if (txtCont.length > 3) {
            console.log('\n\nToo many characters entered, will be truncated\n');
            return txtCont.substring(0,3);
        } else {
            return txtCont;
        }
    }
    constructor (centerX, centerY, color, content) {
        super(centerX, centerY, color);
        this.content = this.validateTextContent(content);
        this.adjustedCenterY = this.centerY+10;
    }
    render() {
        let str = `<text x="${this.centerX}" y="${this.adjustedCenterY}" font-size="24" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
        return str;
    }
}

module.exports = Text;