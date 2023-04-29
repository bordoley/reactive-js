import { Concat, ConcatAll, ConcatMap, ConcatWith, ContainerOperator, DistinctUntilChanged, EndWith, EnumeratorLike, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromAsyncIterable, Identity, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Pick, Repeat, Scan, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, Zip, ZipWith } from "../containers.js";
import * as Containers from "../containers.js";
import { Factory, Function1, Optional, SideEffect1, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, ForkCombineLatest, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Multicast, Never, ObservableLike, ObserverLike, Retry, ScanLast, ScanMany, Share, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, ToObservable, ToRunnable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
import { DisposableLike, DisposableOrTeardown, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const animate: Animate<ObservableLike>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<ObservableLike>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly count?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
export declare const catchError: CatchError<ObservableLike>["catchError"];
export declare const combineLatest: CombineLatest<ObservableLike>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const concat: Concat<ObservableLike>["concat"];
export declare const concatAll: ConcatAll<ObservableLike>["concatAll"];
export declare const concatMap: ConcatMap<ObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<ObservableLike>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: CurrentTime<ObservableLike>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
export declare const defer: Defer<ObservableLike>["defer"];
export declare const dispatchTo: DispatchTo<ObservableLike>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
interface Empty extends Containers.Empty<ObservableLike> {
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
export declare const encodeUtf8: EncodeUtf8<ObservableLike>["encodeUtf8"];
export declare const enqueue: Enqueue<ObservableLike>["enqueue"];
export declare const endWith: EndWith<ObservableLike>["endWith"];
export declare const exhaust: Exhaust<ObservableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<ObservableLike>["exhaustMap"];
export declare const firstAsync: FirstAsync<ObservableLike>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const flatMapIterable: FlatMapIterable<ObservableLike>["flatMapIterable"];
export declare const forEach: ForEach<ObservableLike>["forEach"];
export declare const forkCombineLatest: ForkCombineLatest<ObservableLike>["forkCombineLatest"];
export declare const forkConcat: ForkConcat<ObservableLike>["forkConcat"];
export declare const forkMerge: ForkMerge<ObservableLike>["forkMerge"];
export declare const forkZip: ForkZip<ObservableLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<ObservableLike>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: FromAsyncIterable<ObservableLike>["fromAsyncIterable"];
interface FromEnumeratorFactory extends Containers.FromEnumeratorFactory<ObservableLike> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Containers.FromFactory<ObservableLike> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): ObservableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Containers.FromIterable<ObservableLike> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Containers.FromOptional<ObservableLike> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, ObservableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Containers.FromReadonlyArray<ObservableLike> {
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
interface Generate extends Containers.Generate<ObservableLike> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Identity<ObservableLike>["identity"];
export declare const ignoreElements: IgnoreElements<ObservableLike>["ignoreElements"];
export declare const keep: Keep<ObservableLike>["keep"];
export declare const keepType: KeepType<ObservableLike>["keepType"];
export declare const lastAsync: LastAsync<ObservableLike>["lastAsync"];
export declare const map: Map<ObservableLike>["map"];
export declare const mapTo: MapTo<ObservableLike>["mapTo"];
export declare const merge: Merge<ObservableLike>["merge"];
export declare const mergeAll: MergeAll<ObservableLike>["mergeAll"];
export declare const mergeMap: MergeMap<ObservableLike>["mergeMap"];
export declare const mergeWith: MergeWith<ObservableLike>["mergeWith"];
export declare const multicast: Multicast<ObservableLike>["multicast"];
export declare const never: Never<ObservableLike>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
export declare const pairwise: Pairwise<ObservableLike>["pairwise"];
export declare const pick: Pick<ObservableLike>["pick"];
export declare const repeat: Repeat<ObservableLike>["repeat"];
export declare const retry: Retry<ObservableLike>["retry"];
export declare const scan: Scan<ObservableLike>["scan"];
export declare const scanLast: ScanLast<ObservableLike>["scanLast"];
export declare const scanMany: ScanMany<ObservableLike>["scanMany"];
export declare const share: Share<ObservableLike>["share"];
export declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
export declare const startWith: StartWith<ObservableLike>["startWith"];
export declare const switchAll: SwitchAll<ObservableLike>["switchAll"];
export declare const switchMap: SwitchMap<ObservableLike>["switchMap"];
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
export declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<ObservableLike>["takeLast"];
export declare const takeUntil: TakeUntil<ObservableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
export declare const throttle: Throttle<ObservableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"];
interface Throws extends Rx.Throws<ObservableLike> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Timeout<ObservableLike>["timeout"];
export declare const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../util.js").EventSourceLike<T>>;
export declare const toObservable: ToObservable<ObservableLike>["toObservable"];
export declare const toRunnable: ToRunnable<ObservableLike>["toRunnable"];
export declare const withCurrentTime: WithCurrentTime<ObservableLike>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"];
export declare const zip: Zip<ObservableLike>["zip"];
export declare const zipLatest: ZipLatest<ObservableLike>["zipLatest"];
export declare const zipWith: ZipWith<ObservableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"];
export {};
