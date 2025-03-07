import { determineEarthquakeDamage } from '../Earthquake.js';

describe("Earthquake Damage Classification", function() {
    it("should return 'Little or no damage and you cant use this excuse to get out of work' for intensity below 5", function() {
        expect(determineEarthquakeDamage(4.9)).toBe("Little or no damage and you cant use this excuse to get out of work");
    });

    it("should return 'Some damage but ya alright' for intensity between 5 and 5.4", function() {
        expect(determineEarthquakeDamage(5.3)).toBe("Some damage but ya alright");
    });

    it("should return 'Serious damage but you lived just gotta pay for everything: walls may crack or fall' for intensity between 5.5 and 6.4", function() {
        expect(determineEarthquakeDamage(6.0)).toBe("Serious damage but you lived just gotta pay for everything: walls may crack or fall");
    });

    it("should return 'Disaster but maybe you lived: buildings may collapse' for intensity between 6.5 and 7.4", function() {
        expect(determineEarthquakeDamage(7.0)).toBe("Disaster but maybe you lived: buildings may collapse");
    });

    it("should return 'Catastrophe: Call for help because everything destroyed' for intensity 7.5 or higher", function() {
        expect(determineEarthquakeDamage(8.0)).toBe("Catastrophe: Call for help because everything destroyed");
    });
});

