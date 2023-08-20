const Square = require('../lib/square.js');

describe('square tests', () => {
    describe('square instantiation', () => {
        it('square should be instance of Square class', () => {
            const square = new Square(50, 50, 'red', 20);
            expect(square).toBeInstanceOf(Square);
        });
    });
    describe('square render tests', () => {
        it('Square should be rendered with expected values', () => {
            const square = new Square(60, 50, 'red', 30);
            expect(square.render()).toBe('<rect x="45" y="35" width="30" height="30" fill="red" />');
        });
        describe('square type conversion tests', () => {
            it('Square values given as floating point should be converted to integer representation', () => {
                const square = new Square(60.0, 50.0, 'red', 30.0);
                expect(square.render()).toBe('<rect x="45" y="35" width="30" height="30" fill="red" />');
            });
            it('Square values given as floating point should be rounded to nearest integer', () => {
                const square = new Square(60.7, 45.3, 'blue', 30.8);
                expect(square.render()).toBe('<rect x="46" y="30" width="31" height="31" fill="blue" />');
            });
            it('Square numeric values given as strings should be converted and rounded to nearest integer', () => {
                const square = new Square("60.7", '45.3', '#808080', `30.8`);
                expect(square.render()).toBe('<rect x="46" y="30" width="31" height="31" fill="#808080" />');
            });
        });
        describe('square color tests', () => {
            it('Square hex colors with neither 3 or 6 digits should be replaced with "black" (2 digit case)', () => {
                const square = new Square(60, 50, '#ab', 30);
                expect(square.render()).toBe('<rect x="45" y="35" width="30" height="30" fill="black" />');
            });
            it('Square hex colors with neither 3 or 6 digits should be replaced with "black" (4 digit case)', () => {
                const square = new Square(60, 50, '#ab78', 30);
                expect(square.render()).toBe('<rect x="45" y="35" width="30" height="30" fill="black" />');
            });
            it('Square hex colors with invalid hex characters should be replaced with "black"', () => {
                const square = new Square(60, 50, '#ab789z', 30);
                expect(square.render()).toBe('<rect x="45" y="35" width="30" height="30" fill="black" />');
            });
            it('Square hex colors with valid hex characters should be rendered with specified color', () => {
                const square = new Square(60, 50, '#ab789f', 30);
                expect(square.render()).toBe('<rect x="45" y="35" width="30" height="30" fill="#ab789f" />');
            });
        });
    });    
});
