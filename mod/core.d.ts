import { __AssociativeCollectionLike_keys, __BufferLike_capacity, __CollectionLike_count, __Container_T, __Container_type, __DispatcherLikeEvent_capacityExceeded, __DispatcherLikeEvent_completed, __DispatcherLikeEvent_ready, __DispatcherLike_complete, __DisposableLike_add, __DisposableLike_dispose, __DisposableLike_error, __DisposableLike_isDisposed, __EnumeratorLike_current, __EnumeratorLike_hasCurrent, __EnumeratorLike_move, __EventListenerLike_isErrorSafe, __EventListenerLike_notify, __EventPublisherLike_listenerCount, __EventSourceLike_addEventListener, __KeyedCollectionLike_get, __KeyedContainer_TKey, __MulticastObservableLike_buffer, __ObservableLike_isDeferred, __ObservableLike_isEnumerable, __ObservableLike_isRunnable, __ObservableLike_observe, __ObserverLike_notify, __PauseableLike_isPaused, __PauseableLike_pause, __PauseableLike_resume, __PublisherLike_observerCount, __QueueableLike_backpressureStrategy, __QueueableLike_enqueue, __SchedulerLike_inContinuation, __SchedulerLike_maxYieldInterval, __SchedulerLike_now, __SchedulerLike_requestYield, __SchedulerLike_schedule, __SchedulerLike_shouldYield, __SchedulerLike_yield, __StoreLike_value, __StreamLike_scheduler, __StreamableLike_TStream, __StreamableLike_stream, __VirtualTimeSchedulerLike_run } from "./__internal__/symbols.js";
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
export declare const MulticastObservableLike_buffer: typeof __MulticastObservableLike_buffer;
export declare const ObservableLike_isDeferred: typeof __ObservableLike_isDeferred;
export declare const ObservableLike_isEnumerable: typeof __ObservableLike_isEnumerable;
export declare const ObservableLike_isRunnable: typeof __ObservableLike_isRunnable;
export declare const ObservableLike_observe: typeof __ObservableLike_observe;
export declare const ObserverLike_notify: typeof __ObserverLike_notify;
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
export declare const EventListenerLike_notify: typeof __EventListenerLike_notify;
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
export declare const StoreLike_value: typeof __StoreLike_value;
export declare const VirtualTimeSchedulerLike_run: typeof __VirtualTimeSchedulerLike_run;
/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface Container {
    readonly [Container_T]?: unknown;
    readonly [Container_type]?: unknown;
}
/**
 * A compile time only type for using a Javascript `Iterable` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface IterableContainer extends Container {
    readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}
/**
 * A compile time only type for using a Javascript `AsyncIterable` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
/**
 * A compile time only type for using a Javascript `PromiseLike` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends Container {
    readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
}
/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @category Interactive
 */
export interface EnumeratorLike<T = unknown> {
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
 * @category Container
 */
export interface EnumeratorContainer extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
}
/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category KeyedContainers
 */
export interface KeyedContainers extends Container {
    readonly [KeyedContainer_TKey]?: unknown;
}
/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `Container`.
 *
 * @noInheritDoc
 * @category KeyedContainers
 */
export interface ReadonlyArrayContainer extends KeyedContainers {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: number;
}
/**
 * @noInheritDoc
 * @category KeyedContainers
 */
export interface ReadonlyMapContainer extends Container {
    readonly [Container_type]?: ReadonlyMap<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: unknown;
}
/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<TKey extends symbol | number | string = string, T = unknown> = {
    readonly [P in TKey]?: T;
};
/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `Container`.
 *
 * @noInheritDoc
 * @category KeyedContainers
 */
export interface ReadonlyObjectMapContainer extends Container {
    readonly [Container_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof KeyedContainer_TKey]>, this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: symbol | number | string;
}
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
    readonly [AssociativeCollectionLike_keys]: EnumeratorLike<TKey>;
}
/**
 * @noInheritDoc
 * @category Collection
 */
export interface DictionaryLike<TKey = unknown, T = unknown> extends AssociativeCollectionLike<TKey, Optional<T>> {
}
/**
 * @noInheritDoc
 * @category KeyedContainers
 */
export interface DictionaryContainer extends KeyedContainers {
    readonly [Container_type]?: DictionaryLike<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: unknown;
}
/**
 * @noInheritDoc
 * @category Collection
 */
export interface IndexedCollectionLike<T = unknown> extends KeyedCollectionLike<number, T> {
}
export type DisposableOrTeardown = DisposableLike | SideEffect1<Optional<Error>>;
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
     * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     * @param ignoreChildErrors - Indicates that the parent should not auto dispose if the child disposed with an error.
     */
    [DisposableLike_add](disposable: DisposableOrTeardown): void;
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
 * @category Event
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
    readonly [EventListenerLike_isErrorSafe]: boolean;
    [EventListenerLike_notify](event: T): void;
}
/**
 * @noInheritDoc
 * @category Event
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
 * @category Container
 */
export interface EventSourceContainer extends Container {
    readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
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
export interface ObserverLike<T = unknown> extends DispatcherLike<T>, DisposableLike, SchedulerLike {
    /**
     * Notifies the the observer of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the observer's `schedule` method.
     *
     * @param next - The next notification value.
     */
    [ObserverLike_notify](next: T): void;
}
/**
 * The source of notifications which can be consumed by an `ObserverLike` instance.
 *
 * @noInheritDoc
 * @category Reactive
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
 * @category Container
 */
export interface ObservableContainer extends Container {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}
/**
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Reactive
 */
export interface DeferredObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isDeferred]: true;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface DeferredObservableContainer extends ObservableContainer {
    readonly [Container_type]?: DeferredObservableLike<this[typeof Container_T]>;
}
/**
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Reactive
 */
export interface RunnableLike<T = unknown> extends DeferredObservableLike<T> {
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends DeferredObservableContainer {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
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
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableContainer extends RunnableContainer {
    readonly [Container_type]?: EnumerableLike<this[typeof Container_T]>;
}
/**
 * A stateful ObservableLike resource.
 *
 * @noInheritDoc
 * @category Reactive
 */
export interface MulticastObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
    readonly [MulticastObservableLike_buffer]: IndexedBufferCollectionLike<T>;
}
/**
 * An `EventListener` that can be used to publish notifications to one or more observers.
 *
 * @noInheritDoc
 * @category Reactive
 */
export interface PublisherLike<T = unknown> extends ErrorSafeEventListenerLike<T>, MulticastObservableLike<T> {
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
 * @category Reactive
 */
export interface PauseableObservableLike<T = unknown> extends ObservableLike<T>, PauseableLike {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface PauseableObservableContainer extends ObservableContainer {
    readonly [Container_type]?: PauseableObservableLike<this[typeof Container_T]>;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 * @category Interactive
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
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
export type StreamOf<TStreamable extends StreamableLike> = NonNullable<TStreamable[typeof StreamableLike_TStream]>;
export declare namespace Containers {
    /**
     * Utility type for higher order programming with Containers.
     */
    type Of<C extends Container, T> = C extends {
        readonly [Container_type]?: unknown;
    } ? NonNullable<(C & {
        readonly [Container_T]: T;
    })[typeof Container_type]> : {
        readonly _C: C;
        readonly _T: () => T;
    };
    /**
     * Utility type for a generic operator function that transforms a Container's inner value type.
     */
    type Operator<C extends Container, TA, TB> = Function1<Containers.Of<C, TA>, Containers.Of<C, TB>>;
    /**
     * @noInheritDoc
  
     */
    interface TypeClass<C extends Container> {
        /**
         * Returns a Container which buffers items produced by the source until the
         * number of items reaches the specified maximum buffer size.
         *
         * @category Operator
         */
        buffer: <T>(options?: {
            readonly count?: number;
        }) => Containers.Operator<C, T, readonly T[]>;
        /**
         * Returns a Containers.Operator that emits all items emitted by the source that
         * are distinct by comparison from the previous item.
         *
         * @category Operator
         */
        distinctUntilChanged<T>(options?: {
            readonly equality?: Equality<T>;
        }): Containers.Operator<C, T, T>;
        /**
         * Return an Container that emits no items.
         *
         * @category Constructor
         */
        empty<T>(): Containers.Of<C, T>;
        /**
         *
         * @category Transform
         */
        firstAsync<T>(): Function1<Containers.Of<C, T>, PromiseLike<Optional<T>>>;
        /**
         * @category Operator
         */
        flatMapIterable: <TA, TB>(selector: Function1<TA, Iterable<TB>>) => Containers.Operator<C, TA, TB>;
        /**
         * Returns a Containers.Operator that applies the side effect function to each
         * value emitted by the source.
         *
         * @category Operator
         */
        forEach<T>(effect: SideEffect1<T>): Containers.Operator<C, T, T>;
        /**
         * @category Operator
         */
        forkZip<T, TA, TB>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>): Containers.Operator<C, T, readonly [TA, TB]>;
        forkZip<T, TA, TB, TC>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>): Containers.Operator<C, T, readonly [TA, TB, TC]>;
        forkZip<T, TA, TB, TC, TD>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>): Containers.Operator<C, T, readonly [TA, TB, TC, TD]>;
        forkZip<T, TA, TB, TC, TD, TE>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
        forkZip<T, TA, TB, TC, TD, TE, TF>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
        forkZip<T, TA, TB, TC, TD, TE, TF, TG>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>, h: Containers.Operator<C, T, TH>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>, h: Containers.Operator<C, T, TH>, i: Containers.Operator<C, T, TI>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
        /**
         * @category Constructor
         */
        fromEnumerable<T>(): Function1<EnumerableLike<T>, Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>): Containers.Of<C, T>;
        /**
         * @category Constructor
         */
        fromFactory<T>(factory: Factory<T>): Containers.Of<C, T>;
        /**
         * @category Constructor
         */
        fromIterable<T>(): Function1<Iterable<T>, Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        fromOptional<T>(): Function1<Optional<T>, Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        fromReadonlyArray<T>(options?: {
            readonly start?: number;
            readonly count?: number;
        }): Function1<readonly T[], Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        fromRunnable: <T>() => Function1<RunnableLike<T>, Containers.Of<C, T>>;
        /**
         * Generates a Container from a generator function
         * that is applied to an accumulator value between emitted items.
         *
         * @param generator - The generator function.
         * @param initialValue - Factory function used to generate the initial accumulator.
         *
         * @category Constructor
         */
        generate<T>(generator: Updater<T>, initialValue: Factory<T>): Containers.Of<C, T>;
        /**
         * @category Operator
         */
        identity<T>(): Containers.Operator<C, T, T>;
        /**
         * @category Operator
         */
        ignoreElements<T>(): Containers.Operator<C, unknown, T>;
        /**
         * Returns a Containers.Operator that only emits items produced by the
         * source that satisfy the specified predicate.
         *
         * @category Operator
         */
        keep<T>(predicate: Predicate<T>): Containers.Operator<C, T, T>;
        /**
         *
         * @category Operator
         */
        keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): Containers.Operator<C, TA, TB>;
        /**
         *
         * @category Transform
         */
        lastAsync<T>(): Function1<Containers.Of<C, T>, PromiseLike<Optional<T>>>;
        /**
         * Returns a Containers.Operator that applies the `selector` function to each
         * value emitted by the source.
         *
         * @param selector - A pure map function that is applied each value emitted by the source
         * @typeparam TA - The inner type of the source container
         * @typeparam TB - The inner type of the mapped container
         *
         * @category Operator
         */
        map<TA, TB>(selector: Function1<TA, TB>): Containers.Operator<C, TA, TB>;
        /**
         * @category Operator
         */
        mapTo<TA, TB>(value: TB): Containers.Operator<C, TA, TB>;
        /**
         * @category Operator
         */
        pairwise<T>(): Containers.Operator<C, T, readonly [T, T]>;
        /**
         * @category Operator
         */
        pick<T, TKey extends keyof T>(key: TKey): Containers.Operator<C, T, T[TKey]>;
        pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): Containers.Operator<C, T, T[TKeyA][TKeyB]>;
        pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): Containers.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;
        /**
         * Returns a Container that applies an accumulator function over the source,
         * and emits each intermediate result.
         *
         * @param scanner - The accumulator function called on each source value.
         * @param initialValue - The initial accumulation value.
         *
         * @category Operator
         */
        scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Containers.Operator<C, T, TAcc>;
        /**
         * @category Operator
         */
        scanLast: <T, TAcc>(scanner: Function2<TAcc, T, Containers.Of<C, TAcc>>, initialValue: Factory<TAcc>) => Containers.Operator<C, T, TAcc>;
        /**
         * Returns a Container that skips the first count items emitted by the source.
         *
         * @category Operator
         */
        skipFirst<T>(options?: {
            readonly count?: number;
        }): Containers.Operator<C, T, T>;
        /**
         * Returns a Container that only emits the first `count` values emitted by the source.
         *
         * @category Operator
         */
        takeFirst<T>(options?: {
            readonly count?: number;
        }): Containers.Operator<C, T, T>;
        /**
         *  Returns a Container that only emits the last `count` items emitted by the source.
         *
         * @category Operator
         */
        takeLast<T>(options?: {
            readonly count?: number;
        }): Containers.Operator<C, T, T>;
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
        }): Containers.Operator<C, T, T>;
        /**
         * @category Transform
         */
        toObservable: <T>() => Function1<Containers.Of<C, T>, ObservableLike<T>>;
        /**
         * Combines multiple sources to create a Container whose values are calculated from the values,
         * in order, of each of its input sources.
         *
         * @category Constructor
         */
        zip<TA, TB>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>): Containers.Of<C, readonly [TA, TB]>;
        zip<TA, TB, TC>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>): Containers.Of<C, readonly [TA, TB, TC]>;
        zip<TA, TB, TC, TD>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>): Containers.Of<C, readonly [TA, TB, TC, TD]>;
        zip<TA, TB, TC, TD, TE>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>): Containers.Of<C, readonly [TA, TB, TC, TD, TE]>;
        zip<TA, TB, TC, TD, TE, TF>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
        zip<TA, TB, TC, TD, TE, TF, TG>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>, i: Containers.Of<C, TI>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
        /**
         * @category Operator
         */
        zipWith<TA, TB>(b: Containers.Of<C, TB>): Containers.Operator<C, TA, readonly [TA, TB]>;
        zipWith<TA, TB, TC>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>): Containers.Operator<C, TA, readonly [TA, TB, TC]>;
        zipWith<TA, TB, TC, TD>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>): Containers.Operator<C, TA, readonly [TA, TB, TC, TD]>;
        zipWith<TA, TB, TC, TD, TE>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>): Containers.Operator<C, TA, readonly [TA, TB, TC, TD, TE]>;
        zipWith<TA, TB, TC, TD, TE, TF>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>): Containers.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
        zipWith<TA, TB, TC, TD, TE, TF, TG>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>): Containers.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>): Containers.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>, i: Containers.Of<C, TI>): Containers.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
}
export declare namespace AsynchronousContainers {
    interface TypeClass<C extends Container> {
        /**
         * @category Constructor
         */
        fromAsyncIterable<T>(): Function1<AsyncIterable<T>, Containers.Of<C, T>>;
    }
}
export declare namespace DeferredContainers {
    interface TypeClass<C extends Container> {
        /**
         * Returns a Container which emits all values from each source sequentially.
         *
         * @category Constructor
         */
        concat<T>(fst: Containers.Of<C, T>, snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]): Containers.Of<C, T>;
        /**
         * Converts a higher-order Container into a first-order
         * Container by concatenating the inner sources in order.
         *
         * @category Operator
         */
        concatAll: <T>() => Containers.Operator<C, Containers.Of<C, T>, T>;
        /**
         * @category Operator
         */
        concatMap: <TA, TB>(selector: Function1<TA, Containers.Of<C, TB>>) => Containers.Operator<C, TA, TB>;
        /**
         * @category Operator
         */
        concatWith: <T>(snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]) => Containers.Operator<C, T, T>;
        /**
         * @category Operator
         */
        endWith<T>(value: T, ...values: readonly T[]): Containers.Operator<C, T, T>;
        /**
         * @category Transform
         */
        flow<T>(scheduler: SchedulerLike, options?: {
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<Containers.Of<C, T>, PauseableObservableLike<T> & DisposableLike>;
        /**
         * @category Operator
         */
        forkConcat<TIn, TOut>(fst: Containers.Operator<C, TIn, TOut>, snd: Containers.Operator<C, TIn, TOut>, ...tail: readonly Containers.Operator<C, TIn, TOut>[]): Containers.Operator<C, TIn, TOut>;
        /**
         * Returns a Container that mirrors the source, repeating it whenever the predicate returns true.
         *
         * @param predicate
         *
         * @category Operator
         */
        repeat<T>(predicate: Predicate<number>): Containers.Operator<C, T, T>;
        /**
         * Returns a Container that mirrors the source, repeating it `count` times.
         *
         * @param count
         *
         * @category Operator
         */
        repeat<T>(count: number): Containers.Operator<C, T, T>;
        /**
         * Returns a Container that mirrors the source, continually repeating it.
         *
         * @category Operator
         */
        repeat<T>(): Containers.Operator<C, T, T>;
        /**
         * @category Operator
         */
        startWith<T>(value: T, ...values: readonly T[]): Containers.Operator<C, T, T>;
    }
}
export declare namespace RunnableContainers {
    interface TypeClass<C extends Container> {
        /**
         * @category Transform
         */
        contains: <T>(value: T, options?: {
            readonly equality?: Equality<T>;
        }) => Function1<Containers.Of<C, T>, boolean>;
        /**
         * Determines whether all the members of an Container satisfy the predicate.
         * The predicate function is invoked for each element in the Container until the
         * it returns false, or until the end of the Containers.
         *
         * @param predicate
         * @category Transform
         */
        everySatisfy<T>(predicate: Predicate<T>): Function1<Containers.Of<C, T>, boolean>;
        /**
         *
         * @category Transform
         */
        first<T>(): Function1<Containers.Of<C, T>, Optional<T>>;
        /**
         *
         * @category Transform
         */
        last<T>(): Function1<Containers.Of<C, T>, Optional<T>>;
        /**
         * @category Transform
         */
        noneSatisfy<T>(predicate: Predicate<T>): Function1<Containers.Of<C, T>, boolean>;
        /**
         * @category Transform
         */
        reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<Containers.Of<C, T>, TAcc>;
        /**
         * @category Transform
         */
        someSatisfy<T>(predicate: Predicate<T>): Function1<Containers.Of<C, T>, boolean>;
        /**
         * Converts the Container to a `ReadonlyArrayContainer`.
         *
         * @category Transform
         */
        toReadonlyArray<T>(): Function1<Containers.Of<C, T>, ReadonlyArray<T>>;
        /**
         * @category Transform
         */
        toRunnable: <T>() => Function1<Containers.Of<C, T>, RunnableLike<T>>;
    }
}
export declare namespace StatefulContainers {
    interface TypeClass<C extends Container> {
        /**
         * Returns a Container which catches errors produced by the source and either continues with
         * the Container returned from the `onError` callback or swallows the error if
         * void is returned.
         *
         * @param onError - A function that takes source error and either returns a Container
         * to continue with or void if the error should be propagated.
         *
         * @category Operator
         */
        catchError<T>(onError: Function1<unknown, Containers.Of<C, T> | void>): Containers.Operator<C, T, T>;
        /**
         * @category Operator
         */
        decodeWithCharset(options?: {
            charset?: string;
        }): Containers.Operator<C, ArrayBuffer, string>;
        /**
         * @category Constructor
         */
        defer<T>(factory: Factory<Containers.Of<C, T>>): Containers.Of<C, T>;
        /**
         * @category Operator
         */
        encodeUtf8(): Containers.Operator<C, string, Uint8Array>;
        /**
         * Returns an `ObservableLike` that mirrors the source, re-subscribing
         * if the source completes with an error.
         *
         * @category Operator
         */
        retry<T>(): Containers.Operator<C, T, T>;
        /**
         * Returns an `ObservableLike` that mirrors the source, resubscrbing
         * if the source completes with an error which satisfies the predicate function.
         *
         * @param predicate
         *
         * @category Operator
         */
        retry<T>(predicate: Function2<number, unknown, boolean>): Containers.Operator<C, T, T>;
        /**
         * Returns a Container that emits an error if the source completes without emitting a value.
         *
         * @param factory - A factory function invoked to produce the error to be thrown.
         *
         * @category Operator
         */
        throwIfEmpty<T>(factory: Factory<unknown>): Containers.Operator<C, T, T>;
        /**
         * @category Constructor
         */
        throws<T>(options?: {
            raise?: Factory<unknown>;
        }): Containers.Of<C, T>;
    }
}
export declare namespace EnumerableContainers {
    interface TypeClass<C extends Container, CEnumerator extends EnumeratorContainer = EnumeratorContainer> {
        /**
         *
         * @category Transform
         */
        enumerate<T>(): Function1<Containers.Of<C, T>, Containers.Of<CEnumerator, T>>;
        /**
         * @category Transform
         */
        toEnumerable<T>(): Function1<Containers.Of<C, T>, EnumerableLike<T>>;
        /**
         * Converts the Container to a `IterableLike`.
         *
         * @category Transform
         */
        toIterable<T>(): Function1<Containers.Of<C, T>, Iterable<T>>;
    }
}
export declare namespace KeyedContainers {
    type Of<C extends Container, TKey, T> = C extends {
        readonly [Container_type]?: unknown;
    } ? NonNullable<(C & {
        readonly [Container_T]: T;
        readonly [KeyedContainer_TKey]: TKey;
    })[typeof Container_type]> : {
        readonly _C: C;
        readonly _T: () => T;
        readonly _TKey: () => TKey;
    };
    type KeyOf<C extends KeyedContainers> = C extends {
        readonly [Container_type]?: unknown;
    } ? NonNullable<C[typeof KeyedContainer_TKey]> : {};
    /**
     * Utility type for a generic operator function that transforms a Container's inner value type.
     */
    type Operator<C extends KeyedContainers, TKey, TA, TB> = Function1<KeyedContainers.Of<C, TKey, TA>, KeyedContainers.Of<C, TKey, TB>>;
    /**
     * @noInheritDoc
  
     */
    interface TypeClass<C extends KeyedContainers> {
        /**
         * Return an Container that emits no items.
         *
         * @category Constructor
         */
        empty<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): KeyedContainers.Of<C, TKey, T>;
        /**
         *
         * @category Transform
         */
        entries<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): Function1<KeyedContainers.Of<C, TKey, T>, EnumeratorLike<[TKey, T]>>;
        /**
         * Returns a Containers.Operator that applies the side effect function to each
         * value emitted by the source.
         *
         * @category Operator
         */
        forEach<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(effect: SideEffect1<T>): KeyedContainers.Operator<C, TKey, T, T>;
        /**
         * Returns a KeyedContainers.Operator that applies the side effect function to each
         * value emitted by the source.
         *
         * @category Operator
         */
        forEachWithKey<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(effect: SideEffect2<T, TKey>): KeyedContainers.Operator<C, TKey, T, T>;
        /**
         * @category Constructor
         */
        fromEntries<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): Function1<EnumeratorLike<[TKey, T]>, KeyedContainers.Of<C, TKey, T>>;
        /**
         * @category Constructor
         */
        fromReadonlyArray<T, TKey extends KeyedContainers.KeyOf<ReadonlyArrayContainer> = KeyedContainers.KeyOf<ReadonlyArrayContainer>>(options?: {
            readonly start?: number;
            readonly count?: number;
        }): Function1<readonly T[], KeyedContainers.Of<C, TKey, T>>;
        /**
         * @category Operator
         */
        identity<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): KeyedContainers.Operator<C, TKey, T, T>;
        /**
         * Returns a Containers.Operator that only emits items produced by the
         * source that satisfy the specified predicate.
         *
         * @category Operator
         */
        keep<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(predicate: Predicate<T>): KeyedContainers.Operator<C, TKey, T, T>;
        /**
         *
         * @category Operator
         */
        keepType<TA, TB extends TA, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(predicate: TypePredicate<TA, TB>): KeyedContainers.Operator<C, TKey, TA, TB>;
        /**
         * Returns a Containers.Operator that only emits items produced by the
         * source that satisfy the specified predicate.
         *
         * @category Operator
         */
        keepWithKey<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(predicate: Function2<T, TKey, boolean>): KeyedContainers.Operator<C, TKey, T, T>;
        /**
         *
         * @category Transform
         */
        keys<TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): Function1<KeyedContainers.Of<C, TKey, unknown>, EnumeratorLike<TKey>>;
        /**
         *
         * @category Transform
         */
        keySet<TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): Function1<KeyedContainers.Of<C, TKey, unknown>, ReadonlySet<TKey>>;
        /**
         * Returns a Containers.Operator that applies the `selector` function to each
         * value emitted by the source.
         *
         * @param selector - A pure map function that is applied each value emitted by the source
         * @typeparam TA - The inner type of the source container
         * @typeparam TB - The inner type of the mapped container
         *
         * @category Operator
         */
        map<TA, TB, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(selector: Function1<TA, TB>): KeyedContainers.Operator<C, TKey, TA, TB>;
        /**
         * Returns a Containers.Operator that applies the `selector` function to each
         * value emitted by the source.
         *
         * @param selector - A pure map function that is applied each value emitted by the source
         * @typeparam TA - The inner type of the source container
         * @typeparam TB - The inner type of the mapped container
         *
         * @category Operator
         */
        mapWithKey<TA, TB, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(selector: Function2<TA, TKey, TB>): KeyedContainers.Operator<C, TKey, TA, TB>;
        /**
         * @category Transform
         */
        reduce<T, TAcc, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainers.Of<C, TKey, T>, TAcc>;
        /**
         * @category Transform
         */
        reduceWithKey<T, TAcc, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainers.Of<C, TKey, T>, TAcc>;
        /**
         * Converts the Container to a `ReadonlyArrayContainer`.
         *
         * @category Transform
         */
        toReadonlyArray<T, TKey extends KeyedContainers.KeyOf<C> = KeyedContainers.KeyOf<C>>(): Function1<KeyedContainers.Of<C, TKey, T>, ReadonlyArray<T>>;
        /**
         *
         * @category Transform
         */
        values<T>(): Function1<KeyedContainers.Of<C, any, T>, EnumeratorLike<T>>;
    }
}
export declare namespace ReactiveContainers {
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface DelayAnimationConfig {
        readonly type: "delay";
        readonly duration: number;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface KeyFrameAnimationConfig {
        readonly type: "keyframe";
        readonly from: number;
        readonly to: number;
        readonly duration: number;
        readonly easing?: Function1<number, number>;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface FrameAnimationConfig {
        readonly type: "frame";
        readonly value: number;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface LoopAnimationConfig<T> {
        readonly type: "loop";
        readonly animation: AnimationConfig<T> | readonly AnimationConfig<T>[];
        readonly count?: number;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface SpringAnimationConfig {
        readonly type: "spring";
        readonly from: number;
        readonly to: number;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }
    type AnimationConfig<T = number> = DelayAnimationConfig | LoopAnimationConfig<T> | (T extends number ? (KeyFrameAnimationConfig | SpringAnimationConfig | FrameAnimationConfig) & {
        readonly selector?: never;
    } : (KeyFrameAnimationConfig | SpringAnimationConfig | FrameAnimationConfig) & {
        readonly selector: Function1<number, T>;
    });
    /**
     * @noInheritDoc
     */
    interface TypeClass<C extends ObservableContainer> {
        /**
         * @category Constructor
         */
        animate<T = number>(configs: AnimationConfig<T> | readonly AnimationConfig<T>[]): Containers.Of<C, T>;
        /**
         * @category Operator
         */
        backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): Containers.Operator<C, T, T>;
        /**
         * @category Constructor
         */
        combineLatest<TA, TB>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>): Containers.Of<C, readonly [TA, TB]>;
        combineLatest<TA, TB, TC>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>): Containers.Of<C, readonly [TA, TB, TC]>;
        combineLatest<TA, TB, TC, TD>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>): Containers.Of<C, readonly [TA, TB, TC, TD]>;
        combineLatest<TA, TB, TC, TD, TE>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>): Containers.Of<C, readonly [TA, TB, TC, TD, TE]>;
        combineLatest<TA, TB, TC, TD, TE, TF>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
        combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>, i: Containers.Of<C, TI>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
        /**
         * @category Constructor
         */
        currentTime(options?: {
            readonly delay?: number;
            readonly delayStart?: boolean;
        }): Containers.Of<C, number>;
        /**
         *
         * @category Operator
         */
        dispatchTo<T>(dispatcher: DispatcherLike<T>): Containers.Operator<C, T, T>;
        /**
         * @category Constructor
         */
        empty<T>(options?: {
            delay?: number;
        }): Containers.Of<C, T>;
        /**
         *
         * @category Operator
         */
        enqueue<T>(queue: QueueableLike<T>): Containers.Operator<C, T, T>;
        /**
         *
         * @category Operator
         */
        exhaust: <T>() => Containers.Operator<C, Containers.Of<C, T>, T>;
        /**
         * @category Operator
         */
        exhaustMap: <TA, TB>(selector: Function1<TA, Containers.Of<C, TB>>) => Containers.Operator<C, TA, TB>;
        /**
         *
         * @category Transform
         */
        firstAsync<T>(scheduler: SchedulerLike, options?: {
            capacity?: number;
            backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<Containers.Of<C, T>, PromiseLike<Optional<T>>>;
        /**
         * @category Operator
         */
        forkCombineLatest<T, TA, TB>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>): Containers.Operator<C, T, readonly [TA, TB]>;
        forkCombineLatest<T, TA, TB, TC>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>): Containers.Operator<C, T, readonly [TA, TB, TC]>;
        forkCombineLatest<T, TA, TB, TC, TD>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>): Containers.Operator<C, T, readonly [TA, TB, TC, TD]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>, h: Containers.Operator<C, T, TH>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>, h: Containers.Operator<C, T, TH>, i: Containers.Operator<C, T, TI>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
        /**
         * @category Operator
         */
        forkMerge<TIn, TOut>(fst: Containers.Operator<C, TIn, TOut>, snd: Containers.Operator<C, TIn, TOut>, ...tail: readonly Containers.Operator<C, TIn, TOut>[]): Containers.Operator<C, TIn, TOut>;
        /**
         * @category Operator
         */
        forkZipLatest<T, TA, TB>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>): Containers.Operator<C, T, readonly [TA, TB]>;
        forkZipLatest<T, TA, TB, TC>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>): Containers.Operator<C, T, readonly [TA, TB, TC]>;
        forkZipLatest<T, TA, TB, TC, TD>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>): Containers.Operator<C, T, readonly [TA, TB, TC, TD]>;
        forkZipLatest<T, TA, TB, TC, TD, TE>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>, h: Containers.Operator<C, T, TH>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Operator<C, T, TA>, b: Containers.Operator<C, T, TB>, c: Containers.Operator<C, T, TC>, d: Containers.Operator<C, T, TD>, e: Containers.Operator<C, T, TE>, f: Containers.Operator<C, T, TF>, g: Containers.Operator<C, T, TG>, h: Containers.Operator<C, T, TH>, i: Containers.Operator<C, T, TI>): Containers.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
        /**
         * @category Constructor
         */
        fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
            readonly delay?: number;
            readonly delayStart?: boolean;
        }): Containers.Of<C, T>;
        /**
         * @category Constructor
         */
        fromFactory<T>(factory: Factory<T>, options?: {
            readonly delay?: number;
        }): Containers.Of<C, T>;
        /**
         * @category Constructor
         */
        fromIterable<T>(options?: {
            readonly delay?: number;
            readonly delayStart?: boolean;
        }): Function1<Iterable<T>, Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        fromOptional<T>(options?: {
            readonly delay?: number;
        }): Function1<Optional<T>, Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        fromReadonlyArray<T>(options?: {
            readonly count?: number;
            readonly delay?: number;
            readonly delayStart?: boolean;
            readonly start?: number;
        }): Function1<readonly T[], Containers.Of<C, T>>;
        /**
         * @category Constructor
         */
        generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
            readonly delay?: number;
            readonly delayStart?: boolean;
        }): Containers.Of<C, T>;
        /**
         *
         * @category Transform
         */
        lastAsync<T>(scheduler: SchedulerLike, options?: {
            capacity?: number;
            backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<Containers.Of<C, T>, PromiseLike<Optional<T>>>;
        /**
         *
         * @category Constructor
         */
        merge<T>(fst: Containers.Of<C, T>, snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]): Containers.Of<C, T>;
        /**
         *
         * @category Operator
         */
        mergeAll: <T>(options?: {
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            readonly capacity?: number;
            readonly concurrency?: number;
        }) => Containers.Operator<C, Containers.Of<C, T>, T>;
        /**
         * @category Operator
         */
        mergeMap: <TA, TB>(selector: Function1<TA, Containers.Of<C, TB>>, options?: {
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            readonly capacity?: number;
            readonly concurrency?: number;
        }) => Containers.Operator<C, TA, TB>;
        /**
         * @category Operator
         */
        mergeWith: <T>(snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]) => Containers.Operator<C, T, T>;
        /**
         * Returns a `MulticastObservableLike` backed by a single subscription to the source.
         *
         * @param scheduler - A `SchedulerLike` that is used to subscribe to the source observable.
         *
         * @category Transform
         */
        multicast<T>(scheduler: SchedulerLike, options?: {
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
        }): Function1<Containers.Of<C, T>, MulticastObservableLike<T> & DisposableLike>;
        /**
         * Returns a Container instance that emits no items and never disposes its state.
         *
         * @category Constructor
         */
        never<T>(): Containers.Of<C, T>;
        /**
         * @category Operator
         */
        scanMany: <T, TAcc>(scanner: Function2<TAcc, T, Containers.Of<C, TAcc>>, initialValue: Factory<TAcc>) => Containers.Operator<C, T, TAcc>;
        /**
         * Returns an `ObservableLike` backed by a shared refcounted subscription to the
         * source. When the refcount goes to 0, the underlying subscription
         * to the source is disposed.
         *
         * @param scheduler - A `SchedulerLike` that is used to subscribe to the source.
         *
         * @category Transform
         */
        share<T>(scheduler: SchedulerLike, options?: {
            readonly replay?: number;
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<Containers.Of<C, T>, ObservableLike<T>>;
        /**
         *
         * @category Operator
         */
        switchAll: <T>() => Containers.Operator<C, Containers.Of<C, T>, T>;
        /**
         * @category Operator
         */
        switchMap: <TA, TB>(selector: Function1<TA, Containers.Of<C, TB>>) => Containers.Operator<C, TA, TB>;
        /**
         * @category Operator
         */
        takeUntil<T>(notifier: Containers.Of<C, unknown>): Containers.Operator<C, T, T>;
        /**
         * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
         *
         * @param duration - Function function that is used to determine the silence duration in between emitted values.
         * @param mode - The throttle mode.
         *
         * @category Operator
         */
        throttle<T>(duration: Function1<T, Containers.Of<C, unknown>>, options?: {
            readonly mode?: "first" | "last" | "interval";
        }): Containers.Operator<C, T, T>;
        /**
         * Returns an `ObservableLike` which emits a value from the source,
         * then ignores subsequent source values for `duration` milliseconds.
         *
         * @param duration - Time to wait before emitting another value after
         * emitting the last value, measured in milliseconds.
         * @param mode - The throttle mode.
         *
         * @category Operator
         */
        throttle<T>(duration: number, options?: {
            readonly mode?: "first" | "last" | "interval";
        }): Containers.Operator<C, T, T>;
        /**
         * Returns an `ObservableLike` that completes with an error if the source
         * does not emit a value in given time span.
         *
         * @param duration - Time in ms within which the source must emit values.
         *
         * @category Operator
         */
        timeout<T>(duration: number): Containers.Operator<C, T, T>;
        /**
         *
         * @param duration
         *
         * @category Operator
         */
        timeout<T>(duration: Containers.Of<C, unknown>): Containers.Operator<C, T, T>;
        /**
         * @category Operator
         */
        withCurrentTime<T, TOut>(selector: Function2<number, T, TOut>): Containers.Operator<C, T, TOut>;
        /**
         * @category Operator
         */
        withLatestFrom<TA, TB, T>(other: Containers.Of<C, TB>, selector: Function2<TA, TB, T>): Containers.Operator<C, TA, T>;
        /**
         * Returns a container that zips the latest values from
         * multiple sources.
         *
         * @category Constructor
         */
        zipLatest<TA, TB>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>): Containers.Of<C, readonly [TA, TB]>;
        zipLatest<TA, TB, TC>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>): Containers.Of<C, readonly [TA, TB, TC]>;
        zipLatest<TA, TB, TC, TD>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>): Containers.Of<C, readonly [TA, TB, TC, TD]>;
        zipLatest<TA, TB, TC, TD, TE>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>): Containers.Of<C, readonly [TA, TB, TC, TD, TE]>;
        zipLatest<TA, TB, TC, TD, TE, TF>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
        zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>, c: Containers.Of<C, TC>, d: Containers.Of<C, TD>, e: Containers.Of<C, TE>, f: Containers.Of<C, TF>, g: Containers.Of<C, TG>, h: Containers.Of<C, TH>, i: Containers.Of<C, TI>): Containers.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
        /**
         * @category Operator
         */
        zipWithLatestFrom<TA, TB, T>(other: Containers.Of<C, TB>, selector: Function2<TA, TB, T>): Containers.Operator<C, TA, T>;
    }
}
