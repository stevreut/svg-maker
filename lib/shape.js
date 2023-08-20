const HtmlColorValidator = require('./HtmlColorValidator.js');
let colorValidator = new HtmlColorValidator();

// Superclass for various shapes which can be rendered as SVG components.  All such child
// classes have a center (centerX, centerY) and color.
class Shape {
    
    // If the color is valid then it is returned unchanged; otherwise, it is
    // replaced with 'black' and that replacement is noted on the console logging.
    validateColor(color, colorLabel) {
        if (colorValidator.isValidHtmlColor(color)) {
            return color;
        } else {
            console.log('\n\nInvalid color ' + color + ' on ' + colorLabel + ' replaced with black\n');
            color = 'black';
            return color;
        }
    }
    
    // Unifies the conversion of parameters to integer numerics where a number is
    // expected.
    intTypeFix(x) {
        if (typeof x === 'string') {
            // if the parameter is a string then we convert it as a floating-point 
            // number (rather than as an integer) so that we can appropriately ROUND
            // to the nearest integer.
            x = parseFloat(x);
        }
        // Round to the nearest integer
        x = Math.floor(x+0.5);
        // Returned valid will always be a number with an integer value.
        return x;
    }

    constructor(centerX, centerY, color) {
        // CenterX and centerY will always be integer numbers regardless of parameter type
        this.centerX = this.intTypeFix(centerX);
        this.centerY = this.intTypeFix(centerY);
        this.color = this.validateColor(color, 'shape color');
    }

    render() {
        // This is essentially an abstract class and, thus, is always overridden
        // by the child class that extends it.  The Shape class itself has a no-op
        // implementation of this method.
    }
}

module.exports = Shape;