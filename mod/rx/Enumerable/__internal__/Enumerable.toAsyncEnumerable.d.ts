import { EnumerableLike } from "../../../rx.js";
import { ToAsyncEnumerable } from "../../../streaming.js";
declare const Enumerable_toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike, {
    delay?: number;
}>["toAsyncEnumerable"];
export default Enumerable_toAsyncEnumerable;
