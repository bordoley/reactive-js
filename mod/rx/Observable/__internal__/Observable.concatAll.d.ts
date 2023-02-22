import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export default Observable_concatAll;
