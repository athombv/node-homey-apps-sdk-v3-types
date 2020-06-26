export = ManagerGeolocation;
/**
 * @namespace ManagerGeolocation
 * @classdesc
 * You can access this manager through the {@link Homey} instance as `this.homey.geolocation`
 */
declare class ManagerGeolocation extends Manager {
    /**
     * Fired when the location is updated
     *
     * > Requires the `homey:manager:geolocation` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @event ManagerGeolocation#location
     */
    /**
     * Get the Homey's physical location's latitude
     *
     * > Requires the `homey:manager:geolocation` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @returns {number} latitude
     */
    getLatitude(): number;
    /**
     * Get the Homey's physical location's longitude
     *
     * > Requires the `homey:manager:geolocation` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @returns {number} longitude
     */
    getLongitude(): number;
    /**
     * Get the Homey's physical location's accuracy
     *
     * > Requires the `homey:manager:geolocation` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @returns {number} accuracy (in meter)
     */
    getAccuracy(): number;
    /**
     * Get the Homey's physical mode
     *
     * > Requires the `homey:manager:geolocation` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @returns {string} `auto` or `manual`
     */
    getMode(): string;
}
import Manager = require("../lib/Manager.js");
