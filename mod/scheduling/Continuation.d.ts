import { Updater } from "../functions.js";
import { ContinuationLike } from "../scheduling.js";
declare const yield_: (options?: {
    delay?: number | undefined;
} | undefined) => void;
declare const run: Updater<ContinuationLike>;
/** @ignore */
declare const Continuation: {
    yield: (options?: {
        delay?: number | undefined;
    } | undefined) => void;
    run: Updater<ContinuationLike>;
};
export { Continuation as default, run, yield_ };
