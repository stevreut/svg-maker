class Shape {
    constructor(centerX, centerY, color) {
        // TODO - this class has no super() call since it is top level
        this.centerX = intTypeFix(centerX);
        this.centerY = intTypeFix(centerY);
        this.color = color;
    }
    render() {
        // TODO - just leave empty (no default implementation)
    }
    intTypeFix(x) {
        if (typeof x === 'string') {
            x = parseFloat(x);
        }
        x = Math.floor(x+0.5);
        return x;
    }
}

module.exports = Shape;