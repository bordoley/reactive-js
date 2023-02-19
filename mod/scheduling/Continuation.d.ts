import { Updater } from "../functions.js";
import { ContinuationLike } from "../scheduling.js";
/**
 * @category ContinuationEffect
 */
declare const __now: () => number;
/**
 * @category ContinuationEffect
 */
declare const __yield: (delay?: number) => void;
declare const run: Updater<ContinuationLike>;
/** @ignore */
declare const Continuation: {
    run: Updater<ContinuationLike>;
};
export { __now, __yield, Continuation as default, run };
