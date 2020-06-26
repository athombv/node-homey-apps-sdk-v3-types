export = ManagerImages;
/**
 * @namespace ManagerImages
 * @tutorial Images
 * @classdesc
 * You can access this manager through the {@link Homey} instance as `this.homey.images`
 */
declare class ManagerImages extends Manager {
    /**
     * Get a registered {@link Image}.
     * @param {string} id
     * @returns {Image}
     */
    getImage(id: string): Image;
    /**
     * Create an {@link Image}.
     * @returns {Promise<Image>}
     */
    createImage(): Promise<Image>;
    /**
     * Unregister a {@link Image}.
     * @param {Image} imageInstance
     * @returns {Promise<void>}
     */
    unregisterImage(imageInstance: Image): Promise<void>;
}
import Manager = require("../lib/Manager.js");
import Image = require("../lib/Image.js");
