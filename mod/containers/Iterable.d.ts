import { Enumerate, FromReadonlyArray, Identity, IterableLike, ToReadonlyArray } from "../containers.js";
import { ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
export declare const enumerate: Enumerate<IterableLike>["enumerate"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
export declare const identity: Identity<IterableLike>["identity"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<IterableLike, {
    delay?: number;
}>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
export declare const toFlowable: ToFlowable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toObservable: ToObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnable"];
