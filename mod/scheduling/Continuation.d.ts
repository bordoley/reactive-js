/**
 * @category ContinuationEffect
 */
export declare const __now: () => number;
/**
 * @category ContinuationEffect
 */
export declare const __yield: (delay?: number) => void;
export declare const run: import("../functions.js").Updater<import("../scheduling.js").ContinuationLike>;
/** @ignore */
declare const Continuation: {
    run: import("../functions.js").Updater<import("../scheduling.js").ContinuationLike>;
};
export default Continuation;
