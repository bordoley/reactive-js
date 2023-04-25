import { AsyncIterableLike, Identity } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EnumerateAsync, Flow } from "../streaming.js";
export declare const enumerateAsync: EnumerateAsync<AsyncIterableLike>["enumerateAsync"];
export declare const flow: Flow<AsyncIterableLike>["flow"];
export declare const identity: Identity<AsyncIterableLike>["identity"];
export declare const toObservable: ToObservable<AsyncIterableLike>["toObservable"];
