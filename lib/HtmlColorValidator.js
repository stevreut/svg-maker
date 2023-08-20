class HtmlColorValidator {
    
    constructor() {}

    // TODO - list derived from 
    validColorArr =
     ['aliceblue',
      'antiquewhite',
      'aqua',
      'aquamarine',
      'azure',
      'beige',
      'bisque',
      'black',
      'blanchedalmond',
      'blue',
      'blueviolet',
      'brown',
      'burlywood',
      'cadetblue',
      'chartreuse',
      'chocolate',
      'coral',
      'cornflowerblue',
      'cornsilk',
      'crimson',
      'cyan',
      'darkblue',
      'darkcyan',
      'darkgoldenrod',
      'darkgray',
      'darkgreen',
      'darkgrey',
      'darkkhaki',
      'darkmagenta',
      'darkolivegreen',
      'darkorange',
      'darkorchid',
      'darkred',
      'darksalmon',
      'darkseagreen',
      'darkslateblue',
      'darkslategray',
      'darkslategrey',
      'darkturquoise',
      'darkviolet',
      'deeppink',
      'deepskyblue',
      'dimgray',
      'dimgrey',
      'dodgerblue',
      'firebrick',
      'floralwhite',
      'forestgreen',
      'fuchsia',
      'gainsboro',
      'ghostwhite',
      'gold',
      'goldenrod',
      'gray',
      'green',
      'greenyellow',
      'grey',
      'honeydew',
      'hotpink',
      'indianred',
      'indigo',
      'ivory',
      'khaki',
      'lavender',
      'lavenderblush',
      'lawngreen',
      'lemonchiffon',
      'lightblue',
      'lightcoral',
      'lightcyan',
      'lightgoldenrodyellow',
      'lightgray',
      'lightgreen',
      'lightgrey',
      'lightpink',
      'lightsalmon',
      'lightseagreen',
      'lightskyblue',
      'lightslategray',
      'lightslategrey',
      'lightsteelblue',
      'lightyellow',
      'lime',
      'limegreen',
      'linen',
      'magenta',
      'maroon',
      'mediumaquamarine',
      'mediumblue',
      'mediumorchid',
      'mediumpurple',
      'mediumseagreen',
      'mediumslateblue',
      'mediumspringgreen',
      'mediumturquoise',
      'mediumvioletred',
      'midnightblue',
      'mintcream',
      'mistyrose',
      'moccasin',
      'navajowhite',
      'navy',
      'oldlace',
      'olive',
      'olivedrab',
      'orange',
      'orangered',
      'orchid',
      'palegoldenrod',
      'palegreen',
      'paleturquoise',
      'palevioletred',
      'papayawhip',
      'peachpuff',
      'peru',
      'pink',
      'plum',
      'powderblue',
      'purple',
      'rebeccapurple',
      'red',
      'rosybrown',
      'royalblue',
      'saddlebrown',
      'salmon',
      'sandybrown',
      'seagreen',
      'seashell',
      'sienna',
      'silver',
      'skyblue',
      'slateblue',
      'slategray',
      'slategrey',
      'snow',
      'springgreen',
      'steelblue',
      'tan',
      'teal',
      'thistle',
      'tomato',
      'turquoise',
      'violet',
      'wheat',
      'white',
      'whitesmoke',
      'yellow',
      'yellowgreen'];
    
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

    isValidHtmlColor(color) {
        if (typeof color !== 'string') {
            return false;
        }
        if (color.trim() !== color) {
            return false;
        }
        if (color.length < 1) {
            return false;
        }
        if (color.charAt('#')) {
            return this.validHexColor(color);
        } else {
            let testColor = color.toLowerCase();
            for (listColor of this.validColorArr) {
                if (testColor === listColor) {
                    return true;
                }
            }
            // No match in list, so presumed not to be a valid color
            return false;
        }
    }
}

module.exports = HtmlColorValidator;