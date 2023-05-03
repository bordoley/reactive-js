import { Container, ContainerOperator, EnumeratorLike } from "../containers.js";
import { Factory, Function1, Optional, SideEffect1, Updater } from "../functions.js";
import { ObservableContainer, ObservableLike, ObserverLike, Reactive } from "../rx.js";
import { DisposableLike, DisposableOrTeardown, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../util.js";
export declare const animate: Reactive.Animate<ObservableContainer>["animate"];
export declare const backpressureStrategy: Reactive.BackpressureStrategy<ObservableContainer>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainer>;
    readonly count?: number;
}) => ContainerOperator<ObservableContainer, T, readonly T[]>;
export declare const catchError: Reactive.CatchError<ObservableContainer>["catchError"];
export declare const combineLatest: Reactive.CombineLatest<ObservableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const concat: Container.Concat<ObservableContainer>["concat"];
export declare const concatAll: Container.ConcatAll<ObservableContainer>["concatAll"];
export declare const concatMap: Container.ConcatMap<ObservableContainer>["concatMap"];
export declare const concatWith: Container.ConcatWith<ObservableContainer>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: Reactive.CurrentTime<ObservableContainer>["currentTime"];
export declare const decodeWithCharset: Reactive.DecodeWithCharset<ObservableContainer>["decodeWithCharset"];
export declare const defer: Reactive.Defer<ObservableContainer>["defer"];
export declare const dispatchTo: Reactive.DispatchTo<ObservableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.DistinctUntilChanged<ObservableContainer>["distinctUntilChanged"];
interface Empty extends Container.Empty<ObservableContainer> {
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
export declare const encodeUtf8: Reactive.EncodeUtf8<ObservableContainer>["encodeUtf8"];
export declare const enqueue: Reactive.Enqueue<ObservableContainer>["enqueue"];
export declare const endWith: Container.EndWith<ObservableContainer>["endWith"];
export declare const exhaust: Reactive.Exhaust<ObservableContainer>["exhaust"];
export declare const exhaustMap: Reactive.ExhaustMap<ObservableContainer>["exhaustMap"];
export declare const firstAsync: Reactive.FirstAsync<ObservableContainer>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => ContainerOperator<ObservableContainer, TA, TB>;
export declare const flatMapIterable: Container.FlatMapIterable<ObservableContainer>["flatMapIterable"];
export declare const forEach: Container.ForEach<ObservableContainer>["forEach"];
export declare const forkCombineLatest: Reactive.ForkCombineLatest<ObservableContainer>["forkCombineLatest"];
export declare const forkConcat: Container.ForkConcat<ObservableContainer>["forkConcat"];
export declare const forkMerge: Reactive.ForkMerge<ObservableContainer>["forkMerge"];
export declare const forkZip: Container.ForkZip<ObservableContainer>["forkZip"];
export declare const forkZipLatest: Reactive.ForkZipLatest<ObservableContainer>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: Container.FromAsyncIterable<ObservableContainer>["fromAsyncIterable"];
interface FromEnumeratorFactory extends Container.FromEnumeratorFactory<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Container.FromFactory<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): ObservableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Container.FromIterable<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, ObservableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Container.FromOptional<ObservableContainer> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, ObservableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Container.FromReadonlyArray<ObservableContainer> {
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
interface Generate extends Container.Generate<ObservableContainer> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): ObservableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Container.Identity<ObservableContainer>["identity"];
export declare const ignoreElements: Container.IgnoreElements<ObservableContainer>["ignoreElements"];
export declare const keep: Container.Keep<ObservableContainer>["keep"];
export declare const keepType: Container.KeepType<ObservableContainer>["keepType"];
export declare const lastAsync: Reactive.LastAsync<ObservableContainer>["lastAsync"];
export declare const map: Container.Map<ObservableContainer>["map"];
export declare const mapTo: Container.MapTo<ObservableContainer>["mapTo"];
export declare const merge: Reactive.Merge<ObservableContainer>["merge"];
export declare const mergeAll: Reactive.MergeAll<ObservableContainer>["mergeAll"];
export declare const mergeMap: Reactive.MergeMap<ObservableContainer>["mergeMap"];
export declare const mergeWith: Reactive.MergeWith<ObservableContainer>["mergeWith"];
export declare const multicast: Reactive.Multicast<ObservableContainer>["multicast"];
export declare const never: Reactive.Never<ObservableContainer>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableContainer, T, T>;
export declare const pairwise: Container.Pairwise<ObservableContainer>["pairwise"];
export declare const pick: Container.Pick<ObservableContainer>["pick"];
export declare const repeat: Container.Repeat<ObservableContainer>["repeat"];
export declare const retry: Reactive.Retry<ObservableContainer>["retry"];
export declare const scan: Container.Scan<ObservableContainer>["scan"];
export declare const scanLast: Reactive.ScanLast<ObservableContainer>["scanLast"];
export declare const scanMany: Reactive.ScanMany<ObservableContainer>["scanMany"];
export declare const share: Reactive.Share<ObservableContainer>["share"];
export declare const skipFirst: Container.SkipFirst<ObservableContainer>["skipFirst"];
export declare const startWith: Container.StartWith<ObservableContainer>["startWith"];
export declare const switchAll: Reactive.SwitchAll<ObservableContainer>["switchAll"];
export declare const switchMap: Reactive.SwitchMap<ObservableContainer>["switchMap"];
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
export declare const takeFirst: Container.TakeFirst<ObservableContainer>["takeFirst"];
export declare const takeLast: Container.TakeLast<ObservableContainer>["takeLast"];
export declare const takeUntil: Reactive.TakeUntil<ObservableContainer>["takeUntil"];
export declare const takeWhile: Container.TakeWhile<ObservableContainer>["takeWhile"];
export declare const throttle: Reactive.Throttle<ObservableContainer>["throttle"];
export declare const throwIfEmpty: Reactive.ThrowIfEmpty<ObservableContainer>["throwIfEmpty"];
interface Throws extends Reactive.Throws<ObservableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Reactive.Timeout<ObservableContainer>["timeout"];
export declare const toEnumerable: Reactive.ToEnumerable<ObservableContainer>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../util.js").EventSourceLike<T>>;
export declare const toObservable: Reactive.ToObservable<ObservableContainer>["toObservable"];
export declare const toRunnable: Reactive.ToRunnable<ObservableContainer>["toRunnable"];
export declare const withCurrentTime: Reactive.WithCurrentTime<ObservableContainer>["withCurrentTime"];
export declare const withLatestFrom: Reactive.WithLatestFrom<ObservableContainer>["withLatestFrom"];
export declare const zip: Container.Zip<ObservableContainer>["zip"];
export declare const zipLatest: Reactive.ZipLatest<ObservableContainer>["zipLatest"];
export declare const zipWith: Container.ZipWith<ObservableContainer>["zipWith"];
export declare const zipWithLatestFrom: Reactive.ZipWithLatestFrom<ObservableContainer>["zipWithLatestFrom"];
export {};
