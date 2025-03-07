/**
 * Calculates the total value of a set of coins in dollars.
 * The coins are provided as an array, sorted, and their total is calculated.
 * @param {Array<string>} coins - An array of coin types (e.g., ["nickel", "dime", "toonie"])
 * @returns {number} - Total value in dollars
 */
export function calculateSortedCoinValue(coins) {
    if (!Array.isArray(coins)) {
        throw new Error("Input must be an array of coin names.");
    }

    const coinValues = {
        "nickel": 0.05,
        "dime": 0.10,
        "quarter": 0.25,
        "loonie": 1.00,
        "toonie": 2.00
    };

    const filteredCoins = coins.filter(coin => {
        if (!(coin in coinValues)) {
            throw new Error(`Invalid coin: ${coin}`);
        }
        return true;
    });

    filteredCoins.sort((a, b) => coinValues[b] - coinValues[a]);

    return filteredCoins.reduce((total, coin) => total + coinValues[coin], 0);
}
