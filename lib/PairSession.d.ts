export = PairSession;
/**
 * @callback PairSessionHandler
 * @param {any} data
 * @returns {Promise<any>}
 */
/**
 * PairSession is returned by Driver#onPair.
 * PairSession#setHandler accepts async functions that can receive and respond to messages from the pair view.
 * @tutorial Drivers-Pairing
 */
declare class PairSession {
    /**
     * Register a handler for an event
     * @param {string} event
     * @param {PairSessionHandler} handler
     */
    setHandler(event: string, handler: PairSessionHandler): this;
}
declare namespace PairSession {
    export { PairSessionHandler };
}
type PairSessionHandler = (data: any) => Promise<any>;
