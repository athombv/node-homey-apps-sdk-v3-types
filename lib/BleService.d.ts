export = BleService;
/**
 * This class is a representation of a BLE Advertisement for a {@link BlePeripheral} in Homey.
 * This class must not be initiated by the developer, but retrieved by calling {@link BlePeripheral#discoverServices} or {@link BlePeripheral#getService}.
 * @property {string} id - Id of the service assigned by Homey
 * @property {string} uuid - Uuid of the service
 * @property {BlePeripheral} peripheral - The peripheral object that is the owner of this service
 * @property {string} name - The name of the service
 * @property {string} type - The type of the service
 */
declare class BleService extends SimpleClass {
    /** Id of the service assigned by Homey */
    id: string;
    /** Uuid of the service */
    uuid: string;
    /** The peripheral object that is the owner of this service */
    peripheral: BlePeripheral;
    /** The name of the service */
    name: string;
    /** The type of the service */
    type: string;
    characteristics: any;
    /**
     * Discovers included service uuids
     * @param {string[]} [includedServicesFilter] Array of included service uuids to search for
     * @returns {Promise<void>}
     */
    discoverIncludedServices(includedServicesFilter?: string[] | undefined): Promise<void>;
    /**
     * Discover characteristics of this service
     * @param {string[]} [characteristicsFilter] List of characteristicUuids to search for
     * @returns {Promise<BleCharacteristic[]>}
     */
    discoverCharacteristics(characteristicsFilter?: string[] | undefined): Promise<BleCharacteristic[]>;
    /**
     * gets a characteristic for given characteristicUuid
     * @param {string} uuid The characteristicUuid to get
     * @returns {Promise<BleCharacteristic>}
     */
    getCharacteristic(uuid: string): Promise<BleCharacteristic>;
    /**
     * Shorthand to read a characteristic for given characteristicUuid
     * @param {string} characteristicUuid The uuid of the characteristic that needs to be read
     * @returns {Promise<Buffer>}
     */
    read(characteristicUuid: string): Promise<Buffer>;
    /**
     * Shorthand to write to a characteristic for given characteristicUuid
     * @param {string} characteristicUuid The uuid of the characteristic that needs to be written to
     * @param {Buffer} data The data that needs to be written
     * @returns {Promise<Buffer>}
     */
    write(characteristicUuid: string, data: Buffer): Promise<Buffer>;
}
import SimpleClass = require("./SimpleClass.js");
import BlePeripheral = require("./BlePeripheral.js");
import BleCharacteristic = require("./BleCharacteristic.js");
