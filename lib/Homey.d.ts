export = Homey;

/**
 * The Homey instance holds all the Managers, System Events and generic properties.
 * You can access the Homey instance through `this.homey` on App, Driver and Device, it is also passed into your api handlers.
 * @extends SimpleClass
 * @property {App} app - A pointer to the App's instance.
 * @property {object} manifest - The `/app.json` as object.
 * @property {string} dir - The root directory of the app.
 * @example
 * // register system events
 * this.homey.on('memwarn', () => console.log('memwarn!'));
 *
 * // access a Manager
 * const latitude = this.homey.geolocation.{@link ManagerGeolocation#getLatitude|getLatitude}();
 * console.log('Latitude: ', latitude);
 */
declare class Homey<T extends App = App> extends SimpleClass {
    /**
     * A pointer to the App's instance.
     * @type {App}
     */
    app: T;
    /**
     * The root directory of the app.
     * @type {string}
     */
    dir: string;
    tmpdir: string;
    /**
     * The software version of the Homey that is running this app
     * @type {string}
     */
    version: string;
    /**
     * The app.json manifest
     * @type {object}
     */
    manifest: object;
    ready(): Promise<any>;
    markReady(): void;
    hasPermission(permission: any): any;
    /**
     * Alias to setTimeout that ensures the timout is correctly disposed
     * of when the Homey instance gets destroyed
     * @param {Function} callback
     * @param {number} ms
     * @param  {...any} args
     */
    setTimeout(callback: Function, ms: number, ...args: any[]): number;
    /**
     * Alias to clearTimeout
     * @param {any} timeoutId
     */
    clearTimeout(timeoutId: any): void;
    /**
     * Alias to setInterval that ensures the interval is correctly disposed
     * of when the Homey instance gets destroyed
     * @param {Function} callback
     * @param {number} ms
     * @param  {...any} args
     */
    setInterval(callback: Function, ms: number, ...args: any[]): number;
    /**
     * Alias to clearInterval
     * @param {any} timeoutId
     */
    clearInterval(timeoutId: any): void;

    __(key: string, properties?: any): string;

    api: ManagerApi;
    apps: ManagerApps;
    arp: ManagerArp;
    audio: ManagerAudio;
    ble: ManagerBLE;
    clock: ManagerClock;
    cloud: ManagerCloud;
    discovery: ManagerDiscovery;
    drivers: ManagerDrivers;
    flow: ManagerFlow;
    geolocation: ManagerGeolocation;
    i18n: ManagerI18n;
    images: ManagerImages;
    insights: ManagerInsights;
    ledring: ManagerLedring;
    nfc: ManagerNFC;
    notifications: ManagerNotifications;
    rf: ManagerRF;
    settings: ManagerSettings;
    speechInput: ManagerSpeechInput;
    speechOutput: ManagerSpeechOutput;
    zigbee: ManagerZigBee;
    zwave: ManagerZwave;
}
import SimpleClass = require("./SimpleClass.js");
import App = require("./App.js");

import ManagerApi = require("../manager/api");
import ManagerApps = require("../manager/apps");
import ManagerArp = require("../manager/arp");
import ManagerAudio = require("../manager/audio");
import ManagerBLE = require("../manager/ble");
import ManagerClock = require("../manager/clock");
import ManagerCloud = require("../manager/cloud");
import ManagerDiscovery = require("../manager/discovery");
import ManagerDrivers = require("../manager/drivers");
import ManagerFlow = require("../manager/flow");
import ManagerGeolocation = require("../manager/geolocation");
import ManagerI18n = require("../manager/i18n");
import ManagerImages = require("../manager/images");
import ManagerInsights = require("../manager/insights");
import ManagerLedring = require("../manager/ledring");
import ManagerNFC = require("../manager/nfc");
import ManagerNotifications = require("../manager/notifications");
import ManagerRF = require("../manager/rf");
import ManagerSettings = require("../manager/settings");
import ManagerSpeechInput = require("../manager/speech-input");
import ManagerSpeechOutput = require("../manager/speech-output");
import ManagerZigBee = require("../manager/zigbee");
import ManagerZwave = require("../manager/zwave");
