import { FromArray, FromArrayOptions, ContainerLike, Container, ContainerOf, DecodeWithCharset, DistinctUntilChanged, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile } from "./container.mjs";
import { SideEffect1, Predicate, Function1, Updater, Factory, Equality, Function2, Function3, Function4, Function5, Reducer } from "./functions.mjs";
import { Option } from "./option.mjs";
import { AbstractDisposable, DisposableLike } from "./disposable.mjs";
import { SinkLike, SourceLike } from "./source.mjs";
declare class Sink<T> extends AbstractDisposable implements SinkLike<T> {
    get type(): this;
    get T(): unknown;
    assertState(this: Sink<T>): void;
    notify(_: T): void;
}
/**
 * Creates an `RunnableLike` which emits all values from each source sequentially.
 */
declare function concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
declare const concatAll: <T>() => RunnableOperator<RunnableLike<T>, T>;
declare const createRunnable: <T>(run: SideEffect1<Sink<T>>) => RunnableLike<T>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const noneSatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const first: <T>() => Function1<RunnableLike<T>, Option<T>>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<RunnableLike<T>, void>;
declare const fromArray: <T>(options?: {
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], RunnableLike<T>>;
declare const fromArrayT: FromArray<RunnableLike<unknown>, FromArrayOptions>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => RunnableLike<T>;
declare const last: <T>() => Function1<RunnableLike<T>, Option<T>>;
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
declare const someSatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const contains: <T>(value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => Predicate<RunnableLike<T>>;
/**
 * Accumulates all values emitted by `runnable` into an array.
 *
 */
declare const toArray: <T>() => Function1<RunnableLike<T>, readonly T[]>;
declare function using<TResource extends DisposableLike, T>(resourceFactory: Factory<TResource>, observableFactory: Function1<TResource, RunnableLike<T>>): RunnableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, T>(resourceFactory: Factory<[
    TResource1,
    TResource2
]>, observableFactory: Function2<TResource1, TResource2, RunnableLike<T>>): RunnableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, T>(resourceFactory: Factory<[
    TResource1,
    TResource2,
    TResource3
]>, observableFactory: Function3<TResource1, TResource2, TResource3, RunnableLike<T>>): RunnableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, TResource4 extends DisposableLike, T>(resourceFactory: Factory<[
    TResource1,
    TResource2,
    TResource3,
    TResource4
]>, observableFactory: Function4<TResource1, TResource2, TResource3, TResource4, RunnableLike<T>>): RunnableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, TResource4 extends DisposableLike, TResource5 extends DisposableLike, T>(resourceFactory: Factory<[
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    TResource5
]>, observableFactory: Function5<TResource1, TResource2, TResource3, TResource4, TResource5, RunnableLike<T>>): RunnableLike<T>;
declare function using<TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, observableFactory: (...resources: readonly TResource[]) => RunnableLike<T>): RunnableLike<T>;
interface RunnableLike<T> extends SourceLike {
    readonly T: unknown;
    readonly type: RunnableLike<this["T"]>;
    readonly sinkType: Sink<this["T"]>;
    run(this: RunnableLike<T>, sink: Sink<T>): void;
}
declare type RunnableOperator<TA, TB> = Function1<RunnableLike<TA>, RunnableLike<TB>>;
interface ToRunnable<C extends ContainerLike> extends Container<C> {
    toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}
declare const toRunnable: <T>() => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const type: RunnableLike<unknown>;
declare const decodeWithCharset: (charset?: string) => RunnableOperator<ArrayBuffer, string>;
declare const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T>;
}) => RunnableOperator<T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike<unknown>>;
declare const keep: <T>(predicate: Predicate<T>) => RunnableOperator<T, T>;
declare const keepT: Keep<RunnableLike<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => RunnableOperator<TA, TB>;
declare const mapT: Map<RunnableLike<unknown>>;
/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
declare const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T>;
declare const pairwise: <T>() => RunnableOperator<T, [
    Option<T>,
    T
]>;
declare const pairwiseT: Pairwise<RunnableLike<unknown>>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => RunnableOperator<T, TAcc>;
declare const reduceT: Reduce<RunnableLike<unknown>>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => RunnableOperator<T, TAcc>;
declare const scanT: Scan<RunnableLike<unknown>>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const skipFirstT: SkipFirst<RunnableLike<unknown>>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const takeFirstT: TakeFirst<RunnableLike<unknown>>;
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const takeLastT: TakeLast<RunnableLike<unknown>>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => RunnableOperator<T, T>;
declare const takeWhileT: TakeWhile<RunnableLike<unknown>>;
export { RunnableLike, RunnableOperator, Sink, ToRunnable, concat, concatAll, contains, createRunnable, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, first, forEach, fromArray, fromArrayT, generate, keep, keepT, last, map, mapT, noneSatisfy, onNotify, pairwise, pairwiseT, reduce, reduceT, repeat, scan, scanT, skipFirst, skipFirstT, someSatisfy, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toArray, toRunnable, type, using };
