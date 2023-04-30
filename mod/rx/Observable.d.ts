import { Concat, ConcatAll, ConcatMap, ConcatWith, ContainerOperator, DistinctUntilChanged, EndWith, EnumeratorLike, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromAsyncIterable, Identity, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Pick, Repeat, Scan, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, Zip, ZipWith } from "../containers.js";
import * as Containers from "../containers.js";
import { Factory, Function1, Optional, SideEffect1, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, ForkCombineLatest, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Multicast, Never, ObservableContainerLike, ObservableLike, ObserverLike, Retry, ScanLast, ScanMany, Share, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, ToObservable, ToRunnable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
import { DisposableLike, DisposableOrTeardown, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const animate: Animate<ObservableContainerLike>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<ObservableContainerLike>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainerLike>;
    readonly count?: number;
}) => ContainerOperator<ObservableContainerLike, T, readonly T[]>;
export declare const catchError: CatchError<ObservableContainerLike>["catchError"];
export declare const combineLatest: CombineLatest<ObservableContainerLike>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const concat: Concat<ObservableContainerLike>["concat"];
export declare const concatAll: ConcatAll<ObservableContainerLike>["concatAll"];
export declare const concatMap: ConcatMap<ObservableContainerLike>["concatMap"];
export declare const concatWith: ConcatWith<ObservableContainerLike>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: CurrentTime<ObservableContainerLike>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<ObservableContainerLike>["decodeWithCharset"];
export declare const defer: Defer<ObservableContainerLike>["defer"];
export declare const dispatchTo: DispatchTo<ObservableContainerLike>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<ObservableContainerLike>["distinctUntilChanged"];
interface Empty extends Containers.Empty<ObservableContainerLike> {
    /**
     * Return an ContainerLike that emits no items.
     *
     * @category Constructor
     */
    empty<T>(options?: {
        delay?: number;
    }): ObservableLike<T>;
}
export declare const empty: Empty["empty"];
export declare const encodeUtf8: EncodeUtf8<ObservableContainerLike>["encodeUtf8"];
export declare const enqueue: Enqueue<ObservableContainerLike>["enqueue"];
export declare const endWith: EndWith<ObservableContainerLike>["endWith"];
export declare const exhaust: Exhaust<ObservableContainerLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<ObservableContainerLike>["exhaustMap"];
export declare const firstAsync: FirstAsync<ObservableContainerLike>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => ContainerOperator<ObservableContainerLike<unknown>, TA, TB>;
export declare const flatMapIterable: FlatMapIterable<ObservableContainerLike>["flatMapIterable"];
export declare const forEach: ForEach<ObservableContainerLike>["forEach"];
export declare const forkCombineLatest: ForkCombineLatest<ObservableContainerLike>["forkCombineLatest"];
export declare const forkConcat: ForkConcat<ObservableContainerLike>["forkConcat"];
export declare const forkMerge: ForkMerge<ObservableContainerLike>["forkMerge"];
export declare const forkZip: ForkZip<ObservableContainerLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<ObservableContainerLike>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: FromAsyncIterable<ObservableContainerLike>["fromAsyncIterable"];
interface FromEnumeratorFactory extends Containers.FromEnumeratorFactory<ObservableContainerLike> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Containers.FromFactory<ObservableContainerLike> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): ObservableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Containers.FromIterable<ObservableContainerLike> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Containers.FromOptional<ObservableContainerLike> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, ObservableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Containers.FromReadonlyArray<ObservableContainerLike> {
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
interface Generate extends Containers.Generate<ObservableContainerLike> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Identity<ObservableContainerLike>["identity"];
export declare const ignoreElements: IgnoreElements<ObservableContainerLike>["ignoreElements"];
export declare const keep: Keep<ObservableContainerLike>["keep"];
export declare const keepType: KeepType<ObservableContainerLike>["keepType"];
export declare const lastAsync: LastAsync<ObservableContainerLike>["lastAsync"];
export declare const map: Map<ObservableContainerLike>["map"];
export declare const mapTo: MapTo<ObservableContainerLike>["mapTo"];
export declare const merge: Merge<ObservableContainerLike>["merge"];
export declare const mergeAll: MergeAll<ObservableContainerLike>["mergeAll"];
export declare const mergeMap: MergeMap<ObservableContainerLike>["mergeMap"];
export declare const mergeWith: MergeWith<ObservableContainerLike>["mergeWith"];
export declare const multicast: Multicast<ObservableContainerLike>["multicast"];
export declare const never: Never<ObservableContainerLike>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableContainerLike, T, T>;
export declare const pairwise: Pairwise<ObservableContainerLike>["pairwise"];
export declare const pick: Pick<ObservableContainerLike>["pick"];
export declare const repeat: Repeat<ObservableContainerLike>["repeat"];
export declare const retry: Retry<ObservableContainerLike>["retry"];
export declare const scan: Scan<ObservableContainerLike>["scan"];
export declare const scanLast: ScanLast<ObservableContainerLike>["scanLast"];
export declare const scanMany: ScanMany<ObservableContainerLike>["scanMany"];
export declare const share: Share<ObservableContainerLike>["share"];
export declare const skipFirst: SkipFirst<ObservableContainerLike>["skipFirst"];
export declare const startWith: StartWith<ObservableContainerLike>["startWith"];
export declare const switchAll: SwitchAll<ObservableContainerLike>["switchAll"];
export declare const switchMap: SwitchMap<ObservableContainerLike>["switchMap"];
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
export declare const takeFirst: TakeFirst<ObservableContainerLike>["takeFirst"];
export declare const takeLast: TakeLast<ObservableContainerLike>["takeLast"];
export declare const takeUntil: TakeUntil<ObservableContainerLike>["takeUntil"];
export declare const takeWhile: TakeWhile<ObservableContainerLike>["takeWhile"];
export declare const throttle: Throttle<ObservableContainerLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<ObservableContainerLike>["throwIfEmpty"];
interface Throws extends Rx.Throws<ObservableContainerLike> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Timeout<ObservableContainerLike>["timeout"];
export declare const toEnumerable: ToEnumerable<ObservableContainerLike>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../util.js").EventSourceLike<T>>;
export declare const toObservable: ToObservable<ObservableContainerLike>["toObservable"];
export declare const toRunnable: ToRunnable<ObservableContainerLike>["toRunnable"];
export declare const withCurrentTime: WithCurrentTime<ObservableContainerLike>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<ObservableContainerLike>["withLatestFrom"];
export declare const zip: Zip<ObservableContainerLike>["zip"];
export declare const zipLatest: ZipLatest<ObservableContainerLike>["zipLatest"];
export declare const zipWith: ZipWith<ObservableContainerLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableContainerLike>["zipWithLatestFrom"];
export {};
