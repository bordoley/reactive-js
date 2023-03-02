import { ConcatAll } from "../../../containers.js";
import { EnumerableLike } from "../../../rx.js";
declare const Enumerable_concatAll: ConcatAll<EnumerableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export default Enumerable_concatAll;
