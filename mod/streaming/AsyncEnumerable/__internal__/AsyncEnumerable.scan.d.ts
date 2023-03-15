import { Scan } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
declare const AsyncEnumerable_scan: Scan<AsyncEnumerableLike, ObservableLike>["scan"];
export default AsyncEnumerable_scan;
