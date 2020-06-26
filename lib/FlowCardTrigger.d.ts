export = FlowCardTrigger;
/**
 * The FlowCardTrigger class is a programmatic representation of a Flow Card with type `trigger`, as defined in an app's <code>app.json</code>.
 * @extends FlowCard
 */
declare class FlowCardTrigger extends FlowCard {
    /**
     * Trigger this card to start a Flow
     * @param {object} tokens - An object with tokens and their typed values, as defined in an app's <code>app.json</code>
     * @param {object} state - An object with properties which are accessible throughout the Flow
     * @returns {Promise<any>} Promise resolves when flow is triggered
     */
    trigger(tokens: object, state: object): Promise<any>;
}
import FlowCard = require("./FlowCard.js");
