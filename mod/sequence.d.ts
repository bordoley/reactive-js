import { ContainerLike, ConcatAll, FromArray, Concat, DistinctUntilChanged, Keep, Map, Generate, Pairwise, TakeFirst, Repeat, Scan, SkipFirst, TakeLast, TakeWhile, Zip } from "./container.mjs";
import { EnumerableLike, ToEnumerable } from "./enumerable.mjs";
import { Factory, Function1, Equality, Predicate, Updater, Reducer } from "./functions.mjs";
import { Option } from "./option.mjs";
import { RunnableLike, ToRunnable } from "./runnable.mjs";
interface SequenceResultNotify<T> {
    readonly data: T;
    readonly next: Sequence<T>;
}
declare const sequenceResultDone: unique symbol;
declare type SequenceResult<T> = SequenceResultNotify<T> | typeof sequenceResultDone;
interface SequenceLike extends ContainerLike {
    readonly T: unknown;
    readonly type: Sequence<this["T"]>;
}
declare type Sequence<T> = Factory<SequenceResult<T>> & SequenceLike;
declare type SequenceOperator<TA, TB> = Function1<Sequence<TA>, Sequence<TB>>;
declare const type: Sequence<unknown>;
declare const concatAll: <T>() => SequenceOperator<Sequence<T>, T>;
declare const concatAllT: ConcatAll<Sequence<unknown>>;
declare const fromArray: <T>(options?: {
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], Sequence<T>>;
declare const fromArrayT: FromArray<Sequence<unknown>>;
declare function concat<T>(fst: Sequence<T>, snd: Sequence<T>, ...tail: readonly Sequence<T>[]): Sequence<T>;
declare const concatT: Concat<Sequence<unknown>>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => SequenceOperator<T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<Sequence<unknown>>;
declare const keep: <T>(predicate: Predicate<T>) => SequenceOperator<T, T>;
declare const keepT: Keep<Sequence<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => SequenceOperator<TA, TB>;
declare const mapT: Map<Sequence<unknown>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => Sequence<T>;
declare const generateT: Generate<Sequence<unknown>>;
declare const pairwise: <T>() => SequenceOperator<T, readonly [
    Option<T>,
    T
]>;
declare const pairwiseT: Pairwise<Sequence<unknown>>;
declare const seek: <T>(count: number) => SequenceOperator<T, T>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => SequenceOperator<T, T>;
declare const takeFirstT: TakeFirst<Sequence<unknown>>;
declare function repeat<T>(predicate: Predicate<number>): SequenceOperator<T, T>;
declare function repeat<T>(count: number): SequenceOperator<T, T>;
declare function repeat<T>(): SequenceOperator<T, T>;
declare const repeatT: Repeat<Sequence<unknown>>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => SequenceOperator<T, TAcc>;
declare const scanT: Scan<Sequence<unknown>>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => SequenceOperator<T, T>;
declare const skipFirstT: SkipFirst<Sequence<unknown>>;
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => SequenceOperator<T, T>;
declare const takeLastT: TakeLast<Sequence<unknown>>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => SequenceOperator<T, T>;
declare const takeWhileT: TakeWhile<Sequence<unknown>>;
declare const toRunnable: <T>() => Function1<Sequence<T>, RunnableLike<T>>;
declare const toRunnableT: ToRunnable<Sequence<unknown>>;
declare const zip: Zip<Sequence<unknown>>["zip"];
declare const zipT: Zip<Sequence<unknown>>;
declare const toEnumerable: <T>() => (seq: Sequence<T>) => EnumerableLike<T>;
declare const toEnumerableT: ToEnumerable<Sequence<unknown>>;
export { Sequence, SequenceLike, SequenceOperator, SequenceResult, SequenceResultNotify, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, fromArray, fromArrayT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, seek, sequenceResultDone, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toEnumerable, toEnumerableT, toRunnable, toRunnableT, type, zip, zipT };
