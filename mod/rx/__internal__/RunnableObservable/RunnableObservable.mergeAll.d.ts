import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservable$mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
export { RunnableObservable$mergeAll as default };
