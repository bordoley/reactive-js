import { AsyncIterableLike } from "../containers.js";
import { ToAsyncEnumerable } from "../ix.js";
import { ToObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"];
export declare const toFlowable: ToFlowable<AsyncIterableLike, {
    maxBuffer?: number;
}>["toFlowable"];
export declare const toObservable: ToObservable<AsyncIterableLike, {
    maxBuffer?: number;
}>["toObservable"];
