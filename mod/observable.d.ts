import { SideEffect1, Factory, Function1, Function2, Function3, Function4, Function5, Function6, SideEffect, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6, Updater, Equality, TypePredicate, Predicate, Reducer } from './functions';
import { Option } from './option';
import { DisposableLike, DisposableOrTeardown } from './disposable';
import { SchedulerLike, VirtualTimeSchedulerLike } from './scheduler';
import { EnumerableLike } from './enumerable';
import { RunnableLike } from './runnable';

declare const dispatchTo: <T>(dispatcher: DispatcherLike<T>) => SideEffect1<T>;

declare const async: <T>(computation: Factory<T>) => ObservableLike<T>;
declare const enum ObservableEffectMode {
    Batched = 0,
    CombineLatest = 1
}
declare const observable: <T>(computation: Factory<T>, { mode }?: {
    mode?: ObservableEffectMode | undefined;
}) => ObservableLike<T>;
declare function __memo<T>(fn: Factory<T>): T;
declare function __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
declare function __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
declare function __memo<TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
declare function __memo<TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
declare function __memo<TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
declare function __memo<TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
declare const __observe: <T>(observable: ObservableLike<T>) => Option<T>;
declare function __await<T>(fn: Factory<ObservableLike<T>>): T;
declare function __await<TA, T>(fn: Function1<TA, ObservableLike<T>>, a: TA): T;
declare function __await<TA, TB, T>(fn: Function2<TA, TB, ObservableLike<T>>, a: TA, b: TB): T;
declare function __await<TA, TB, TC, T>(fn: Function3<TA, TB, TC, ObservableLike<T>>, a: TA, b: TB, c: TC): T;
declare function __await<TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, ObservableLike<T>>, a: TA, b: TB, c: TC, d: TD): T;
declare function __await<TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, ObservableLike<T>>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
declare function __await<TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, ObservableLike<T>>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
declare function __await<T>(observable: ObservableLike<T>): T;
declare function __concurrent<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): [TA, TB];
declare function __concurrent<TA, TB, TC, T>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): [TA, TB, TC];
declare function __concurrent<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): [TA, TB, TC, TD];
declare function __concurrent<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): [TA, TB, TC, TD, TE];
declare function __concurrent<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): [TA, TB, TC, TD, TE, TF];
declare function __concurrent<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): [TA, TB, TC, TD, TE, TF, TG];
declare function __concurrent<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): [TA, TB, TC, TD, TE, TF, TG, TH];
declare function __concurrent<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): [TA, TB, TC, TD, TE, TF, TG, TH, TI];
declare function __do(fn: SideEffect): void;
declare function __do<TA>(fn: SideEffect1<TA>, a: TA): void;
declare function __do<TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
declare function __do<TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
declare function __do<TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
declare function __do<TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
declare function __do<TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
declare function __using<T extends DisposableLike>(fn: Factory<T>): T;
declare function __using<TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
declare function __using<TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
declare function __using<TA, TB, TC, T extends DisposableLike>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
declare function __using<TA, TB, TC, TD, T extends DisposableLike>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
declare function __using<TA, TB, TC, TD, TE, T extends DisposableLike>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
declare function __using<TA, TB, TC, TD, TE, TF, T extends DisposableLike>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
declare function __currentScheduler(): SchedulerLike;

declare function combineLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<[TA, TB]>;
declare function combineLatest<TA, TB, TC, T>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<[TA, TB, TC]>;
declare function combineLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<[TA, TB, TC, TD]>;
declare function combineLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<[TA, TB, TC, TD, TE]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
declare const combineLatestWith: <TA, TB>(snd: ObservableLike<TB>) => Function1<ObservableLike<TA>, ObservableLike<[TA, TB]>>;

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
declare const compute: <T>(options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<Factory<T>, ObservableLike<T>>;

/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
declare function concat<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): ObservableLike<T>;
declare const concatWith: <T>(snd: ObservableLike<T>) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Factory for safely creating new `ObservableLike` instances. The onSubscribe function
 * is called with a `SafeObserverLike` that may be notified from any context.
 *
 * Note, implementations should not do significant blocking work in
 * the onSubscribe function.
 *
 * @param onSubscribe
 */
declare const createObservable: <T>(onSubscribe: SideEffect1<DispatcherLike<T>>) => ObservableLike<T>;

declare const createSubject: <T>(options?: {
    readonly replay?: number;
}) => SubjectLike<T>;

/**
 * Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.
 */
declare const empty: <T>(options?: {
    readonly delay?: number;
}) => ObservableLike<T>;

/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
declare const fromArray: <T>(options?: {
    readonly delay?: number;
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => Function1<readonly T[], ObservableLike<T>>;

declare const fromDisposable: (disposable: DisposableLike) => ObservableLike<unknown>;

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
declare const fromEnumerable: <T>(options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<EnumerableLike<T>, ObservableLike<T>>;

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
declare const fromIterator: <T, TReturn = any, TNext = unknown>(options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<Factory<Iterator<T, TReturn, TNext>>, ObservableLike<T>>;
/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
declare const fromIterable: <T>(options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<Iterable<T>, ObservableLike<T>>;

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each observer to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
declare const fromPromise: <T>(factory: Factory<Promise<T>>) => ObservableLike<T>;

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
}) => ObservableLike<T>;

/**
 *  Creates an `ObservableLike` which concurrently emits values from the sources.
 */
declare function merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): ObservableLike<T>;
declare const mergeWith: <T>(snd: ObservableLike<T>) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
declare const never: <T>() => ObservableLike<T>;

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
declare const fromValue: <T>(options?: {
    readonly delay?: number;
}) => Function1<T, ObservableLike<T>>;

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
declare const subscribe: <T>(scheduler: SchedulerLike, onNotify?: SideEffect1<T>) => Function1<ObservableLike<T>, DisposableLike>;

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
declare const throws: <T>(options?: {
    readonly delay?: number;
}) => Function1<Factory<unknown>, ObservableLike<T>>;

declare function using<TResource extends DisposableLike, T>(resourceFactory: Function1<SchedulerLike, TResource>, observableFactory: Function1<TResource, ObservableLike<T>>): ObservableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, T>(resourceFactory: Function1<SchedulerLike, [TResource1, TResource2]>, observableFactory: Function2<TResource1, TResource2, ObservableLike<T>>): ObservableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, T>(resourceFactory: Function1<SchedulerLike, [
    TResource1,
    TResource2,
    TResource3
]>, observableFactory: Function3<TResource1, TResource2, TResource3, ObservableLike<T>>): ObservableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, TResource4 extends DisposableLike, T>(resourceFactory: Function1<SchedulerLike, [
    TResource1,
    TResource2,
    TResource3,
    TResource4
]>, observableFactory: Function4<TResource1, TResource2, TResource3, TResource4, ObservableLike<T>>): ObservableLike<T>;
declare function using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, TResource4 extends DisposableLike, TResource5 extends DisposableLike, T>(resourceFactory: Function1<SchedulerLike, [
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    TResource5
]>, observableFactory: Function5<TResource1, TResource2, TResource3, TResource4, TResource5, ObservableLike<T>>): ObservableLike<T>;
declare function using<TResource extends DisposableLike, T>(resourceFactory: Function1<SchedulerLike, TResource | readonly TResource[]>, observableFactory: (...resources: readonly TResource[]) => ObservableLike<T>): ObservableLike<T>;

declare const defer: <T>(factory: Function1<ObserverLike<T>, SideEffect>, options?: {
    readonly delay?: number;
}) => ObservableLike<T>;

declare const observe: <T>(observer: ObserverLike<T>) => SideEffect1<ObservableLike<T>>;

/**
 * Returns an `ObservableLike` which buffers items produced by the source until either the
 * number of items reaches the specified maximum buffer size or the duration time expires.
 *
 * @param options A configuration object that specifies an optional `duration` function or time in ms,
 * and an optional `maxBufferSize`.
 */
declare function buffer<T>(options?: {
    readonly duration?: Function1<T, ObservableLike<unknown>> | number;
    readonly maxBufferSize?: number;
}): ObservableOperator<T, readonly T[]>;

/**
 * Returns an `ObservableLike` which catches errors produced by the source and either continues with
 * the `ObservableLike` returned from the `onError` callback or swallows the error if
 * void is returned.
 *
 * @param onError a function that takes source error and either returns an `ObservableLike`
 * to continue with or void if the error should be propagated.
 */
declare const catchError: <T>(onError: Function1<unknown, void | ObservableLike<T>>) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returns an `ObservableLike` that emits items from the source,
 * concatenated with the values specified as arguments.
 */
declare function endWith<T>(value: T, ...values: readonly T[]): ObservableOperator<T, T>;

declare const genMap: <TA, TB, TReturn = any, TNext = unknown>(mapper: Function1<TA, Generator<TB, TReturn, TNext>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
declare const ignoreElements: <TA, TB>() => Function1<ObservableLike<TA>, ObservableLike<TB>>;

/**
 * Returns an `ObservableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
declare const keepType: <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
/**
 * Returns an `ObservableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
declare const keep: <T>(predicate: Predicate<T>) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
declare const lift: <TA, TB>(operator: ObserverOperator<TA, TB>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

/**
 * Returns an `ObservableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
declare const mapTo: <TA, TB>(value: TB) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * which concurrently delivers values emitted by the inner sources.
 *
 * @param options Optional configuration object. The `maxBufferSize` property specifies
 * how many source observables may be queued before dropping previous observables. The `maxConcurrency`
 * property specifies the maximum number of inner observables that may be subscribed to concurrently.
 */
declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}) => Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
declare const mergeMap: <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>, options?: {
    maxBufferSize?: number;
    maxConcurrency?: number;
}) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: <T>(options?: {
    readonly maxBufferSize?: number;
}) => Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
declare const concatMap: <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>, options?: {
    readonly maxBufferSize?: number | undefined;
} | undefined) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
declare const exhaust: <T>() => Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
declare const exhaustMap: <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
declare function onNotify<T>(onNotify: SideEffect1<T>): ObservableOperator<T, T>;

/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => Function1<ObservableLike<T>, ObservableLike<T>>;

declare const pairwise: <T>() => Function1<ObservableLike<T>, ObservableLike<[Option<T>, T]>>;

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
declare const publish: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;

declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<ObservableLike<T>, ObservableLike<TAcc>>;

/**
 * Returns an `ObservableLike` that applies the predicate function each time the source
 * completes to determine if the subscription should be renewed.
 *
 * @param predicate The predicate function to apply.
 */
declare function repeat<T>(predicate: Predicate<number>): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that repeats the source count times.
 * @param count
 */
declare function repeat<T>(count: number): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that continually repeats the source.
 */
declare function repeat<T>(): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that mirrors the source, re-subscribing
 * if the source completes with an error.
 */
declare function retry<T>(): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that mirrors the source, resubscrbing
 * if the source completes with an error which satisfies the predicate function.
 *
 * @param predicate
 */
declare function retry<T>(predicate: Function2<number, unknown, boolean>): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => Function1<ObservableLike<T>, ObservableLike<TAcc>>;

declare type AsyncReducer<TAcc, T> = Function2<TAcc, T, ObservableLike<TAcc>>;
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
declare const scanAsync: <T, TAcc>(scanner: Function2<TAcc, T, ObservableLike<TAcc>>, initialValue: Factory<TAcc>) => Function1<ObservableLike<T>, ObservableLike<TAcc>>;

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
declare const share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returns an `ObservableLike` that emits the values specified as arguments,
 * concatenated with items from the source.
 */
declare function startWith<T>(value: T, ...values: readonly T[]): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
declare const subscribeOn: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
declare const switchAll: <T>() => Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;
declare const switchMap: <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>) => Function1<ObservableLike<TA>, ObservableLike<TB>>;

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;

declare const takeUntil: <T>(notifier: ObservableLike<unknown>) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => Function1<ObservableLike<T>, ObservableLike<T>>;

/**
 * The throttle mode used by the `throttle` operator.
 */
declare const enum ThrottleMode {
    /**
     * Takes a leading value.
     */
    First = 1,
    /**
     * Takes the trailing value.
     */
    Last = 2,
    /**
     * Takes both the leading and trailing values.
     */
    Interval = 3
}
/**
 * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
 *
 * @param duration Function function that is used to determine the silence duration in between emitted values.
 * @param mode The throttle mode.
 */
declare function throttle<T>(duration: Function1<T, ObservableLike<unknown>>, options?: {
    readonly mode?: ThrottleMode;
}): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` which emits a value from the source,
 * then ignores subsequent source values for `duration` milliseconds.
 *
 * @param duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds.
 * @param mode The throttle mode.
 */
declare function throttle<T>(duration: number, options?: {
    readonly mode?: ThrottleMode;
}): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` that emits an error if the source completes without emitting a value.
 *
 * @param factory A factory function invoked to produce the error to be thrown.
 */
declare const throwIfEmpty: <T>(factory: Factory<unknown>) => Function1<ObservableLike<T>, ObservableLike<T>>;

/** Symbol thrown when the timeout operator times out */
declare const timeoutError: symbol;
/**
 * Returns an `ObservableLike` that completes with an error if the source
 * does not emit a value in given time span.
 *
 * @param duration Time in ms within which the source must emit values.
 */
declare function timeout<T>(duration: number): ObservableOperator<T, T>;
/**
 *
 * @param duration
 */
declare function timeout<T>(duration: ObservableLike<unknown>): ObservableOperator<T, T>;

/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
declare const withLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => Function1<ObservableLike<TA>, ObservableLike<T>>;

declare function zip<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<[TA, TB]>;
declare function zip<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<[TA, TB, TC]>;
declare function zip<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<[TA, TB, TC, TD]>;
declare function zip<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<[TA, TB, TC, TD, TE]>;
declare function zip<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
declare const zipWith: <TA, TB>(snd: ObservableLike<TB>) => Function1<ObservableLike<TA>, ObservableLike<[TA, TB]>>;

declare function zipLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<[TA, TB]>;
declare function zipLatest<TA, TB, TC, T>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<[TA, TB, TC]>;
declare function zipLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<[TA, TB, TC, TD]>;
declare function zipLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<[TA, TB, TC, TD, TE]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
declare const zipLatestWith: <TA, TB>(snd: ObservableLike<TB>) => Function1<ObservableLike<TA>, ObservableLike<[TA, TB]>>;

/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => Function1<ObservableLike<TA>, ObservableLike<T>>;

declare const toRunnable: <T>(options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
}) => Function1<ObservableLike<T>, RunnableLike<T>>;

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Promise<T>>;

/**
 * The underlying mechanism for receiving and transforming notifications from an
 * observable source. The `ObserverLike` interface composes the `SchedulerLike` and
 * `DisposableLike` interfaces into a single unified type, while adding the capability
 * to receive notifications.
 *
 * @noInheritDoc
 */
interface ObserverLike<T> extends DisposableLike, SchedulerLike {
    /**
     * Notifies the the observer of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the observer's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(next: T): void;
}
/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
declare type ObserverOperator<A, B> = {
    readonly isSynchronous: boolean;
    (observer: ObserverLike<B>): ObserverLike<A>;
};
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T> {
    readonly isSynchronous: boolean;
    /**
     * Subscribes the `ObserverLike` instance to the observable.
     * @param observer The observer which should be notified by the observable source.
     */
    observe(observer: ObserverLike<T>): void;
}
/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
declare type ObservableOperator<A, B> = Function1<ObservableLike<A>, ObservableLike<B>>;
/**
 * An `ObservableLike` that shares a common subscription to an underlying observable source.
 *
 * @noInheritDoc
 */
interface MulticastObservableLike<T> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly observerCount: number;
}
/** @noInheritDoc */
interface DispatcherLike<T> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    dispatch(req: T): void;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
/** @noInheritDoc */
interface SubjectLike<T> extends StreamLike<T, T> {
}

export { AsyncReducer, DispatcherLike, MulticastObservableLike, ObservableEffectMode, ObservableLike, ObservableOperator, ObserverLike, ObserverOperator, StreamLike, SubjectLike, ThrottleMode, __await, __concurrent, __currentScheduler, __do, __memo, __observe, __using, async, buffer, catchError, combineLatest, combineLatestWith, compute, concat, concatAll, concatMap, concatWith, createObservable, createSubject, defer, dispatchTo, distinctUntilChanged, empty, endWith, exhaust, exhaustMap, fromArray, fromDisposable, fromEnumerable, fromIterable, fromIterator, fromPromise, fromValue, genMap, generate, ignoreElements, keep, keepType, lift, map, mapAsync, mapTo, merge, mergeAll, mergeMap, mergeWith, never, observable, observe, onNotify, onSubscribe, pairwise, publish, reduce, repeat, retry, scan, scanAsync, share, skipFirst, startWith, subscribe, subscribeOn, switchAll, switchMap, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, throws, timeout, timeoutError, toPromise, toRunnable, using, withLatestFrom, zip, zipLatest, zipLatestWith, zipWith, zipWithLatestFrom };
