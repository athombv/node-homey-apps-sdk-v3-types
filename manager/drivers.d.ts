export = ManagerDrivers;
/**
 * @namespace ManagerDrivers
 * @classdesc
 * You can access this manager through the {@link Homey} instance as `this.homey.drivers`
 */
declare class ManagerDrivers extends Manager {
    /**
     * Get a Driver instance by its ID
     * @param {string} driverId ID of the driver, as defined in app.json
     * @returns {Driver} Driver
     */
    getDriver(driverId: string): Driver;
    /**
     * Get an object with all {@link Driver} instances, with their ID as key
     * @returns {object} Drivers
     */
    getDrivers(): object;
}
import Manager = require("../lib/Manager.js");
import Driver = require("../lib/Driver.js");
