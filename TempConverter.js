/**
 * Converts Fahrenheit to Celsius.
 * Formula: (Fahrenheit - 32) * 5/9
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} - Temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== "number") {
        throw new Error("Input must be a number.");
    }

    return (fahrenheit - 32) * 5 / 9;
}
export {fahrenheitToCelsius}
