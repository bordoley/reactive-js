import { ConcatAll } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const ObservableLike__mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { ObservableLike__mergeAll as default };
