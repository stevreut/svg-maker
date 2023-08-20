const Text = require('../lib/text.js');

describe('text tests', () => {
    describe('text instantiation', () => {
        it('text should be instance of Text class', () => {
            const text = new Text(50, 50, 'red', 20);
            expect(text).toBeInstanceOf(Text);
        });
    });
    describe('text render tests', () => {
        it('Text should be rendered with expected values', () => {
            const text = new Text(60, 50, 'red', "ABC");
            expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="red">ABC</text>');
        });
        describe('text type conversion tests', () => {
            it('Text values given as floating point should be converted to integer representation', () => {
                const text = new Text(60.0, 50.0, 'red', 'ABC');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="red">ABC</text>');
            });
            it('Text values given as floating point should be rounded to nearest integer', () => {
                const text = new Text(60.7, 45.3, 'blue', 'ABC');
                expect(text.render()).toBe('<text x="61" y="55" font-size="24" text-anchor="middle" fill="blue">ABC</text>');
            });
            it('Text numeric values given as strings should be converted and rounded to nearest integer', () => {
                const text = new Text("60.7", '45.3', '#808080', 'DEF');
                expect(text.render()).toBe('<text x="61" y="55" font-size="24" text-anchor="middle" fill="#808080">DEF</text>');
            });
        });
        describe('text color tests', () => {
            it('Text hex colors with neither 3 or 6 digits should be replaced with "black" (2 digit case)', () => {
                const text = new Text(60, 50, '#ab', 'DEF');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="black">DEF</text>');
            });
            it('Text hex colors with neither 3 or 6 digits should be replaced with "black" (4 digit case)', () => {
                const text = new Text(60, 50, '#ab78', 'GHI');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="black">GHI</text>');
            });
            it('Text hex colors with invalid hex characters should be replaced with "black"', () => {
                const text = new Text(60, 50, '#ab789z', 'JKL');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="black">JKL</text>');
            });
            it('Text hex colors with valid hex characters should be rendered with specified color', () => {
                const text = new Text(60, 50, '#ab789f', 'JKL');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="#ab789f">JKL</text>');
            });
        });
        describe('text content tests', () => {
            it('Text null content should be replaced with "XYZ"', () => {
                const text = new Text(60, 50, '#ab789f', null);
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="#ab789f">XYZ</text>');
            });
            it('Text content should be trimmed of spaces', () => {
                const text = new Text(60, 50, '#ab789f', '  SAM   ');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="#ab789f">SAM</text>');
            });
            it('Text content should be converted to upper case', () => {
                const text = new Text(60, 50, '#ab789f', 'Pqr');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="#ab789f">PQR</text>');
            });
            it('Text content should be truncated if it exceeds 3 characters after trimming', () => {
                const text = new Text(60, 50, '#ab789f', '  Pqrxjf');
                expect(text.render()).toBe('<text x="60" y="60" font-size="24" text-anchor="middle" fill="#ab789f">PQR</text>');
            });
        });
    });    
});
