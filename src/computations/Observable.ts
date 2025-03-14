import {
  ComputationModule,
  ComputationOf,
  ComputationOperatorWithSideEffects,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  ConcurrentReactiveComputationModule,
  DeferredComputationModule,
  DeferredComputationWithSideEffectsLike,
  DeferredComputationWithSideEffectsOf,
  DeferredObservableWithSideEffectsLike,
  DeferredReactiveComputationModule,
  EventSourceLike,
  FromIterableSynchronousOperator,
  HigherOrderComputationOperator,
  HigherOrderInnerComputationLike,
  HigherOrderInnerComputationOf,
  MulticastComputationLike,
  MulticastObservableLike,
  ObservableLike,
  PauseableEventSourceLike,
  PauseableObservableLike,
  PureComputationOf,
  PureDeferredComputationLike,
  PureDeferredComputationOf,
  PureDeferredObservableLike,
  PureSynchronousComputationOf,
  PureSynchronousObservableLike,
  StatefulAsynchronousComputationOperator,
  StatefulSynchronousComputationOperator,
  StatelessAsynchronousComputationOperator,
  StatelessComputationOperator,
  StoreLike,
  SynchronousComputationModule,
  SynchronousComputationOf,
  SynchronousComputationWithSideEffectsOf,
  SynchronousObservableLike,
  SynchronousObservableWithSideEffectsLike,
  ToRunnableOperator,
} from "../computations.js";
import {
  AsyncFunction1,
  AsyncFunction2,
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  Reducer,
  SideEffect,
  SideEffect1,
  Tuple2,
  Tuple3,
  Tuple4,
  Updater,
  identity,
  returns,
} from "../functions.js";
import {
  BackpressureStrategy,
  DisposableLike,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  SchedulerLike,
} from "../utils.js";
import Observable_actionReducer from "./Observable/__private__/Observable.actionReducer.js";
import Observable_backpressureStrategy from "./Observable/__private__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__private__/Observable.combineLatest.js";
import Observable_computeDeferred from "./Observable/__private__/Observable.computeDeferred.js";
import Observable_computeSynchronousObservable from "./Observable/__private__/Observable.computeSynchronousObservable.js";
import {
  BatchedComputeMode as ObservableCompute_BatchedComputeMode,
  CombineLatestComputeMode as ObservableCompute_CombineLatestComputeMode,
} from "./Observable/__private__/Observable.computeWithConfig.js";
import Observable_concat from "./Observable/__private__/Observable.concat.js";
import Observable_concatAll from "./Observable/__private__/Observable.concatAll.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_currentTime from "./Observable/__private__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__private__/Observable.defer.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__private__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_enqueue from "./Observable/__private__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__private__/Observable.exhaust.js";
import Observable_first from "./Observable/__private__/Observable.first.js";
import Observable_firstAsync from "./Observable/__private__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__private__/Observable.flatMapAsync.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_forkMerge from "./Observable/__private__/Observable.forkMerge.js";
import Observable_fromAsyncFactory from "./Observable/__private__/Observable.fromAsyncFactory.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_fromEventSource from "./Observable/__private__/Observable.fromEventSource.js";
import Observable_fromIterable from "./Observable/__private__/Observable.fromIterable.js";
import Observable_fromPromise from "./Observable/__private__/Observable.fromPromise.js";
import Observable_fromReadonlyArray from "./Observable/__private__/Observable.fromReadonlyArray.js";
import Observable_fromStore from "./Observable/__private__/Observable.fromStore.js";
import Observable_fromValue from "./Observable/__private__/Observable.fromValue.js";
import Observable_generate from "./Observable/__private__/Observable.generate.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_keyFrame from "./Observable/__private__/Observable.keyFrame.js";
import Observable_last from "./Observable/__private__/Observable.last.js";
import Observable_lastAsync from "./Observable/__private__/Observable.lastAsync.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_merge from "./Observable/__private__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__private__/Observable.mergeAll.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import Observable_never from "./Observable/__private__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__private__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_raise from "./Observable/__private__/Observable.raise.js";
import Observable_reduce from "./Observable/__private__/Observable.reduce.js";
import Observable_reduceAsync from "./Observable/__private__/Observable.reduceAsync.js";
import Observable_repeat from "./Observable/__private__/Observable.repeat.js";
import Observable_retry from "./Observable/__private__/Observable.retry.js";
import Observable_run from "./Observable/__private__/Observable.run.js";
import Observable_scan from "./Observable/__private__/Observable.scan.js";
import Observable_scanMany from "./Observable/__private__/Observable.scanMany.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_spring from "./Observable/__private__/Observable.spring.js";
import Observable_subscribe from "./Observable/__private__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__private__/Observable.subscribeOn.js";
import Observable_switchAll from "./Observable/__private__/Observable.switchAll.js";
import Observable_takeFirst from "./Observable/__private__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__private__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__private__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__private__/Observable.takeWhile.js";
import Observable_throttle, {
  ThrottleFirstMode as ObservableThrottle_ThrottleFirstMode,
  ThrottleIntervalMode as ObservableThrottle_ThrottleIntervalMode,
  ThrottleLastMode as ObservableThrottle_ThrottleLastMode,
} from "./Observable/__private__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__private__/Observable.throwIfEmpty.js";
import Observable_toEventSource from "./Observable/__private__/Observable.toEventSource.js";
import Observable_toPauseableEventSource from "./Observable/__private__/Observable.toPauseableEventSource.js";
import Observable_toPauseableObservable from "./Observable/__private__/Observable.toPauseableObservable.js";
import Observable_toReadonlyArray from "./Observable/__private__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_toRunnable from "./Observable/__private__/Observable.toRunnable.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
import Observable_zipLatest from "./Observable/__private__/Observable.zipLatest.js";

export interface ObservableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ObservableLike<this[typeof Computation_T]>;

  readonly [Computation_pureDeferredOfT]?: PureDeferredObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: DeferredObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_pureSynchronousOfT]?: PureSynchronousObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_multicastOfT]: MulticastObservableLike<
    this[typeof Computation_T]
  >;
}

export type Computation = ObservableComputation;

export const BatchedComputeMode = ObservableCompute_BatchedComputeMode;
export const CombineLatestComputeMode =
  ObservableCompute_CombineLatestComputeMode;

export type ComputeMode =
  | typeof BatchedComputeMode
  | typeof CombineLatestComputeMode;

export const ThrottleFirstMode = ObservableThrottle_ThrottleFirstMode;
export const ThrottleLastMode = ObservableThrottle_ThrottleLastMode;
export const ThrottleIntervalMode = ObservableThrottle_ThrottleIntervalMode;

export type ThrottleMode =
  | typeof ThrottleFirstMode
  | typeof ThrottleLastMode
  | typeof ThrottleIntervalMode;

interface ForkMerge {
  <TIn, TOut>(
    fst: Function1<
      MulticastObservableLike<TIn>,
      HigherOrderInnerComputationOf<
        ObservableComputation,
        PureDeferredComputationLike,
        TOut
      >
    >,
    snd: Function1<
      MulticastObservableLike<TIn>,
      HigherOrderInnerComputationOf<
        ObservableComputation,
        PureDeferredComputationLike,
        TOut
      >
    >,
    ...tail: Function1<
      MulticastObservableLike<TIn>,
      HigherOrderInnerComputationOf<
        ObservableComputation,
        PureDeferredComputationLike,
        TOut
      >
    >[]
  ): HigherOrderComputationOperator<
    ObservableComputation,
    PureDeferredComputationLike,
    TIn,
    TOut
  >;

  <TIn, TOut, TInnerType extends DeferredComputationWithSideEffectsLike>(
    fst: Function1<
      MulticastObservableLike<TIn>,
      HigherOrderInnerComputationOf<ObservableComputation, TInnerType, TOut>
    >,
    snd: Function1<
      MulticastObservableLike<TIn>,
      HigherOrderInnerComputationOf<ObservableComputation, TInnerType, TOut>
    >,
    ...tail: readonly [
      ...Function1<
        MulticastObservableLike<TIn>,
        HigherOrderInnerComputationOf<ObservableComputation, TInnerType, TOut>
      >[],
      {
        innerType?: TInnerType;
      },
    ]
  ): HigherOrderComputationOperator<
    ObservableComputation,
    TInnerType,
    TIn,
    TOut
  >;

  <TIn, TOut>(
    fst: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>,
    snd: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>,
    ...tail: readonly [
      ...Function1<
        MulticastObservableLike<TIn>,
        MulticastObservableLike<TOut>
      >[],
      {
        innerType: MulticastComputationLike;
      },
    ]
  ): StatelessComputationOperator<ObservableComputation, TIn, TOut>;
}

interface CombineConstructor {
  <TA, TB>(
    a: PureSynchronousComputationOf<ObservableComputation, TA>,
    b: PureSynchronousComputationOf<ObservableComputation, TB>,
  ): PureSynchronousComputationOf<ObservableComputation, Tuple2<TA, TB>>;
  <TA, TB, TC>(
    a: PureSynchronousComputationOf<ObservableComputation, TA>,
    b: PureSynchronousComputationOf<ObservableComputation, TB>,
    c: PureSynchronousComputationOf<ObservableComputation, TC>,
  ): PureSynchronousComputationOf<ObservableComputation, Tuple3<TA, TB, TC>>;
  <TA, TB, TC, TD>(
    a: PureSynchronousComputationOf<ObservableComputation, TA>,
    b: PureSynchronousComputationOf<ObservableComputation, TB>,
    c: PureSynchronousComputationOf<ObservableComputation, TC>,
    d: PureSynchronousComputationOf<ObservableComputation, TD>,
  ): PureSynchronousComputationOf<
    ObservableComputation,
    Tuple4<TA, TB, TC, TD>
  >;

  <TA, TB>(
    a: SynchronousComputationOf<ObservableComputation, TA>,
    b: SynchronousComputationOf<ObservableComputation, TB>,
  ): SynchronousComputationWithSideEffectsOf<
    ObservableComputation,
    Tuple2<TA, TB>
  >;
  <TA, TB, TC>(
    a: SynchronousComputationOf<ObservableComputation, TA>,
    b: SynchronousComputationOf<ObservableComputation, TB>,
    c: SynchronousComputationOf<ObservableComputation, TC>,
  ): SynchronousComputationWithSideEffectsOf<
    ObservableComputation,
    Tuple3<TA, TB, TC>
  >;
  <TA, TB, TC, TD>(
    a: SynchronousComputationOf<ObservableComputation, TA>,
    b: SynchronousComputationOf<ObservableComputation, TB>,
    c: SynchronousComputationOf<ObservableComputation, TC>,
    d: SynchronousComputationOf<ObservableComputation, TD>,
  ): SynchronousComputationWithSideEffectsOf<
    ObservableComputation,
    Tuple4<TA, TB, TC, TD>
  >;

  <TA, TB>(
    a: PureDeferredComputationOf<ObservableComputation, TA>,
    b: PureDeferredComputationOf<ObservableComputation, TB>,
  ): PureDeferredComputationOf<ObservableComputation, Tuple2<TA, TB>>;
  <TA, TB, TC>(
    a: PureDeferredComputationOf<ObservableComputation, TA>,
    b: PureDeferredComputationOf<ObservableComputation, TB>,
    c: PureDeferredComputationOf<ObservableComputation, TC>,
  ): PureDeferredComputationOf<ObservableComputation, Tuple3<TA, TB, TC>>;
  <TA, TB, TC, TD>(
    a: PureDeferredComputationOf<ObservableComputation, TA>,
    b: PureDeferredComputationOf<ObservableComputation, TB>,
    c: PureDeferredComputationOf<ObservableComputation, TC>,
    d: PureDeferredComputationOf<ObservableComputation, TD>,
  ): PureDeferredComputationOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;

  <TA, TB>(
    a: PureComputationOf<ObservableComputation, TA>,
    b: PureComputationOf<ObservableComputation, TB>,
  ): PureDeferredComputationOf<ObservableComputation, Tuple2<TA, TB>>;
  <TA, TB, TC>(
    a: PureComputationOf<ObservableComputation, TA>,
    b: PureComputationOf<ObservableComputation, TB>,
    c: PureComputationOf<ObservableComputation, TC>,
  ): PureDeferredComputationOf<ObservableComputation, Tuple3<TA, TB, TC>>;
  <TA, TB, TC, TD>(
    a: PureComputationOf<ObservableComputation, TA>,
    b: PureComputationOf<ObservableComputation, TB>,
    c: PureComputationOf<ObservableComputation, TC>,
    d: PureComputationOf<ObservableComputation, TD>,
  ): PureDeferredComputationOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;

  <TA, TB>(
    a: ComputationOf<ObservableComputation, TA>,
    b: ComputationOf<ObservableComputation, TB>,
  ): DeferredComputationWithSideEffectsOf<
    ObservableComputation,
    Tuple2<TA, TB>
  >;
  <TA, TB, TC>(
    a: ComputationOf<ObservableComputation, TA>,
    b: ComputationOf<ObservableComputation, TB>,
    c: ComputationOf<ObservableComputation, TC>,
  ): DeferredComputationWithSideEffectsOf<
    ObservableComputation,
    Tuple3<TA, TB, TC>
  >;
  <TA, TB, TC, TD>(
    a: ComputationOf<ObservableComputation, TA>,
    b: ComputationOf<ObservableComputation, TB>,
    c: ComputationOf<ObservableComputation, TC>,
    d: ComputationOf<ObservableComputation, TD>,
  ): DeferredComputationWithSideEffectsOf<
    ObservableComputation,
    Tuple4<TA, TB, TC, TD>
  >;
}

/**
 * @noInheritDoc
 */
export interface ObservableModule
  extends ComputationModule<ObservableComputation>,
    DeferredComputationModule<ObservableComputation>,
    SynchronousComputationModule<ObservableComputation>,
    DeferredReactiveComputationModule<ObservableComputation>,
    ConcurrentReactiveComputationModule<ObservableComputation> {
  actionReducer<TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StatefulSynchronousComputationOperator<ObservableComputation, TAction, T>;

  backpressureStrategy<T>(options: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;

  combineLatest: CombineConstructor;

  computeDeferred<T>(
    computation: Factory<T>,
    options?: {
      readonly mode?: ComputeMode;
    },
  ): DeferredObservableWithSideEffectsLike<T>;

  computeSynchronousObservable<T>(
    computation: Factory<T>,
    options?: {
      readonly mode?: ComputeMode;
    },
  ): SynchronousObservableWithSideEffectsLike<T>;

  create<T>(
    f: SideEffect1<ObserverLike<T>>,
  ): DeferredObservableWithSideEffectsLike<T>;

  currentTime: PureSynchronousObservableLike<number>;

  defer<T>(
    f: Factory<MulticastObservableLike<T> & DisposableLike>,
  ): PureDeferredObservableLike<T>;

  empty<T>(options?: {
    readonly delay: number;
  }): PureSynchronousObservableLike<T>;

  enqueue<T>(
    queue: QueueableLike<T>,
  ): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;

  exhaust<T>(): HigherOrderComputationOperator<
    ObservableComputation,
    PureSynchronousObservableLike,
    PureSynchronousObservableLike<T>,
    T
  >;
  exhaust<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
    readonly innerType: TInnerType;
  }): HigherOrderComputationOperator<
    ObservableComputation,
    TInnerType,
    HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>,
    T
  >;

  first<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, Optional<T>>;

  firstAsync<T>(options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: BackpressureStrategy;
  }): AsyncFunction1<ObservableLike<T>, Optional<T>>;

  firstAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): AsyncFunction1<ObservableLike<T>, Optional<T>>;

  flatMapAsync<TA, TB>(
    f: AsyncFunction2<TA, AbortSignal, TB>,
  ): HigherOrderComputationOperator<
    ObservableComputation,
    DeferredComputationWithSideEffectsLike,
    TA,
    TB
  >;

  forkMerge: ForkMerge;

  fromAsyncFactory<T>(): Function1<
    AsyncFunction1<AbortSignal, T>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  fromEventSource<T>(): Function1<
    EventSourceLike<T>,
    MulticastObservableLike<T>
  >;

  fromIterable<T>(options?: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): FromIterableSynchronousOperator<ObservableComputation, T>;

  fromPromise<T>(): Function1<Promise<T>, MulticastObservableLike<T>>;

  fromReadonlyArray<T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, PureSynchronousObservableLike<T>>;

  fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;

  fromValue<T>(options?: {
    readonly delay: number;
  }): Function1<T, PureSynchronousObservableLike<T>>;

  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: {
      readonly count?: number;
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): PureSynchronousObservableLike<T>;

  keyFrame(
    duration: number,
    options?: {
      readonly easing?: Function1<number, number>;
    },
  ): PureSynchronousObservableLike<number>;

  last<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, Optional<T>>;

  lastAsync<T>(options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: BackpressureStrategy;
  }): AsyncFunction1<ObservableLike<T>, Optional<T>>;
  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): AsyncFunction1<ObservableLike<T>, Optional<T>>;

  mergeAll<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
  }): HigherOrderComputationOperator<
    ObservableComputation,
    PureSynchronousObservableLike,
    PureSynchronousObservableLike<T>,
    T
  >;
  mergeAll<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
    readonly innerType: TInnerType;
  }): HigherOrderComputationOperator<
    ObservableComputation,
    TInnerType,
    HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>,
    T
  >;

  multicast<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): Function1<ObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;

  onSubscribe<T>(
    f: Factory<DisposableLike | SideEffect1<Optional<Error>>> | SideEffect,
  ): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;

  raise<T>(options?: {
    readonly raise?: Factory<unknown>;
    readonly delay?: number;
  }): PureSynchronousObservableLike<T>;

  reduceAsync<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): AsyncFunction1<ObservableLike<T>, TAcc>;
  reduceAsync<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
    scheduler: SchedulerLike,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): AsyncFunction1<ObservableLike<T>, TAcc>;

  run<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): SideEffect1<SynchronousObservableLike<T>>;

  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
  ): HigherOrderComputationOperator<
    ObservableComputation,
    PureSynchronousObservableLike,
    T,
    TAcc
  >;
  scanMany<T, TAcc, TInnerType extends HigherOrderInnerComputationLike>(
    scanner: Function2<
      TAcc,
      T,
      HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>
    >,
    initialValue: Factory<TAcc>,
    options: {
      readonly innerType: TInnerType;
    },
  ): HigherOrderComputationOperator<ObservableComputation, TInnerType, T, TAcc>;

  spring(options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): PureSynchronousObservableLike<number>;

  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    } & Partial<
      Pick<
        QueueableLike,
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
      >
    >,
  ): Function1<ObservableLike<T>, DisposableLike>;

  subscribeOn<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;

  switchAll<T>(): HigherOrderComputationOperator<
    ObservableComputation,
    PureSynchronousObservableLike,
    PureSynchronousObservableLike<T>,
    T
  >;
  switchAll<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
    readonly innerType: TInnerType;
  }): HigherOrderComputationOperator<
    ObservableComputation,
    TInnerType,
    HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>,
    T
  >;

  takeUntil<T>(
    notifier: PureSynchronousObservableLike,
  ): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
  takeUntil<T>(
    notifier: SynchronousObservableWithSideEffectsLike,
  ): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
  takeUntil<T>(
    notifier: PureDeferredObservableLike,
  ): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;
  takeUntil<T>(
    notifier: DeferredObservableWithSideEffectsLike,
  ): Function1<
    ComputationOf<ObservableComputation, T>,
    DeferredObservableWithSideEffectsLike<T>
  >;
  takeUntil<T>(
    notifier: MulticastObservableLike,
  ): StatelessAsynchronousComputationOperator<ObservableComputation, T, T>;

  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;

  toEventSource<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, EventSourceLike<T> & DisposableLike>;

  toPauseableObservable<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly replay?: number;
    },
  ): Function1<
    SynchronousObservableLike<T>,
    PauseableObservableLike<T> & DisposableLike
  >;

  toPauseableEventSource<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Function1<
    SynchronousObservableLike<T>,
    PauseableEventSourceLike<T> & DisposableLike
  >;

  toReadonlyArray<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>>;
  toReadonlyArrayAsync<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  }): AsyncFunction1<ObservableLike<T>, ReadonlyArray<T>>;
  toReadonlyArrayAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): AsyncFunction1<ObservableLike<T>, ReadonlyArray<T>>;

  toReadonlyArrayAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): AsyncFunction1<ObservableLike<T>, ReadonlyArray<T>>;

  toRunnable<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): ToRunnableOperator<ObservableComputation, T>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): StatefulSynchronousComputationOperator<ObservableComputation, TA, TB>;

  zipLatest: CombineConstructor;
}

export type Signature = ObservableModule;

export const actionReducer: Signature["actionReducer"] =
  Observable_actionReducer;
export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest;
export const computeDeferred: Signature["computeDeferred"] =
  Observable_computeDeferred;
export const computeSynchronousObservable: Signature["computeSynchronousObservable"] =
  Observable_computeSynchronousObservable;
export const concatAll: Signature["concatAll"] = Observable_concatAll;
export const concat: Signature["concat"] = Observable_concat;
export const create: Signature["create"] = Observable_create;
export const currentTime: Signature["currentTime"] = Observable_currentTime;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const defer: Signature["defer"] = Observable_defer;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const exhaust: Signature["exhaust"] = Observable_exhaust;
export const first: Signature["first"] = Observable_first;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const flatMapAsync: Signature["flatMapAsync"] = Observable_flatMapAsync;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkMerge: Signature["forkMerge"] = Observable_forkMerge;
export const fromAsyncFactory: Signature["fromAsyncFactory"] =
  Observable_fromAsyncFactory;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  Observable_fromAsyncIterable;
export const fromEventSource: Signature["fromEventSource"] =
  Observable_fromEventSource;
export const fromIterable: Signature["fromIterable"] = Observable_fromIterable;
export const fromObservable: Signature["fromObservable"] = Observable_multicast;
export const fromPromise: Signature["fromPromise"] = Observable_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Observable_fromReadonlyArray;
export const fromStore: Signature["fromStore"] = Observable_fromStore;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const generate: Signature["generate"] = Observable_generate;
export const keep: Signature["keep"] = Observable_keep;
export const keyFrame: Signature["keyFrame"] = Observable_keyFrame;
export const last: Signature["last"] = Observable_last;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const mergeAll: Signature["mergeAll"] = Observable_mergeAll;
export const merge: Signature["merge"] = Observable_merge;
export const multicast: Signature["multicast"] = Observable_multicast;
export const never: Signature["never"] = Observable_never;
export const onSubscribe: Signature["onSubscribe"] = Observable_onSubscribe;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const raise: Signature["raise"] = Observable_raise;
export const reduce: Signature["reduce"] = Observable_reduce;
export const reduceAsync: Signature["reduceAsync"] = Observable_reduceAsync;
export const repeat: Signature["repeat"] = Observable_repeat;
export const retry: Signature["retry"] = Observable_retry;
export const run: Signature["run"] = Observable_run;
export const scan: Signature["scan"] = Observable_scan;
export const scanMany: Signature["scanMany"] = Observable_scanMany;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const spring: Signature["spring"] = Observable_spring;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const subscribeOn: Signature["subscribeOn"] = Observable_subscribeOn;
export const switchAll: Signature["switchAll"] = Observable_switchAll;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const toEventSource: Signature["toEventSource"] =
  Observable_toEventSource;
export const toObservable: Signature["toObservable"] = /*@__PURE__*/ returns(
  identity,
) as Signature["toObservable"];
export const toPauseableEventSource: Signature["toPauseableEventSource"] =
  Observable_toPauseableEventSource;
export const toPauseableObservable: Signature["toPauseableObservable"] =
  Observable_toPauseableObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Observable_toReadonlyArray;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Observable_toReadonlyArrayAsync;
export const toRunnable: Signature["toRunnable"] = Observable_toRunnable;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Observable_zipLatest;
