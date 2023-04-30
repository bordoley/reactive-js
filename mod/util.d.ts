import { __AssociativeCollectionLike_keys as AssociativeCollectionLike_keys, __BufferLike_capacity as BufferLike_capacity, __CollectionLike_count as CollectionLike_count, __DispatcherLike_complete as DispatcherLike_complete, __DisposableLike_add as DisposableLike_add, __DisposableLike_dispose as DisposableLike_dispose, __DisposableLike_error as DisposableLike_error, __DisposableLike_isDisposed as DisposableLike_isDisposed, __EventListenerLike_isErrorSafe as EventListenerLike_isErrorSafe, __EventListenerLike_notify as EventListenerLike_notify, __EventPublisherLike_listenerCount as EventPublisherLike_listenerCount, __EventSourceLike_addEventListener as EventSourceLike_addEventListener, __KeyedCollectionLike_get as KeyedCollectionLike_get, __PauseableLike_isPaused as PauseableLike_isPaused, __PauseableLike_pause as PauseableLike_pause, __PauseableLike_resume as PauseableLike_resume, __QueueableLike_backpressureStrategy as QueueableLike_backpressureStrategy, __QueueableLike_enqueue as QueueableLike_enqueue, __SchedulerLike_inContinuation as SchedulerLike_inContinuation, __SchedulerLike_maxYieldInterval as SchedulerLike_maxYieldInterval, __SchedulerLike_now as SchedulerLike_now, __SchedulerLike_requestYield as SchedulerLike_requestYield, __SchedulerLike_schedule as SchedulerLike_schedule, __SchedulerLike_shouldYield as SchedulerLike_shouldYield, __SchedulerLike_yield as SchedulerLike_yield, __VirtualTimeSchedulerLike_run as VirtualTimeSchedulerLike_run } from "./__internal__/symbols.js";
import { ContainerLike, ContainerLike_T, ContainerLike_type, EnumeratorLike } from "./containers.js";
import { Optional, SideEffect1 } from "./functions.js";
import { KeyedContainerLike, KeyedContainerLike_TKey } from "./keyed-containers.js";
export { AssociativeCollectionLike_keys, BufferLike_capacity, CollectionLike_count, DispatcherLike_complete, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EventListenerLike_isErrorSafe, EventListenerLike_notify, EventPublisherLike_listenerCount, EventSourceLike_addEventListener, KeyedCollectionLike_get, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_backpressureStrategy, QueueableLike_enqueue, SchedulerLike_yield, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, VirtualTimeSchedulerLike_run, };
export type DisposableOrTeardown = DisposableLike | SideEffect1<Optional<Error>>;
/**
 * Represents an unmanaged resource that can be disposed.
 *
 * @noInheritDoc
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
 */
export interface CollectionLike {
    readonly [CollectionLike_count]: number;
}
/**
 * @noInheritDoc
 */
export interface KeyedCollectionLike<TKey = unknown, T = unknown> extends CollectionLike {
    [KeyedCollectionLike_get](index: TKey): T;
}
/**
 * @noInheritDoc
 */
export interface AssociativeCollectionLike<TKey = unknown, T = unknown> extends KeyedCollectionLike<TKey, T> {
    readonly [AssociativeCollectionLike_keys]: EnumeratorLike<TKey>;
}
/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, T = unknown> extends AssociativeCollectionLike<TKey, Optional<T>> {
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface DictionaryContainerLike<T = unknown, TKey = unknown> extends DictionaryLike<T, TKey>, KeyedContainerLike {
    readonly [ContainerLike_type]?: DictionaryLike<this[typeof KeyedContainerLike_TKey], this[typeof ContainerLike_T]>;
    readonly [KeyedContainerLike_TKey]?: unknown;
}
/**
 * @noInheritDoc
 */
export interface IndexedCollectionLike<T = unknown> extends KeyedCollectionLike<number, T> {
}
/**
 * @noInheritDoc
 */
export interface IndexedBufferCollectionLike<T = unknown> extends BufferLike, IndexedCollectionLike<T> {
}
/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
    readonly [EventListenerLike_isErrorSafe]: boolean;
    [EventListenerLike_notify](event: T): void;
}
/**
 * @noInheritDoc
 */
export interface ErrorSafeEventListenerLike<T = unknown> extends EventListenerLike<T> {
    readonly [EventListenerLike_isErrorSafe]: true;
}
/**
 * @noInheritDoc
 */
export interface EventSourceLike<T = unknown> {
    [EventSourceLike_addEventListener](listener: EventListenerLike<T>): void;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface EventSourceContainerLike<T = unknown> extends EventSourceLike<T>, ContainerLike {
    readonly [ContainerLike_type]?: EventSourceLike<this[typeof ContainerLike_T]>;
}
/**
 * @noInheritDoc
 */
export interface EventPublisherLike<T = unknown> extends EventSourceLike<T>, ErrorSafeEventListenerLike<T> {
    readonly [EventPublisherLike_listenerCount]: number;
}
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown, TEvents extends {
    type: "wait" | "drain" | "complete";
} = {
    type: "wait" | "drain" | "complete";
}> extends QueueableLike<T>, EventSourceLike<TEvents> {
    /**
     * Communicates to the dispatcher that no more events will be enqueued.
     */
    [DispatcherLike_complete](): void;
}
/**
 * @noInheritDoc
 */
export interface PauseableLike {
    /**
     * Boolean flag indicating if the PauseableLike is currently paused or not.
     */
    readonly [PauseableLike_isPaused]: boolean;
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
 * @category Scheduler
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
 * @category Scheduler
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {
}
/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 * @category Scheduler
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike, DisposableLike {
    /**
     * Runs the scheduler synchronously until it has no more
     * enqueued continuations, at which time the scheduler will auto dispose.
     */
    [VirtualTimeSchedulerLike_run](): void;
}
