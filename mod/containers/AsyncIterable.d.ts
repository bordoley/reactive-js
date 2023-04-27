import { AsyncIterableLike, Identity } from "../containers.js";
import { Flow, ToObservable } from "../rx.js";
export declare const flow: Flow<AsyncIterableLike>["flow"];
export declare const identity: Identity<AsyncIterableLike>["identity"];
export declare const toObservable: ToObservable<AsyncIterableLike>["toObservable"];
