const Circle = require('../lib/circle.js');

describe('circle tests', () => {
    describe('circle instantiation', () => {
        it('circle should be instance of Circle class', () => {
            const circle = new Circle(50, 50, 'red', 20);
            expect(circle).toBeInstanceOf(Circle);
        });
    });
    describe('circle render tests', () => {
        it('Circle should be rendered with expected values', () => {
            const circle = new Circle(60, 50, 'red', 30);
            expect(circle.render()).toBe('<circle cx="60" cy="50" r="30" fill="red" />');
        });
        describe('circle type conversion tests', () => {
            it('Circle values given as floating point should be converted to integer representation', () => {
                const circle = new Circle(60.0, 50.0, 'red', 30.0);
                expect(circle.render()).toBe('<circle cx="60" cy="50" r="30" fill="red" />');
            });
            it('Circle values given as floating point should be rounded to nearest integer', () => {
                const circle = new Circle(60.7, 45.3, 'blue', 30.8);
                expect(circle.render()).toBe('<circle cx="61" cy="45" r="31" fill="blue" />');
            });
            it('Circle numeric values given as strings should be converted and rounded to nearest integer', () => {
                const circle = new Circle("60.7", '45.3', '#808080', `30.8`);
                expect(circle.render()).toBe('<circle cx="61" cy="45" r="31" fill="#808080" />');
            });
        });
        describe('circle initial tests', () => {
            it('Circle hex colors with neither 3 or 6 digits should be replaced with "black" (2 digit case)', () => {
                const circle = new Circle(60, 50, '#ab', 30);
                expect(circle.render()).toBe('<circle cx="60" cy="50" r="30" fill="black" />');
            });
            it('Circle hex colors with neither 3 or 6 digits should be replaced with "black" (4 digit case)', () => {
                const circle = new Circle(60, 50, '#ab78', 30);
                expect(circle.render()).toBe('<circle cx="60" cy="50" r="30" fill="black" />');
            });
        });
        describe('circle color tests', () => {
            
        });
    });    
});
