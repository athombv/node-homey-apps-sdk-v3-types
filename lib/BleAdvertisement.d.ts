export = BleAdvertisement;
/**
 * This class is a representation of a BLE Advertisement for a {@link BlePeripheral} in Homey.
 * This class must not be initiated by the developer, but retrieved by calling {@link ManagerBle#discover} or {@link ManagerBle#find}.
 * @property {string} id - Id of the peripheral assigned by Homey
 * @property {string} uuid - Uuid of the peripheral
 * @property {string} address - The mac address of the peripheral
 * @property {string} addressType - The address type of the peripheral
 * @property {boolean} connectable - Indicates if Homey can connect to the peripheral
 * @property {string} localName - The local name of the peripheral
 * @property {string} manufacturerData - Manufacturer specific data for peripheral
 * @property {string[]} serviceData - Array of service data entries
 * @property {string[]} serviceUuids - Array of service uuids
 * @property {number} rssi - The rssi signal strength value for the peripheral
 */
declare class BleAdvertisement extends SimpleClass {
    /** Id of the peripheral assigned by Homey */
    id: string; 
    /** Uuid of the peripheral */
    uuid: string; 
    /** The mac address of the peripheral */
    address: string; 
    /** The address type of the peripheral */
    addressType: string; 
    /** Indicates if Homey can connect to the peripheral */
    connectable: boolean; 
    /** The local name of the peripheral */
    localName: string; 
    /** Manufacturer specific data for peripheral */
    manufacturerData: string; 
    /** Array of service data entries */
    serviceData: string[]; 
    /** Array of service uuids */
    serviceUuids: string[]; 
    /** The rssi signal strength value for the peripheral */
    rssi: number; 

    /**
     * Connect to the BLE peripheral this advertisement references
     * @returns {Promise<BlePeripheral>}
     */
    connect(): Promise<BlePeripheral>;
}
import SimpleClass = require("./SimpleClass.js");
import BlePeripheral = require("./BlePeripheral.js");
