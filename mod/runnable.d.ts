import { ConcatAll, FromArray, FromArrayOptions, ContainerLike, Container, ContainerOf, Buffer, Concat, DistinctUntilChanged, EverySatisfy, Generate, Keep, Map, ContainerOperator, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ToArray } from "./container.mjs";
import { DisposableOrTeardown } from "./disposable.mjs";
import { SideEffect1, Function1, Factory } from "./functions.mjs";
import { CatchError, DecodeWithCharset, ThrowIfEmpty, Using } from "./liftableContainer.mjs";
import { CreateReactiveContainer, ReactiveContainerLike, Never } from "./reactiveContainer.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
import { Option } from "./option.mjs";
declare const concatAll: ConcatAll<RunnableLike<unknown>>["concatAll"];
declare const concatAllT: ConcatAll<RunnableLike<unknown>>;
declare const createRunnable: <T>(run: SideEffect1<ReactiveSinkLike<T>>) => RunnableLike<T>;
declare const createT: CreateReactiveContainer<RunnableLike<unknown>>;
declare const first: <T>() => Function1<RunnableLike<T>, Option<T>>;
declare const forEach: <T>(f: SideEffect1<T>) => Function1<RunnableLike<T>, void>;
declare const fromArray: FromArray<RunnableLike<unknown>, FromArrayOptions>["fromArray"];
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
declare const buffer: Buffer<RunnableLike<unknown>>["buffer"];
declare const bufferT: Buffer<RunnableLike<unknown>>;
declare const catchError: CatchError<RunnableLike<unknown>>["catchError"];
declare const catchErrorT: CatchError<RunnableLike<unknown>>;
declare const concat: Concat<RunnableLike<unknown>>["concat"];
declare const concatT: Concat<RunnableLike<unknown>>;
declare const decodeWithCharset: DecodeWithCharset<RunnableLike<unknown>>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>>;
declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike<unknown>>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableLike<unknown>>;
declare const everySatisfy: EverySatisfy<RunnableLike<unknown>>["everySatisfy"];
declare const everySatisfyT: EverySatisfy<RunnableLike<unknown>>;
declare const generate: Generate<RunnableLike<unknown>>["generate"];
declare const generateT: Generate<RunnableLike<unknown>>;
declare const keep: Keep<RunnableLike<unknown>>["keep"];
declare const keepT: Keep<RunnableLike<unknown>>;
declare const map: Map<RunnableLike<unknown>>["map"];
declare const mapT: Map<RunnableLike<unknown>>;
declare const never: Never<RunnableLike<unknown>>["never"];
declare const neverT: Never<RunnableLike<unknown>>;
/**
 * Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
declare const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T>;
declare const onSink: <T>(f: Factory<void | DisposableOrTeardown>) => ContainerOperator<RunnableLike<unknown>, T, T>;
declare const pairwise: Pairwise<RunnableLike<unknown>>["pairwise"];
declare const pairwiseT: Pairwise<RunnableLike<unknown>>;
declare const reduce: Reduce<RunnableLike<unknown>>["reduce"];
declare const reduceT: Reduce<RunnableLike<unknown>>;
declare const repeat: Repeat<RunnableLike<unknown>>["repeat"];
declare const repeatT: Repeat<RunnableLike<unknown>>;
declare const scan: Scan<RunnableLike<unknown>>["scan"];
declare const scanT: Scan<RunnableLike<unknown>>;
declare const skipFirst: SkipFirst<RunnableLike<unknown>>["skipFirst"];
declare const skipFirstT: SkipFirst<RunnableLike<unknown>>;
declare const someSatisfy: SomeSatisfy<RunnableLike<unknown>>["someSatisfy"];
declare const someSatisfyT: SomeSatisfy<RunnableLike<unknown>>;
declare const takeFirst: TakeFirst<RunnableLike<unknown>>["takeFirst"];
declare const takeFirstT: TakeFirst<RunnableLike<unknown>>;
declare const takeLast: TakeLast<RunnableLike<unknown>>["takeLast"];
declare const takeLastT: TakeLast<RunnableLike<unknown>>;
declare const takeWhile: TakeWhile<RunnableLike<unknown>>["takeWhile"];
declare const takeWhileT: TakeWhile<RunnableLike<unknown>>;
declare const throwIfEmpty: ThrowIfEmpty<RunnableLike<unknown>>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<RunnableLike<unknown>>;
/**
 * Accumulates all values emitted by `runnable` into an array.
 */
declare const toArray: ToArray<RunnableLike<unknown>>["toArray"];
declare const toArrayT: ToArray<RunnableLike<unknown>>;
declare const toRunnable: ToRunnable<RunnableLike<unknown>>["toRunnable"];
declare const toRunnableT: ToRunnable<RunnableLike<unknown>>;
declare const TContainerOf: RunnableLike<unknown>;
declare const using: Using<RunnableLike<unknown>>["using"];
declare const usingT: Using<RunnableLike<unknown>>;
export { RunnableLike, RunnableOperator, TContainerOf, ToRunnable, buffer, bufferT, catchError, catchErrorT, concat, concatAll, concatAllT, concatT, createRunnable, createT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, first, forEach, fromArray, fromArrayT, generate, generateT, keep, keepT, last, map, mapT, never, neverT, onNotify, onSink, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, someSatisfy, someSatisfyT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toArray, toArrayT, toRunnable, toRunnableT, using, usingT };
