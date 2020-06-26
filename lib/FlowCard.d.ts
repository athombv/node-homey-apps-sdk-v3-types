export = FlowCard;
/**
 * The FlowCard class is a programmatic representation of a Flow card, as defined in the app's `/app.json`.
 */
declare class FlowCard extends SimpleClass {
    id: string;
    type: "trigger" | "condition" | "action";
    manifest: any;
    /**
     * This event is fired when the card is updated by the user (e.g. a Flow has been saved).
     *
     * @event FlowCard#update
     */
    /**
     * Register a listener for a autocomplete event of a specific flow card argument.
     * This is fired when the argument is of type `autocomplete` and the user typed a query.
     *
     * @param {string} name - name of the desired flow card argument.
     * @param {Function} listener - Should return a promise that resolves to the autocomplete results.
     * @param {string} listener.query - The typed query by the user
     * @param {object} listener.args - The current state of the arguments, as selected by the user in the front-end
     * @returns {FlowCard}
     *
     * @example
     * const myActionCard = this.homey.flow.getActionCard('my_action');
     *
     * myActionCard.registerArgumentAutocompleteListener('my_arg', async (query, args) => {
     *   const results = [
     *     {
     *       name: 'Value name',
     *       description: 'Optional description',
     *       icon: 'https://path.to/icon.svg',
     *       // For images that are not svg use:
     *       // image: 'https://path.to/icon.png',
     *
     *       // You can freely add additional properties to access in registerRunListener
     *       id: '...',
     *     },
     *   ];
  
     *   // filter based on the query
     *   return results.filter((result) => {
     *     return result.name.toLowerCase().includes(query.toLowerCase());
     *   });
     * });
     */
    registerArgumentAutocompleteListener(name: string, listener: Function): FlowCard;
    getArgument(name: any): any;
    /**
     * Get the current argument values of this card, as filled in by the user.
     * @returns {Promise<any[]>} A Promise that resolves to an array of key-value objects with the argument's name as key. Every array entry represents one Flow card.
     */
    getArgumentValues(): Promise<any[]>;
    /**
     * Register a listener for a run event.
     * @param {Function} listener - Should return a promise that resolves to the FlowCards run result
     * @param {object} listener.args - The arguments of the Flow Card, with keys as defined in the `/app.json` and values as specified by the user
     * @param {object} listener.state - The state of the Flow
     * @returns {FlowCard}
     */
    registerRunListener(listener: Function): FlowCard;
}
import SimpleClass = require("./SimpleClass");
