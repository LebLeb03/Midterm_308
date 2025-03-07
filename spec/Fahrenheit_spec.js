import { fahrenheitToCelsius } from "../TempConverter.js";


describe("Fahrenheit to Celsius Conversion", function() {
    it("should convert freezing point (32°F) to 0°C", function() {
        expect(fahrenheitToCelsius(32)).toBeCloseTo(0, 2);
    });

    it("should convert boiling point (212°F) to 100°C", function() {
        expect(fahrenheitToCelsius(212)).toBeCloseTo(100, 2);
    });

    it("should convert room temperature (70°F) to 21.11°C", function() {
        expect(fahrenheitToCelsius(70)).toBeCloseTo(21.11, 2);
    });

    it("should throw an error for non-numeric input", function() {
        expect(() => fahrenheitToCelsius("hot")).toThrowError("Input must be a number.");
        expect(() => fahrenheitToCelsius(null)).toThrowError("Input must be a number.");
    });
});
