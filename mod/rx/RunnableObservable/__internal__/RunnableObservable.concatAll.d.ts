import { ConcatAll } from "../../../containers.js";
import { RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservable_concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export default RunnableObservable_concatAll;
