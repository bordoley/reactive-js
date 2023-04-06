import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  EventListenerLike_notify,
  MulticastObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike_notify,
  ReplayableLike_buffer,
} from "./__internal__/symbols.js";
import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
  ContainerOperator,
} from "./containers.js";
import { Factory, Function1, Function2, none } from "./functions.js";
import { SchedulerLike } from "./scheduling.js";
import {
  DisposableLike,
  EventListenerLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReplayableLike,
} from "./util.js";

export {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike_observerCount,
  ReplayableLike_buffer,
  ObserverLike_notify,
  ObservableLike_observe,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  EventListenerLike_notify,
};

/**
 * A `QueueableLike` type that consumes enqueued events on a scheduler continuation.
 * Events may be enqueud from any execution context.
 *
 * @noInheritDoc
 */
export interface DispatcherLike<T = unknown> extends QueueableLike<T> {
  /**
   * The scheduler that the dispatcher schedules it's event consumer on.
   */
  readonly [DispatcherLike_scheduler]: SchedulerLike;

  /**
   * Communicates to the dispatcher that no more events will be enqueued
   * on the dispatcher.
   */
  [DispatcherLike_complete](): void;
}

/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown>
  extends DispatcherLike<T>,
    DisposableLike {
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
 * @category Container
 */
export interface ObservableLike<T = unknown> extends ContainerLike {
  readonly [ContainerLike_type]?: ObservableLike<this[typeof ContainerLike_T]>;

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
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Container
 */
export interface RunnableLike<T = unknown> extends ObservableLike<T> {
  readonly [ContainerLike_type]?: RunnableLike<this[typeof ContainerLike_T]>;

  readonly [ObservableLike_isRunnable]: true;
}

/**
 * An `ObservableLike` that supports interactive enumeration.
 *
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableLike<T = unknown> extends RunnableLike<T> {
  readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;

  readonly [ObservableLike_isEnumerable]: true;
}

/**
 * A stateful ObservableLike resource.
 *
 * @noInheritDoc
 * @category Container
 */
export interface HotObservableLike<T>
  extends ObservableLike<T>,
    ReplayableLike<T> {
  readonly [ObservableLike_isEnumerable]: false;
  readonly [ObservableLike_isRunnable]: false;
}

/**
 * A stateful ObservableLike resource.
 *
 * @noInheritDoc
 * @category Container
 */
export interface MulticastObservableLike<T = unknown>
  extends HotObservableLike<T>,
    DisposableLike {
  /**
   * The number of observers currently observing the `MulticastObservableLike`.
   */
  readonly [MulticastObservableLike_observerCount]: number;
}

/**
 * An `EventListener` that can be used to publish notifications to one or more observers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface PublisherLike<T = unknown>
  extends EventListenerLike<T>,
    MulticastObservableLike<T> {}

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
export interface TweenAnimationConfig {
  readonly type: "tween";
  readonly from: number;
  readonly to: number;
  readonly duration: number;
  readonly easing?: Function1<number, number>;
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

export type AnimationConfigSelector<T> = T extends number
  ? { readonly selector?: typeof none }
  : { readonly selector: Function1<number, T> };

export type AnimationConfig<T = number> =
  | (TweenAnimationConfig & AnimationConfigSelector<T>)
  | (SpringAnimationConfig & AnimationConfigSelector<T>)
  | DelayAnimationConfig;

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Animate<C extends ObservableLike> extends Container<C> {
  /**
   * @category Constructor
   */
  animate<T = number>(...configs: AnimationConfig<T>[]): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface BackpressureStrategy<C extends ObservableLike>
  extends Container<C> {
  /**
   * @category Operator
   */
  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface CombineLatest<C extends ObservableLike> extends Container<C> {
  /**
   * @category Constructor
   */
  combineLatest<TA, TB>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
  ): ContainerOf<C, readonly [TA, TB]>;
  combineLatest<TA, TB, TC>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOf<C, readonly [TA, TB, TC]>;
  combineLatest<TA, TB, TC, TD>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD]>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface CurrentTime<C extends ObservableLike> extends Container<C> {
  /**
   * @category Constructor
   */
  currentTime(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): ContainerOf<C, number>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Enqueue<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Operator
   */
  enqueue<T>(
    queue: QueueableLike<T> | Function1<T, boolean>,
    options?: O,
  ): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Exhaust<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Operator
   */
  exhaust: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ExhaustMap<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   * @category Operator
   */
  exhaustMap: <TA, TB>(
    mapper: Function1<TA, ContainerOf<C, TB>>,
    options?: O,
  ) => ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkCombineLatest<C extends ObservableLike>
  extends Container<C> {
  /**
   * @category Operator
   */
  forkCombineLatest<T, TA, TB>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
  ): ContainerOperator<C, T, readonly [TA, TB]>;
  forkCombineLatest<T, TA, TB, TC>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC]>;
  forkCombineLatest<T, TA, TB, TC, TD>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
    i: ContainerOperator<C, T, TI>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkMerge<C extends ObservableLike> extends Container<C> {
  /**
   * @category Operator
   */
  forkMerge<TIn, TOut>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkZipLatest<C extends ObservableLike> extends Container<C> {
  /**
   * @category Operator
   */
  forkZipLatest<T, TA, TB>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
  ): ContainerOperator<C, T, readonly [TA, TB]>;
  forkZipLatest<T, TA, TB, TC>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC]>;
  forkZipLatest<T, TA, TB, TC, TD>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
  forkZipLatest<T, TA, TB, TC, TD, TE>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
    i: ContainerOperator<C, T, TI>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromEnumerable<T>(
    options?: O,
  ): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromRunnable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromRunnable: <T>(
    options?: O,
  ) => Function1<RunnableLike<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface GenerateLast<
  C extends ContainerLike,
  CInner extends ObservableLike,
  O = never,
> extends Container<C> {
  /**
   * @category Constructor
   */
  generateLast<T>(
    generator: Function1<T, ContainerOf<CInner, T>>,
    initialValue: Factory<T>,
    options?: O,
  ): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Lift<C extends ObservableLike> extends Container<C> {
  /**
   * @category Operator
   */
  lift<TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Merge<C extends ObservableLike> extends Container<C> {
  /**
   *
   * @category Constructor
   */
  merge<T>(
    fst: ContainerOf<C, T>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MergeAll<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Operator
   */
  mergeAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MergeMap<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   * @category Operator
   */
  mergeMap: <TA, TB>(
    mapper: Function1<TA, ContainerOf<C, TB>>,
    options?: O,
  ) => ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MergeWith<C extends ObservableLike> extends Container<C> {
  /**
   * @category Operator
   */
  mergeWith: <T>(
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ) => ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Retry<C extends ObservableLike> extends Container<C> {
  /**
   * Returns an `ObservableLike` that mirrors the source, re-subscribing
   * if the source completes with an error.
   *
   * @category Operator
   */
  retry<T>(): ContainerOperator<C, T, T>;

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
  ): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ScanLast<
  C extends ContainerLike,
  CInner extends ObservableLike,
> extends Container<C> {
  /**
   * @category Operator
   */
  scanLast: <T, TAcc>(
    scanner: Function2<TAcc, T, ContainerOf<CInner, TAcc>>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ScanMany<
  C extends ContainerLike,
  CInner extends ObservableLike,
> extends Container<C> {
  /**
   * @category Operator
   */
  scanMany: <T, TAcc>(
    scanner: Function2<TAcc, T, ContainerOf<CInner, TAcc>>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Spring<C extends ObservableLike> extends Container<C> {
  /**
   * @category Constructor
   */
  spring(options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): ContainerOf<C, number>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface SwitchAll<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Operator
   */
  switchAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface SwitchMap<C extends ObservableLike, O = never>
  extends Container<C> {
  /**
   * @category Operator
   */
  switchMap: <TA, TB>(
    mapper: Function1<TA, ContainerOf<C, TB>>,
    options?: O,
  ) => ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface TakeUntil<C extends ObservableLike> extends Container<C> {
  /**
   * @category Operator
   */
  takeUntil<T>(notifier: C): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Throttle<C extends ObservableLike> extends Container<C> {
  /**
   * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
   *
   * @param duration - Function function that is used to determine the silence duration in between emitted values.
   * @param mode - The throttle mode.
   *
   * @category Operator
   */
  throttle<T>(
    duration: Function1<T, C>,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): ContainerOperator<C, T, T>;

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
  ): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Timeout<C extends ObservableLike> extends Container<C> {
  /**
   * Returns an `ObservableLike` that completes with an error if the source
   * does not emit a value in given time span.
   *
   * @param duration - Time in ms within which the source must emit values.
   *
   * @category Operator
   */
  timeout<T>(duration: number): ContainerOperator<C, T, T>;

  /**
   *
   * @param duration
   *
   * @category Operator
   */
  timeout<T>(duration: C): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToEnumerable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Transform
   */
  toEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToObservable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Transform
   */
  toObservable: <T>(
    options?: O,
  ) => Function1<ContainerOf<C, T>, ObservableLike<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToRunnable<C extends ContainerLike, O = never>
  extends Container<C> {
  /**
   * @category Transform
   */
  toRunnable: <T>(options?: O) => Function1<ContainerOf<C, T>, RunnableLike<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Tween<C extends ObservableLike> extends Container<C> {
  /**
   * @category Constructor
   */
  tween(
    duration: number,
    options?: {
      readonly easing?: Function1<number, number>;
    },
  ): ContainerOf<C, number>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface WithCurrentTime<C extends ObservableLike>
  extends Container<C> {
  /**
   * @category Operator
   */
  withCurrentTime<T, TOut>(
    selector: Function2<number, T, TOut>,
  ): ContainerOperator<C, T, TOut>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface WithLatestFrom<C extends ObservableLike> extends Container<C> {
  /**
   * @category Operator
   */
  withLatestFrom<TA, TB, T>(
    other: ContainerOf<C, TB>,
    selector: Function2<TA, TB, T>,
  ): ContainerOperator<C, TA, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ZipLatest<C extends ObservableLike> extends Container<C> {
  /**
   * Returns a container that zips the latest values from
   * multiple sources.
   *
   * @category Constructor
   */
  zipLatest<TA, TB>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
  ): ContainerOf<C, readonly [TA, TB]>;
  zipLatest<TA, TB, TC>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOf<C, readonly [TA, TB, TC]>;
  zipLatest<TA, TB, TC, TD>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD]>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ZipWithLatestFrom<C extends ObservableLike>
  extends Container<C> {
  /**
   * @category Operator
   */
  zipWithLatestFrom<TA, TB, T>(
    other: ContainerOf<C, TB>,
    selector: Function2<TA, TB, T>,
  ): ContainerOperator<C, TA, T>;
}
