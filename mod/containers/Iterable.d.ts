import { Enumerate, FromReadonlyArray, Identity, IterableLike, ToReadonlyArray } from "../containers.js";
import { Flow, ToEnumerable, ToInteractiveObservable, ToObservable, ToRunnable } from "../rx.js";
export declare const enumerate: Enumerate<IterableLike>["enumerate"];
export declare const flow: Flow<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["flow"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
export declare const identity: Identity<IterableLike>["identity"];
export declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
export declare const toInteractiveObservable: ToInteractiveObservable<IterableLike, {
    delay?: number;
}>["toInteractiveObservable"];
export declare const toObservable: ToObservable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnable"];
