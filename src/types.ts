import {
  __AssociativeCollectionLike_keys,
  __BufferLike_capacity,
  __CollectionLike_count,
  __Container_T,
  __Container_type,
  __DispatcherLikeEvent_capacityExceeded,
  __DispatcherLikeEvent_completed,
  __DispatcherLikeEvent_ready,
  __DispatcherLike_complete,
  __DisposableLike_add,
  __DisposableLike_dispose,
  __DisposableLike_error,
  __DisposableLike_isDisposed,
  __EnumeratorLike_current,
  __EnumeratorLike_hasCurrent,
  __EnumeratorLike_move,
  __EventListenerLike_isErrorSafe,
  __EventListenerLike_notify,
  __EventPublisherLike_listenerCount,
  __EventSourceLike_addEventListener,
  __KeyedCollectionLike_get,
  __KeyedContainer_TKey,
  __MulticastObservableLike_buffer,
  __ObservableLike_isDeferred,
  __ObservableLike_isEnumerable,
  __ObservableLike_isRunnable,
  __ObservableLike_observe,
  __ObserverLike_notify,
  __PauseableLike_isPaused,
  __PauseableLike_pause,
  __PauseableLike_resume,
  __PublisherLike_observerCount,
  __QueueableLike_backpressureStrategy,
  __QueueableLike_enqueue,
  __SchedulerLike_inContinuation,
  __SchedulerLike_maxYieldInterval,
  __SchedulerLike_now,
  __SchedulerLike_requestYield,
  __SchedulerLike_schedule,
  __SchedulerLike_shouldYield,
  __SchedulerLike_yield,
  __StoreLike_value,
  __StreamLike_scheduler,
  __StreamableLike_TStream,
  __StreamableLike_stream,
  __VirtualTimeSchedulerLike_run,
} from "./__internal__/symbols.js";
import { Function1, Optional, SideEffect1 } from "./functions.js";

export const AssociativeCollectionLike_keys: typeof __AssociativeCollectionLike_keys =
  __AssociativeCollectionLike_keys;
export const CollectionLike_count: typeof __CollectionLike_count =
  __CollectionLike_count;
export const Container_T: typeof __Container_T = __Container_T;
export const Container_type: typeof __Container_type = __Container_type;
export const EnumeratorLike_current: typeof __EnumeratorLike_current =
  __EnumeratorLike_current;
export const EnumeratorLike_hasCurrent: typeof __EnumeratorLike_hasCurrent =
  __EnumeratorLike_hasCurrent;
export const EnumeratorLike_move: typeof __EnumeratorLike_move =
  __EnumeratorLike_move;
export const KeyedCollectionLike_get: typeof __KeyedCollectionLike_get =
  __KeyedCollectionLike_get;
export const KeyedContainer_TKey: typeof __KeyedContainer_TKey =
  __KeyedContainer_TKey;
export const MulticastObservableLike_buffer: typeof __MulticastObservableLike_buffer =
  __MulticastObservableLike_buffer;
export const ObservableLike_isDeferred: typeof __ObservableLike_isDeferred =
  __ObservableLike_isDeferred;
export const ObservableLike_isEnumerable: typeof __ObservableLike_isEnumerable =
  __ObservableLike_isEnumerable;
export const ObservableLike_isRunnable: typeof __ObservableLike_isRunnable =
  __ObservableLike_isRunnable;
export const ObservableLike_observe: typeof __ObservableLike_observe =
  __ObservableLike_observe;
export const ObserverLike_notify: typeof __ObserverLike_notify =
  __ObserverLike_notify;
export const PublisherLike_observerCount: typeof __PublisherLike_observerCount =
  __PublisherLike_observerCount;
export const StreamableLike_stream: typeof __StreamableLike_stream =
  __StreamableLike_stream;
export const StreamLike_scheduler: typeof __StreamLike_scheduler =
  __StreamLike_scheduler;
export const StreamableLike_TStream: typeof __StreamableLike_TStream =
  __StreamableLike_TStream;
export const BufferLike_capacity: typeof __BufferLike_capacity =
  __BufferLike_capacity;
export const DispatcherLikeEvent_ready: typeof __DispatcherLikeEvent_ready =
  __DispatcherLikeEvent_ready;
export const DispatcherLikeEvent_capacityExceeded: typeof __DispatcherLikeEvent_capacityExceeded =
  __DispatcherLikeEvent_capacityExceeded;
export const DispatcherLikeEvent_completed: typeof __DispatcherLikeEvent_completed =
  __DispatcherLikeEvent_completed;
export const DispatcherLike_complete: typeof __DispatcherLike_complete =
  __DispatcherLike_complete;
export const DisposableLike_add: typeof __DisposableLike_add =
  __DisposableLike_add;
export const DisposableLike_dispose: typeof __DisposableLike_dispose =
  __DisposableLike_dispose;
export const DisposableLike_error: typeof __DisposableLike_error =
  __DisposableLike_error;
export const DisposableLike_isDisposed: typeof __DisposableLike_isDisposed =
  __DisposableLike_isDisposed;
export const EventListenerLike_isErrorSafe: typeof __EventListenerLike_isErrorSafe =
  __EventListenerLike_isErrorSafe;
export const EventListenerLike_notify: typeof __EventListenerLike_notify =
  __EventListenerLike_notify;
export const EventPublisherLike_listenerCount: typeof __EventPublisherLike_listenerCount =
  __EventPublisherLike_listenerCount;
export const EventSourceLike_addEventListener: typeof __EventSourceLike_addEventListener =
  __EventSourceLike_addEventListener;
export const PauseableLike_isPaused: typeof __PauseableLike_isPaused =
  __PauseableLike_isPaused;
export const PauseableLike_pause: typeof __PauseableLike_pause =
  __PauseableLike_pause;
export const PauseableLike_resume: typeof __PauseableLike_resume =
  __PauseableLike_resume;
export const QueueableLike_backpressureStrategy: typeof __QueueableLike_backpressureStrategy =
  __QueueableLike_backpressureStrategy;
export const QueueableLike_enqueue: typeof __QueueableLike_enqueue =
  __QueueableLike_enqueue;
export const SchedulerLike_yield: typeof __SchedulerLike_yield =
  __SchedulerLike_yield;
export const SchedulerLike_inContinuation: typeof __SchedulerLike_inContinuation =
  __SchedulerLike_inContinuation;
export const SchedulerLike_maxYieldInterval: typeof __SchedulerLike_maxYieldInterval =
  __SchedulerLike_maxYieldInterval;
export const SchedulerLike_now: typeof __SchedulerLike_now =
  __SchedulerLike_now;
export const SchedulerLike_requestYield: typeof __SchedulerLike_requestYield =
  __SchedulerLike_requestYield;
export const SchedulerLike_schedule: typeof __SchedulerLike_schedule =
  __SchedulerLike_schedule;
export const SchedulerLike_shouldYield: typeof __SchedulerLike_shouldYield =
  __SchedulerLike_shouldYield;
export const StoreLike_value: typeof __StoreLike_value = __StoreLike_value;
export const VirtualTimeSchedulerLike_run: typeof __VirtualTimeSchedulerLike_run =
  __VirtualTimeSchedulerLike_run;

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
 */
export type ReadonlyObjectMapLike<
  TKey extends symbol | number | string = string,
  T = unknown,
> = { readonly [P in TKey]?: T };

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
export interface KeyedCollectionLike<TKey = unknown, T = unknown>
  extends CollectionLike {
  [KeyedCollectionLike_get](index: TKey): T;
}

/**
 * @noInheritDoc
 * @category Collection
 */
export interface AssociativeCollectionLike<TKey = unknown, T = unknown>
  extends KeyedCollectionLike<TKey, T> {
  readonly [AssociativeCollectionLike_keys]: EnumeratorLike<TKey>;
}

/**
 * @noInheritDoc
 * @category Collection
 */
export interface DictionaryLike<TKey = unknown, T = unknown>
  extends AssociativeCollectionLike<TKey, Optional<T>> {}

/**
 * @noInheritDoc
 * @category Collection
 */
export interface IndexedCollectionLike<T = unknown>
  extends KeyedCollectionLike<number, T> {}

export type DisposableOrTeardown =
  | DisposableLike
  | SideEffect1<Optional<Error>>;

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
  readonly [QueueableLike_backpressureStrategy]:
    | "drop-latest"
    | "drop-oldest"
    | "overflow"
    | "throw";

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
export interface IndexedBufferCollectionLike<T = unknown>
  extends BufferLike,
    IndexedCollectionLike<T> {}

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
export interface ErrorSafeEventListenerLike<T = unknown>
  extends EventListenerLike<T> {
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
export interface EventPublisherLike<T = unknown>
  extends EventSourceLike<T>,
    ErrorSafeEventListenerLike<T> {
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
export interface DispatcherLike<T = unknown>
  extends QueueableLike<T>,
    EventSourceLike<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]> {
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
  [SchedulerLike_schedule](
    continuation: SideEffect1<SchedulerLike>,
    options?: {
      /**
       * The amount of time in ms to delay execution of the continuation.
       */
      readonly delay?: number;
    },
  ): DisposableLike;
}

/**
 * A `SchedulerLike` that supports imperative pausing and resuming
 * of it's run loop.
 *
 * @noInheritDoc
 * @category Scheduling
 */
export interface PauseableSchedulerLike extends SchedulerLike, PauseableLike {}

/**
 * A non-concurrent scheduler that simulates time but executes synchronously.
 *
 * @noInheritDoc
 * @category Scheduling
 */
export interface VirtualTimeSchedulerLike
  extends SchedulerLike,
    DisposableLike {
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
export interface ObserverLike<T = unknown>
  extends DispatcherLike<T>,
    DisposableLike,
    SchedulerLike {
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
 * @category Reactive
 */
export interface SharedObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isDeferred]: false;
  readonly [ObservableLike_isEnumerable]: false;
  readonly [ObservableLike_isRunnable]: false;
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
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Reactive
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
 * @category Reactive
 */
export interface MulticastObservableLike<T = unknown>
  extends SharedObservableLike<T> {
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
export interface PublisherLike<T = unknown>
  extends ErrorSafeEventListenerLike<T>,
    MulticastObservableLike<T> {
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
export interface PauseableObservableLike<T = unknown>
  extends ObservableLike<T>,
    PauseableLike {
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
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {
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
export interface StreamableLike<
  TReq = unknown,
  T = unknown,
  TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>,
> {
  readonly [StreamableLike_TStream]?: TStream;

  /**
   * Subscribe to the Streamable.
   *
   * @param scheduler - The scheduler to subscribe to the stream with.
   * @param options
   */
  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: {
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
    },
  ): TStream & DisposableLike;
}

export type StreamOf<TStreamable extends StreamableLike> = NonNullable<
  TStreamable[typeof StreamableLike_TStream]
>;

export interface Container {
  readonly [Container_T]?: unknown;
  readonly [Container_type]?: unknown;
}

export type ContainerOf<C extends Container, T> = C extends {
  readonly [Container_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [Container_T]: T;
      })[typeof Container_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export type ContainerOperator<C extends Container, TA, TB> = Function1<
  ContainerOf<C, TA>,
  ContainerOf<C, TB>
>;

export interface KeyedContainer extends Container {
  readonly [KeyedContainer_TKey]?: unknown;
}

export type KeyedContainerOf<C extends KeyedContainer, TKey, T> = C extends {
  readonly [Container_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [Container_T]: T;
        readonly [KeyedContainer_TKey]: TKey;
      })[typeof Container_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
      readonly _TKey: () => TKey;
    };

export type KeyOf<C extends KeyedContainer> = NonNullable<
  C[typeof KeyedContainer_TKey]
>;

/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 */
export type KeyedContainerOperator<
  C extends KeyedContainer,
  TKey,
  TA,
  TB,
> = Function1<KeyedContainerOf<C, TKey, TA>, KeyedContainerOf<C, TKey, TB>>;
