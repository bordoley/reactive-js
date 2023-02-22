import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export default Observable_mergeAll;
