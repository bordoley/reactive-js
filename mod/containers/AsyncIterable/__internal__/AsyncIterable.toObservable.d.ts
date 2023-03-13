import { AsyncIterableLike } from "../../../containers.js";
import { ToObservable } from "../../../rx.js";
declare const AsyncIterable_toObservable: ToObservable<AsyncIterableLike, {
    maxYieldInterval?: number;
}>["toObservable"];
export default AsyncIterable_toObservable;
