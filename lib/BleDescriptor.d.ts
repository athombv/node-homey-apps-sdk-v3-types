export = BleDescriptor;
/**
 * This class is a representation of a BLE Advertisement for a {@link BlePeripheral} in Homey.
 * This class must not be initiated by the developer, but retrieved by calling {@link BleCharacteristic#discoverDescriptors}.
 * @property {string} id - Id of the characteristic assigned by Homey
 * @property {string} uuid - Uuid of the characteristic
 * @property {BlePeripheral} peripheral - The peripheral object that is the owner of this descriptor
 * @property {BleService} service - The service object that is the owner of this descriptor
 * @property {BleCharacteristic} characteristic - The characteristic object that is the owner of this descriptor
 * @property {string} name - The name of the descriptor
 * @property {string} type - The type of the descriptor
 * @property {Buffer} value - The value of the descriptor. Note this is set to the last result of ${@link BleDescriptor#read} and is initially null
 */
declare class BleDescriptor extends SimpleClass {
    /** Id of the characteristic assigned by Homey */
    id: string;
    /** Uuid of the characteristic */
    uuid: string;
    /** The peripheral object that is the owner of this descriptor */
    peripheral: BlePeripheral;
    /** The service object that is the owner of this descriptor */
    service: BleService;
    /** The characteristic object that is the owner of this descriptor */
    characteristic: BleCharacteristic;
    /** The name of the descriptor */
    name: string;
    /** The type of the descriptor */
    type: string;
    /** The value of the descriptor. Note this is set to the last result of ${@link BleDescriptor#read} and is initially null */
    value: Buffer;
    /**
     * Read the value for this descriptor
     * @returns {Promise<Buffer>}
     */
    readValue(): Promise<Buffer>;
    /**
     * Write a value to this descriptor
     * @param {Buffer} data The data that should be written
     * @returns {Promise<Buffer>}
     */
    writeValue(data: Buffer): Promise<Buffer>;
}
import SimpleClass = require("./SimpleClass.js");
import BlePeripheral = require("./BlePeripheral.js");
import BleService = require("./BleService.js");
import BleCharacteristic = require("./BleCharacteristic.js");
