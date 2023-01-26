import { ConcatAll } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export { Observable$concatAll as default };
