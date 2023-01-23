import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservableLike__mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { RunnableObservableLike__mergeAll as default };
