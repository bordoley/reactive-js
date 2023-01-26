import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { Observable$mergeAll as default };
