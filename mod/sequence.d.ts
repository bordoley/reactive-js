import { Factory, Function1, Equality, Predicate, Updater, Reducer } from "./functions.mjs";
import { RunnableLike } from "./runnable.mjs";
declare type SequenceResultNotify<T> = {
    readonly data: T;
    readonly next: Sequence<T>;
};
declare const sequenceResultDone: unique symbol;
declare type SequenceResult<T> = SequenceResultNotify<T> | typeof sequenceResultDone;
declare type Sequence<T> = Factory<SequenceResult<T>>;
declare type SequenceOperator<TA, TB> = Function1<Sequence<TA>, Sequence<TB>>;
declare const empty: <T>() => Sequence<T>;
declare const concatAll: <T>() => SequenceOperator<Sequence<T>, T>;
declare const fromArray: <T>(options?: {
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], Sequence<T>>;
declare function concat<T>(fst: Sequence<T>, snd: Sequence<T>, ...tail: readonly Sequence<T>[]): Sequence<T>;
declare const concatWith: <T>(snd: Sequence<T>) => SequenceOperator<T, T>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => SequenceOperator<T, T>;
declare function endWith<T>(value: T, ...values: readonly T[]): SequenceOperator<T, T>;
declare const keep: <T>(predicate: Predicate<T>) => SequenceOperator<T, T>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => SequenceOperator<TA, TB>;
declare const mapTo: <TA, TB>(v: TB) => SequenceOperator<TA, TB>;
declare const concatMap: <TA, TB>(mapper: Function1<TA, Sequence<TB>>) => SequenceOperator<TA, TB>;
declare function startWith<T>(value: T, ...values: readonly T[]): SequenceOperator<T, T>;
declare const fromValue: <T>() => Function1<T, Sequence<T>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => Sequence<T>;
declare const seek: <T>(count: number) => SequenceOperator<T, T>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => SequenceOperator<T, T>;
declare function repeat<T>(predicate: Predicate<number>): SequenceOperator<T, T>;
declare function repeat<T>(count: number): SequenceOperator<T, T>;
declare function repeat<T>(): SequenceOperator<T, T>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => SequenceOperator<T, TAcc>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => SequenceOperator<T, T>;
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => SequenceOperator<T, T>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => SequenceOperator<T, T>;
declare const toRunnable: <T>() => Function1<Sequence<T>, RunnableLike<T>>;
export { Sequence, SequenceOperator, SequenceResult, SequenceResultNotify, concat, concatAll, concatMap, concatWith, distinctUntilChanged, empty, endWith, fromArray, fromValue, generate, keep, map, mapTo, repeat, scan, seek, sequenceResultDone, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable };
