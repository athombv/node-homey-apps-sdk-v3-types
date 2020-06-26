export = ManagerBLE;
/**
 * @namespace ManagerBLE
 * @classdesc
 * You can access this manager through the {@link Homey} instance as `this.homey.ble`
 */
declare class ManagerBLE extends Manager {
    /**
     * Discovers BLE peripherals for a certain time
     *
     * > Requires the `homey:wireless:ble` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @param {string[]} [serviceFilter] - List of required serviceUuids the peripheral should expose
     * @param {number} [timeout=10000] - Time in ms to search for Ble peripherals (max 30 seconds)
     * @returns {Promise<BleAdvertisement[]>}
     */
    discover(serviceFilter?: string[] | undefined, timeout?: number | undefined): Promise<BleAdvertisement[]>;
    /**
     * Finds a Ble peripheral with a given peripheralUuid
     *
     * > Requires the `homey:wireless:ble` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @param {string} peripheralUuid - The uuid of the peripheral to find
     * @param {number} [timeout=10000] - Time in ms to search for the Ble peripheral (max 30 seconds)
     * @returns {Promise<BleAdvertisement>}
     */
    find(peripheralUuid: string, timeout?: number | undefined): Promise<BleAdvertisement>;
}
import Manager = require("../lib/Manager.js");
import BleAdvertisement = require("../lib/BleAdvertisement.js");
