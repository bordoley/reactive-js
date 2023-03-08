import { Empty, Enumerate, Every, First, ForEach, FromIterable, FromOptional, FromReadonlyArray, FromSequence, Keep, KeepType, Last, Map, ReadonlyArrayLike, Some, ToIterable, ToReadonlyArray, ToSequence } from "../containers.js";
import { FromEnumerable, FromRunnable, ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
export declare const empty: Empty<ReadonlyArrayLike>["empty"];
export declare const enumerate: Enumerate<ReadonlyArrayLike>["enumerate"];
export declare const every: Every<ReadonlyArrayLike>["every"];
export declare const first: First<ReadonlyArrayLike>["first"];
export declare const forEach: ForEach<ReadonlyArrayLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<ReadonlyArrayLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<ReadonlyArrayLike>["fromIterable"];
export declare const fromOptional: FromOptional<ReadonlyArrayLike>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayLike>["fromReadonlyArray"];
export declare const fromRunnable: FromRunnable<ReadonlyArrayLike>["fromRunnable"];
export declare const fromSequence: FromSequence<ReadonlyArrayLike>["fromSequence"];
export declare const getLength: (arr: readonly unknown[]) => number;
export declare const isEmpty: (arr: readonly unknown[]) => boolean;
export declare const keep: Keep<ReadonlyArrayLike>["keep"];
export declare const keepType: KeepType<ReadonlyArrayLike>["keepType"];
export declare const last: Last<ReadonlyArrayLike>["last"];
export declare const map: Map<ReadonlyArrayLike>["map"];
export declare const some: Some<ReadonlyArrayLike>["some"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
}>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<ReadonlyArrayLike, {
    readonly start: number;
    readonly count: number;
}>["toEnumerable"];
export declare const toFlowable: ToFlowable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toIterable: ToIterable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toIterable"];
export declare const toObservable: ToObservable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike, {
    readonly start?: number;
    readonly count?: number;
}>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<ReadonlyArrayLike, {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}>["toRunnable"];
export declare const toSequence: ToSequence<ReadonlyArrayLike, {
    readonly count?: number;
    readonly start?: number;
}>["toSequence"];
