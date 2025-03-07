/**
 * Determines the damage level based on earthquake intensity (Richter scale number).
 * @param {number} intensity - Richter scale number for earthquake severity
 * @returns {string} - Description of earthquake damage
 */
export function determineEarthquakeDamage(intensity) {
    if (typeof intensity !== "number" || intensity < 0) {
        throw new Error("Intensity must be a non-negative number.");
    }

    if (intensity < 5) {
        return "Little or no damage and you cant use this excuse to get out of work";
    } else if (intensity < 5.5) {
        return "Some damage but ya alright";
    } else if (intensity < 6.5) {
        return "Serious damage but you lived just gotta pay for everything: walls may crack or fall";
    } else if (intensity < 7.5) {
        return "Disaster but maybe you lived: buildings may collapse";
    } else {
        return "Catastrophe: Call for help because everything destroyed";
    }
}


