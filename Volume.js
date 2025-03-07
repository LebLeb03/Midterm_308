/**
 * Calculates the volume of a cube given its height (side length).
 * Formula: Volume = side³
 * @param {number} height - Height (side length) of the cube in meters
 * @returns {number} - Volume of the cube in cubic meters
 */
function calculateCubeVolume(height) {
    if (typeof height !== "number") {
        throw new Error("Input must be a number.");
    }
    
    if (height < 0) {
        throw new Error("Height cannot be negative.");
    }

    return Math.pow(height, 3);
}
export {calculateCubeVolume}
