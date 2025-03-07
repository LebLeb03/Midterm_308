import { calculateGymCost } from '../Gym.js';


describe("Gym Membership Cost Calculation", function() {
    it("should return full price with 0 friends (no discount)", function() {
        expect(calculateGymCost(100, 0)).toBe(100);
    });

    it("should apply a 5% discount for 1 friend", function() {
        expect(calculateGymCost(100, 1)).toBe(95);
    });

    it("should apply a 10% discount for 2 friends", function() {
        expect(calculateGymCost(100, 2)).toBe(90);
    });

    it("should apply a 15% discount for 3 friends", function() {
        expect(calculateGymCost(100, 3)).toBe(85);
    });

    it("should apply a 15% discount for 4 or more friends", function() {
        expect(calculateGymCost(100, 4)).toBe(85);
    });

    it("should throw an error for negative cost", function() {
        expect(() => calculateGymCost(-50, 2)).toThrowError("Cost must be a positive number.");
    });

    it("should throw an error for negative number of friends", function() {
        expect(() => calculateGymCost(100, -2)).toThrowError("Friends must be a non-negative integer.");
    });

    it("should throw an error for non-integer number of friends", function() {
        expect(() => calculateGymCost(100, 2.5)).toThrowError("Friends must be a non-negative integer.");
    });

    it("should throw an error for non-numeric inputs", function() {
        expect(() => calculateGymCost("100", 2)).toThrowError("Cost must be a positive number.");
        expect(() => calculateGymCost(100, "two")).toThrowError("Friends must be a non-negative integer.");
    });
});
