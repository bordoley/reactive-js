import { FromReadonlyArray, FromSequence, IterableLike, ToIterable, ToReadonlyArray } from "../containers.js";
import { FromEnumerable, ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const fromEnumerable: FromEnumerable<IterableLike>["fromEnumerable"];
export declare const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<IterableLike>["fromSequence"];
export declare const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"];
export declare const toIterable: ToIterable<IterableLike>["toIterable"];
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
