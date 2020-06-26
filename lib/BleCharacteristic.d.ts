export = BleCharacteristic;
/**
 * This class is a representation of a BLE Advertisement for a {@link BlePeripheral} in Homey.
 * This class must not be initiated by the developer, but retrieved by calling {@link BleService#discoverCharacteristics} or {@link BleService#getCharacteristic}.
 * @property {string} id - Id of the characteristic assigned by Homey
 * @property {string} uuid - Uuid of the characteristic
 * @property {BlePeripheral} peripheral - The peripheral object that is the owner of this characteristic
 * @property {BleService} service - The service object that is the owner of this characteristic
 * @property {string} name - The name of the characteristic
 * @property {string} type - The type of the characteristic
 * @property {string[]} properties - The properties of the characteristic
 * @property {Buffer} value - The value of the characteristic. Note this is set to the last result of ${@link BleCharacteristic#read} and is initially null
 */
declare class BleCharacteristic extends SimpleClass {
    /** Id of the characteristic assigned by Homey */
    id: string;
    /** Uuid of the characteristic */
    uuid: string;
    /** The peripheral object that is the owner of this characteristic */
    peripheral: BlePeripheral;
    /** The service object that is the owner of this characteristic */
    service: BleService;
    /** The name of the characteristic */
    name: string;
    /** The type of the characteristic */
    type: string;
    /** The properties of the characteristic */
    properties: string[];
    /** The value of the characteristic. Note this is set to the last result of ${@link BleCharacteristic#read} and is initially null */
    value: Buffer;
    /**
     * Discovers descriptors for this characteristic
     * @param {string[]} [descriptorsFilter] list of descriptorUuids to search for
     * @returns {Promise<BleDescriptor[]>}
     */
    discoverDescriptors(descriptorsFilter?: string[] | undefined): Promise<BleDescriptor[]>;
    /**
     * Read the value for this characteristic
     * @returns {Promise<Buffer>}
     */
    read(): Promise<Buffer>;
    /**
     * Write a value to this characteristic
     * @param {Buffer} data The data that should be written
     * @returns {Promise<Buffer>}
     */
    write(data: Buffer): Promise<Buffer>;
}
import SimpleClass = require("./SimpleClass.js");
import BleDescriptor = require("./BleDescriptor.js");
import BlePeripheral = require("./BlePeripheral.js");
import BleService = require("./BleService.js");
