const Shape = require('./shape.js');

// Renders an [approximately] EQUILATERAL triangle centered at (centerX, centerY) with side length 
// 'side' and in the provided color.
class Triangle extends Shape {
    constructor (centerX, centerY, color, side) {
        super(centerX, centerY, color);
        this.side = this.intTypeFix(side);
        // The x and y coordinates of the three points defining the vertices of the desired
        // triangle are stored in xArr and yArr, respectively.  Thus point one is (xArr[0], yArr[0]),
        // etc.
        let xArr = [];
        let yArr = [];
        // The three points defining the triangle are calculated as follows, such that the geometric
        // center of the triangle is at (centerX, centerY):  First point is directly above the center,
        // second point is 120 degrees clockwise from the first, and the third point is another 120
        // degrees clockwise and on the same vertical level as the 2nd.
        xArr.push(this.centerX);
        yArr.push(this.centerY - Math.floor(this.side*0.6+0.5));  // 0.6 = naive approx. of sqrt(3)/3
        xArr.push(this.centerX + Math.floor(this.side/2+0.5));
        yArr.push(this.centerY + Math.floor(this.side*0.3+0.5));  // 0.3 = naive approx. of sqrt(3)/6
        xArr.push(this.centerX - Math.floor(this.side/2+0.5));
        yArr.push(this.centerY + Math.floor(this.side*0.3+0.5));  // 0.3 = naive approx. of sqrt(3)/6
        // Build the value of the points= svg attribute:
        this.pts = "";
        for (let i=0;i<3;i++) {
            // For each of the three points, append the x and y values with
            // delimiting spaces.
            this.pts += (xArr[i] + " " + yArr[i] + " ");
        }
        // The above loop will result in one excess trailing space, which is then deleted
        // in the following line.
        this.pts = this.pts.substring(0,this.pts.length-1);
    }
    render() {
        // Note that pts and color are determined when the constructor is called and
        // thus do not need to be recalculated with each call to render().
        let str = `<polygon points="${this.pts}" fill="${this.color}" />`;
        return str;
    }
}

module.exports = Triangle;