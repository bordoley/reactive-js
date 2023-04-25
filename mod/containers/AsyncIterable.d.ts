import { AsyncIterableLike, Identity } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EnumerateAsync, ToFlowable } from "../streaming.js";
export declare const enumerateAsync: EnumerateAsync<AsyncIterableLike>["enumerateAsync"];
export declare const identity: Identity<AsyncIterableLike>["identity"];
export declare const toFlowable: ToFlowable<AsyncIterableLike>["toFlowable"];
export declare const toObservable: ToObservable<AsyncIterableLike>["toObservable"];
