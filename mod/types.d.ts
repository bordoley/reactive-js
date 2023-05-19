import type * as DeferredObservable from "./DeferredObservable.js";
import type * as Observable from "./Observable.js";
import type * as ReadonlyObjectMap from "./ReadonlyObjectMap.js";
import { __AssociativeCollectionLike_keys, __BufferLike_capacity, __CollectionLike_count, __Container_T, __Container_type, __DispatcherLikeEvent_capacityExceeded, __DispatcherLikeEvent_completed, __DispatcherLikeEvent_ready, __DispatcherLike_complete, __DisposableLike_add, __DisposableLike_dispose, __DisposableLike_error, __DisposableLike_isDisposed, __EnumeratorLike_current, __EnumeratorLike_hasCurrent, __EnumeratorLike_move, __EventListenerLike_isErrorSafe, __EventPublisherLike_listenerCount, __EventSourceLike_addEventListener, __KeyedCollectionLike_get, __KeyedContainer_TKey, __ObservableLike_isDeferred, __ObservableLike_isEnumerable, __ObservableLike_isRunnable, __ObservableLike_observe, __PauseableLike_isPaused, __PauseableLike_pause, __PauseableLike_resume, __PublisherLike_observerCount, __QueueableLike_backpressureStrategy, __QueueableLike_enqueue, __ReplayObservableLike_buffer, __SchedulerLike_inContinuation, __SchedulerLike_maxYieldInterval, __SchedulerLike_now, __SchedulerLike_requestYield, __SchedulerLike_schedule, __SchedulerLike_shouldYield, __SchedulerLike_yield, __SinkLike_notify, __StoreLike_value, __StreamLike_scheduler, __StreamableLike_TStream, __StreamableLike_stream, __VirtualTimeSchedulerLike_run } from "./__internal__/symbols.js";
import { Equality, Factory, Function1, Function2, Function3, Optional, Predicate, Reducer, SideEffect1, SideEffect2, TypePredicate, Updater } from "./functions.js";
export declare const AssociativeCollectionLike_keys: typeof __AssociativeCollectionLike_keys;
export declare const CollectionLike_count: typeof __CollectionLike_count;
export declare const Container_T: typeof __Container_T;
export declare const Container_type: typeof __Container_type;
export declare const EnumeratorLike_current: typeof __EnumeratorLike_current;
export declare const EnumeratorLike_hasCurrent: typeof __EnumeratorLike_hasCurrent;
export declare const EnumeratorLike_move: typeof __EnumeratorLike_move;
export declare const KeyedCollectionLike_get: typeof __KeyedCollectionLike_get;
export declare const KeyedContainer_TKey: typeof __KeyedContainer_TKey;
export declare const ReplayObservableLike_buffer: typeof __ReplayObservableLike_buffer;
export declare const ObservableLike_isDeferred: typeof __ObservableLike_isDeferred;
export declare const ObservableLike_isEnumerable: typeof __ObservableLike_isEnumerable;
export declare const ObservableLike_isRunnable: typeof __ObservableLike_isRunnable;
export declare const ObservableLike_observe: typeof __ObservableLike_observe;
export declare const PublisherLike_observerCount: typeof __PublisherLike_observerCount;
export declare const StreamableLike_stream: typeof __StreamableLike_stream;
export declare const StreamLike_scheduler: typeof __StreamLike_scheduler;
export declare const StreamableLike_TStream: typeof __StreamableLike_TStream;
export declare const BufferLike_capacity: typeof __BufferLike_capacity;
export declare const DispatcherLikeEvent_ready: typeof __DispatcherLikeEvent_ready;
export declare const DispatcherLikeEvent_capacityExceeded: typeof __DispatcherLikeEvent_capacityExceeded;
export declare const DispatcherLikeEvent_completed: typeof __DispatcherLikeEvent_completed;
export declare const DispatcherLike_complete: typeof __DispatcherLike_complete;
export declare const DisposableLike_add: typeof __DisposableLike_add;
export declare const DisposableLike_dispose: typeof __DisposableLike_dispose;
export declare const DisposableLike_error: typeof __DisposableLike_error;
export declare const DisposableLike_isDisposed: typeof __DisposableLike_isDisposed;
export declare const EventListenerLike_isErrorSafe: typeof __EventListenerLike_isErrorSafe;
export declare const EventPublisherLike_listenerCount: typeof __EventPublisherLike_listenerCount;
export declare const EventSourceLike_addEventListener: typeof __EventSourceLike_addEventListener;
export declare const PauseableLike_isPaused: typeof __PauseableLike_isPaused;
export declare const PauseableLike_pause: typeof __PauseableLike_pause;
export declare const PauseableLike_resume: typeof __PauseableLike_resume;
export declare const QueueableLike_backpressureStrategy: typeof __QueueableLike_backpressureStrategy;
export declare const QueueableLike_enqueue: typeof __QueueableLike_enqueue;
export declare const SchedulerLike_yield: typeof __SchedulerLike_yield;
export declare const SchedulerLike_inContinuation: typeof __SchedulerLike_inContinuation;
export declare const SchedulerLike_maxYieldInterval: typeof __SchedulerLike_maxYieldInterval;
export declare const SchedulerLike_now: typeof __SchedulerLike_now;
export declare const SchedulerLike_requestYield: typeof __SchedulerLike_requestYield;
export declare const SchedulerLike_schedule: typeof __SchedulerLike_schedule;
export declare const SchedulerLike_shouldYield: typeof __SchedulerLike_shouldYield;
export declare const SinkLike_notify: typeof __SinkLike_notify;
export declare const StoreLike_value: typeof __StoreLike_value;
export declare const VirtualTimeSchedulerLike_run: typeof __VirtualTimeSchedulerLike_run;
/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface EnumeratorLike<T = unknown> extends DisposableLike {
    /**
     * Returns the element if present.
     */
    readonly [EnumeratorLike_current]: T;
    /**
     * Indicates if the `EnumeratorLike` has a current value.
     */
    readonly [EnumeratorLike_hasCurrent]: boolean;
    /**
     * Advances the enumerator to the next value, if present.
     *
     * @returns true if successful, otherwise false.
     */
    [EnumeratorLike_move](): boolean;
}
/**
 * @noInheritDoc
 * @category Interactive
 */
export type EnumeratorFactoryLike<T = unknown> = Factory<EnumeratorLike<T>>;
/**
 * @noInheritDoc
 * @category Collection
 */
export type ReadonlyObjectMapLike<TKey extends symbol | number | string = string, T = unknown> = {
    readonly [P in TKey]?: T;
};
/**
 * @noInheritDoc
 * @category Collection
 */
export interface CollectionLike {
    readonly [CollectionLike_count]: number;
}
/**
 * @noInheritDoc
 * @category Collection
 */
export interface KeyedCollectionLike<TKey = unknown, T = unknown> extends CollectionLike {
    [KeyedCollectionLike_get](index: TKey): T;
}
/**
 * @noInheritDoc
 * @category Collection
 */
export interface AssociativeCollectionLike<TKey = unknown, T = unknown> extends KeyedCollectionLike<TKey, T> {
    [AssociativeCollectionLike_keys](): EnumeratorLike<TKey>;
}
/**
 * @noInheritDoc
 * @category Collection
 */
export interface DictionaryLike<TKey = unknown, T = unknown> extends AssociativeCollectionLike<TKey, Optional<T>> {
}
/**
 * @noInheritDoc
 * @category Collection
 */
export interface IndexedCollectionLike<T = unknown> extends KeyedCollectionLike<number, T> {
}
/**
 * Represents an unmanaged resource that can be disposed.
 *
 * @noInheritDoc
 * @category Resource Management
 */
export interface DisposableLike {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_error]: Optional<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    readonly [DisposableLike_isDisposed]: boolean;
    /**
     * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     * @param ignoreChildErrors - Indicates that the parent should not auto dispose if the child disposed with an error.
     */
    [DisposableLike_add](disposable: DisposableLike): void;
    [DisposableLike_add](teardown: SideEffect1<Optional<Error>>): void;
    /**
     * Dispose the resource.
     *
     * @param error - An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
/**
 * @noInheritDoc
 * @category Queueing
 */
export interface BufferLike {
    /**
     * The number of items the queue is capable of efficiently buffering.
     */
    readonly [BufferLike_capacity]: number;
}
/**
 * An interface for types that support buffering items with backpressure.
 *
 * @noInheritDoc
 * @category Queueing
 */
export interface QueueableLike<T = unknown> extends BufferLike {
    /**
     * The back pressure strategy utilized by the queue when it is at capacity.
     */
    readonly [QueueableLike_backpressureStrategy]: "drop-latest" | "drop-oldest" | "overflow" | "throw";
    /**
     * Enqueue an item onto the queue.
     *
     * @param req - The value to enqueue.
     * @returns `true` if the queue has additional remaining capacity otherwise `false`.
     */
    [QueueableLike_enqueue](req: T): boolean;
}
/**
 * @noInheritDoc
 * @category Queueing
 */
export interface IndexedBufferCollectionLike<T = unknown> extends BufferLike, IndexedCollectionLike<T> {
}
/**
 * @noInheritDoc
 * @category Reactive
 */
export interface SinkLike<T = unknown> extends DisposableLike {
    [SinkLike_notify](event: T): void;
}
/**
 * @noInheritDoc
 * @category Reactive
 */
export interface EventListenerLike<T = unknown> extends SinkLike<T> {
    readonly [EventListenerLike_isErrorSafe]: boolean;
}
/**
 * @noInheritDoc
 * @category Reactive
 */
export interface ErrorSafeEventListenerLike<T = unknown> extends EventListenerLike<T> {
    readonly [EventListenerLike_isErrorSafe]: true;
}
/**
 * @noInheritDoc
 * @category Event
 */
export interface EventSourceLike<T = unknown> {
    [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}
/**
 * @noInheritDoc
 * @category Event
 */
export interface EventPublisherLike<T = unknown> extends EventSourceLike<T>, ErrorSafeEventListenerLike<T> {
    readonly [EventPublisherLike_listenerCount]: number;
}
/**
 * @noInheritDoc
 * @category Event
 */
export interface StoreLike<T = unknown> extends EventSourceLike<T> {
    readonly [StoreLike_value]: T;
}
/**
 * @noInheritDoc
 * @category Event
 */
export interface WritableStoreLike<T = unknown> extends StoreLike<T> {
    [StoreLike_value]: T;
}
/**
 * @noInheritDoc
 * @category EventMap
 */
export interface DispatcherLikeEventMap {
    [DispatcherLikeEvent_ready]: typeof DispatcherLikeEvent_ready;
    [DispatcherLikeEvent_capacityExceeded]: typeof DispatcherLikeEvent_capacityExceeded;
    [DispatcherLikeEvent_completed]: typeof DispatcherLikeEvent_completed;
}
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 * @category Queueing
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T>, EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]> {
    /**
     * Communicates to the dispatcher that no more events will be enqueued.
     */
    [DispatcherLike_complete](): void;
}
/**
 * @noInheritDoc
 * @category Scheduling
 */
export interface PauseableLike {
    /**
     * Boolean flag indicating if the PauseableLike is currently paused or not.
     */
    readonly [PauseableLike_isPaused]: StoreLike<boolean>;
    /**
     * Imperatively pause the source.
     */
    [PauseableLike_pause](): void;
    /**
     * Imperatively resume the source.
     */
    [PauseableLike_resume](): void;
}
/**
 * Schedulers are the core unit of concurrency, orchestration and
 * cooperative multi-tasking.
 *
 * @noInheritDoc
 * @category Scheduling
 */
export interface SchedulerLike {
    /**
     * Boolean flag indicating the scheduler is currently
     * running a continuation.
     */
    readonly [SchedulerLike_inContinuation]: boolean;
    /**
     * The max number of milliseconds the scheduler will run
     * before yielding control back to the underlying system scheduler.
     */
    readonly [SchedulerLike_maxYieldInterval]: number;
    /**
     * The current time in milliseconds.
     */
    readonly [SchedulerLike_now]: number;
    /**
     * Boolean flag indicating whether a running continuation
     * should yield control back to the scheduler.
     */
    readonly [SchedulerLike_shouldYield]: boolean;
    /**
     * Request the scheduler to yield the current continuation.
     */
    [SchedulerLike_requestYield](): void;
    /**
     * Yields control back to the scheduler.
     *
     * If no delay is specified, a scheduler may either allow
     * the continuation to continue to execute, or it will throw
     * an internal exception that must not be caught by the continuation
     * which the scheduler will use to reschedule the continuation for
     * a future time.
     *
     * @param delay - The amount of delay in ms the scheduler
     * should delay before resuming execution of the continuation.
     */
    [SchedulerLike_yield](delay?: number): void;
    /**
     * Schedule a continuation on the Scheduler.
     * @param continuation - The continuation to run on the scheduler.
     * @param options
     */
    [SchedulerLike_schedule](continuation: SideEffect1<SchedulerLike>, options?: {
        /**
         * The amount of time in ms to delay execution of the continuation.
         */
        readonly delay?: number;
    }): DisposableLike;
}
/**
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 * @category Scheduling
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {
}
/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 * @category Scheduling
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike, DisposableLike {
    /**
     * Runs the scheduler synchronously until it has no more
     * enqueued continuations, at which time the scheduler will auto dispose.
     */
    [VirtualTimeSchedulerLike_run](): void;
}
/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 * @category Reactive
 */
export interface ObserverLike<T = unknown> extends DispatcherLike<T>, SinkLike<T>, SchedulerLike {
}
/**
 * The source of notifications which can be consumed by an `ObserverLike` instance.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface ObservableLike<T = unknown> {
    /**
     * Indicates if the `ObservableLike` is deferred, ie. cold.
     */
    readonly [ObservableLike_isDeferred]: boolean;
    /**
     * Indicates if the `ObservableLike` supports interactive enumeration.
     */
    readonly [ObservableLike_isEnumerable]: boolean;
    /**
     * Indicates if the `ObservableLike` supports being subscribed to
     * on a VirtualTimeScheduler.
     */
    readonly [ObservableLike_isRunnable]: boolean;
    /**
     * Subscribes the given `ObserverLike` to the `ObservableLike` source.
     *
     * @param observer - The observer.
     */
    [ObservableLike_observe](observer: ObserverLike<T>): void;
}
/**
 * @noInheritDoc
 * @category Observable
 */
export interface MulticastObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
}
/**
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface DeferredObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isDeferred]: true;
}
/**
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface RunnableLike<T = unknown> extends DeferredObservableLike<T> {
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * An `ObservableLike` that supports interactive enumeration.
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface EnumerableLike<T = unknown> extends RunnableLike<T> {
    readonly [ObservableLike_isEnumerable]: true;
}
/**
 * A stateful ObservableLike resource.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface ReplayObservableLike<T = unknown> extends MulticastObservableLike<T> {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
    readonly [ReplayObservableLike_buffer]: IndexedBufferCollectionLike<T>;
}
/**
 * An `EventListener` that can be used to publish notifications to one or more observers.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface PublisherLike<T = unknown> extends ErrorSafeEventListenerLike<T>, ReplayObservableLike<T> {
    /**
     * The number of observers currently observing the `Publisher`.
     */
    readonly [PublisherLike_observerCount]: number;
}
/**
 * A `ObservableLike` that supports imperative flow control
 * via the pause and resume methods.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface PauseableObservableLike<T = unknown> extends ObservableLike<T>, PauseableLike {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, ReplayObservableLike<T> {
    readonly [StreamLike_scheduler]: SchedulerLike;
}
/**
 * A container that supports bi-directional streaming.
 *
 * @typeparam TReq
 * @typeparam T
 * @typeparam TStream
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface StreamableLike<TReq = unknown, T = unknown, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    readonly [StreamableLike_TStream]?: TStream;
    /**
     * Subscribe to the Streamable.
     *
     * @param scheduler - The scheduler to subscribe to the stream with.
     * @param options
     */
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        /**
         * The number of items to buffer for replay when an observer subscribes
         * to the stream.
         */
        readonly replay?: number;
        /**
         * The capacity of the stream's request queue.
         */
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): TStream & DisposableLike;
}
/** @category Interactive */
export type StreamOf<TStreamable extends StreamableLike> = NonNullable<TStreamable[typeof StreamableLike_TStream]>;
/**
 * @noInheritDoc
 * @category Container
 */
export interface Container {
    readonly [Container_T]?: unknown;
    readonly [Container_type]?: unknown;
}
/**
 * @category Container
 */
export type ContainerOf<C extends Container, T> = C extends {
    readonly [Container_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Container_T]: T;
})[typeof Container_type]> : {
    readonly _C: C;
    readonly _T: () => T;
};
/**
 * @category Container
 */
export type ContainerOperator<C extends Container, TA, TB> = Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
/**
 * @noInheritDoc
 * @category Container
 */
export interface KeyedContainer<TKey = unknown> extends Container {
    readonly [KeyedContainer_TKey]?: TKey;
}
/**
 * @category Container
 */
export type KeyedContainerOf<C extends KeyedContainer, TKey, T> = C extends {
    readonly [Container_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Container_T]: T;
    readonly [KeyedContainer_TKey]: TKey;
})[typeof Container_type]> : {
    readonly _C: C;
    readonly _T: () => T;
    readonly _TKey: () => TKey;
};
/**
 * @category Container
 */
export type KeyOf<C extends KeyedContainer> = NonNullable<C[typeof KeyedContainer_TKey]>;
/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 * @category Container
 */
export type KeyedContainerOperator<C extends KeyedContainer, TKey, TA, TB> = Function1<KeyedContainerOf<C, TKey, TA>, KeyedContainerOf<C, TKey, TB>>;
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ContainerTypeClass<C extends Container> {
    /** @category Operator */
    buffer<T>(options?: {
        count?: number;
    }): ContainerOperator<C, T, readonly T[]>;
    /**
     * Returns a ContainerOperator that emits all items emitted by the source that
     * are distinct by comparison from the previous item.
     *
     * @category Operator
     */
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ContainerOperator<C, T, T>;
    /**
     * Returns a ContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
    /**
     * @category Operator
     */
    ignoreElements<T>(): ContainerOperator<C, unknown, T>;
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
    /**
     * @category Operator
     */
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ContainerOperator<C, TA, TB>;
    /**
     * Returns a ContainerOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB>(selector: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
    /**
     * @category Operator
     */
    mapTo<TA, TB>(value: TB): ContainerOperator<C, TA, TB>;
    /**
     * @category Operator
     */
    pairwise<T>(): ContainerOperator<C, T, readonly [T, T]>;
    /**
     * @category Operator
     */
    pick<T, TKey extends keyof T>(key: TKey): ContainerOperator<C, T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ContainerOperator<C, T, T[TKeyA][TKeyB]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): ContainerOperator<C, T, T[TKeyA][TKeyB][TKeyC]>;
    /**
     * Returns a Container that applies an accumulator function over the source,
     * and emits each intermediate result.
     *
     * @param scanner - The accumulator function called on each source value.
     * @param initialValue - The initial accumulation value.
     *
     * @category Operator
     */
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
    /**
     * Returns a Container that skips the first count items emitted by the source.
     *
     * @category Operator
     */
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
    /**
     * Returns a Container that only emits the first `count` values emitted by the source.
     *
     * @category Operator
     */
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
    /**
     * Returns a Container which emits values emitted by the source as long
     * as each value satisfies the given predicate, and then completes as soon as
     * this predicate is not satisfied.
     *
     * @param predicate - The predicate function.
     *
     * @category Operator
     */
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
}
/**
 * @noInheritDoc
 *  @category TypeClass
 */
export interface FlowableTypeClass<C extends Container> {
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ContainerOf<C, T>, PauseableObservableLike<T> & DisposableLike>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MulticastableTypeClass<C extends Container> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<ContainerOf<C, T>, DisposableLike>;
    /**
     * @category Transform
     */
    toEventSource<T>(): Function1<ContainerOf<C, T>, EventSourceLike<T>>;
    /**
     * @category Transform
     */
    toObservable<T>(): Function1<ContainerOf<C, T>, MulticastObservableLike<T>>;
    /**
     * @category Transform
     */
    toReadonlyArrayAsync<T>(): Function1<ContainerOf<C, T>, Promise<ReadonlyArray<T>>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface DeferredTypeClass<C extends Container> {
    /**
     * @category Operator
     */
    repeat<T>(): ContainerOperator<C, T, T>;
    repeat<T>(count: number): ContainerOperator<C, T, T>;
    repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    /**
     * @category Operator
     */
    retry<T>(shouldRetry: (count: number, error: Error) => boolean): ContainerOperator<C, T, T>;
    toObservable<T>(): Function1<ContainerOf<C, T>, DeferredObservableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface RunnableTypeClass<C extends Container> extends ContainerTypeClass<C>, FlowableTypeClass<C> {
    /**
     * Returns a Container which emits all values from each source sequentially.
     *
     * @category Constructor
     */
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
    /**
     * Converts a higher-order Container into a first-order
     * Container by concatenating the inner sources in order.
     *
     * @category Operator
     */
    concatAll<T>(): ContainerOperator<C, ContainerOf<C, T>, T>;
    /**
     * @category Operator
     */
    concatMap<TA, TB>(selector: Function1<TA, ContainerOf<C, TB>>): ContainerOperator<C, TA, TB>;
    /**
     * @category Operator
     */
    concatWith<T>(snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOperator<C, T, T>;
    /**
     * @category Transform
     */
    contains<T>(value: T, options?: {
        readonly equality?: Equality<T>;
    }): Function1<ContainerOf<C, T>, boolean>;
    /**
     * Return an Container that emits no items.
     *
     * @category Constructor
     */
    empty<T>(): ContainerOf<C, T>;
    /**
     * @category Operator
     */
    endWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
    /**
     * Determines whether all the members of an Container satisfy the predicate.
     * The predicate function is invoked for each element in the Container until the
     * it returns false, or until the end of the Container.
     *
     * @param predicate
     * @category Transform
     */
    everySatisfy<T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean>;
    /**
     *
     * @category Transform
     */
    first<T>(): Function1<ContainerOf<C, T>, Optional<T>>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ContainerOperator<C, TA, TB>;
    /**
     * @category Constructor
     */
    fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(): Function1<EnumeratorFactoryLike<T>, ContainerOf<C, T>>;
    /**
     * @category Constructor
     */
    fromFactory<T>(): Function1<Factory<T>, ContainerOf<C, T>>;
    /**
     * @category Constructor
     */
    fromIterable<T>(): Function1<Iterable<T>, ContainerOf<C, T>>;
    /**
     * @category Constructor
     */
    fromOptional<T>(): Function1<Optional<T>, ContainerOf<C, T>>;
    /**
     * @category Constructor
     */
    fromReadonlyArray<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<readonly T[], ContainerOf<C, T>>;
    /**
     * @category Constructor
     */
    fromValue<T>(): Function1<T, ContainerOf<C, T>>;
    /**
     *
     * @category Transform
     */
    last<T>(): Function1<ContainerOf<C, T>, Optional<T>>;
    /**
     * @category Transform
     */
    noneSatisfy<T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean>;
    /**
     * @category Transform
     */
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ContainerOf<C, T>, TAcc>;
    /**
     * @category Operator
     */
    repeat<T>(count: number): ContainerOperator<C, T, T>;
    /**
     * @category Transform
     */
    someSatisfy<T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean>;
    /**
     * @category Operator
     */
    startWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
    /**
     *  Returns a Container that only emits the last `count` items emitted by the source.
     *
     * @category Operator
     */
    takeLast<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
    /** @category Transform */
    toObservable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
    /**
     * Converts the Container to a `ReadonlyArrayContainer`.
     *
     * @category Transform
     */
    toReadonlyArray<T>(): Function1<ContainerOf<C, T>, ReadonlyArray<T>>;
    /**
     * Combines multiple sources to create a Container whose values are calculated from the values,
     * in order, of each of its input sources.
     *
     * @category Constructor
     */
    zip<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [TA, TB]>;
    zip<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    /**
     * @category Operator
     */
    zipWith<TA, TB>(b: ContainerOf<C, TB>): ContainerOperator<C, TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOperator<C, TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface EnumerableTypeClass<C extends Container> extends RunnableTypeClass<C> {
    /**
     *
     * @category Transform
     */
    enumerate<T>(): Function1<ContainerOf<C, T>, EnumeratorLike<T>>;
    toEnumeratorFactory<T>(): Function1<ContainerOf<C, T>, EnumeratorFactoryLike<T>>;
    /**
     * Converts the Container to a `IterableLike`.
     *
     * @category Transform
     */
    toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
    toObservable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface GeneratorTypeClass<C extends Container> extends EnumerableTypeClass<C> {
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): ContainerOf<C, T>;
    throws<T>(options?: {
        readonly raise?: Factory<unknown>;
    }): ContainerOf<C, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface HigherOrderObservableTypeClass<C extends Observable.Type, CInner extends DeferredObservable.Type> {
    /** @category Operator */
    catchError<T>(onError: Function2<Error, ContainerOf<C, T>, ContainerOf<CInner, T>>): ContainerOperator<C, T, T>;
    /**
     * Converts a higher-order Container into a first-order
     * Container by concatenating the inner sources in order.
     *
     * @category Operator
     */
    concatAll<T>(): ContainerOperator<C, ContainerOf<CInner, T>, T>;
    /**
     * @category Operator
     */
    concatMap<TA, TB>(selector: Function1<TA, ContainerOf<CInner, TB>>): ContainerOperator<C, TA, TB>;
    /**
     * @category Operator
     */
    exhaust<T>(): ContainerOperator<C, ContainerOf<CInner, T>, T>;
    /**
     * @category Operator
     */
    exhaustMap<TA, TB>(selector: Function1<TA, ContainerOf<CInner, TB>>): ContainerOperator<C, TA, TB>;
    /**
     * @category Operator
     */
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): ContainerOperator<C, ContainerOf<CInner, T>, T>;
    /**
     * @category Operator
     */
    mergeMap<TA, TB>(selector: Function1<TA, ContainerOf<CInner, TB>>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): ContainerOperator<C, TA, TB>;
    /**
     * @category Operator
     */
    scanLast<T, TAcc>(scanner: Function2<TAcc, T, ContainerOf<CInner, TAcc>>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
    /**
     * @category Operator
     */
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, ContainerOf<CInner, TAcc>>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
    /**
     *
     * @category Operator
     */
    switchAll<T>(): ContainerOperator<C, ContainerOf<CInner, T>, T>;
    /**
     * @category Operator
     */
    switchMap<TA, TB>(selector: Function1<TA, ContainerOf<CInner, TB>>): ContainerOperator<C, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeyedContainerTypeClass<C extends KeyedContainer, TKeyBase extends KeyOf<C> = KeyOf<C>> {
    /**
     * @category Transform
     */
    entries<T, TKey extends TKeyBase>(): Function1<KeyedContainerOf<C, TKey, T>, EnumeratorFactoryLike<[TKey, T]>>;
    /**
     * Returns a ContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T, TKey extends TKeyBase>(effect: SideEffect1<T>): KeyedContainerOperator<C, TKey, T, T>;
    /**
     * Returns a KeyedContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEachWithKey<T, TKey extends TKeyBase>(effect: SideEffect2<T, TKey>): KeyedContainerOperator<C, TKey, T, T>;
    /**
     * @category Transform
     */
    reduce<T, TAcc, TKey extends TKeyBase>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;
    /**
     * @category Transform
     */
    reduceWithKey<T, TAcc, TKey extends TKeyBase>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;
    /**
     *
     * @category Transform
     */
    values<T>(): Function1<KeyedContainerOf<C, any, T>, EnumeratorFactoryLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ConcreteKeyedContainerTypeClass<C extends KeyedContainer, TKeyBase extends KeyOf<C> = KeyOf<C>> extends KeyedContainerTypeClass<C, TKeyBase> {
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T, TKey extends TKeyBase>(predicate: Predicate<T>): KeyedContainerOperator<C, TKey, T, T>;
    /**
     *
     * @category Operator
     */
    keepType<TA, TB extends TA, TKey extends TKeyBase>(predicate: TypePredicate<TA, TB>): KeyedContainerOperator<C, TKey, TA, TB>;
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keepWithKey<T, TKey extends TKeyBase>(predicate: Function2<T, TKey, boolean>): KeyedContainerOperator<C, TKey, T, T>;
    /**
     * Returns a ContainerOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB, TKey extends TKeyBase>(selector: Function1<TA, TB>): KeyedContainerOperator<C, TKey, TA, TB>;
    /**
     * Returns a ContainerOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    mapWithKey<TA, TB, TKey extends TKeyBase>(selector: Function2<TA, TKey, TB>): KeyedContainerOperator<C, TKey, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface AssociativeKeyedContainerTypeClass<C extends KeyedContainer, TKeyBase extends KeyOf<C> = KeyOf<C>> extends KeyedContainerTypeClass<C, TKeyBase> {
    /**
     * @category Constructor
     */
    fromReadonlyMap<T, TKey extends TKeyBase>(): Function1<ReadonlyMap<TKey, T>, KeyedContainerOf<C, TKey, T>>;
    /**
     * @category Constructor
     */
    fromReadonlyObjectMap<T, TKey extends TKeyBase>(): TKey extends KeyOf<ReadonlyObjectMap.Type> ? Function1<ReadonlyObjectMapLike<TKey, T>, KeyedContainerOf<C, TKey, T>> : never;
    /**
     *
     * @category Transform
     */
    keys<TKey extends TKeyBase>(): Function1<KeyedContainerOf<C, TKey, unknown>, EnumeratorFactoryLike<TKey>>;
    /**
     *
     * @category Transform
     */
    keySet<TKey extends TKeyBase>(): Function1<KeyedContainerOf<C, TKey, unknown>, ReadonlySet<TKey>>;
    /**
     *
     * @category Transform
     */
    toDictionary<T, TKey extends TKeyBase>(): Function1<KeyedContainerOf<C, TKey, T>, DictionaryLike<TKey, T>>;
    /**
     *
     * @category Transform
     */
    toReadonlyMap<T, TKey extends TKeyBase>(): Function1<KeyedContainerOf<C, TKey, T>, ReadonlyMap<TKey, T>>;
    /**
     *
     * @category Transform
     */
    toReadonlyObjectMap<T, TKey extends TKeyBase>(): TKey extends KeyOf<ReadonlyObjectMap.Type> ? Function1<KeyedContainerOf<C, TKey, T>, ReadonlyObjectMapLike<TKey, T>> : never;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ConcreteAssociativeKeyedContainerTypeClass<C extends KeyedContainer, TKeyBase extends KeyOf<C> = KeyOf<C>> extends ConcreteKeyedContainerTypeClass<C, TKeyBase>, AssociativeKeyedContainerTypeClass<C, TKeyBase> {
    /**
     * Return an Container that emits no items.
     *
     * @category Constructor
     */
    empty<T, TKey extends NonNullable<C[typeof KeyedContainer_TKey]> = NonNullable<C[typeof KeyedContainer_TKey]>>(): KeyedContainerOf<C, TKey, T>;
    /**
     * @category Constructor
     */
    fromEntries<T, TKey extends TKeyBase>(): Function1<EnumeratorFactoryLike<[TKey, T]>, KeyedContainerOf<C, TKey, T>>;
}
