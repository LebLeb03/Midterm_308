import { calculateCubeVolume } from '../Volume.js';

describe("Cube Volume Calculation", function() {
    it("should correctly calculate volume for a cube with side 2m", function() {
        expect(calculateCubeVolume(2)).toBe(8);
    });

    it("should correctly calculate volume for a cube with side 3m", function() {
        expect(calculateCubeVolume(3)).toBe(27);
    });

    it("should correctly calculate volume for a cube with side 4m", function() {
        expect(calculateCubeVolume(4)).toBe(64);
    });

    it("should return 0 for a cube with side 0m", function() {
        expect(calculateCubeVolume(0)).toBe(0);
    });

    it("should throw an error for negative height", function() {
        expect(() => calculateCubeVolume(-3)).toThrowError("Height cannot be negative.");
    });

    it("should throw an error for non-numeric input", function() {
        expect(() => calculateCubeVolume("five")).toThrowError("Input must be a number.");
        expect(() => calculateCubeVolume(null)).toThrowError("Input must be a number.");
    });
});
