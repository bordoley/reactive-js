import { Updater } from "../functions.mjs";
import { ContinuationLike } from "../scheduling.mjs";
declare const yield_: (options?: {
    delay?: number | undefined;
} | undefined) => void;
declare const run: Updater<ContinuationLike>;
export { run, yield_ };
