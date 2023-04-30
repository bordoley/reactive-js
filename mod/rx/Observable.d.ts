import { Concat, ConcatAll, ConcatMap, ConcatWith, ContainerOperator, DistinctUntilChanged, EndWith, EnumeratorLike, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromAsyncIterable, Identity, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Pick, Repeat, Scan, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, Zip, ZipWith } from "../containers.js";
import * as Containers from "../containers.js";
import { Factory, Function1, Optional, SideEffect1, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, ForkCombineLatest, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Multicast, Never, ObservableContainer, ObservableLike, ObserverLike, Retry, ScanLast, ScanMany, Share, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, ToObservable, ToRunnable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
import { DisposableLike, DisposableOrTeardown, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const animate: Animate<ObservableContainer>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<ObservableContainer>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainer>;
    readonly count?: number;
}) => ContainerOperator<ObservableContainer, T, readonly T[]>;
export declare const catchError: CatchError<ObservableContainer>["catchError"];
export declare const combineLatest: CombineLatest<ObservableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const concat: Concat<ObservableContainer>["concat"];
export declare const concatAll: ConcatAll<ObservableContainer>["concatAll"];
export declare const concatMap: ConcatMap<ObservableContainer>["concatMap"];
export declare const concatWith: ConcatWith<ObservableContainer>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: CurrentTime<ObservableContainer>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<ObservableContainer>["decodeWithCharset"];
export declare const defer: Defer<ObservableContainer>["defer"];
export declare const dispatchTo: DispatchTo<ObservableContainer>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<ObservableContainer>["distinctUntilChanged"];
interface Empty extends Containers.Empty<ObservableContainer> {
    /**
     * Return an Container that emits no items.
     *
     * @category Constructor
     */
    empty<T>(options?: {
        delay?: number;
    }): ObservableLike<T>;
}
export declare const empty: Empty["empty"];
export declare const encodeUtf8: EncodeUtf8<ObservableContainer>["encodeUtf8"];
export declare const enqueue: Enqueue<ObservableContainer>["enqueue"];
export declare const endWith: EndWith<ObservableContainer>["endWith"];
export declare const exhaust: Exhaust<ObservableContainer>["exhaust"];
export declare const exhaustMap: ExhaustMap<ObservableContainer>["exhaustMap"];
export declare const firstAsync: FirstAsync<ObservableContainer>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => ContainerOperator<ObservableContainer, TA, TB>;
export declare const flatMapIterable: FlatMapIterable<ObservableContainer>["flatMapIterable"];
export declare const forEach: ForEach<ObservableContainer>["forEach"];
export declare const forkCombineLatest: ForkCombineLatest<ObservableContainer>["forkCombineLatest"];
export declare const forkConcat: ForkConcat<ObservableContainer>["forkConcat"];
export declare const forkMerge: ForkMerge<ObservableContainer>["forkMerge"];
export declare const forkZip: ForkZip<ObservableContainer>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<ObservableContainer>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: FromAsyncIterable<ObservableContainer>["fromAsyncIterable"];
interface FromEnumeratorFactory extends Containers.FromEnumeratorFactory<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Containers.FromFactory<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): ObservableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Containers.FromIterable<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Containers.FromOptional<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, ObservableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Containers.FromReadonlyArray<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }): Function1<readonly T[], ObservableLike<T>>;
}
export declare const fromReadonlyArray: FromReadonlyArray["fromReadonlyArray"];
interface Generate extends Containers.Generate<ObservableContainer> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Identity<ObservableContainer>["identity"];
export declare const ignoreElements: IgnoreElements<ObservableContainer>["ignoreElements"];
export declare const keep: Keep<ObservableContainer>["keep"];
export declare const keepType: KeepType<ObservableContainer>["keepType"];
export declare const lastAsync: LastAsync<ObservableContainer>["lastAsync"];
export declare const map: Map<ObservableContainer>["map"];
export declare const mapTo: MapTo<ObservableContainer>["mapTo"];
export declare const merge: Merge<ObservableContainer>["merge"];
export declare const mergeAll: MergeAll<ObservableContainer>["mergeAll"];
export declare const mergeMap: MergeMap<ObservableContainer>["mergeMap"];
export declare const mergeWith: MergeWith<ObservableContainer>["mergeWith"];
export declare const multicast: Multicast<ObservableContainer>["multicast"];
export declare const never: Never<ObservableContainer>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableContainer, T, T>;
export declare const pairwise: Pairwise<ObservableContainer>["pairwise"];
export declare const pick: Pick<ObservableContainer>["pick"];
export declare const repeat: Repeat<ObservableContainer>["repeat"];
export declare const retry: Retry<ObservableContainer>["retry"];
export declare const scan: Scan<ObservableContainer>["scan"];
export declare const scanLast: ScanLast<ObservableContainer>["scanLast"];
export declare const scanMany: ScanMany<ObservableContainer>["scanMany"];
export declare const share: Share<ObservableContainer>["share"];
export declare const skipFirst: SkipFirst<ObservableContainer>["skipFirst"];
export declare const startWith: StartWith<ObservableContainer>["startWith"];
export declare const switchAll: SwitchAll<ObservableContainer>["switchAll"];
export declare const switchMap: SwitchMap<ObservableContainer>["switchMap"];
export declare const subscribe: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, DisposableLike>;
/**
 * @category Operator
 */
export declare const subscribeOn: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
} | undefined) => (observable: ObservableLike<T>) => ObservableLike<T>;
export declare const takeFirst: TakeFirst<ObservableContainer>["takeFirst"];
export declare const takeLast: TakeLast<ObservableContainer>["takeLast"];
export declare const takeUntil: TakeUntil<ObservableContainer>["takeUntil"];
export declare const takeWhile: TakeWhile<ObservableContainer>["takeWhile"];
export declare const throttle: Throttle<ObservableContainer>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<ObservableContainer>["throwIfEmpty"];
interface Throws extends Rx.Throws<ObservableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Timeout<ObservableContainer>["timeout"];
export declare const toEnumerable: ToEnumerable<ObservableContainer>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../util.js").EventSourceLike<T>>;
export declare const toObservable: ToObservable<ObservableContainer>["toObservable"];
export declare const toRunnable: ToRunnable<ObservableContainer>["toRunnable"];
export declare const withCurrentTime: WithCurrentTime<ObservableContainer>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<ObservableContainer>["withLatestFrom"];
export declare const zip: Zip<ObservableContainer>["zip"];
export declare const zipLatest: ZipLatest<ObservableContainer>["zipLatest"];
export declare const zipWith: ZipWith<ObservableContainer>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableContainer>["zipWithLatestFrom"];
export {};
