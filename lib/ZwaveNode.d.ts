export = ZwaveNode;
/**
 * This class is a representation of a Z-Wave Device in Homey.
 * This class must not be initiated by the developer, but retrieved by calling {@link ManagerZwave#getNode}.
 * @property {boolean} online - If the node is online
 * @property {object} CommandClass - An object with {@link ZwaveCommandClass} instances
 */
declare class ZwaveNode extends SimpleClass {
    online: any;
    CommandClass: {};
    MultiChannelNodes: {};
    /**
     * This event is fired when a battery node changed it's online or offline status.
     * @property {boolean} online - If the node is online
     * @event ZwaveNode#online
     */
    /**
     * This event is fired when a Node Information Frame (NIF) has been sent.
     * @property {Buffer} nif
     * @event ZwaveNode#nif
     */
    /**
     * This event is fired when a a Node has received an unknown command, usually due to a missing Command Class.
     * @property {Buffer} data
     * @event ZwaveNode#unknownReport
     */
}
import SimpleClass = require("./SimpleClass.js");
