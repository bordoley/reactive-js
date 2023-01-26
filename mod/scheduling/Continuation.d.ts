import { Updater } from "../functions.js";
import { ContinuationLike } from "../scheduling.js";
declare const yield_: (options?: {
    delay?: number | undefined;
} | undefined) => void;
declare const run: Updater<ContinuationLike>;
export { run, yield_ };
