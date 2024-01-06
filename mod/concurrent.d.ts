import { ReadonlyObjectMapLike } from "./collections.js";
import { ErrorSafeEventListenerLike, EventSourceLike, SinkLike, StoreLike } from "./events.js";
import { Function1, Optional, SideEffect1 } from "./functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "./utils.js";
export declare const DispatcherLikeEvent_ready: unique symbol;
export declare const DispatcherLikeEvent_capacityExceeded: unique symbol;
export declare const DispatcherLikeEvent_completed: unique symbol;
export declare const DispatcherLike_complete: unique symbol;
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T>, EventSourceLike<typeof DispatcherLikeEvent_ready | typeof DispatcherLikeEvent_capacityExceeded | typeof DispatcherLikeEvent_completed>, DisposableLike {
    /**
     * Communicates to the dispatcher that no more events will be enqueued.
     */
    [DispatcherLike_complete](): void;
}
export declare const PauseableLike_isPaused: unique symbol;
export declare const PauseableLike_pause: unique symbol;
export declare const PauseableLike_resume: unique symbol;
/**
 * @noInheritDoc
 */
export interface PauseableLike extends DisposableLike {
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
export interface ObserverLike<T = unknown> extends DispatcherLike<T>, SinkLike<T>, SchedulerLike {
}
export declare const ObservableLike_isDeferred: unique symbol;
export declare const ObservableLike_isMulticasted: unique symbol;
export declare const ObservableLike_isPure: unique symbol;
export declare const ObservableLike_isRunnable: unique symbol;
export declare const ObservableLike_observe: unique symbol;
/**
 * @noInheritDoc
 */
export interface ObservableLike<T = unknown> {
    /**
     * Indicates if the `ObservableLike` is deferred, ie. cold.
     */
    readonly [ObservableLike_isDeferred]: boolean;
    /**
     * Indicates if the `ObservableLike` is multicasted, ie. hot.
     */
    readonly [ObservableLike_isMulticasted]: boolean;
    /**
     * Indicates if subscribing to the `ObservableLike` is free of side-effects
     */
    readonly [ObservableLike_isPure]: boolean;
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
 */
export interface DeferredObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isMulticasted]: false;
}
/**
 * @noInheritDoc
 */
export interface RunnableLike<T = unknown> extends DeferredObservableLike<T> {
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * @noInheritDoc
 */
export interface PureObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isPure]: true;
}
/**
 * @noInheritDoc
 */
export interface PureDeferredObservableLike<T = unknown> extends DeferredObservableLike<T>, PureObservableLike<T> {
    readonly [ObservableLike_isMulticasted]: false;
    readonly [ObservableLike_isPure]: true;
    readonly [ObservableLike_isDeferred]: true;
}
/**
 * @noInheritDoc
 */
export interface DeferredObservableWithSideEffectsLike<T = unknown> extends DeferredObservableLike<T> {
    readonly [ObservableLike_isPure]: false;
    readonly [ObservableLike_isRunnable]: false;
}
/**
 * @noInheritDoc
 */
export interface PureRunnableLike<T = unknown> extends RunnableLike<T>, PureDeferredObservableLike<T> {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: true;
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * @noInheritDoc
 */
export interface RunnableWithSideEffectsLike<T = unknown> extends RunnableLike<T> {
    readonly [ObservableLike_isPure]: false;
}
/**
 * @noInheritDoc
 */
export interface MulticastObservableLike<T = unknown> extends PureObservableLike<T> {
    readonly [ObservableLike_isDeferred]: false;
    readonly [ObservableLike_isMulticasted]: true;
    readonly [ObservableLike_isRunnable]: false;
}
/**
 * @noInheritDoc
 */
export interface SubjectLike<T = unknown> extends MulticastObservableLike<T>, ErrorSafeEventListenerLike<T> {
}
/**
 * @noInheritDoc
 */
export interface PauseableObservableLike<T = unknown> extends MulticastObservableLike<T>, PauseableLike {
}
export declare const FlowableLike_flow: unique symbol;
/**
 * @noInheritDoc
 */
export interface FlowableLike<T> {
    [FlowableLike_flow](scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly replay?: number;
    }): PauseableObservableLike<T>;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
export declare const StreamableLike_stream: unique symbol;
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
    }): TStream;
}
export type StreamOf<TStreamable extends StreamableLike> = ReturnType<TStreamable[typeof StreamableLike_stream]>;
export declare const CacheLike_get: unique symbol;
export interface CacheLike<T> extends StreamLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never> {
    [CacheLike_get](index: string): ObservableLike<T>;
}
