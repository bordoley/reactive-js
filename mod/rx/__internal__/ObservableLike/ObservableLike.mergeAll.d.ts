import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const ObservableLike__mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { ObservableLike__mergeAll as default };
