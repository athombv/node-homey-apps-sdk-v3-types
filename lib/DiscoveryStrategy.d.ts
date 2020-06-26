import SimpleClass = require("./SimpleClass");
import DiscoveryResultMDNSSD = require("./DiscoveryResultMDNSSD");
import DiscoveryResultSSDP = require("./DiscoveryResultSSDP");
import DiscoveryResultMAC = require("./DiscoveryResultMAC");

export = DiscoveryStrategy;
/**
 * This class should not be instanced manually, but created by calling {@link ManagerDiscovery#getStrategy} instead.
 * @since 2.5.0
 */
declare class DiscoveryStrategy extends SimpleClass {
    type: string;
    /**
     *
     * @returns {object} Returns an object of {@link DiscoveryResultMDNSSD}, {@link DiscoveryResultSSDP} or {@link DiscoveryResultMAC} instances.
     */
    getDiscoveryResults(): Record<string, DiscoveryResultMDNSSD | DiscoveryResultSSDP | DiscoveryResultMAC>;
    /**
     * @param {string} id
     * @returns {DiscoveryResult} Returns a {@link DiscoveryResultMDNSSD}, {@link DiscoveryResultSSDP} or {@link DiscoveryResultMAC} instance.
     */
    getDiscoveryResult(id: string): DiscoveryResultMDNSSD | DiscoveryResultSSDP | DiscoveryResultMAC;
}
