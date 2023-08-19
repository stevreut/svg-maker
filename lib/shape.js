class Shape {
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
        this.color = color;
    }
    render() {
        // TODO - just leave empty (no default implementation)
    }
}

module.exports = Shape;