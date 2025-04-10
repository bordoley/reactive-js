import type { StoreLike } from "./computations.js";
import { Function1, Method1, Optional, SideEffect1 } from "./functions.js";
export declare const DisposableContainerLike_add: unique symbol;
export interface DisposableContainerLike {
    /**
     * Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.
     *
     * @param disposable - The disposable to add.
     */
    [DisposableContainerLike_add](disposable: DisposableLike): void;
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
export declare const EnumeratorLike_current: unique symbol;
export declare const EnumeratorLike_hasCurrent: unique symbol;
export interface EnumeratorLike<T = unknown> extends DisposableLike {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}
export declare const SyncEnumeratorLike_moveNext: unique symbol;
export interface SyncEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [SyncEnumeratorLike_moveNext](): boolean;
}
export declare const AsyncEnumeratorLike_moveNext: unique symbol;
export interface AsyncEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [AsyncEnumeratorLike_moveNext](): Promise<boolean>;
}
export declare const CollectionEnumeratorLike_count: unique symbol;
export declare const CollectionEnumeratorLike_peek: unique symbol;
export interface CollectionEnumeratorLike<T = unknown> extends SyncEnumeratorLike<T> {
    readonly [CollectionEnumeratorLike_count]: number;
    readonly [CollectionEnumeratorLike_peek]: Optional<T>;
}
export declare const QueueableLike_enqueue: unique symbol;
export interface QueueableLike<T> {
    [QueueableLike_enqueue](v: T): void;
}
export type BackpressureStrategy = "drop-latest" | "drop-oldest" | "overflow" | "throw";
export declare const DropLatestBackpressureStrategy: BackpressureStrategy;
export declare const DropOldestBackpressureStrategy: BackpressureStrategy;
export declare const OverflowBackpressureStrategy: BackpressureStrategy;
export declare const ThrowBackpressureStrategy: BackpressureStrategy;
export declare const raiseCapacityExceededError: (capacity: number) => unknown;
export declare const QueueLike_backpressureStrategy: unique symbol;
export declare const QueueLike_capacity: unique symbol;
/**
 * @noInheritDoc
 */
export interface QueueLike<T = unknown> extends QueueableLike<T>, CollectionEnumeratorLike<T> {
    /**
     * The back pressure strategy utilized by the queue when it is at capacity.
     */
    readonly [QueueLike_backpressureStrategy]: BackpressureStrategy;
    /**
     * The number of items the queue is capable of efficiently buffering.
     */
    readonly [QueueLike_capacity]: number;
}
export declare const FlowControllerLike_isReady: unique symbol;
export declare const FlowControllerLike_addOnReadyListener: unique symbol;
export interface FlowControllerLike {
    readonly [FlowControllerLike_isReady]: boolean;
    [FlowControllerLike_addOnReadyListener](callback: SideEffect1<void>): DisposableLike;
}
export declare const ConsumableEnumeratorLike_addOnDataAvailableListener: unique symbol;
export declare const ConsumableEnumeratorLike_isDataAvailable: unique symbol;
export interface ConsumableEnumeratorLike<T = unknown> extends AsyncEnumeratorLike<T> {
    readonly [ConsumableEnumeratorLike_isDataAvailable]: boolean;
    [ConsumableEnumeratorLike_addOnDataAvailableListener](callback: SideEffect1<void>): DisposableLike;
}
/**
 * @noInheritDoc
 */
export interface FlowControlQueueLike<T = unknown> extends QueueLike<T>, ConsumableEnumeratorLike<T>, FlowControllerLike {
}
export declare const ClockLike_now: unique symbol;
export interface ClockLike {
    /**
     * The current time in milliseconds.
     */
    readonly [ClockLike_now]: number;
}
export declare class YieldDelay {
    readonly ms: number;
    constructor(ms: number);
}
export declare const delayMs: (delay: number) => YieldDelay;
export type SchedulerContinuation = Function1<SchedulerLike, Iterator<Optional<YieldDelay>>>;
export declare const SchedulerLike_inContinuation: unique symbol;
export declare const SchedulerLike_maxYieldInterval: unique symbol;
export declare const SchedulerLike_requestYield: unique symbol;
export declare const SchedulerLike_schedule: unique symbol;
export declare const SchedulerLike_shouldYield: unique symbol;
/**
 * Schedulers are the core unit of concurrency, orchestration and
 * cooperative multi-tasking.
 *
 * @noInheritDoc
 */
export interface SchedulerLike extends DisposableContainerLike, ClockLike {
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
    [SchedulerLike_schedule](continuation: SchedulerContinuation): DisposableLike;
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
export declare const EventListenerLike_notify: unique symbol;
export interface EventListenerLike<T = unknown> extends DisposableLike {
    /**
     * Notifies the EventSink of the next notification produced by the source.
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
/**
 * A `ConsumerLike` type that consumes enqueued events to
 * be consumed.
 *
 * @noInheritDoc
 */
export interface ConsumerLike<T = unknown> extends SinkLike<T>, FlowControllerLike {
}
export declare const ObserverLike_mustNotifyInSchedulerContinuation: unique symbol;
/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown> extends ConsumerLike<T>, SchedulerLike {
    readonly [ObserverLike_mustNotifyInSchedulerContinuation]: boolean;
}
