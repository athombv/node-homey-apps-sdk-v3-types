export = ManagerNFC;
/**
 * @namespace ManagerNFC
 * @classdesc
 * You can access this manager through the {@link Homey} instance as `this.homey.nfc`
 */
declare class ManagerNFC extends Manager {
    /**
     * This event is fired when a tag has been found.
     *
     * > Requires the `homey:wireless:nfc` permission.
     * > For more information about permissions read the {@tutorial Permissions} tutorial.
     *
     * @param {object} tag - The arguments as provided by the user in the Flow Editor
     * @param {object} tag.uid - The UID of the tag
     * @event ManagerNFC#tag
     */
}
import Manager = require("../lib/Manager.js");
