import { FromArray, FromArrayOptions, Keep, ContainerLike, Container, ContainerOf } from "./container.mjs";
import { SideEffect1, Equality, Predicate, Function1, Updater, Factory, Reducer, Function2, Function3, Function4, Function5 } from "./functions.mjs";
import { SinkLike } from "./sink.mjs";
import { Option } from "./option.mjs";
import { DisposableLike } from "./disposable.mjs";
/**
 * Creates an `RunnableLike` which emits all values from each source sequentially.
 */
declare function concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
declare const concatAll: <T>() => RunnableOperator<RunnableLike<T>, T>;
declare const createRunnable: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => RunnableOperator<T, T>;
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
declare type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;
declare const lift: <TA, TB>(operator: SinkOperator<TA, TB>) => RunnableOperator<TA, TB>;
declare const keep: <T>(predicate: Predicate<T>) => RunnableOperator<T, T>;
declare const keepT: Keep<RunnableLike<unknown>>;
declare const last: <T>() => Function1<RunnableLike<T>, Option<T>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => RunnableOperator<TA, TB>;
/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
declare function onNotify<T>(onNotify: SideEffect1<T>): RunnableOperator<T, T>;
declare const pairwise: <T>() => RunnableOperator<T, [
    Option<T>,
    T
]>;
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
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => RunnableOperator<T, TAcc>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const someSatisfy: <T>(predicate: Predicate<T>) => Predicate<RunnableLike<T>>;
declare const contains: <T>(value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => Predicate<RunnableLike<T>>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => RunnableOperator<T, T>;
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
interface RunnableLike<T> extends ContainerLike {
    readonly T: unknown;
    readonly type: RunnableLike<this["T"]>;
    run(this: RunnableLike<T>, sink: SinkLike<T>): void;
}
declare type RunnableOperator<TA, TB> = Function1<RunnableLike<TA>, RunnableLike<TB>>;
interface ToRunnable<C extends ContainerLike> extends Container<C> {
    toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}
declare const toRunnable: <T>() => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const type: RunnableLike<unknown>;
export { RunnableLike, RunnableOperator, ToRunnable, concat, concatAll, contains, createRunnable, distinctUntilChanged, everySatisfy, first, forEach, fromArray, fromArrayT, generate, keep, keepT, last, lift, map, noneSatisfy, onNotify, pairwise, reduce, repeat, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, toArray, toRunnable, type, using };
