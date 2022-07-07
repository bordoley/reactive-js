import { ConcatAll, FromArrayOptions, FromArray, ContainerLike, Container, ContainerOf, Buffer, Concat, DistinctUntilChanged, EverySatisfy, Generate, Keep, Map, ContainerOperator, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ToArray } from "./container.mjs";
import { DisposableOrTeardown } from "./disposable.mjs";
import { SideEffect1, Function1, Equality, Predicate, Updater, Factory, Reducer } from "./functions.mjs";
import { CatchError, DecodeWithCharset, ThrowIfEmpty, Using } from "./liftableContainer.mjs";
import { Option } from "./option.mjs";
import { CreateReactiveContainer, ReactiveContainerLike, Never } from "./reactiveContainer.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
declare const concatAll: ConcatAll<RunnableLike<unknown>>["concatAll"];
declare const concatAllT: ConcatAll<RunnableLike<unknown>>;
declare const createRunnable: <T>(run: SideEffect1<ReactiveSinkLike<T>>) => RunnableLike<T>;
declare const createT: CreateReactiveContainer<RunnableLike<unknown>>;
declare const first: <T>() => Function1<RunnableLike<T>, Option<T>>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<RunnableLike<T>, void>;
declare const fromArray: <T>(options?: Partial<FromArrayOptions>) => Function1<readonly T[], RunnableLike<T>>;
declare const fromArrayT: FromArray<RunnableLike<unknown>, FromArrayOptions>;
declare const last: <T>() => Function1<RunnableLike<T>, Option<T>>;
interface RunnableLike<T> extends ReactiveContainerLike {
    readonly T: unknown;
    readonly TContainerOf: RunnableLike<this["T"]>;
    readonly TLiftableContainerState: ReactiveSinkLike<this["T"]>;
    sinkInto(this: RunnableLike<T>, sink: ReactiveSinkLike<T>): void;
}
declare type RunnableOperator<TA, TB> = Function1<RunnableLike<TA>, RunnableLike<TB>>;
interface ToRunnable<C extends ContainerLike> extends Container<C> {
    toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}
declare const buffer: <T>(options?: {
    readonly maxBufferSize?: number;
}) => RunnableOperator<T, readonly T[]>;
declare const bufferT: Buffer<RunnableLike<unknown>>;
declare const catchError: <T>(onError: Function1<unknown, RunnableLike<T> | void>) => RunnableOperator<T, T>;
declare const catchErrorT: CatchError<RunnableLike<unknown>>;
declare const concat: Concat<RunnableLike<unknown>>["concat"];
declare const concatT: Concat<RunnableLike<unknown>>;
declare const decodeWithCharset: (charset?: string) => RunnableOperator<ArrayBuffer, string>;
declare const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T>;
}) => RunnableOperator<T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike<unknown>>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => RunnableOperator<T, boolean>;
declare const everySatisfyT: EverySatisfy<RunnableLike<unknown>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => RunnableLike<T>;
declare const generateT: Generate<RunnableLike<unknown>>;
declare const keep: <T>(predicate: Predicate<T>) => RunnableOperator<T, T>;
declare const keepT: Keep<RunnableLike<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => RunnableOperator<TA, TB>;
declare const mapT: Map<RunnableLike<unknown>>;
declare const never: <T>() => RunnableLike<T>;
declare const neverT: Never<RunnableLike<unknown>>;
/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
declare const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T>;
declare const onSink: <T>(f: Factory<void | DisposableOrTeardown>) => ContainerOperator<RunnableLike<unknown>, T, T>;
declare const pairwise: <T>() => RunnableOperator<T, [
    Option<T>,
    T
]>;
declare const pairwiseT: Pairwise<RunnableLike<unknown>>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => RunnableOperator<T, TAcc>;
declare const reduceT: Reduce<RunnableLike<unknown>>;
declare const repeat: Repeat<RunnableLike<unknown>>["repeat"];
declare const repeatT: Repeat<RunnableLike<unknown>>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => RunnableOperator<T, TAcc>;
declare const scanT: Scan<RunnableLike<unknown>>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => RunnableOperator<T, T>;
declare const skipFirstT: SkipFirst<RunnableLike<unknown>>;
declare const someSatisfy: <T>(predicate: Predicate<T>) => RunnableOperator<T, boolean>;
declare const someSatisfyT: SomeSatisfy<RunnableLike<unknown>>;
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
declare const throwIfEmpty: <T>(factory: Factory<unknown>) => RunnableOperator<T, T>;
declare const throwIfEmptyT: ThrowIfEmpty<RunnableLike<unknown>>;
/**
 * Accumulates all values emitted by `runnable` into an array.
 */
declare const toArray: <T>() => Function1<RunnableLike<T>, readonly T[]>;
declare const toArrayT: ToArray<RunnableLike<unknown>>;
declare const toRunnable: <T>() => Function1<RunnableLike<T>, RunnableLike<T>>;
declare const toRunnableT: ToRunnable<RunnableLike<unknown>>;
declare const TContainerOf: RunnableLike<unknown>;
declare const using: Using<RunnableLike<unknown>>["using"];
declare const usingT: Using<RunnableLike<unknown>>;
export { RunnableLike, RunnableOperator, TContainerOf, ToRunnable, buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, generateT, keep, keepT, last, map, mapT, never, neverT, onNotify, onSink, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toArrayT, toRunnable, toRunnableT, using, usingT };
