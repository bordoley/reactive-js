import {
  __AssociativeCollectionLike_keys as AssociativeCollectionLike_keys,
  __BufferLike_capacity as BufferLike_capacity,
  __CollectionLike_count as CollectionLike_count,
  __Container_T as Container_T,
  __Container_type as Container_type,
  __DispatcherLikeEvent_capacityExceeded as DispatcherLikeEvent_capacityExceeded,
  __DispatcherLikeEvent_completed as DispatcherLikeEvent_completed,
  __DispatcherLikeEvent_ready as DispatcherLikeEvent_ready,
  __DispatcherLike_complete as DispatcherLike_complete,
  __DisposableLike_add as DisposableLike_add,
  __DisposableLike_dispose as DisposableLike_dispose,
  __DisposableLike_error as DisposableLike_error,
  __DisposableLike_isDisposed as DisposableLike_isDisposed,
  __EnumeratorLike_current as EnumeratorLike_current,
  __EnumeratorLike_hasCurrent as EnumeratorLike_hasCurrent,
  __EnumeratorLike_move as EnumeratorLike_move,
  __EventListenerLike_isErrorSafe as EventListenerLike_isErrorSafe,
  __EventListenerLike_notify as EventListenerLike_notify,
  __EventPublisherLike_listenerCount as EventPublisherLike_listenerCount,
  __EventSourceLike_addEventListener as EventSourceLike_addEventListener,
  __KeyedCollectionLike_get as KeyedCollectionLike_get,
  __KeyedContainer_TKey as KeyedContainer_TKey,
  __MulticastObservableLike_buffer as MulticastObservableLike_buffer,
  __ObservableLike_isEnumerable as ObservableLike_isEnumerable,
  __ObservableLike_isRunnable as ObservableLike_isRunnable,
  __ObservableLike_observe as ObservableLike_observe,
  __ObserverLike_notify as ObserverLike_notify,
  __PauseableLike_isPaused as PauseableLike_isPaused,
  __PauseableLike_pause as PauseableLike_pause,
  __PauseableLike_resume as PauseableLike_resume,
  __PublisherLike_observerCount as PublisherLike_observerCount,
  __QueueableLike_backpressureStrategy as QueueableLike_backpressureStrategy,
  __QueueableLike_enqueue as QueueableLike_enqueue,
  __SchedulerLike_inContinuation as SchedulerLike_inContinuation,
  __SchedulerLike_maxYieldInterval as SchedulerLike_maxYieldInterval,
  __SchedulerLike_now as SchedulerLike_now,
  __SchedulerLike_requestYield as SchedulerLike_requestYield,
  __SchedulerLike_schedule as SchedulerLike_schedule,
  __SchedulerLike_shouldYield as SchedulerLike_shouldYield,
  __SchedulerLike_yield as SchedulerLike_yield,
  __StoreLike_value as StoreLike_value,
  __StreamLike_scheduler as StreamLike_scheduler,
  __StreamableLike_TStream as StreamableLike_TStream,
  __StreamableLike_stream as StreamableLike_stream,
  __VirtualTimeSchedulerLike_run as VirtualTimeSchedulerLike_run,
} from "./__internal__/symbols.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  SideEffect2,
  TypePredicate,
  Updater,
} from "./functions.js";

export {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  Container_T,
  Container_type,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  KeyedCollectionLike_get,
  KeyedContainer_TKey,
  MulticastObservableLike_buffer,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike_notify,
  PublisherLike_observerCount,
  StreamableLike_stream,
  StreamLike_scheduler,
  StreamableLike_TStream,
  BufferLike_capacity,
  DispatcherLikeEvent_ready,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLike_complete,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventPublisherLike_listenerCount,
  EventSourceLike_addEventListener,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike_yield,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  StoreLike_value,
  VirtualTimeSchedulerLike_run,
};

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
 * @category KeyedContainer
 */
export interface KeyedContainer extends Container {
  readonly [KeyedContainer_TKey]?: unknown;
}

/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `Container`.
 *
 * @noInheritDoc
 * @category KeyedContainer
 */
export interface ReadonlyArrayContainer extends KeyedContainer {
  readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;

  readonly [KeyedContainer_TKey]?: number;
}

/**
 * @noInheritDoc
 * @category KeyedContainer
 */
export interface ReadonlyMapContainer extends Container {
  readonly [Container_type]?: ReadonlyMap<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: unknown;
}

/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<
  TKey extends symbol | number | string = string,
  T = unknown,
> = { readonly [P in TKey]?: T };

/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `Container`.
 *
 * @noInheritDoc
 * @category KeyedContainer
 */
export interface ReadonlyObjectMapContainer extends Container {
  readonly [Container_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof KeyedContainer_TKey]>,
    this[typeof Container_T]
  >;

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
 * @category KeyedContainer
 */
export interface DictionaryContainer extends KeyedContainer {
  readonly [Container_type]?: DictionaryLike<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: unknown;
}

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
 * @category Container
 */
export interface EventSourceContainer extends Container {
  readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
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
export interface RunnableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_isRunnable]: true;
}

/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends ObservableContainer {
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
export interface MulticastObservableLike<T = unknown>
  extends ObservableLike<T> {
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

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Container {
  /**
   * Utility type for higher order programming with Containers.
   */
  export type Of<C extends Container, T> = C extends {
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

  /**
   * Utility type for a generic operator function that transforms a Container's inner value type.
   */
  export type Operator<C extends Container, TA, TB> = Function1<
    Container.Of<C, TA>,
    Container.Of<C, TB>
  >;

  /**
   * @noInheritDoc

   */
  export interface TypeClass<C extends Container> {
    /**
     * Returns a Container which buffers items produced by the source until the
     * number of items reaches the specified maximum buffer size.
     *
     * @category Operator
     */
    buffer: <T>(options?: {
      readonly count?: number;
    }) => Container.Operator<C, T, readonly T[]>;

    /**
     * Returns a Container which emits all values from each source sequentially.
     *
     * @category Constructor
     */
    concat<T>(
      fst: Container.Of<C, T>,
      snd: Container.Of<C, T>,
      ...tail: readonly Container.Of<C, T>[]
    ): Container.Of<C, T>;

    /**
     * Converts a higher-order Container into a first-order
     * Container by concatenating the inner sources in order.
     *
     * @category Operator
     */
    concatAll: <T>() => Container.Operator<C, Container.Of<C, T>, T>;

    /**
     * @category Operator
     */
    concatMap: <TA, TB>(
      selector: Function1<TA, Container.Of<C, TB>>,
    ) => Container.Operator<C, TA, TB>;

    /**
     * @category Operator
     */
    concatWith: <T>(
      snd: Container.Of<C, T>,
      ...tail: readonly Container.Of<C, T>[]
    ) => Container.Operator<C, T, T>;

    /**
     * @category Transform
     */
    contains: <T>(
      value: T,
      options?: {
        readonly equality?: Equality<T>;
      },
    ) => Function1<Container.Of<C, T>, boolean>;

    /**
     * Returns a Container.Operator that emits all items emitted by the source that
     * are distinct by comparison from the previous item.
     *
     * @category Operator
     */
    distinctUntilChanged<T>(options?: {
      readonly equality?: Equality<T>;
    }): Container.Operator<C, T, T>;

    /**
     * Return an Container that emits no items.
     *
     * @category Constructor
     */
    empty<T>(): Container.Of<C, T>;

    /**
     * @category Operator
     */
    endWith<T>(value: T, ...values: readonly T[]): Container.Operator<C, T, T>;

    /**
     * Determines whether all the members of an Container satisfy the predicate.
     * The predicate function is invoked for each element in the Container until the
     * it returns false, or until the end of the Container.
     *
     * @param predicate
     * @category Transform
     */
    everySatisfy<T>(
      predicate: Predicate<T>,
    ): Function1<Container.Of<C, T>, boolean>;

    /**
     *
     * @category Transform
     */
    first<T>(): Function1<Container.Of<C, T>, Optional<T>>;

    /**
     * @category Operator
     */
    flatMapIterable: <TA, TB>(
      selector: Function1<TA, Iterable<TB>>,
    ) => Container.Operator<C, TA, TB>;

    /**
     * @category Transform
     */
    flow<T>(
      scheduler: SchedulerLike,
      options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ): Function1<
      Container.Of<C, T>,
      PauseableObservableLike<T> & DisposableLike
    >;

    /**
     * Returns a Container.Operator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T>(effect: SideEffect1<T>): Container.Operator<C, T, T>;

    /**
     * @category Operator
     */
    forkConcat<TIn, TOut>(
      fst: Container.Operator<C, TIn, TOut>,
      snd: Container.Operator<C, TIn, TOut>,
      ...tail: readonly Container.Operator<C, TIn, TOut>[]
    ): Container.Operator<C, TIn, TOut>;

    /**
     * @category Operator
     */
    forkZip<T, TA, TB>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
    ): Container.Operator<C, T, readonly [TA, TB]>;
    forkZip<T, TA, TB, TC>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
    ): Container.Operator<C, T, readonly [TA, TB, TC]>;
    forkZip<T, TA, TB, TC, TD>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD]>;
    forkZip<T, TA, TB, TC, TD, TE>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
    forkZip<T, TA, TB, TC, TD, TE, TF>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
      h: Container.Operator<C, T, TH>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
      h: Container.Operator<C, T, TH>,
      i: Container.Operator<C, T, TI>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

    /**
     * @category Constructor
     */
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromEnumerable<T>(): Function1<EnumerableLike<T>, Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(
      factory: Factory<EnumeratorLike<T>>,
    ): Container.Of<C, T>;

    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>): Container.Of<C, T>;

    /**
     * @category Constructor
     */
    fromIterable<T>(): Function1<Iterable<T>, Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromOptional<T>(): Function1<Optional<T>, Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromReadonlyArray<T>(options?: {
      readonly start?: number;
      readonly count?: number;
    }): Function1<readonly T[], Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromRunnable: <T>() => Function1<RunnableLike<T>, Container.Of<C, T>>;

    /**
     * Generates a Container from a generator function
     * that is applied to an accumulator value between emitted items.
     *
     * @param generator - The generator function.
     * @param initialValue - Factory function used to generate the initial accumulator.
     *
     * @category Constructor
     */
    generate<T>(
      generator: Updater<T>,
      initialValue: Factory<T>,
    ): Container.Of<C, T>;

    /**
     * @category Operator
     */
    identity<T>(): Container.Operator<C, T, T>;

    /**
     * @category Operator
     */
    ignoreElements<T>(): Container.Operator<C, unknown, T>;

    /**
     * Returns a Container.Operator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T>(predicate: Predicate<T>): Container.Operator<C, T, T>;

    /**
     *
     * @category Operator
     */
    keepType<TA, TB extends TA>(
      predicate: TypePredicate<TA, TB>,
    ): Container.Operator<C, TA, TB>;

    /**
     *
     * @category Transform
     */
    last<T>(): Function1<Container.Of<C, T>, Optional<T>>;

    /**
     * Returns a Container.Operator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB>(selector: Function1<TA, TB>): Container.Operator<C, TA, TB>;

    /**
     * @category Operator
     */
    mapTo<TA, TB>(value: TB): Container.Operator<C, TA, TB>;

    /**
     * @category Transform
     */
    noneSatisfy<T>(
      predicate: Predicate<T>,
    ): Function1<Container.Of<C, T>, boolean>;

    /**
     * @category Operator
     */
    pairwise<T>(): Container.Operator<C, T, readonly [T, T]>;

    /**
     * @category Operator
     */
    pick<T, TKey extends keyof T>(key: TKey): Container.Operator<C, T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(
      keyA: TKeyA,
      keyB: TKeyB,
    ): Container.Operator<C, T, T[TKeyA][TKeyB]>;
    pick<
      T,
      TKeyA extends keyof T,
      TKeyB extends keyof T[TKeyA],
      TKeyC extends keyof T[TKeyA][TKeyB],
    >(
      keyA: TKeyA,
      keyB: TKeyB,
      keyC: TKeyC,
    ): Container.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;

    /**
     * @category Transform
     */
    reduce<T, TAcc>(
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): Function1<Container.Of<C, T>, TAcc>;

    /**
     * Returns a Container that mirrors the source, repeating it whenever the predicate returns true.
     *
     * @param predicate
     *
     * @category Operator
     */
    repeat<T>(predicate: Predicate<number>): Container.Operator<C, T, T>;
    /**
     * Returns a Container that mirrors the source, repeating it `count` times.
     *
     * @param count
     *
     * @category Operator
     */
    repeat<T>(count: number): Container.Operator<C, T, T>;

    /**
     * Returns a Container that mirrors the source, continually repeating it.
     *
     * @category Operator
     */
    repeat<T>(): Container.Operator<C, T, T>;

    /**
     * Returns a Container that applies an accumulator function over the source,
     * and emits each intermediate result.
     *
     * @param scanner - The accumulator function called on each source value.
     * @param initialValue - The initial accumulation value.
     *
     * @category Operator
     */
    scan<T, TAcc>(
      scanner: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): Container.Operator<C, T, TAcc>;

    /**
     * Returns a Container that skips the first count items emitted by the source.
     *
     * @category Operator
     */
    skipFirst<T>(options?: {
      readonly count?: number;
    }): Container.Operator<C, T, T>;

    /**
     * @category Transform
     */
    someSatisfy<T>(
      predicate: Predicate<T>,
    ): Function1<Container.Of<C, T>, boolean>;

    /**
     * @category Operator
     */
    startWith<T>(
      value: T,
      ...values: readonly T[]
    ): Container.Operator<C, T, T>;

    /**
     * Returns a Container that only emits the first `count` values emitted by the source.
     *
     * @category Operator
     */
    takeFirst<T>(options?: {
      readonly count?: number;
    }): Container.Operator<C, T, T>;

    /**
     *  Returns a Container that only emits the last `count` items emitted by the source.
     *
     * @category Operator
     */
    takeLast<T>(options?: {
      readonly count?: number;
    }): Container.Operator<C, T, T>;

    /**
     * Returns a Container which emits values emitted by the source as long
     * as each value satisfies the given predicate, and then completes as soon as
     * this predicate is not satisfied.
     *
     * @param predicate - The predicate function.
     *
     * @category Operator
     */
    takeWhile<T>(
      predicate: Predicate<T>,
      options?: { readonly inclusive?: boolean },
    ): Container.Operator<C, T, T>;

    /**
     * @category Transform
     */
    toEnumerable<T>(): Function1<Container.Of<C, T>, EnumerableLike<T>>;

    /**
     * Converts the Container to a `IterableLike`.
     *
     * @category Transform
     */
    toIterable<T>(): Function1<Container.Of<C, T>, Iterable<T>>;

    /**
     * @category Transform
     */
    toObservable: <T>() => Function1<Container.Of<C, T>, ObservableLike<T>>;

    /**
     * Converts the Container to a `ReadonlyArrayContainer`.
     *
     * @category Transform
     */
    toReadonlyArray<T>(): Function1<Container.Of<C, T>, ReadonlyArray<T>>;

    /**
     * @category Transform
     */
    toRunnable: <T>() => Function1<Container.Of<C, T>, RunnableLike<T>>;

    /**
     * Combines multiple sources to create a Container whose values are calculated from the values,
     * in order, of each of its input sources.
     *
     * @category Constructor
     */
    zip<TA, TB>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
    ): Container.Of<C, readonly [TA, TB]>;
    zip<TA, TB, TC>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
    ): Container.Of<C, readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
    ): Container.Of<C, readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
      i: Container.Of<C, TI>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

    /**
     * @category Operator
     */
    zipWith<TA, TB>(
      b: Container.Of<C, TB>,
    ): Container.Operator<C, TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
      i: Container.Of<C, TI>,
    ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace KeyedContainer {
  export type Of<C extends Container, TKey, T> = C extends {
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

  export type KeyOf<C extends KeyedContainer> = C extends {
    readonly [Container_type]?: unknown;
  }
    ? NonNullable<C[typeof KeyedContainer_TKey]>
    : // eslint-disable-next-line @typescript-eslint/ban-types
      {};

  /**
   * Utility type for a generic operator function that transforms a Container's inner value type.
   */
  export type Operator<C extends KeyedContainer, TKey, TA, TB> = Function1<
    KeyedContainer.Of<C, TKey, TA>,
    KeyedContainer.Of<C, TKey, TB>
  >;

  /**
   * @noInheritDoc

   */
  export interface TypeClass<C extends KeyedContainer> {
    /**
     * Return an Container that emits no items.
     *
     * @category Constructor
     */
    empty<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): KeyedContainer.Of<C, TKey, T>;

    /**
     *
     * @category Transform
     */
    entries<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): Function1<KeyedContainer.Of<C, TKey, T>, EnumeratorLike<[TKey, T]>>;

    /**
     * Returns a Container.Operator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T, TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>>(
      effect: SideEffect1<T>,
    ): KeyedContainer.Operator<C, TKey, T, T>;

    /**
     * Returns a KeyedContainer.Operator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEachWithKey<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(
      effect: SideEffect2<T, TKey>,
    ): KeyedContainer.Operator<C, TKey, T, T>;

    /**
     * @category Constructor
     */
    fromEntries<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): Function1<EnumeratorLike<[TKey, T]>, KeyedContainer.Of<C, TKey, T>>;

    /**
     * @category Constructor
     */
    fromReadonlyArray<
      T,
      TKey extends KeyedContainer.KeyOf<ReadonlyArrayContainer> = KeyedContainer.KeyOf<ReadonlyArrayContainer>,
    >(options?: {
      readonly start?: number;
      readonly count?: number;
    }): Function1<readonly T[], KeyedContainer.Of<C, TKey, T>>;

    /**
     * @category Operator
     */
    identity<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): KeyedContainer.Operator<C, TKey, T, T>;

    /**
     * Returns a Container.Operator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T, TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>>(
      predicate: Predicate<T>,
    ): KeyedContainer.Operator<C, TKey, T, T>;

    /**
     *
     * @category Operator
     */
    keepType<
      TA,
      TB extends TA,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(
      predicate: TypePredicate<TA, TB>,
    ): KeyedContainer.Operator<C, TKey, TA, TB>;

    /**
     * Returns a Container.Operator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keepWithKey<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ): KeyedContainer.Operator<C, TKey, T, T>;

    /**
     *
     * @category Transform
     */
    keys<
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): Function1<KeyedContainer.Of<C, TKey, unknown>, EnumeratorLike<TKey>>;

    /**
     *
     * @category Transform
     */
    keySet<
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): Function1<KeyedContainer.Of<C, TKey, unknown>, ReadonlySet<TKey>>;

    /**
     * Returns a Container.Operator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB, TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>>(
      selector: Function1<TA, TB>,
    ): KeyedContainer.Operator<C, TKey, TA, TB>;

    /**
     * Returns a Container.Operator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    mapWithKey<
      TA,
      TB,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(
      selector: Function2<TA, TKey, TB>,
    ): KeyedContainer.Operator<C, TKey, TA, TB>;

    /**
     * @category Transform
     */
    reduce<
      T,
      TAcc,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): Function1<KeyedContainer.Of<C, TKey, T>, TAcc>;

    /**
     * @category Transform
     */
    reduceWithKey<
      T,
      TAcc,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(
      reducer: Function3<TAcc, T, TKey, TAcc>,
      initialValue: Factory<TAcc>,
    ): Function1<KeyedContainer.Of<C, TKey, T>, TAcc>;

    /**
     * Converts the Container to a `ReadonlyArrayContainer`.
     *
     * @category Transform
     */
    toReadonlyArray<
      T,
      TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
    >(): Function1<KeyedContainer.Of<C, TKey, T>, ReadonlyArray<T>>;

    /**
     *
     * @category Transform
     */
    values<T>(): Function1<KeyedContainer.Of<C, any, T>, EnumeratorLike<T>>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ReactiveContainer {
  /**
   * @noInheritDoc
   * @category AnimationConfig
   */
  export interface DelayAnimationConfig {
    readonly type: "delay";
    readonly duration: number;
  }

  /**
   * @noInheritDoc
   * @category AnimationConfig
   */
  export interface KeyFrameAnimationConfig {
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
  export interface FrameAnimationConfig {
    readonly type: "frame";
    readonly value: number;
  }

  /**
   * @noInheritDoc
   * @category AnimationConfig
   */
  export interface LoopAnimationConfig<T> {
    readonly type: "loop";
    readonly animation: AnimationConfig<T> | readonly AnimationConfig<T>[];
    readonly count?: number;
  }

  /**
   * @noInheritDoc
   * @category AnimationConfig
   */
  export interface SpringAnimationConfig {
    readonly type: "spring";
    readonly from: number;
    readonly to: number;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }

  export type AnimationConfig<T = number> =
    | DelayAnimationConfig
    | LoopAnimationConfig<T>
    | (T extends number
        ? (
            | KeyFrameAnimationConfig
            | SpringAnimationConfig
            | FrameAnimationConfig
          ) & {
            readonly selector?: never;
          }
        : (
            | KeyFrameAnimationConfig
            | SpringAnimationConfig
            | FrameAnimationConfig
          ) & {
            readonly selector: Function1<number, T>;
          });

  /**
   * @noInheritDoc
   */
  export interface TypeClass<C extends ObservableContainer>
    extends Container.TypeClass<C> {
    /**
     * @category Constructor
     */
    animate<T = number>(
      configs: AnimationConfig<T> | readonly AnimationConfig<T>[],
    ): Container.Of<C, T>;

    /**
     * @category Operator
     */
    backpressureStrategy<T>(
      capacity: number,
      backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
    ): Container.Operator<C, T, T>;

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
    catchError<T>(
      onError: Function1<unknown, Container.Of<C, T> | void>,
    ): Container.Operator<C, T, T>;

    /**
     * @category Constructor
     */
    combineLatest<TA, TB>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
    ): Container.Of<C, readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
    ): Container.Of<C, readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
    ): Container.Of<C, readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
      i: Container.Of<C, TI>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

    /**
     * @category Constructor
     */
    currentTime(options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    }): Container.Of<C, number>;

    /**
     * @category Operator
     */
    decodeWithCharset(options?: {
      charset?: string;
    }): Container.Operator<C, ArrayBuffer, string>;

    /**
     * @category Constructor
     */
    defer<T>(factory: Factory<Container.Of<C, T>>): Container.Of<C, T>;

    /**
     *
     * @category Operator
     */
    dispatchTo<T>(dispatcher: DispatcherLike<T>): Container.Operator<C, T, T>;

    /**
     * @category Constructor
     */
    empty<T>(options?: { delay?: number }): Container.Of<C, T>;

    /**
     * @category Operator
     */
    encodeUtf8(): Container.Operator<C, string, Uint8Array>;

    /**
     *
     * @category Operator
     */
    enqueue<T>(queue: QueueableLike<T>): Container.Operator<C, T, T>;

    /**
     *
     * @category Operator
     */
    exhaust: <T>() => Container.Operator<C, Container.Of<C, T>, T>;

    /**
     * @category Operator
     */
    exhaustMap: <TA, TB>(
      selector: Function1<TA, Container.Of<C, TB>>,
    ) => Container.Operator<C, TA, TB>;

    /**
     *
     * @category Transform
     */
    firstAsync<T>(): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

    /**
     *
     * @category Transform
     */
    firstAsync<T>(
      scheduler: SchedulerLike,
      options?: {
        capacity?: number;
        backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

    /**
     * @category Operator
     */
    forkCombineLatest<T, TA, TB>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
    ): Container.Operator<C, T, readonly [TA, TB]>;
    forkCombineLatest<T, TA, TB, TC>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
    ): Container.Operator<C, T, readonly [TA, TB, TC]>;
    forkCombineLatest<T, TA, TB, TC, TD>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
      h: Container.Operator<C, T, TH>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
      h: Container.Operator<C, T, TH>,
      i: Container.Operator<C, T, TI>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

    /**
     * @category Operator
     */
    forkMerge<TIn, TOut>(
      fst: Container.Operator<C, TIn, TOut>,
      snd: Container.Operator<C, TIn, TOut>,
      ...tail: readonly Container.Operator<C, TIn, TOut>[]
    ): Container.Operator<C, TIn, TOut>;

    /**
     * @category Operator
     */
    forkZipLatest<T, TA, TB>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
    ): Container.Operator<C, T, readonly [TA, TB]>;
    forkZipLatest<T, TA, TB, TC>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
    ): Container.Operator<C, T, readonly [TA, TB, TC]>;
    forkZipLatest<T, TA, TB, TC, TD>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD]>;
    forkZipLatest<T, TA, TB, TC, TD, TE>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
      h: Container.Operator<C, T, TH>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      a: Container.Operator<C, T, TA>,
      b: Container.Operator<C, T, TB>,
      c: Container.Operator<C, T, TC>,
      d: Container.Operator<C, T, TD>,
      e: Container.Operator<C, T, TE>,
      f: Container.Operator<C, T, TF>,
      g: Container.Operator<C, T, TG>,
      h: Container.Operator<C, T, TH>,
      i: Container.Operator<C, T, TI>,
    ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(
      factory: Factory<EnumeratorLike<T>>,
      options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
      },
    ): Container.Of<C, T>;

    /**
     * @category Constructor
     */
    fromFactory<T>(
      factory: Factory<T>,
      options?: {
        readonly delay?: number;
      },
    ): Container.Of<C, T>;

    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    }): Function1<Iterable<T>, Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
      readonly delay?: number;
    }): Function1<Optional<T>, Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    fromReadonlyArray<T>(options?: {
      readonly count?: number;
      readonly delay?: number;
      readonly delayStart?: boolean;
      readonly start?: number;
    }): Function1<readonly T[], Container.Of<C, T>>;

    /**
     * @category Constructor
     */
    generate<T>(
      generator: Updater<T>,
      initialValue: Factory<T>,
      options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
      },
    ): Container.Of<C, T>;

    /**
     *
     * @category Transform
     */
    lastAsync<T>(): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

    /**
     *
     * @category Transform
     */
    lastAsync<T>(
      scheduler: SchedulerLike,
      options?: {
        capacity?: number;
        backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

    /**
     *
     * @category Constructor
     */
    merge<T>(
      fst: Container.Of<C, T>,
      snd: Container.Of<C, T>,
      ...tail: readonly Container.Of<C, T>[]
    ): Container.Of<C, T>;

    /**
     *
     * @category Operator
     */
    mergeAll: <T>(options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    }) => Container.Operator<C, Container.Of<C, T>, T>;

    /**
     * @category Operator
     */
    mergeMap: <TA, TB>(
      selector: Function1<TA, Container.Of<C, TB>>,
      options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
      },
    ) => Container.Operator<C, TA, TB>;

    /**
     * @category Operator
     */
    mergeWith: <T>(
      snd: Container.Of<C, T>,
      ...tail: readonly Container.Of<C, T>[]
    ) => Container.Operator<C, T, T>;

    /**
     * Returns a `MulticastObservableLike` backed by a single subscription to the source.
     *
     * @param scheduler - A `SchedulerLike` that is used to subscribe to the source observable.
     *
     * @category Transform
     */
    multicast<T>(
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
    ): Function1<
      Container.Of<C, T>,
      MulticastObservableLike<T> & DisposableLike
    >;

    /**
     * Returns a Container instance that emits no items and never disposes its state.
     *
     * @category Constructor
     */
    never<T>(): Container.Of<C, T>;

    /**
     * Returns an `ObservableLike` that mirrors the source, re-subscribing
     * if the source completes with an error.
     *
     * @category Operator
     */
    retry<T>(): Container.Operator<C, T, T>;

    /**
     * Returns an `ObservableLike` that mirrors the source, resubscrbing
     * if the source completes with an error which satisfies the predicate function.
     *
     * @param predicate
     *
     * @category Operator
     */
    retry<T>(
      predicate: Function2<number, unknown, boolean>,
    ): Container.Operator<C, T, T>;

    /**
     * @category Operator
     */
    scanLast: <T, TAcc>(
      scanner: Function2<TAcc, T, Container.Of<C, TAcc>>,
      initialValue: Factory<TAcc>,
    ) => Container.Operator<C, T, TAcc>;

    /**
     * @category Operator
     */
    scanMany: <T, TAcc>(
      scanner: Function2<TAcc, T, Container.Of<C, TAcc>>,
      initialValue: Factory<TAcc>,
    ) => Container.Operator<C, T, TAcc>;

    /**
     * Returns an `ObservableLike` backed by a shared refcounted subscription to the
     * source. When the refcount goes to 0, the underlying subscription
     * to the source is disposed.
     *
     * @param scheduler - A `SchedulerLike` that is used to subscribe to the source.
     *
     * @category Transform
     */
    share<T>(
      scheduler: SchedulerLike,
      options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ): Function1<Container.Of<C, T>, ObservableLike<T>>;

    /**
     *
     * @category Operator
     */
    switchAll: <T>() => Container.Operator<C, Container.Of<C, T>, T>;

    /**
     * @category Operator
     */
    switchMap: <TA, TB>(
      selector: Function1<TA, Container.Of<C, TB>>,
    ) => Container.Operator<C, TA, TB>;

    /**
     * @category Operator
     */
    takeUntil<T>(
      notifier: Container.Of<C, unknown>,
    ): Container.Operator<C, T, T>;

    /**
     * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
     *
     * @param duration - Function function that is used to determine the silence duration in between emitted values.
     * @param mode - The throttle mode.
     *
     * @category Operator
     */
    throttle<T>(
      duration: Function1<T, Container.Of<C, unknown>>,
      options?: { readonly mode?: "first" | "last" | "interval" },
    ): Container.Operator<C, T, T>;

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
    throttle<T>(
      duration: number,
      options?: { readonly mode?: "first" | "last" | "interval" },
    ): Container.Operator<C, T, T>;

    /**
     * Returns a Container that emits an error if the source completes without emitting a value.
     *
     * @param factory - A factory function invoked to produce the error to be thrown.
     *
     * @category Operator
     */
    throwIfEmpty<T>(factory: Factory<unknown>): Container.Operator<C, T, T>;

    /**
     * @category Constructor
     */
    throws<T>(options?: { raise?: Factory<unknown> }): Container.Of<C, T>;

    /**
     * Returns an `ObservableLike` that completes with an error if the source
     * does not emit a value in given time span.
     *
     * @param duration - Time in ms within which the source must emit values.
     *
     * @category Operator
     */
    timeout<T>(duration: number): Container.Operator<C, T, T>;

    /**
     *
     * @param duration
     *
     * @category Operator
     */
    timeout<T>(duration: Container.Of<C, unknown>): Container.Operator<C, T, T>;

    /**
     * @category Operator
     */
    withCurrentTime<T, TOut>(
      selector: Function2<number, T, TOut>,
    ): Container.Operator<C, T, TOut>;

    /**
     * @category Operator
     */
    withLatestFrom<TA, TB, T>(
      other: Container.Of<C, TB>,
      selector: Function2<TA, TB, T>,
    ): Container.Operator<C, TA, T>;

    /**
     * Returns a container that zips the latest values from
     * multiple sources.
     *
     * @category Constructor
     */
    zipLatest<TA, TB>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
    ): Container.Of<C, readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
    ): Container.Of<C, readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
    ): Container.Of<C, readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
      a: Container.Of<C, TA>,
      b: Container.Of<C, TB>,
      c: Container.Of<C, TC>,
      d: Container.Of<C, TD>,
      e: Container.Of<C, TE>,
      f: Container.Of<C, TF>,
      g: Container.Of<C, TG>,
      h: Container.Of<C, TH>,
      i: Container.Of<C, TI>,
    ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

    /**
     * @category Operator
     */
    zipWithLatestFrom<TA, TB, T>(
      other: Container.Of<C, TB>,
      selector: Function2<TA, TB, T>,
    ): Container.Operator<C, TA, T>;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EnumerableContainer {
  export interface TypeClass<
    C extends Container,
    CEnumerator extends EnumeratorContainer = EnumeratorContainer,
  > {
    /**
     *
     * @category Transform
     */
    enumerate<T>(): Function1<Container.Of<C, T>, Container.Of<CEnumerator, T>>;
  }
}
