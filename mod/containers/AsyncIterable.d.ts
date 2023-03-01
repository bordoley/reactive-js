import { AsyncIterableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const toFlowable: ToFlowable<AsyncIterableLike, {
    maxBuffer?: number;
}>["toFlowable"];
export declare const toObservable: ToObservable<AsyncIterableLike, {
    maxBuffer?: number;
}>["toObservable"];
