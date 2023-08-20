// Superclass for various shapes which can be rendered as SVG components.  All such child
// classes have a center (centerX, centerY) and color.
class Shape {
    
    // Returns true if and only if the provided color parameter is a properly 
    // encoded hex code for a color.
    validHexColor(color) {
        if (color === undefined || color === null || color.trim() === '') {
            return false;
        }
        // Both 3-character (e.g. '#ffe') and 6-character (e.g. '#ffffee') encodings
        // are accepted.
        if (color.length != 7 && color.length != 4) {
            return false;
        }
        // String must start with a '#' character.
        if (color.charAt(0) !== '#') {
            return false;
        }
        // All characters after the first must be a hexadecimal digit
        // character.
        for (let i=1;i<color.length;i++) {
            let ch = color.charAt(i);
            if (!((ch >= 'A' && ch <= 'F') ||
                  (ch >= 'a' && ch <= 'f') ||
                  (ch >= '0' && ch <= '9'))) {
                    return false;
            }
        }
        return true;
    }
    
    // If the color is valid then it is returned unchanged; otherwise, it is
    // replaced with 'black' and that replacement is noted on the console logging.
    validateColor(color, colorLabel) {
        color = color.trim().toLowerCase();
        // At this time, no validation is done against the extensive list of acceptable
        // color names, but it is known that none of those colors has a name with a length of
        // less than three characters and, thus, any color with a lesser length is rejected.
        if (color.length < 3) {
            console.log('\n\nInvalid color ' + color + ' on ' + colorLabel + ' replaced with black\n');
            color = 'black';
            return color;
        } else if (color.charAt(0) === '#') {
            // If the color starts with '#' then the intention is to use a color hex code, in which case
            // we validate on that basis and, if not valid, replace the valid with 'black' and
            // log that replacement to the console.
            if (!this.validHexColor(color)) {
                console.log('\n\nInvalid hex color ' + color + ' on ' + colorLabel + ' replaced with black\n');
                color = 'black';
                return color;
            } else {
                // Otherwise, if valid, we return it unchanged.
                return color;
            }
        } else {
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