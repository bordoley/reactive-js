import { ConcatAll } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
declare const Runnable_concatAll: ConcatAll<RunnableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export default Runnable_concatAll;
