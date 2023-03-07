import { FromAsyncIterable, FromIterable, FromOptional, FromReadonlyArray, FromSequence, Generate, Keep, Map, Scan, TakeWhile } from "../containers.js";
import { FromEnumerable, GenerateAsync, ObservableLike, ScanAsync, ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { AsyncEnumerableLike } from "../streaming.js";
export declare const fromIterable: FromIterable<AsyncEnumerableLike>["fromIterable"];
export declare const fromAsyncIterable: FromAsyncIterable<AsyncEnumerableLike>["fromAsyncIterable"];
export declare const fromEnumerable: FromEnumerable<AsyncEnumerableLike>["fromEnumerable"];
export declare const fromOptional: FromOptional<AsyncEnumerableLike, {
    delay?: number;
}>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<AsyncEnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<AsyncEnumerableLike>["fromSequence"];
export declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
export declare const generateAsync: GenerateAsync<AsyncEnumerableLike, ObservableLike>["generateAsync"];
export declare const keep: Keep<AsyncEnumerableLike>["keep"];
export declare const map: Map<AsyncEnumerableLike>["map"];
export declare const scan: Scan<AsyncEnumerableLike>["scan"];
export declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
export declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
export declare const toEnumerable: ToEnumerable<AsyncEnumerableLike>["toEnumerable"];
export declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
export declare const toRunnable: ToRunnable<AsyncEnumerableLike>["toRunnable"];
