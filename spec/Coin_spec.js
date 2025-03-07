import { calculateSortedCoinValue } from '../Coin.js';

describe("Sorted Coin Value Calculation", function() {
    it("should correctly calculate value for a mix of sorted coins", function() {
        expect(calculateSortedCoinValue(["nickel", "dime", "quarter", "loonie", "toonie", "quarter"])).toBeCloseTo(3.65, 2);
    });

    it("should return 0 for an empty array", function() {
        expect(calculateSortedCoinValue([])).toBe(0);
    });

    it("should correctly calculate value for only loonies and toonies", function() {
        expect(calculateSortedCoinValue(["loonie", "loonie", "toonie", "toonie"])).toBe(6);
    });

    it("should throw an error if the input is not an array", function() {
        expect(() => calculateSortedCoinValue("nickel")).toThrowError("Input must be an array of coin names.");
    });

    it("should throw an error for invalid coin names", function() {
        expect(() => calculateSortedCoinValue(["nickel", "banana", "toonie"])).toThrowError("Invalid coin: banana");
    });
});
