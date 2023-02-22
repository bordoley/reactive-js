import { FromIterable, FromReadonlyArray, FromSequence } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { FromEnumerableObservable, FromRunnableObservable, ToObservable } from "../rx.js";
import { FlowableLike } from "../streaming.js";
export declare const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"];
export declare const fromEnumerableObservable: FromEnumerableObservable<FlowableLike>["fromEnumerableObservable"];
export declare const fromIterable: FromIterable<FlowableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<FlowableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromRunnableObservable: FromRunnableObservable<FlowableLike>["fromRunnableObservable"];
export declare const fromSequence: FromSequence<FlowableLike>["fromSequence"];
export declare const toObservable: ToObservable<FlowableLike>["toObservable"];
