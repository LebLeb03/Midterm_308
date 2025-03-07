/**
 * Calculates the total cost of a gym membership after applying a discount.
 * @param {number} cost - The base cost of the gym membership (must be greater than 0).
 * @param {number} friends - Number of friends signed up (must be 0 or more).
 * @returns {number} - The final cost after applying the discount.
 */
function calculateGymCost(cost, friends) {
    if (typeof cost !== "number" || cost <= 0) {
        throw new Error("Cost must be a positive number.");
    }

    if (typeof friends !== "number" || friends < 0 || !Number.isInteger(friends)) {
        throw new Error("Friends must be a non-negative integer.");
    }

    let discountPercentage = 0;
    if (friends === 1) {
        discountPercentage = 5;
    } else if (friends === 2) {
        discountPercentage = 10;
    } else if (friends >= 3) {
        discountPercentage = 15;
    }

    const discountAmount = (cost * discountPercentage) / 100;
    return cost - discountAmount;
}
export{calculateGymCost}
