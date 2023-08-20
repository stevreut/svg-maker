const Shape = require('./shape.js');

// Renders text centered at the provided coordinates.
class Text extends Shape {

    // Replaces or modifies invalid text content, or returns it unchanged if entirely valid.
    validateTextContent(txtCont) {
        // Return 'XYZ' if invalid type and log the replacement to the console.
        if (txtCont === null || txtCont === undefined || typeof txtCont !== 'string') {
            console.log('\n\nProvided text content was null or undefined, using "XYZ"\n');
            return "XYZ";
        }
        // Remove leading and trailing spaces and convert to upper case.
        txtCont = txtCont.trim().toUpperCase();
        if (txtCont.length === 0) {
            // If the resulting string is empty then return "XYZ" and log the replacement
            // to the  console.
            console.log('\n\nNo text content entered, defaulting to "XYZ"\n');
            return "XYZ";
        } else if (txtCont.length > 3) {
            // If the resulting string is too long then truncate and log the replacement
            // to the console.
            console.log('\n\nToo many characters entered, will be truncated\n');
            return txtCont.substring(0,3);
        } else {
            // If valid then return as-is without modification.
            return txtCont;
        }
    }
    constructor (centerX, centerY, color, content) {
        super(centerX, centerY, color);
        this.content = this.validateTextContent(content);
        // If centerY were used in SVG rendering then the resulting rendering of the text
        // would be displayed such that the BASE of the text was at the vertical center of
        // the images.  Thus we add 10 to get adjustedCenterY, thereby enabling the centering
        // of the text such that the CENTER of the text is approximately at the center of the image.
        this.adjustedCenterY = this.centerY+10;
    }
    render() {
        let str = `<text x="${this.centerX}" y="${this.adjustedCenterY}" font-size="24" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
        return str;
    }
}

module.exports = Text;