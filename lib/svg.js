const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Nautilus = require('./nautilus.js');
const Text = require('./text.js');

// Enables rendering of an SVG string (not file) from provided constructor parameters
// such that:
//  1. Image has dimensions 300px (width) by 200px (height)
//  2. Image has a light grey background
//  3. Image has a black border
//  4. A shape (user-specified) is centered no the SVG image
//  5. The shape is in the color specified by the user (from limited choices)
//  6. On top of the shape, the users initials (subject to modification) are 
//       displayed centered.
//  7. The initials are displayed in a color specified by the user.
class SVG {
    constructor(initials = "ABC", initsColor, shape = "square", shapeColor) {
        this.initials = initials;
        this.initsColor = initsColor;
        this.shape = shape.trim().toLowerCase();
        this.shapeColor = shapeColor;
        this.shapesArr = [];
        // In all cases, the center will have coordinates (150,100) since
        // the overall images is 300x200.
        if (this.shape === 'circle') {
            this.shapesArr.push(new Circle(150,100,shapeColor,50));
        } else if (this.shape === 'square') {
            this.shapesArr.push(new Square(150,100,shapeColor,100));
        } else if (this.shape === 'triangle') {
            this.shapesArr.push(new Triangle(150,100,shapeColor,120));
        } else if (this.shape === 'nautilus') {
            this.shapesArr.push(new Nautilus(150,100,shapeColor,90));
        } else {
            // This should not happen since inquirer requires one of the
            // valid list of shapes.  However, should this occur, the
            // initials would be rendered without the underlying shape.
            console.log("Invalid shape provided - using square");
        }
        this.shapesArr.push(new Text(150,100,initsColor,initials));
    }
    // hdr (the "header") contains the opening <svg> element tag plus the renderings of
    // the grey background rectangle and its black border.
    hdr = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#dddddd" />
      <rect width="100%" height="100%" fill="transparent" stroke="#000000" stroke-width="3" />`;
    trlr = '</svg>';
    render() {
        // renderStr will be the returned SVG rendering string.  It will
        // start with the SVG header and subsequent renderings of the 
        // background.
        let renderStr = this.hdr + '\n';
        // The shapesArr array will contain, in order, the background shape
        // and the overlaid text.  Both of these are sub classes of the
        // Shape class and the render() method thereof is called accordingly.
        for (let i=0;i<this.shapesArr.length;i++) {
            renderStr += ('  ' + this.shapesArr[i].render() + '\n');
        }
        // Finished by appending the SVG closing element tag.
        renderStr += this.trlr;
        return renderStr;
    }
}

module.exports = SVG;