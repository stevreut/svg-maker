const Triangle = require('../lib/triangle.js');

describe('triangle tests', () => {
    describe('triangle instantiation', () => {
        it('triangle should be instance of Triangle class', () => {
            const triangle = new Triangle(50, 50, 'red', 20);
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });
    describe('triangle render tests', () => {
        it('Triangle should be rendered with expected values', () => {
            const triangle = new Triangle(60, 50, 'red', 30);
            expect(triangle.render()).toBe('<polygon points="60 32 75 59 45 59" fill="red" />');
        });
        describe('triangle type conversion tests', () => {
            it('Triangle values given as floating point should be converted to integer representation', () => {
                const triangle = new Triangle(60.0, 50.0, 'red', 30.0);
                expect(triangle.render()).toBe('<polygon points="60 32 75 59 45 59" fill="red" />');
            });
            it('Triangle values given as floating point should be rounded to nearest integer', () => {
                const triangle = new Triangle(60.7, 45.3, 'blue', 30.8);
                expect(triangle.render()).toBe('<polygon points="61 26 77 54 45 54" fill="blue" />');
            });
            it('Triangle numeric values given as strings should be converted and rounded to nearest integer', () => {
                const triangle = new Triangle("60.7", '45.3', '#808080', `30.8`);
                expect(triangle.render()).toBe('<polygon points="61 26 77 54 45 54" fill="#808080" />');
            });
        });
        describe('triangle color tests', () => {
            it('Triangle hex colors with neither 3 or 6 digits should be replaced with "black" (2 digit case)', () => {
                const triangle = new Triangle(60, 50, '#ab', 30);
                expect(triangle.render()).toBe('<polygon points="60 32 75 59 45 59" fill="black" />');
            });
            it('Triangle hex colors with neither 3 or 6 digits should be replaced with "black" (4 digit case)', () => {
                const triangle = new Triangle(60, 50, '#ab78', 30);
                expect(triangle.render()).toBe('<polygon points="60 32 75 59 45 59" fill="black" />');
            });
            it('Triangle hex colors with invalid hex characters should be replaced with "black"', () => {
                const triangle = new Triangle(60, 50, '#ab789z', 30);
                expect(triangle.render()).toBe('<polygon points="60 32 75 59 45 59" fill="black" />');
            });
            it('Triangle hex colors with valid hex characters should be rendered with specified color', () => {
                const triangle = new Triangle(60, 50, '#ab789f', 30);
                expect(triangle.render()).toBe('<polygon points="60 32 75 59 45 59" fill="#ab789f" />');
            });
        });
    });    
});
