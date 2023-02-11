import { Updater } from "../functions.js";
import { ContinuationLike } from "../scheduling.js";
declare const run: Updater<ContinuationLike>;
/** @ignore */
declare const Continuation: {
    run: Updater<ContinuationLike>;
};
export { Continuation as default, run };
