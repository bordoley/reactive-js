import { DictionaryLike, ReadonlyObjectMapLike } from "./collections.js";
import { ComputationLike, ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, DeferredComputationLike, PureComputationLike, SynchronousComputationLike } from "./computations.js";
import { EventListenerLike, EventSourceLike, StoreLike } from "./events.js";
import { Optional, SideEffect1, Updater } from "./functions.js";
import { BackpressureStrategy, DisposableContainerLike, DisposableLike, QueueableLike } from "./utils.js";
export declare const DispatcherLikeEvent_ready: unique symbol;
export declare const DispatcherLikeEvent_capacityExceeded: unique symbol;
export declare const DispatcherLikeEvent_completed: unique symbol;
export declare const DispatcherLike_complete: unique symbol;
export declare const DispatcherLike_isCompleted: unique symbol;
/**
 * A `QueueableLike` type that consumes enqueued events to
 * be dispatched from any execution constext.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T>, EventSourceLike<typeof DispatcherLikeEvent_ready | typeof DispatcherLikeEvent_capacityExceeded | typeof DispatcherLikeEvent_completed>, DisposableLike {
    readonly [DispatcherLike_isCompleted]: boolean;
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
/**
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {
}
export declare const ObserverLike_notify: unique symbol;
/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown> extends DispatcherLike<T>, SchedulerLike {
    /**
     * Notifies the observer of the next notification produced by the source.
     *
     * @param next - The next notification value.
     */
    [ObserverLike_notify](event: T): void;
}
export declare const ObservableLike_observe: unique symbol;
/**
 * @noInheritDoc
 */
export interface ObservableLike<out T = unknown> extends ComputationLike {
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
export interface DeferredObservableLike<out T = unknown> extends ObservableLike<T>, DeferredComputationLike {
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface SynchronousObservableLike<out T = unknown> extends DeferredObservableLike<T>, SynchronousComputationLike {
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface PureObservableLike<out T = unknown> extends ObservableLike<T>, PureComputationLike {
    readonly [ComputationLike_isPure]?: true;
}
/**
 * @noInheritDoc
 */
export interface PureDeferredObservableLike<out T = unknown> extends DeferredObservableLike<T>, PureObservableLike<T> {
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isDeferred]?: true;
}
/**
 * @noInheritDoc
 */
export interface DeferredObservableWithSideEffectsLike<out T = unknown> extends DeferredObservableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
/**
 * @noInheritDoc
 */
export interface PureSynchronousObservableLike<out T = unknown> extends SynchronousObservableLike<T>, PureDeferredObservableLike<T> {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]?: true;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface SynchronousObservableWithSideEffectsLike<out T = unknown> extends SynchronousObservableLike<T>, DeferredObservableWithSideEffectsLike<T> {
    readonly [ComputationLike_isDeferred]?: true;
    readonly [ComputationLike_isPure]: false;
    readonly [ComputationLike_isSynchronous]?: true;
}
/**
 * @noInheritDoc
 */
export interface MulticastObservableLike<out T = unknown> extends PureObservableLike<T> {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isSynchronous]: false;
}
/**
 * @noInheritDoc
 */
export interface SubjectLike<out T = unknown> extends MulticastObservableLike<T>, EventListenerLike<T> {
}
/**
 * @noInheritDoc
 */
export interface PauseableObservableLike<out T = unknown> extends MulticastObservableLike<T>, PauseableLike {
}
export declare const FlowableLike_flow: unique symbol;
/**
 * @noInheritDoc
 */
export interface FlowableLike<out T> {
    [FlowableLike_flow](scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
    }): PauseableObservableLike<T>;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, out T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
}
/**
 * @noInheritDoc
 */
export interface AnimationGroupStreamLike<TEvent, TKey extends string, out T> extends StreamLike<TEvent, boolean>, DictionaryLike<TKey, EventSourceLike<T>>, PauseableLike {
}
export declare const AnimationStreamLike_animation: unique symbol;
/**
 * @noInheritDoc
 */
export interface AnimationStreamLike<TEvent, out T> extends StreamLike<TEvent, boolean>, PauseableLike {
    [AnimationStreamLike_animation]: EventSourceLike<T>;
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
export interface StreamableLike<TReq = unknown, out T = unknown, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
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
        readonly backpressureStrategy?: BackpressureStrategy;
    }): TStream;
}
export type StreamOf<TStreamable extends StreamableLike> = ReturnType<TStreamable[typeof StreamableLike_stream]>;
export declare const CacheLike_get: unique symbol;
/**
 * @noInheritDoc
 */
export interface CacheLike<T> extends DispatcherLike<ReadonlyObjectMapLike<string, Updater<Optional<T>>>> {
    [CacheLike_get](index: string): ObservableLike<T>;
}
