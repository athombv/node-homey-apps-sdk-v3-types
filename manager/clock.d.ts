export = ManagerClock;
/**
 * @namespace ManagerClock
 * @classdesc
 * You can access this manager through the {@link Homey} instance as `this.homey.clock`
 */
declare class ManagerClock extends Manager {
    /**
     * Get the current TimeZone
     * @returns {String}
     */
    getTimezone(): string;
}
import Manager = require("../lib/Manager.js");
