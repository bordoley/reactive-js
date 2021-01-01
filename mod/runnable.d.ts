import { Function1, Factory, SideEffect1, Equality, Predicate, Updater, TypePredicate, Reducer } from "./functions.mjs";
import { Option } from "./option.mjs";
declare const compute: <T>() => Function1<Factory<T>, RunnableLike<T>>;
/**
 * Creates an `RunnableLike` which emits all values from each source sequentially.
 */
declare function concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
declare const concatWith: <T>(snd: RunnableLike<T>) => Function1<RunnableLike<T>, RunnableLike<T>>;
declare function endWith<T>(value: T, ...values: readonly T[]): RunnableOperator<T, T>;
declare function startWith<T>(value: T, ...values: readonly T[]): RunnableOperator<T, T>;
declare const concatAll: <T>() => Function1<RunnableLike<RunnableLike<T>>, RunnableLike<T>>;
declare const concatMap: <TA, TB>(mapper: Function1<TA, RunnableLike<TB>>) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
declare const createRunnable: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const empty: <T>() => RunnableLike<T>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const noneSatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const first: <T>(runnable: RunnableLike<T>) => Option<T>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<RunnableLike<T>, void>;
declare const fromArray: <T>(options?: {
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], RunnableLike<T>>;
declare const fromValue: <T>() => Function1<T, RunnableLike<T>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => RunnableLike<T>;
declare const lift: <TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
declare const keepType: <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
declare const keep: <T>(predicate: Predicate<T>) => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const last: <T>(runnable: RunnableLike<T>) => Option<T>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
declare const mapTo: <TA, TB>(value: TB) => Function1<RunnableLike<TA>, RunnableLike<TB>>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<RunnableLike<T>, TAcc>;
/**
 * Returns an RunnableLike that applies the predicate function each time the source
 * completes to determine if the enumerable should be repeated.
 *
 * @param predicate The predicate function to apply.
 */
declare function repeat<T>(predicate: Predicate<number>): RunnableOperator<T, T>;
/**
 * Returns an RunnableLike that repeats the source count times.
 * @param count
 */
declare function repeat<T>(count: number): RunnableOperator<T, T>;
/**
 * Returns an RunnableLike that continually repeats the source.
 */
declare function repeat<T>(): RunnableOperator<T, T>;
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<RunnableLike<T>, RunnableLike<TAcc>>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const someSatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const contains: <T>(value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => Predicate<RunnableLike<T>>;
declare const sinkDone: unique symbol;
declare abstract class AbstractDelegatingSink<TA, TB> implements SinkLike<TA> {
    readonly delegate: SinkLike<TB>;
    constructor(delegate: SinkLike<TB>);
    get isDone(): boolean;
    abstract notify(next: TA): void;
    done(): void;
}
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => Function1<RunnableLike<T>, RunnableLike<T>>;
/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
declare const toArray: <T>() => Function1<RunnableLike<T>, readonly T[]>;
interface SinkLike<T> {
    readonly isDone: boolean;
    notify(next: T): void;
    done(): void;
}
declare type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;
interface RunnableLike<T> {
    run(sink: SinkLike<T>): void;
}
declare type RunnableOperator<TA, TB> = Function1<RunnableLike<TA>, RunnableLike<TB>>;
declare const toRunnable: <T>() => Function1<RunnableLike<T>, RunnableLike<T>>;
export { AbstractDelegatingSink, RunnableLike, RunnableOperator, SinkLike, SinkOperator, compute, concat, concatAll, concatMap, concatWith, contains, createRunnable, distinctUntilChanged, empty, endWith, everySatisfy, first, forEach, fromArray, fromValue, generate, keep, keepType, last, lift, map, mapTo, noneSatisfy, reduce, repeat, scan, sinkDone, skipFirst, someSatisfy, startWith, takeFirst, takeLast, takeWhile, toArray, toRunnable };
