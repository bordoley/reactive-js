import { FromAsyncIterable, FromIterable, FromOptional, FromReadonlyArray, FromSequence } from "../containers.js";
import { FromEnumerable, FromRunnable, ToObservable, ToRunnable } from "../rx.js";
import { FlowableLike } from "../streaming.js";
export declare const fromAsyncIterable: FromAsyncIterable<FlowableLike, {
    maxBuffer?: number;
}>["fromAsyncIterable"];
export declare const fromEnumerable: FromEnumerable<FlowableLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<FlowableLike>["fromIterable"];
export declare const fromOptional: FromOptional<FlowableLike, {
    delay?: number;
}>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<FlowableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<FlowableLike>["fromRunnable"];
export declare const fromSequence: FromSequence<FlowableLike>["fromSequence"];
export declare const toObservable: ToObservable<FlowableLike>["toObservable"];
export declare const toRunnable: ToRunnable<FlowableLike>["toRunnable"];
