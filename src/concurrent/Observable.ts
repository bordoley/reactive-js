import {
  Computation,
  ComputationLike_isSynchronous,
  ComputationOf,
  ComputationWithSideEffectsLike,
  ComputationWithSideEffectsOf,
  Computation_T,
  Computation_ofT,
  Computation_pureOfT,
  Computation_withSideEffectsOfT,
  DeferredComputationWithSideEffectsType,
  IterableLike,
  PureComputationLike,
  PureComputationOf,
  PureDeferredComputationType,
  PureIterableLike,
  PureSynchronousComputationType,
  RunnableLike,
  SynchronousComputationWithSideEffectsType,
} from "../computations.js";
import {
  DeferredObservableLike,
  DeferredObservableWithSideEffectsLike,
  DispatcherLike,
  MulticastObservableLike,
  ObservableLike,
  ObserverLike,
  PureDeferredObservableLike,
  PureObservableLike,
  PureSynchronousObservableLike,
  SchedulerLike,
  SynchronousObservableLike,
  SynchronousObservableWithSideEffectsLike,
} from "../concurrent.js";
import { EventListenerLike, EventSourceLike, StoreLike } from "../events.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Optional,
  Predicate,
  Reducer,
  SideEffect,
  SideEffect1,
  Tuple2,
  Tuple3,
  Tuple4,
  Tuple5,
  Tuple6,
  Tuple7,
  Tuple8,
  Tuple9,
  Updater,
} from "../functions.js";
import {
  BackpressureStrategy,
  DisposableLike,
  QueueableLike,
} from "../utils.js";
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
import Observable_concatMany from "./Observable/__private__/Observable.concatMany.js";
import Observable_concatMap from "./Observable/__private__/Observable.concatMap.js";
import Observable_concatWith from "./Observable/__private__/Observable.concatWith.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_currentTime from "./Observable/__private__/Observable.currentTime.js";
import Observable_debug from "./Observable/__private__/Observable.debug.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__private__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__private__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__private__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_enqueue from "./Observable/__private__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__private__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__private__/Observable.exhaustMap.js";
import Observable_firstAsync from "./Observable/__private__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__private__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__private__/Observable.flatMapIterable.js";
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
import Observable_ignoreElements from "./Observable/__private__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_keyFrame from "./Observable/__private__/Observable.keyFrame.js";
import Observable_last from "./Observable/__private__/Observable.last.js";
import Observable_lastAsync from "./Observable/__private__/Observable.lastAsync.js";
import Observable_log from "./Observable/__private__/Observable.log.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_merge from "./Observable/__private__/Observable.merge.js";
import Observable_mergeAll from "./Observable/__private__/Observable.mergeAll.js";
import Observable_mergeMany from "./Observable/__private__/Observable.mergeMany.js";
import Observable_mergeMap from "./Observable/__private__/Observable.mergeMap.js";
import Observable_mergeWith from "./Observable/__private__/Observable.mergeWith.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import Observable_never from "./Observable/__private__/Observable.never.js";
import Observable_notify from "./Observable/__private__/Observable.notify.js";
import Observable_onSubscribe from "./Observable/__private__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_raise from "./Observable/__private__/Observable.raise.js";
import Observable_reduce from "./Observable/__private__/Observable.reduce.js";
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
import Observable_switchMap from "./Observable/__private__/Observable.switchMap.js";
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
import Observable_toReadonlyArray from "./Observable/__private__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_toRunnable from "./Observable/__private__/Observable.toRunnable.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
import Observable_zipLatest from "./Observable/__private__/Observable.zipLatest.js";

export type ObservableOperator<
  TIn,
  out TOut,
  TObservableInBase extends ObservableLike<TIn> = ObservableLike<TIn>,
> = <TObservableIn extends TObservableInBase>(
  observable: TObservableIn,
) => ObservableComputationOf<TObservableIn, TOut>;

export type ObservableOperatorWithSideEffects<TIn, out TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => ObservableComputationOf<
  TObservableIn extends DeferredObservableLike
    ? DeferredObservableWithSideEffectsLike &
        Pick<TObservableIn, typeof ComputationLike_isSynchronous>
    : DeferredObservableWithSideEffectsLike,
  TOut
>;

export type DeferredReactiveObservableOperator<TIn, out TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => ObservableComputationOf<
  TObservableIn extends DeferredObservableLike
    ? TObservableIn
    : TObservableIn extends PureObservableLike
      ? PureDeferredObservableLike
      : DeferredObservableWithSideEffectsLike,
  TOut
>;

export type DeferringObservableOperator<TIn, out TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  obs: TObservableIn,
) => TObservableIn extends PureObservableLike<TIn>
  ? PureDeferredObservableLike<TOut>
  : DeferredObservableWithSideEffectsLike<TOut>;

export type ObservableComputationFor<Type extends ObservableLike> =
  Type extends MulticastObservableLike
    ? MulticastObservableComputation
    : Type extends SynchronousObservableLike
      ? SynchronousObservableComputation
      : Type extends DeferredObservableLike
        ? DeferredObservableComputation
        : ObservableComputation;

export type ObservableComputationOf<
  Type extends ObservableLike,
  T,
> = Type extends PureComputationLike
  ? PureComputationOf<ObservableComputationFor<Type>, T>
  : Type extends ComputationWithSideEffectsLike
    ? ComputationWithSideEffectsOf<ObservableComputationFor<Type>, T>
    : ComputationOf<ObservableComputationFor<Type>, T>;

interface SynchronousObservableComputation extends Computation {
  readonly [Computation_ofT]?: SynchronousObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_pureOfT]?: PureSynchronousObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_withSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

interface DeferredObservableComputation extends Computation {
  readonly [Computation_ofT]?: DeferredObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_pureOfT]?: PureDeferredObservableLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_withSideEffectsOfT]?: DeferredObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

interface MulticastObservableComputation extends Computation {
  readonly [Computation_ofT]?: MulticastObservableLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_pureOfT]?: MulticastObservableLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_withSideEffectsOfT]?: never;
}

interface ObservableComputation extends Computation {
  readonly [Computation_ofT]?: ObservableLike<this[typeof Computation_T]>;
}

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
/**
 * @noInheritDoc
 */
export interface ObservableModule {
  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: BackpressureStrategy,
  ): DeferredReactiveObservableOperator<T, T>;

  buffer<T>(options?: {
    readonly count?: number;
  }): DeferredReactiveObservableOperator<T, readonly T[]>;

  catchError<T>(
    onError: SideEffect1<Error>,
  ): DeferredReactiveObservableOperator<T, T>;

  combineLatest<TA, TB>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
  ): PureSynchronousObservableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
  ): PureSynchronousObservableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
  ): PureSynchronousObservableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
  ): PureSynchronousObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
  ): PureSynchronousObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
    g: PureSynchronousObservableLike<TG>,
  ): PureSynchronousObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
    g: PureSynchronousObservableLike<TG>,
    h: PureSynchronousObservableLike<TH>,
  ): PureSynchronousObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
    g: PureSynchronousObservableLike<TG>,
    h: PureSynchronousObservableLike<TH>,
    i: PureSynchronousObservableLike<TI>,
  ): PureSynchronousObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
  ): SynchronousObservableWithSideEffectsLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
  ): SynchronousObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
  ): SynchronousObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
  ): SynchronousObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
  ): SynchronousObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
    g: SynchronousObservableLike<TG>,
  ): SynchronousObservableWithSideEffectsLike<
    Tuple7<TA, TB, TC, TD, TE, TF, TG>
  >;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
    g: SynchronousObservableLike<TG>,
    h: SynchronousObservableLike<TH>,
  ): SynchronousObservableWithSideEffectsLike<
    Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>
  >;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
    g: SynchronousObservableLike<TG>,
    h: SynchronousObservableLike<TH>,
    i: SynchronousObservableLike<TI>,
  ): SynchronousObservableWithSideEffectsLike<
    Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>
  >;

  combineLatest<TA, TB>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
  ): PureDeferredObservableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
  ): PureDeferredObservableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
  ): PureDeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
  ): PureDeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
  ): PureDeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
  ): PureDeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
    h: PureObservableLike<TH>,
  ): PureDeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
    h: PureObservableLike<TH>,
    i: PureObservableLike<TI>,
  ): PureDeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
  ): DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
  ): DeferredObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
  ): DeferredObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
  ): DeferredObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
  ): DeferredObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
  ): DeferredObservableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
  ): DeferredObservableWithSideEffectsLike<
    Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>
  >;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
    i: ObservableLike<TI>,
  ): DeferredObservableWithSideEffectsLike<
    Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>
  >;

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

  concat<T>(
    fst: PureSynchronousObservableLike<T>,
    snd: PureSynchronousObservableLike<T>,
    ...tail: readonly PureSynchronousObservableLike<T>[]
  ): PureSynchronousObservableLike<T>;
  concat<T>(
    fst: PureDeferredObservableLike<T>,
    snd: PureDeferredObservableLike<T>,
    ...tail: readonly PureDeferredObservableLike<T>[]
  ): PureDeferredObservableLike<T>;
  concat<T>(
    fst: SynchronousObservableLike<T>,
    snd: SynchronousObservableLike<T>,
    ...tail: readonly SynchronousObservableLike<T>[]
  ): SynchronousObservableWithSideEffectsLike<T>;
  concat<T>(
    fst: DeferredObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): DeferredObservableWithSideEffectsLike<T>;
  concat<T>(
    fst: MulticastObservableLike<T>,
    snd: PureDeferredObservableLike<T>,
    ...tail: readonly PureDeferredObservableLike[]
  ): MulticastObservableLike<T>;
  concat<T>(
    fst: MulticastObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike[]
  ): DeferredObservableWithSideEffectsLike<T>;

  concatAll<T>(): DeferredReactiveObservableOperator<
    PureSynchronousObservableLike<T>,
    T
  >;
  concatAll<T>(options: {
    readonly innerType: typeof PureSynchronousComputationType;
  }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
  concatAll<T>(options: {
    readonly innerType: typeof SynchronousComputationWithSideEffectsType;
  }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
  concatAll<T>(options: {
    readonly innerType: typeof PureDeferredComputationType;
  }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
  concatAll<T>(options: {
    readonly innerType: typeof DeferredComputationWithSideEffectsType;
  }): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  concatMany<T>(
    observables: readonly PureSynchronousObservableLike<T>[],
  ): PureSynchronousObservableLike<T>;
  concatMany<T>(
    observables: readonly PureDeferredObservableLike<T>[],
  ): PureDeferredObservableLike<T>;
  concatMany<T>(
    observables: readonly SynchronousObservableLike<T>[],
  ): SynchronousObservableWithSideEffectsLike<T>;
  concatMany<T>(
    observables: readonly DeferredObservableLike<T>[],
  ): DeferredObservableWithSideEffectsLike<T>;
  concatMany<T>(
    observables: readonly [
      MulticastObservableLike<T>,
      ...(readonly PureDeferredObservableLike<T>[]),
    ],
  ): PureDeferredObservableLike<T>;
  concatMany<T>(
    observables: readonly [
      MulticastObservableLike<T>,
      ...(readonly DeferredObservableLike<T>[]),
    ],
  ): DeferredObservableWithSideEffectsLike<T>;

  concatMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
  ): DeferredReactiveObservableOperator<TA, TB>;
  concatMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureSynchronousComputationType;
    },
  ): DeferredReactiveObservableOperator<TA, TB>;
  concatMap<TA, TB>(
    selector: Function1<TA, SynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    },
  ): ObservableOperatorWithSideEffects<TA, TB>;
  concatMap<TA, TB>(
    selector: Function1<TA, PureDeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureDeferredComputationType;
    },
  ): DeferringObservableOperator<TA, TB>;
  concatMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof DeferredComputationWithSideEffectsType;
    },
  ): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  concatWith<T>(
    snd: PureSynchronousObservableLike<T>,
    ...tail: readonly PureSynchronousObservableLike<T>[]
  ): DeferredReactiveObservableOperator<T, T>;
  concatWith<T>(
    snd: SynchronousObservableLike<T>,
    ...tail: readonly SynchronousObservableLike<T>[]
  ): ObservableOperatorWithSideEffects<T, T>;
  concatWith<T>(
    snd: PureDeferredObservableLike<T>,
    ...tail: readonly PureDeferredObservableLike<T>[]
  ): DeferringObservableOperator<T, T>;
  concatWith<T>(
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): Function1<
    DeferredObservableLike<T> | MulticastObservableLike<T>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  create<T>(
    f: SideEffect1<ObserverLike<T>>,
  ): DeferredObservableWithSideEffectsLike<T>;

  currentTime: PureSynchronousObservableLike<number>;

  debug<T>(): ObservableOperatorWithSideEffects<T, T>;

  decodeWithCharset(options?: {
    readonly charset?: string;
    readonly fatal?: boolean;
    readonly ignoreBOM?: boolean;
  }): DeferredReactiveObservableOperator<ArrayBuffer, string>;

  defer<T>(
    f: Factory<MulticastObservableLike<T>>,
  ): PureDeferredObservableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): ObservableOperatorWithSideEffects<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): DeferredReactiveObservableOperator<T, T>;

  empty<T>(options?: {
    readonly delay: number;
  }): PureSynchronousObservableLike<T>;

  encodeUtf8(): DeferredReactiveObservableOperator<string, Uint8Array>;

  enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;

  exhaust<T>(): DeferredReactiveObservableOperator<
    PureSynchronousObservableLike<T>,
    T
  >;
  exhaust<T>(options: {
    readonly innerType: typeof PureSynchronousComputationType;
  }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
  exhaust<T>(options: {
    readonly innerType: typeof SynchronousComputationWithSideEffectsType;
  }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
  exhaust<T>(options: {
    readonly innerType: typeof PureDeferredComputationType;
  }): DeferringObservableOperator<SynchronousObservableLike<T>, T>;
  exhaust<T>(options: {
    readonly innerType: typeof DeferredComputationWithSideEffectsType;
  }): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  exhaustMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
  ): DeferredReactiveObservableOperator<TA, TB>;
  exhaustMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureSynchronousComputationType;
    },
  ): DeferredReactiveObservableOperator<TA, TB>;
  exhaustMap<TA, TB>(
    selector: Function1<TA, SynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    },
  ): ObservableOperatorWithSideEffects<TA, TB>;
  exhaustMap<TA, TB>(
    selector: Function1<TA, PureDeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureDeferredComputationType;
    },
  ): DeferringObservableOperator<TA, TB>;
  exhaustMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof DeferredComputationWithSideEffectsType;
    },
  ): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  firstAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  flatMapAsync<TA, TB>(
    f: Function2<TA, AbortSignal, Promise<TB>>,
  ): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  flatMapIterable<TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): ObservableOperatorWithSideEffects<TA, TB>;

  forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;

  forkMerge<TIn, TOut>(
    fst: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>,
    snd: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>,
    ...tail: readonly Function1<
      MulticastObservableLike<TIn>,
      MulticastObservableLike<TOut>
    >[]
  ): Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>;
  forkMerge<TIn, TOut>(
    fst: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>,
    snd: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>,
    ...tail: readonly Function1<
      MulticastObservableLike<TIn>,
      ObservableLike<TOut>
    >[]
  ): Function1<
    ObservableLike<TIn>,
    DeferredObservableWithSideEffectsLike<TOut>
  >;

  fromAsyncFactory<T>(): Function1<
    Function1<AbortSignal, Promise<T>>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  fromAsyncIterable<T>(): Function1<
    AsyncIterable<T>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  fromEventSource<T>(): Function1<
    EventSourceLike<T>,
    MulticastObservableLike<T>
  >;

  fromIterable<T>(options?: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): <TIterable extends IterableLike<T> = IterableLike<T>>(
    iterable: TIterable,
  ) => TIterable extends PureIterableLike
    ? PureComputationOf<ObservableComputationFor<SynchronousObservableLike>, T>
    : ComputationWithSideEffectsOf<
        ObservableComputationFor<SynchronousObservableLike>,
        T
      >;

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

  ignoreElements<T>(): ObservableOperator<unknown, T>;

  keep<T>(predicate: Predicate<T>): ObservableOperator<T, T>;

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

  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  log<T>(): ObservableOperatorWithSideEffects<T, T>;

  map<TA, TB>(selector: Function1<TA, TB>): ObservableOperator<TA, TB>;

  merge<T>(
    fst: PureSynchronousObservableLike<T>,
    snd: PureSynchronousObservableLike<T>,
    ...tail: readonly PureSynchronousObservableLike<T>[]
  ): PureSynchronousObservableLike<T>;
  merge<T>(
    fst: PureDeferredObservableLike<T>,
    snd: PureDeferredObservableLike<T>,
    ...tail: readonly PureDeferredObservableLike<T>[]
  ): PureDeferredObservableLike<T>;
  merge<T>(
    fst: SynchronousObservableLike<T>,
    snd: SynchronousObservableLike<T>,
    ...tail: readonly SynchronousObservableLike<T>[]
  ): SynchronousObservableWithSideEffectsLike<T>;
  merge<T>(
    fst: MulticastObservableLike<T>,
    snd: MulticastObservableLike<T>,
    ...tail: readonly MulticastObservableLike<T>[]
  ): MulticastObservableLike<T>;
  merge<T>(
    fst: PureObservableLike<T>,
    snd: PureObservableLike<T>,
    ...tail: readonly PureObservableLike<T>[]
  ): PureDeferredObservableLike<T>;
  merge<T>(
    fst: ObservableLike<T>,
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): DeferredObservableWithSideEffectsLike<T>;

  mergeAll<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
  }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
  mergeAll<T>(options: {
    readonly innerType: typeof PureSynchronousComputationType;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
  }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
  mergeAll<T>(options: {
    readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
  }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
  mergeAll<T>(options: {
    readonly innerType: typeof PureDeferredComputationType;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
  }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
  mergeAll<T>(options?: {
    readonly innerType: typeof DeferredComputationWithSideEffectsType;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly concurrency?: number;
  }): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  mergeMany<T>(
    observables: readonly PureSynchronousObservableLike<T>[],
  ): PureSynchronousObservableLike<T>;
  mergeMany<T>(
    observables: readonly PureDeferredObservableLike<T>[],
  ): PureDeferredObservableLike<T>;
  mergeMany<T>(
    observables: readonly SynchronousObservableLike<T>[],
  ): SynchronousObservableWithSideEffectsLike<T>;
  mergeMany<T>(
    observables: readonly DeferredObservableLike<T>[],
  ): DeferredObservableWithSideEffectsLike<T>;
  mergeMany<T>(
    observables: readonly MulticastObservableLike<T>[],
  ): MulticastObservableLike<T>;
  mergeMany<T>(
    observables: readonly PureObservableLike<T>[],
  ): PureDeferredObservableLike<T>;
  mergeMany<T>(
    observables: readonly ObservableLike<T>[],
  ): DeferredObservableWithSideEffectsLike<T>;

  mergeMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): DeferredReactiveObservableOperator<TA, TB>;
  mergeMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureSynchronousComputationType;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): DeferredReactiveObservableOperator<TA, TB>;
  mergeMap<TA, TB>(
    selector: Function1<TA, SynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof SynchronousComputationWithSideEffectsType;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): ObservableOperatorWithSideEffects<TA, TB>;
  mergeMap<TA, TB>(
    selector: Function1<TA, PureDeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureDeferredComputationType;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): DeferringObservableOperator<TA, TB>;
  mergeMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof DeferredComputationWithSideEffectsType;
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  mergeWith<T>(
    snd: PureSynchronousObservableLike<T>,
    ...tail: readonly PureSynchronousObservableLike<T>[]
  ): DeferredReactiveObservableOperator<T, T>;
  mergeWith<T>(
    snd: SynchronousObservableLike<T>,
    ...tail: readonly SynchronousObservableLike<T>[]
  ): ObservableOperatorWithSideEffects<T, T>;
  mergeWith<T>(
    snd: PureDeferredObservableLike<T>,
    ...tail: readonly PureDeferredObservableLike<T>[]
  ): DeferringObservableOperator<T, T>;
  mergeWith<T>(
    snd: PureObservableLike<T>,
    ...tail: readonly PureObservableLike<T>[]
  ): DeferredReactiveObservableOperator<T, T>;
  mergeWith<T>(
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;

  multicast<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): Function1<
    DeferredObservableLike<T>,
    MulticastObservableLike<T> & DisposableLike
  >;

  never<T>(): MulticastObservableLike<T>;

  notify<T>(
    eventListener: EventListenerLike<T>,
  ): ObservableOperatorWithSideEffects<T, T>;

  onSubscribe<T>(
    f: Factory<DisposableLike>,
  ): ObservableOperatorWithSideEffects<T, T>;
  onSubscribe<T>(
    f: Factory<SideEffect1<Optional<Error>>>,
  ): ObservableOperatorWithSideEffects<T, T>;
  onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;

  pairwise<T>(): DeferredReactiveObservableOperator<T, Tuple2<T, T>>;

  raise<T>(options?: {
    readonly raise?: Factory<unknown>;
    readonly delay?: number;
  }): PureSynchronousObservableLike<T>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<SynchronousObservableLike<T>, TAcc>;

  repeat<T>(
    predicate: Predicate<number>,
  ): ObservableOperator<T, T, DeferredObservableLike>;
  repeat<T>(count: number): ObservableOperator<T, T, DeferredObservableLike>;
  repeat<T>(): ObservableOperator<T, T, DeferredObservableLike>;

  retry<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ): ObservableOperator<T, T, DeferredObservableLike>;

  run<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): SideEffect1<SynchronousObservableLike<T>>;

  scan<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): DeferredReactiveObservableOperator<T, TAcc>;

  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
  ): DeferredReactiveObservableOperator<T, TAcc>;
  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
    options: {
      readonly innerType: typeof PureSynchronousComputationType;
    },
  ): DeferredReactiveObservableOperator<T, TAcc>;
  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, SynchronousObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
    options: {
      readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    },
  ): ObservableOperatorWithSideEffects<T, TAcc>;
  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, PureDeferredObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
    options: {
      readonly innerType: typeof PureDeferredComputationType;
    },
  ): DeferringObservableOperator<T, TAcc>;
  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
    options: {
      readonly innerType: typeof DeferredComputationWithSideEffectsType;
    },
  ): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<TAcc>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): DeferredReactiveObservableOperator<T, T>;

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
    },
  ): Function1<ObservableLike<T>, DisposableLike>;

  subscribeOn<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): <TObservableIn extends ObservableLike<T>>(
    observable: TObservableIn,
  ) => TObservableIn extends PureDeferredObservableLike<T>
    ? PureDeferredObservableLike<T>
    : TObservableIn extends MulticastObservableLike<T>
      ? MulticastObservableLike<T>
      : TObservableIn extends SynchronousObservableWithSideEffectsLike<T>
        ? DeferredObservableWithSideEffectsLike<T>
        : TObservableIn extends DeferredObservableWithSideEffectsLike<T>
          ? DeferredObservableWithSideEffectsLike<T>
          : TObservableIn extends DeferredObservableLike<T>
            ? DeferredObservableLike<T>
            : ObservableLike<T>;

  switchAll<T>(): DeferredReactiveObservableOperator<
    PureSynchronousObservableLike<T>,
    T
  >;
  switchAll<T>(options: {
    readonly innerType: typeof PureSynchronousComputationType;
  }): DeferredReactiveObservableOperator<PureSynchronousObservableLike<T>, T>;
  switchAll<T>(options: {
    readonly innerType: typeof SynchronousComputationWithSideEffectsType;
  }): ObservableOperatorWithSideEffects<SynchronousObservableLike<T>, T>;
  switchAll<T>(options: {
    readonly innerType: typeof PureDeferredComputationType;
  }): DeferringObservableOperator<PureDeferredObservableLike<T>, T>;
  switchAll<T>(options: {
    readonly innerType: typeof DeferredComputationWithSideEffectsType;
  }): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  switchMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
  ): DeferredReactiveObservableOperator<TA, TB>;
  switchMap<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureSynchronousComputationType;
    },
  ): DeferredReactiveObservableOperator<TA, TB>;
  switchMap<TA, TB>(
    selector: Function1<TA, SynchronousObservableLike<TB>>,
    options: {
      readonly innerType: typeof SynchronousComputationWithSideEffectsType;
    },
  ): ObservableOperatorWithSideEffects<TA, TB>;
  switchMap<TA, TB>(
    selector: Function1<TA, PureDeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof PureDeferredComputationType;
    },
  ): DeferringObservableOperator<TA, TB>;
  switchMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options: {
      readonly innerType: typeof DeferredComputationWithSideEffectsType;
    },
  ): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): DeferredReactiveObservableOperator<T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): DeferredReactiveObservableOperator<T, T>;

  takeUntil<T>(
    notifier: PureSynchronousObservableLike,
  ): DeferredReactiveObservableOperator<T, T>;
  takeUntil<T>(
    notifier: SynchronousObservableWithSideEffectsLike,
  ): ObservableOperatorWithSideEffects<T, T>;
  takeUntil<T>(
    notifier: DeferredObservableWithSideEffectsLike,
  ): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
  takeUntil<T>(
    notifier: MulticastObservableLike,
  ): DeferringObservableOperator<T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): DeferredReactiveObservableOperator<T, T>;

  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): DeferredReactiveObservableOperator<T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
  ): DeferredReactiveObservableOperator<T, T>;

  toRunnable<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, RunnableLike<T>>;

  toEventSource<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, EventSourceLike<T>>;

  toReadonlyArray<T>(options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>>;

  toReadonlyArrayAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): DeferredReactiveObservableOperator<TA, TB>;

  withLatestFrom<TA, TB>(
    other: PureSynchronousObservableLike<TB>,
  ): DeferredReactiveObservableOperator<TA, Tuple2<TA, TB>>;
  withLatestFrom<TA, TB, T>(
    other: PureSynchronousObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredReactiveObservableOperator<TA, T>;
  withLatestFrom<TA, TB>(
    other: SynchronousObservableWithSideEffectsLike<TB>,
  ): ObservableOperatorWithSideEffects<TA, Tuple2<TA, TB>>;
  withLatestFrom<TA, TB, T>(
    other: SynchronousObservableWithSideEffectsLike<TB>,
    selector: Function2<TA, TB, T>,
  ): ObservableOperatorWithSideEffects<TA, T>;
  withLatestFrom<TA, TB>(
    other: DeferredObservableWithSideEffectsLike<TB>,
  ): Function1<
    ObservableLike<TA>,
    DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>
  >;
  withLatestFrom<TA, TB, T>(
    other: DeferredObservableWithSideEffectsLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<T>>;
  withLatestFrom<TA, TB>(
    other: MulticastObservableLike<TB>,
  ): DeferringObservableOperator<TA, Tuple2<TA, TB>>;
  withLatestFrom<TA, TB, T>(
    other: MulticastObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferringObservableOperator<TA, T>;

  zipLatest<TA, TB>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
  ): PureSynchronousObservableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
  ): PureSynchronousObservableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
  ): PureSynchronousObservableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
  ): PureSynchronousObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
  ): PureSynchronousObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
    g: PureSynchronousObservableLike<TG>,
  ): PureSynchronousObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
    g: PureSynchronousObservableLike<TG>,
    h: PureSynchronousObservableLike<TH>,
  ): PureSynchronousObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: PureSynchronousObservableLike<TA>,
    b: PureSynchronousObservableLike<TB>,
    c: PureSynchronousObservableLike<TC>,
    d: PureSynchronousObservableLike<TD>,
    e: PureSynchronousObservableLike<TE>,
    f: PureSynchronousObservableLike<TF>,
    g: PureSynchronousObservableLike<TG>,
    h: PureSynchronousObservableLike<TH>,
    i: PureSynchronousObservableLike<TI>,
  ): PureSynchronousObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
  ): SynchronousObservableWithSideEffectsLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
  ): SynchronousObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
  ): SynchronousObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
  ): SynchronousObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
  ): SynchronousObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
    g: SynchronousObservableLike<TG>,
  ): SynchronousObservableWithSideEffectsLike<
    Tuple7<TA, TB, TC, TD, TE, TF, TG>
  >;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
    g: SynchronousObservableLike<TG>,
    h: SynchronousObservableLike<TH>,
  ): SynchronousObservableWithSideEffectsLike<
    Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>
  >;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: SynchronousObservableLike<TA>,
    b: SynchronousObservableLike<TB>,
    c: SynchronousObservableLike<TC>,
    d: SynchronousObservableLike<TD>,
    e: SynchronousObservableLike<TE>,
    f: SynchronousObservableLike<TF>,
    g: SynchronousObservableLike<TG>,
    h: SynchronousObservableLike<TH>,
    i: SynchronousObservableLike<TI>,
  ): SynchronousObservableWithSideEffectsLike<
    Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>
  >;

  zipLatest<TA, TB>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
  ): PureDeferredObservableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
  ): PureDeferredObservableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
  ): PureDeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
  ): PureDeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
  ): PureDeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
  ): PureDeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
    h: PureObservableLike<TH>,
  ): PureDeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
    h: PureObservableLike<TH>,
    i: PureObservableLike<TI>,
  ): PureDeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
  ): DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
  ): DeferredObservableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
  ): DeferredObservableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
  ): DeferredObservableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
  ): DeferredObservableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
  ): DeferredObservableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
  ): DeferredObservableWithSideEffectsLike<
    Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>
  >;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
    i: ObservableLike<TI>,
  ): DeferredObservableWithSideEffectsLike<
    Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>
  >;
}

export type Signature = ObservableModule;

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
export const concat: Signature["concat"] = Observable_concat;
export const concatAll: Signature["concatAll"] = Observable_concatAll;
export const concatMany: Signature["concatMany"] = Observable_concatMany;
export const concatMap: Signature["concatMap"] = Observable_concatMap;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const create: Signature["create"] = Observable_create;
export const currentTime: Signature["currentTime"] = Observable_currentTime;
export const debug: Signature["debug"] = Observable_debug;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const defer: Signature["defer"] = Observable_defer;
export const dispatchTo: Signature["dispatchTo"] = Observable_dispatchTo;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const exhaust: Signature["exhaust"] = Observable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = Observable_exhaustMap;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const flatMapAsync: Signature["flatMapAsync"] = Observable_flatMapAsync;
export const flatMapIterable: Signature["flatMapIterable"] =
  Observable_flatMapIterable;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkMerge: Signature["forkMerge"] = Observable_forkMerge;
export const fromAsyncFactory: Signature["fromAsyncFactory"] =
  Observable_fromAsyncFactory;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  Observable_fromAsyncIterable;
export const fromEventSource: Signature["fromEventSource"] =
  Observable_fromEventSource;
export const fromIterable: Signature["fromIterable"] = Observable_fromIterable;
export const fromPromise: Signature["fromPromise"] = Observable_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Observable_fromReadonlyArray;
export const fromStore: Signature["fromStore"] = Observable_fromStore;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const generate: Signature["generate"] = Observable_generate;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const keep: Signature["keep"] = Observable_keep;
export const keyFrame: Signature["keyFrame"] = Observable_keyFrame;
export const last: Signature["last"] = Observable_last;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const log: Signature["log"] = Observable_log;
export const map: Signature["map"] = Observable_map;
export const merge: Signature["merge"] = Observable_merge;
export const mergeAll: Signature["mergeAll"] = Observable_mergeAll;
export const mergeMap: Signature["mergeMap"] = Observable_mergeMap;
export const mergeMany: Signature["mergeMany"] = Observable_mergeMany;
export const mergeWith: Signature["mergeWith"] = Observable_mergeWith;
export const multicast: Signature["multicast"] = Observable_multicast;
export const never: Signature["never"] = Observable_never;
export const notify: Signature["notify"] = Observable_notify;
export const onSubscribe: Signature["onSubscribe"] = Observable_onSubscribe;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const raise: Signature["raise"] = Observable_raise;
export const reduce: Signature["reduce"] = Observable_reduce;
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
export const switchMap: Signature["switchMap"] = Observable_switchMap;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const toRunnable: Signature["toRunnable"] = Observable_toRunnable;
export const toEventSource: Signature["toEventSource"] =
  Observable_toEventSource;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Observable_toReadonlyArray;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Observable_toReadonlyArrayAsync;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Observable_zipLatest;
