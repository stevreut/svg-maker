const Shape = require('./shape.js');

// Represents an EQUILATERAL (approximately) triangle centered at (centerX, centerY)
class Triangle extends Shape {
    constructor (centerX, centerY, color, side) {
        super(centerX, centerY, color);
        this.side = this.intTypeFix(side);
        let xArr = [];
        let yArr = [];
        xArr.push(this.centerX);
        yArr.push(this.centerY - Math.floor(this.side*0.6+0.5));  // 0.6 = naive approx. of sqrt(3)/3
        xArr.push(this.centerX + Math.floor(this.side/2+0.5));
        yArr.push(this.centerY + Math.floor(this.side*0.3+0.5));  // 0.3 = naive approx. of sqrt(3)/6
        xArr.push(this.centerX - Math.floor(this.side/2+0.5));
        yArr.push(this.centerY + Math.floor(this.side*0.3+0.5));  // 0.3 = naive approx. of sqrt(3)/6
        this.pts = "";
        for (let i=0;i<3;i++) {
            console.log('x = ' + xArr[i] + ' y = ' + yArr[i]);
            this.pts += (xArr[i] + " " + yArr[i] + " ");
        }
        this.pts = this.pts.substring(0,this.pts.length-1);
    }
    render() {
        let str = `<polygon points="${this.pts}" fill="${this.color}" />`;
        return str;
    }
}

module.exports = Triangle;