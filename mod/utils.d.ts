import { Error } from "./__internal__/constants.js";
import type { StoreLike } from "./computations.js";
import { Method1, Optional, SideEffect1 } from "./functions.js";
export declare const DisposableContainerLike_add: unique symbol;
export interface DisposableContainerLike {
    /**
     * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     */
    [DisposableContainerLike_add](disposable: Disposable): void;
    /**
     * Adds the given teardown function to this container or disposes it if the container has been disposed.
     *
     * @param teardown - The teardown function to add.
     */
    [DisposableContainerLike_add](teardown: SideEffect1<Optional<Error>>): void;
    /**
     * Adds the given teardown function to this container or disposes it if the container has been disposed.
     *
     * @param teardown - The teardown function to add.
     */
    [DisposableContainerLike_add](teardown: Method1<DisposableLike, Optional<Error>>): void;
}
export declare const DisposableLike_dispose: typeof Symbol.dispose;
export declare const DisposableLike_error: unique symbol;
export declare const DisposableLike_isDisposed: unique symbol;
/**
 * @noInheritDoc
 */
export interface DisposableLike extends DisposableContainerLike, Disposable {
    /**
     * The error the `Disposable` was disposed with if disposed.
     */
    readonly [DisposableLike_error]: Optional<Error>;
    /**
     * `true` if this resource has been disposed, otherwise false
     */
    readonly [DisposableLike_isDisposed]: boolean;
    /**
     * Dispose the resource.
     *
     * @param error - An optional error that signals the resource is being disposed due to an error.
     */
    [DisposableLike_dispose](error?: Error): void;
}
export declare const SerialDisposableLike_current: unique symbol;
/**
 * @noInheritDoc
 */
export interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    get [SerialDisposableLike_current](): TDisposable;
    set [SerialDisposableLike_current](v: TDisposable);
}
export declare const EventListenerLike_notify: unique symbol;
/**
 * @noInheritDoc
 */
export interface EventListenerLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the EventListener of the next notification produced by the source.
     *
     * @param next - The next notification value.
     */
    [EventListenerLike_notify](event: T): void;
}
export declare const SinkLike_complete: unique symbol;
export declare const SinkLike_isCompleted: unique symbol;
/**
 * @noInheritDoc
 */
export interface SinkLike<T = unknown> extends EventListenerLike<T> {
    readonly [SinkLike_isCompleted]: boolean;
    [SinkLike_complete](): void;
}
export declare const DropLatestBackpressureStrategy = "drop-latest";
export declare const DropOldestBackpressureStrategy = "drop-oldest";
export declare const OverflowBackpressureStrategy = "overflow";
export declare const ThrowBackpressureStrategy = "throw";
export type BackpressureStrategy = typeof DropLatestBackpressureStrategy | typeof DropOldestBackpressureStrategy | typeof OverflowBackpressureStrategy | typeof ThrowBackpressureStrategy;
export declare const ConsumerLike_backpressureStrategy: unique symbol;
export declare const ConsumerLike_capacity: unique symbol;
export declare const ConsumerLike_isReady: unique symbol;
export declare const ConsumerLike_addOnReadyListener: unique symbol;
/**
 * A `ConsumerLike` type that consumes enqueued events to
 * be consumed.
 *
 * @noInheritDoc
 */
export interface ConsumerLike<T = unknown> extends SinkLike<T> {
    readonly [ConsumerLike_isReady]: boolean;
    /**
     * The back pressure strategy utilized by the queue when it is at capacity.
     */
    readonly [ConsumerLike_backpressureStrategy]: BackpressureStrategy;
    /**
     * The number of items the queue is capable of efficiently buffering.
     */
    readonly [ConsumerLike_capacity]: number;
    [ConsumerLike_addOnReadyListener](callback: SideEffect1<void>): DisposableLike;
}
export declare const EnumeratorLike_moveNext: unique symbol;
export declare const EnumeratorLike_current: unique symbol;
export declare const EnumeratorLike_hasCurrent: unique symbol;
export interface EnumeratorLike<T = unknown> {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
    [EnumeratorLike_moveNext](): boolean;
}
export declare const CollectionEnumeratorLike_count: unique symbol;
export interface CollectionEnumeratorLike<T = unknown> extends EnumeratorLike<T>, Iterable<T> {
    readonly [CollectionEnumeratorLike_count]: number;
}
export declare const QueueLike_enqueue: unique symbol;
/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends CollectionEnumeratorLike<T> {
    [QueueLike_enqueue](v: T): void;
}
/**
 * @noInheritDoc
 */
export declare class BackPressureError extends Error {
    readonly [ConsumerLike_capacity]: number;
    readonly [ConsumerLike_backpressureStrategy]: BackpressureStrategy;
    readonly [ConsumerLike_isReady]: boolean;
    constructor(consumer: ConsumerLike);
}
export declare const SchedulerLike_inContinuation: unique symbol;
export declare const SchedulerLike_maxYieldInterval: unique symbol;
export declare const SchedulerLike_now: unique symbol;
export declare const SchedulerLike_requestYield: unique symbol;
export declare const SchedulerLike_schedule: unique symbol;
export declare const SchedulerLike_shouldYield: unique symbol;
export declare const ContinuationContextLike_yield: unique symbol;
export interface ContinuationContextLike {
    [ContinuationContextLike_yield](delay?: number): void;
}
/**
 * Schedulers are the core unit of concurrency, orchestration and
 * cooperative multi-tasking.
 *
 * @noInheritDoc
 */
export interface SchedulerLike extends DisposableContainerLike {
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
     * Schedule a continuation on the Scheduler.
     * @param continuation - The continuation to run on the scheduler.
     * @param options
     */
    [SchedulerLike_schedule](continuation: SideEffect1<ContinuationContextLike>, options?: {
        /**
         * The amount of time in ms to delay execution of the continuation.
         */
        readonly delay?: number;
    }): DisposableLike;
}
export declare const VirtualTimeSchedulerLike_run: unique symbol;
/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 */
export interface VirtualTimeSchedulerLike extends SchedulerLike, DisposableLike {
    /**
     * Runs the scheduler synchronously until it has no more
     * enqueued continuations, at which time the scheduler will auto dispose.
     */
    [VirtualTimeSchedulerLike_run](): void;
}
export declare const PauseableLike_isPaused: unique symbol;
export declare const PauseableLike_pause: unique symbol;
export declare const PauseableLike_resume: unique symbol;
/**
 * @noInheritDoc
 */
export interface PauseableLike extends DisposableContainerLike {
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
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {
}
/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown> extends ConsumerLike<T>, SchedulerLike {
}
