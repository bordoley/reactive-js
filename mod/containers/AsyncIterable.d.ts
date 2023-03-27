import { AsyncIterableLike, Identity } from "../containers.js";
import { ToObservable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
export declare const identity: Identity<AsyncIterableLike>["identity"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<AsyncIterableLike>["toAsyncEnumerable"];
export declare const toFlowable: ToFlowable<AsyncIterableLike>["toFlowable"];
export declare const toObservable: ToObservable<AsyncIterableLike>["toObservable"];
