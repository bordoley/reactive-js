import { ConcatAll } from "../../../containers.mjs";
import { RunnableObservableLike } from "../../../rx.mjs";
declare const RunnableObservableLike__mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { RunnableObservableLike__mergeAll as default };
