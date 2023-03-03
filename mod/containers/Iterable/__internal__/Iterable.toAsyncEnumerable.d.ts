import { IterableLike } from "../../../containers.js";
import { ToAsyncEnumerable } from "../../../streaming.js";
declare const Iterable_toAsyncEnumerable: ToAsyncEnumerable<IterableLike, {
    delay?: number;
}>["toAsyncEnumerable"];
export default Iterable_toAsyncEnumerable;
