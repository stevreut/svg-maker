class Shape {
    
    validHexColor(color) {
        if (color === undefined || color === null || color.trim() === '') {
            return false;
        }
        if (color.length != 7 && color.length != 4) {
            return false;
        }
        if (color.charAt(0) !== '#') {
            return false;
        }
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
    
    validateColor(color, colorLabel) {
        color = color.trim().toLowerCase();
        if (color.length < 3) {
            console.log('\n\nInvalid color ' + color + ' on ' + colorLabel + ' replaced with black\n');
            color = 'black';
            return color;
        } else if (color.charAt(0) === '#') {
            if (!this.validHexColor(color)) {
                console.log('\n\nInvalid hex color ' + color + ' on ' + colorLabel + ' replaced with black\n');
                color = 'black';
                return color;
            } else {
                return color;
            }
        } else {
            return color;  // TODO - more validation would be nice
        }
    }
    
    intTypeFix(x) {
        if (typeof x === 'string') {
            x = parseFloat(x);
        }
        x = Math.floor(x+0.5);
        return x;
    }

    constructor(centerX, centerY, color) {
        // TODO - this class has no super() call since it is top level
        this.centerX = this.intTypeFix(centerX);
        this.centerY = this.intTypeFix(centerY);
        this.color = this.validateColor(color, 'shape color');
    }

    render() {
        // TODO - just leave empty (no default implementation)
    }
}

module.exports = Shape;