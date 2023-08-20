const HtmlColorValidator = require('../lib/HtmlColorValidator.js');

describe('Color validation testing (class HtmlColorValidator)', () => {
    it('Non-string should not be valid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor(null)).toBe(false);
    });
    it('Hex colors with neither 3 nor 6 digits should be invalid (2 digit case)', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab')).toBe(false);
    });
    it('Hex colors with neither 3 nor 6 digits should be invalid (4 digit case)', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab78')).toBe(false);
    });
    it('Hex colors with neither 3 nor 6 digits should be invalid (4 digit case)', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab78')).toBe(false);
    });
    it('Hex colors with invalid hex characters should be invalid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab78bz')).toBe(false);
    });
    it('Hex colors with 3 valid hex characters should be invalid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab7')).toBe(true);
    });
    it('Hex colors with 6 valid hex characters should be invalid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab7be8')).toBe(true);
    });
    it('Hex colors with invalid hex characters should be invalid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('#ab78bz')).toBe(false);
    });
    it('Listed color names should be valid regardless of case', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('BLUe')).toBe(true);
    });
    it('Unlisted color names should not be valid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('nosuchcolor')).toBe(false);
    });
    it('Color names with leading spaces should not be valid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor(' red')).toBe(false);
    });
    it('olor names with trailing spaces should not be valid', () => {
        const colorValidator = new HtmlColorValidator();
        expect(colorValidator.isValidHtmlColor('green  ')).toBe(false);
    });
});
