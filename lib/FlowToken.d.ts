export = FlowToken;
/**
 * The FlowToken class can be used to create a Tag in the Flow Editor.
 * @tutorial Flow-Tokens
 */
declare class FlowToken {
    id: string;
    opts: {
        type: string;
        title: string;
    };
    /**
     * Unregister the token.
     * This is a shorthand method for {@link ManagerFlow#unregisterToken}.
     * @returns {Promise<any>}
     */
    unregister(): Promise<any>;
    /**
     * Set or update the value of the token.
     * @param {string|number|boolean|Image} value The value of the token, should be of the same type as defined in the Token instance
     * @returns {Promise<any>}
     */
    setValue(value: string | number | boolean | (new (width?: number | undefined, height?: number | undefined) => HTMLImageElement)): Promise<any>;
}
