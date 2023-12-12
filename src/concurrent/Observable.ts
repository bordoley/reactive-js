import { EnumerableLike } from "../collections.js";
import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computations.js";
import {
  DeferredObservableLike,
  DeferredSideEffectsObservableLike,
  DispatcherLike,
  FlowableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  PureObservableLike,
  PureRunnableLike,
  ReplayObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
} from "../concurrent.js";
import { EventSourceLike, StoreLike } from "../events.js";
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
} from "../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import Observable_animate from "./Observable/__private__/Observable.animate.js";
import Observable_backpressureStrategy from "./Observable/__private__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__private__/Observable.combineLatest.js";
import Observable_computeDeferred from "./Observable/__private__/Observable.computeDeferred.js";
import Observable_computeRunnable from "./Observable/__private__/Observable.computeRunnable.js";
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
import Observable_endWith from "./Observable/__private__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__private__/Observable.enqueue.js";
import Observable_exhaust from "./Observable/__private__/Observable.exhaust.js";
import Observable_exhaustMap from "./Observable/__private__/Observable.exhaustMap.js";
import Observable_firstAsync from "./Observable/__private__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__private__/Observable.flatMapAsync.js";
import Observable_flatMapIterable from "./Observable/__private__/Observable.flatMapIterable.js";
import Observable_flow from "./Observable/__private__/Observable.flow.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_forkMerge from "./Observable/__private__/Observable.forkMerge.js";
import Observable_fromAsyncFactory from "./Observable/__private__/Observable.fromAsyncFactory.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_fromEnumerable from "./Observable/__private__/Observable.fromEnumerable.js";
import Observable_fromEventSource from "./Observable/__private__/Observable.fromEventSource.js";
import Observable_fromFactory from "./Observable/__private__/Observable.fromFactory.js";
import Observable_fromIterable from "./Observable/__private__/Observable.fromIterable.js";
import Observable_fromOptional from "./Observable/__private__/Observable.fromOptional.js";
import Observable_fromPromise from "./Observable/__private__/Observable.fromPromise.js";
import Observable_fromReadonlyArray from "./Observable/__private__/Observable.fromReadonlyArray.js";
import Observable_fromStore from "./Observable/__private__/Observable.fromStore.js";
import Observable_fromValue from "./Observable/__private__/Observable.fromValue.js";
import Observable_ignoreElements from "./Observable/__private__/Observable.ignoreElements.js";
import Observable_isDeferred from "./Observable/__private__/Observable.isDeferred.js";
import Observable_isPure from "./Observable/__private__/Observable.isPure.js";
import Observable_isReplayObservable from "./Observable/__private__/Observable.isReplayObservable.js";
import Observable_isRunnable from "./Observable/__private__/Observable.isRunnable.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
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
import Observable_onSubscribe from "./Observable/__private__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__private__/Observable.reduce.js";
import Observable_repeat from "./Observable/__private__/Observable.repeat.js";
import Observable_retry from "./Observable/__private__/Observable.retry.js";
import Observable_run from "./Observable/__private__/Observable.run.js";
import Observable_scan from "./Observable/__private__/Observable.scan.js";
import Observable_scanMany from "./Observable/__private__/Observable.scanMany.js";
import Observable_share from "./Observable/__private__/Observable.share.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_spring from "./Observable/__private__/Observable.spring.js";
import Observable_startWith from "./Observable/__private__/Observable.startWith.js";
import Observable_subscribe from "./Observable/__private__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__private__/Observable.subscribeOn.js";
import Observable_switchAll from "./Observable/__private__/Observable.switchAll.js";
import Observable_switchMap from "./Observable/__private__/Observable.switchMap.js";
import Observable_takeFirst from "./Observable/__private__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__private__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__private__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__private__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__private__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__private__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__private__/Observable.throws.js";
import Observable_toEventSource from "./Observable/__private__/Observable.toEventSource.js";
import Observable_toReadonlyArray from "./Observable/__private__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
import Observable_zipLatest from "./Observable/__private__/Observable.zipLatest.js";

export type PureObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends PureRunnableLike<TIn>
  ? PureRunnableLike<TOut>
  : TObservableIn extends RunnableWithSideEffectsLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends DeferredSideEffectsObservableLike<TIn>
  ? DeferredSideEffectsObservableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : ObservableLike<TOut>;

export type PureDeferredSideEffectsObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends PureRunnableLike<TIn>
  ? PureRunnableLike<TOut>
  : TObservableIn extends RunnableWithSideEffectsLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends DeferredSideEffectsObservableLike<TIn>
  ? DeferredSideEffectsObservableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : never;

export type ObservableOperatorWithSideEffects<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends
      | DeferredSideEffectsObservableLike<TIn>
      | MulticastObservableLike<TIn>
  ? DeferredSideEffectsObservableLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : ObservableLike<TOut>;

export type DeferredSideEffectsObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => DeferredSideEffectsObservableLike<TOut>;

export type MulticastObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : DeferredSideEffectsObservableLike<TOut>;

interface Flatten {
  flatten<T>(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: true;
    readonly [ObservableLike_isRunnable]: true;
  }): Function1<PureRunnableLike<PureRunnableLike<T>>, PureRunnableLike<T>>;
  flatten<T>(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: false;
    readonly [ObservableLike_isRunnable]: true;
  }): Function1<RunnableLike<RunnableLike<T>>, RunnableWithSideEffectsLike<T>>;
  flatten<T>(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  }): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredSideEffectsObservableLike<T>
  >;
  flatten<T>(): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredSideEffectsObservableLike<T>
  >;
}

interface FlatMap {
  flatMap<TA, TB>(
    selector: Function1<TA, PureRunnableLike<TB>>,
    options: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isPure]: true;
      readonly [ObservableLike_isRunnable]: true;
    },
  ): Function1<PureRunnableLike<TA>, PureRunnableLike<TB>>;
  flatMap<TA, TB>(
    selector: Function1<TA, RunnableLike<TB>>,
    options: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isPure]: false;
      readonly [ObservableLike_isRunnable]: true;
    },
  ): Function1<RunnableLike<TA>, RunnableWithSideEffectsLike<TB>>;
  flatMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isPure]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
  ): Function1<ObservableLike<TA>, DeferredSideEffectsObservableLike<TB>>;
  flatMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
  ): Function1<ObservableLike<TA>, DeferredSideEffectsObservableLike<TB>>;
}

export interface ObservableComputation extends Computation {
  readonly [Computation_type]?: ObservableLike<this[typeof Computation_T]>;
}

export interface PureRunnableComputation extends Computation {
  readonly [Computation_type]?: PureRunnableLike<this[typeof Computation_T]>;
}

export interface RunnableWithSideEffectsComputation extends Computation {
  readonly [Computation_type]?: RunnableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

export interface DeferredSideEffectsObservableComputation extends Computation {
  readonly [Computation_type]?: DeferredSideEffectsObservableLike<
    this[typeof Computation_T]
  >;
}

export interface MulticastObservableComputation extends Computation {
  readonly [Computation_type]?: MulticastObservableLike<
    this[typeof Computation_T]
  >;
}

export type Type = ObservableComputation;

export namespace Animation {
  /**
   * @noInheritDoc
   */
  export interface Delay {
    readonly type: "delay";
    readonly duration: number;
  }

  /**
   * @noInheritDoc
   */
  export interface KeyFrame {
    readonly type: "keyframe";
    readonly from: number;
    readonly to: number;
    readonly duration: number;
    readonly easing?: Function1<number, number>;
  }

  /**
   * @noInheritDoc
   */
  export interface Frame {
    readonly type: "frame";
    readonly value: number;
  }

  /**
   * @noInheritDoc
   */
  export interface Loop<T> {
    readonly type: "loop";
    readonly animation: Animation<T> | readonly Animation<T>[];
    readonly count?: number;
  }

  /**
   * @noInheritDoc
   */
  export interface Spring {
    readonly type: "spring";
    readonly from: number;
    readonly to: number;
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }
}
export type Animation<T = number> =
  | Animation.Delay
  | Animation.Loop<T>
  | (T extends number
      ? (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
          readonly selector?: never;
        }
      : (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
          readonly selector: Function1<number, T>;
        });

/**
 * @noInheritDoc
 */
export interface ObservableModule
  extends PureComputationModule<ObservableComputation>,
    PureComputationModule<PureRunnableComputation> {
  animate<T = number>(
    configs: Animation<T> | readonly Animation<T>[],
  ): PureRunnableLike<T>;

  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): PureObservableOperator<T, T>;

  buffer<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, readonly T[]>;

  catchError<T>(
    onError: SideEffect1<Error>,
  ): ObservableOperatorWithSideEffects<T, T>;

  combineLatest<TA, TB>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
  ): PureRunnableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
  ): PureRunnableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
  ): PureRunnableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
  ): PureRunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
  ): PureRunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
    g: PureRunnableLike<TG>,
  ): PureRunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
    g: PureRunnableLike<TG>,
    h: PureRunnableLike<TH>,
  ): PureRunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
    g: PureRunnableLike<TG>,
    h: PureRunnableLike<TH>,
    i: PureRunnableLike<TI>,
  ): PureRunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
    i: RunnableLike<TI>,
  ): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
  ): MulticastObservableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
  ): MulticastObservableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
  ): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
  ): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
  ): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
  ): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
    h: PureObservableLike<TH>,
  ): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
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
  ): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
  ): DeferredSideEffectsObservableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
  ): DeferredSideEffectsObservableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
  ): DeferredSideEffectsObservableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
  ): DeferredSideEffectsObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
  ): DeferredSideEffectsObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
  ): DeferredSideEffectsObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
  ): DeferredSideEffectsObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
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
  ): DeferredSideEffectsObservableLike<
    Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>
  >;

  computeDeferred<T>(
    computation: Factory<T>,
    options?: {
      readonly mode?: "batched" | "combine-latest";
    },
  ): DeferredSideEffectsObservableLike<T>;

  /**
   */
  computeRunnable<T>(
    computation: Factory<T>,
    options?: {
      readonly mode?: "batched" | "combine-latest";
    },
  ): RunnableWithSideEffectsLike<T>;

  concat<T>(
    fst: PureRunnableLike<T>,
    snd: PureRunnableLike<T>,
    ...tail: readonly PureRunnableLike<T>[]
  ): PureRunnableLike<T>;
  concat<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableWithSideEffectsLike<T>;
  concat<T>(
    fst: DeferredObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): DeferredSideEffectsObservableLike<T>;
  concat<T>(
    fst: MulticastObservableLike<T>,
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike[]
  ): MulticastObservableLike<T>;

  concatAll: Flatten["flatten"];

  concatMany<T>(
    observables: readonly PureRunnableLike<T>[],
  ): PureRunnableLike<T>;
  concatMany<T>(
    observables: readonly RunnableLike<T>[],
  ): RunnableWithSideEffectsLike<T>;
  concatMany<T>(
    observables: readonly DeferredObservableLike[],
  ): DeferredSideEffectsObservableLike<T>;
  concatMany<T>(
    observables: readonly [
      MulticastObservableLike<T>,
      ...DeferredObservableLike[],
    ],
  ): MulticastObservableLike<T>;

  concatMap: FlatMap["flatMap"];

  concatWith<T>(
    snd: PureRunnableLike<T>,
    ...tail: readonly PureRunnableLike<T>[]
  ): PureObservableOperator<T, T>;
  concatWith<T>(
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): <TObservable extends ObservableLike<T>>(
    obs: TObservable,
  ) => TObservable extends MulticastObservableLike<T>
    ? MulticastObservableLike<T>
    : TObservable extends RunnableLike<T>
    ? RunnableWithSideEffectsLike<T>
    : TObservable extends DeferredSideEffectsObservableLike<T>
    ? DeferredSideEffectsObservableLike<T>
    : ObservableLike<T>;
  concatWith<T>(
    snd: DeferredObservableLike<T>,
    ...tail: readonly DeferredObservableLike<T>[]
  ): <TObservable extends ObservableLike<T>>(
    obs: TObservable,
  ) => TObservable extends MulticastObservableLike<T>
    ? MulticastObservableLike<T>
    : TObservable extends DeferredObservableLike<T>
    ? DeferredSideEffectsObservableLike<T>
    : ObservableLike<T>;

  create<T>(
    f: SideEffect1<ObserverLike<T>>,
  ): DeferredSideEffectsObservableLike<T>;

  currentTime: PureRunnableLike<number>;

  debug<T>(): ObservableOperatorWithSideEffects<T, T>;

  decodeWithCharset(options?: {
    readonly charset?: string;
  }): PureObservableOperator<ArrayBuffer, string>;

  defer<T>(
    f: Factory<MulticastObservableLike<T>>,
  ): DeferredSideEffectsObservableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): ObservableOperatorWithSideEffects<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): PureObservableOperator<T, T>;

  empty<T>(options?: { readonly delay: number }): PureRunnableLike<T>;

  encodeUtf8(): PureObservableOperator<string, Uint8Array>;

  endWith<T>(value: T, ...values: readonly T[]): PureObservableOperator<T, T>;

  enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;

  exhaust: Flatten["flatten"];

  exhaustMap: FlatMap["flatMap"];

  firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  firstAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  flatMapAsync<TA, TB>(
    f: Function2<TA, AbortSignal, Promise<TB>>,
  ): <TObservableIn extends ObservableLike<TA>>(
    observable: TObservableIn,
  ) => TObservableIn extends MulticastObservableLike
    ? MulticastObservableLike<TB>
    : DeferredSideEffectsObservableLike<TB>;

  flatMapIterable<TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): ObservableOperatorWithSideEffects<TA, TB>;

  flow<T>(): Function1<RunnableLike<T>, FlowableLike<T>>;

  forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;

  forkMerge<
    TOut,
    TObservableIn extends ObservableLike,
    TObservableOut extends ObservableLike<TOut>,
  >(
    fst: Function1<TObservableIn, TObservableOut>,
    snd: Function1<TObservableIn, TObservableOut>,
    ...tail: readonly Function1<TObservableIn, TObservableOut>[]
  ): TObservableIn extends PureRunnableLike
    ? TObservableOut extends PureRunnableLike<TOut>
      ? Function1<TObservableIn, PureRunnableLike<TOut>>
      : TObservableOut extends RunnableLike<TOut>
      ? Function1<TObservableIn, RunnableWithSideEffectsLike<TOut>>
      : TObservableOut extends DeferredObservableLike<TOut>
      ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
      : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
    : TObservableIn extends RunnableWithSideEffectsLike
    ? TObservableOut extends RunnableLike<TOut>
      ? Function1<TObservableIn, RunnableWithSideEffectsLike<TOut>>
      : TObservableOut extends DeferredObservableLike<TOut>
      ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
      : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
    : TObservableIn extends DeferredSideEffectsObservableLike
    ? TObservableOut extends DeferredObservableLike<TOut>
      ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
      : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
    : TObservableIn extends MulticastObservableLike
    ? TObservableOut extends DeferredObservableLike<TOut>
      ? Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
      : Function1<TObservableIn, DeferredSideEffectsObservableLike<TOut>>
    : never;

  fromAsyncFactory<T>(): Function1<
    Function1<AbortSignal, Promise<T>>,
    DeferredSideEffectsObservableLike<T>
  >;

  fromAsyncIterable<T>(): Function1<
    AsyncIterable<T>,
    DeferredSideEffectsObservableLike<T>
  >;

  fromEnumerable<T>(options?: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<EnumerableLike<T>, PureRunnableLike<T>>;

  fromEventSource<T>(): Function1<
    EventSourceLike<T>,
    MulticastObservableLike<T>
  >;

  fromFactory<T>(): Function1<Factory<T>, PureRunnableLike<T>>;

  fromIterable<T>(options?: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableWithSideEffectsLike<T>>;

  fromOptional<T>(options?: {
    readonly delay: number;
  }): Function1<Optional<T>, PureRunnableLike<T>>;

  fromPromise<T>(): Function1<Promise<T>, MulticastObservableLike<T>>;

  fromReadonlyArray<T>(options?: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<ReadonlyArray<T>, PureRunnableLike<T>>;

  fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;

  fromValue<T>(options?: {
    readonly delay: number;
  }): Function1<T, PureRunnableLike<T>>;

  ignoreElements<T>(): PureObservableOperator<unknown, T>;

  isDeferred<T = unknown>(
    obs: ObservableLike<T>,
  ): obs is DeferredObservableLike<T>;

  isPure<T = unknown>(obs: ObservableLike<T>): obs is PureObservableLike<T>;

  isReplayObservable<T = unknown>(
    o: ObservableLike<T>,
  ): o is ReplayObservableLike<T>;

  isRunnable<T = unknown>(obs: ObservableLike<T>): obs is RunnableLike<T>;

  keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;

  lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  log<T>(): ObservableOperatorWithSideEffects<T, T>;

  map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;

  merge<T>(
    fst: PureRunnableLike<T>,
    snd: PureRunnableLike<T>,
    ...tail: readonly PureRunnableLike<T>[]
  ): PureRunnableLike<T>;
  merge<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableWithSideEffectsLike<T>;
  merge<T>(
    fst: PureObservableLike<T>,
    snd: PureObservableLike<T>,
    ...tail: readonly PureObservableLike<T>[]
  ): MulticastObservableLike<T>;
  merge<T>(
    fst: ObservableLike<T>,
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): DeferredSideEffectsObservableLike<T>;

  mergeAll<T>(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: true;
    readonly [ObservableLike_isRunnable]: true;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }): Function1<PureRunnableLike<PureRunnableLike<T>>, PureRunnableLike<T>>;
  mergeAll<T>(options: {
    readonly [ObservableLike_isDeferred]: true;
    readonly [ObservableLike_isPure]: false;
    readonly [ObservableLike_isRunnable]: true;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }): Function1<RunnableLike<RunnableLike<T>>, RunnableWithSideEffectsLike<T>>;
  mergeAll<T>(options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }): Function1<
    ObservableLike<DeferredObservableLike<T>>,
    DeferredSideEffectsObservableLike<T>
  >;

  mergeMany<T>(
    observables: readonly PureRunnableLike<T>[],
  ): PureRunnableLike<T>;
  mergeMany<T>(
    observables: readonly RunnableLike<T>[],
  ): RunnableWithSideEffectsLike<T>;
  mergeMany<T>(
    observables: readonly PureObservableLike<T>[],
  ): MulticastObservableLike<T>;
  mergeMany<T>(
    observables: readonly ObservableLike<T>[],
  ): DeferredSideEffectsObservableLike<T>;

  mergeMap<TA, TB>(
    selector: Function1<TA, PureRunnableLike<TB>>,
    options: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isPure]: true;
      readonly [ObservableLike_isRunnable]: true;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): Function1<PureRunnableLike<TA>, PureRunnableLike<TB>>;
  mergeMap<TA, TB>(
    selector: Function1<TA, RunnableLike<TB>>,
    options: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isPure]: false;
      readonly [ObservableLike_isRunnable]: true;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): Function1<RunnableLike<TA>, RunnableWithSideEffectsLike<TB>>;
  mergeMap<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): Function1<ObservableLike<TA>, DeferredSideEffectsObservableLike<TB>>;

  mergeWith<T>(
    snd: PureRunnableLike<T>,
    ...tail: readonly PureRunnableLike<T>[]
  ): PureObservableOperator<T, T>;
  mergeWith<T>(
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): ObservableOperatorWithSideEffects<T, T>;
  mergeWith<T>(
    snd: PureObservableLike<T>,
    ...tail: readonly PureObservableLike<T>[]
  ): <TObservableIn>(
    observableIn: TObservableIn,
  ) => TObservableIn extends PureObservableLike<T>
    ? MulticastObservableLike<T>
    : DeferredSideEffectsObservableLike<T>;
  mergeWith<T>(
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): Function1<ObservableLike<T>, DeferredSideEffectsObservableLike<T>>;

  /**
   */
  multicast<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<
    DeferredObservableLike<T>,
    ReplayObservableLike<T> & DisposableLike
  >;

  never<T>(): MulticastObservableLike<T>;

  onSubscribe<T>(
    f: Factory<DisposableLike>,
  ): ObservableOperatorWithSideEffects<T, T>;
  onSubscribe<T>(
    f: Factory<SideEffect1<Optional<Error>>>,
  ): ObservableOperatorWithSideEffects<T, T>;
  onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;

  pairwise<T>(): PureObservableOperator<T, Tuple2<T, T>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<RunnableLike<T>, TAcc>;

  repeat<T>(
    predicate: Predicate<number>,
  ): PureDeferredSideEffectsObservableOperator<T, T>;
  repeat<T>(count: number): PureDeferredSideEffectsObservableOperator<T, T>;
  repeat<T>(): PureDeferredSideEffectsObservableOperator<T, T>;

  retry<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ): PureDeferredSideEffectsObservableOperator<T, T>;

  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableLike<T>>;

  scan<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): PureObservableOperator<T, TAcc>;

  scanMany<T, TAcc>(
    scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
    // FIXME: Take options for inner scanner to support pure Runnables
  ): Function1<ObservableLike<T>, DeferredSideEffectsObservableLike<TAcc>>;

  /**
   */
  share<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<DeferredObservableLike<T>, MulticastObservableLike<T>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  spring(options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): PureRunnableLike<number>;

  startWith<T>(value: T, ...values: readonly T[]): PureObservableOperator<T, T>;

  switchAll: Flatten["flatten"];

  switchMap: FlatMap["flatMap"];

  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, DisposableLike>;

  subscribeOn<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): <TObservableIn extends ObservableLike<T>>(
    observable: TObservableIn,
  ) => TObservableIn extends MulticastObservableLike
    ? MulticastObservableLike<T>
    : DeferredSideEffectsObservableLike<T>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  takeUntil<T>(notifier: PureRunnableLike): PureObservableOperator<T, T>;
  takeUntil<T>(
    notifier: RunnableWithSideEffectsLike,
  ): ObservableOperatorWithSideEffects<T, T>;
  takeUntil<T>(
    notifier: DeferredSideEffectsObservableLike,
  ): DeferredSideEffectsObservableOperator<T, T>;
  takeUntil<T>(
    notifier: MulticastObservableLike,
  ): MulticastObservableOperator<T, T>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): PureObservableOperator<T, T>;

  throttle<T>(
    duration: number,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): ObservableOperatorWithSideEffects<T, T>;

  throwIfEmpty<T>(
    factory: Factory<unknown>,
    options?: undefined,
  ): PureObservableOperator<T, T>;

  throws<T>(options?: {
    readonly delay?: number;
  }): RunnableWithSideEffectsLike<T>;
  throws<T>(options: {
    readonly raise: Factory<unknown>;
    readonly delay?: number;
  }): RunnableWithSideEffectsLike<T>;

  toEventSource<T>(): Function1<ObservableLike<T>, EventSourceLike<T>>;
  toEventSource<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, EventSourceLike<T>>;

  toReadonlyArray<T>(): Function1<RunnableLike<T>, ReadonlyArray<T>>;

  toReadonlyArrayAsync<T>(): Function1<
    ObservableLike<T>,
    Promise<ReadonlyArray<T>>
  >;
  toReadonlyArrayAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureObservableOperator<TA, TB>;

  withLatestFrom<TA, TB, T>(
    other: PureRunnableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): PureObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: RunnableWithSideEffectsLike<TB>,
    selector: Function2<TA, TB, T>,
  ): ObservableOperatorWithSideEffects<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: DeferredSideEffectsObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredSideEffectsObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: MulticastObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;

  zipLatest<TA, TB>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
  ): PureRunnableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
  ): PureRunnableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
  ): PureRunnableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
  ): PureRunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
  ): PureRunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
    g: PureRunnableLike<TG>,
  ): PureRunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
    g: PureRunnableLike<TG>,
    h: PureRunnableLike<TH>,
  ): PureRunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: PureRunnableLike<TA>,
    b: PureRunnableLike<TB>,
    c: PureRunnableLike<TC>,
    d: PureRunnableLike<TD>,
    e: PureRunnableLike<TE>,
    f: PureRunnableLike<TF>,
    g: PureRunnableLike<TG>,
    h: PureRunnableLike<TH>,
    i: PureRunnableLike<TI>,
  ): PureRunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
    i: RunnableLike<TI>,
  ): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
  ): MulticastObservableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
  ): MulticastObservableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
  ): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
  ): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
  ): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
  ): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: PureObservableLike<TA>,
    b: PureObservableLike<TB>,
    c: PureObservableLike<TC>,
    d: PureObservableLike<TD>,
    e: PureObservableLike<TE>,
    f: PureObservableLike<TF>,
    g: PureObservableLike<TG>,
    h: PureObservableLike<TH>,
  ): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
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
  ): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
  ): DeferredSideEffectsObservableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
  ): DeferredSideEffectsObservableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
  ): DeferredSideEffectsObservableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
  ): DeferredSideEffectsObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
  ): DeferredSideEffectsObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
  ): DeferredSideEffectsObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
  ): DeferredSideEffectsObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
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
  ): DeferredSideEffectsObservableLike<
    Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>
  >;
}

export type Signature = ObservableModule;

export const animate: Signature["animate"] = Observable_animate;
export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest;
export const computeDeferred: Signature["computeDeferred"] =
  Observable_computeDeferred;
export const computeRunnable: Signature["computeRunnable"] =
  Observable_computeRunnable;
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
export const endWith: Signature["endWith"] = Observable_endWith;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const exhaust: Signature["exhaust"] = Observable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = Observable_exhaustMap;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const flatMapAsync: Signature["flatMapAsync"] = Observable_flatMapAsync;
export const flatMapIterable: Signature["flatMapIterable"] =
  Observable_flatMapIterable;
export const flow: Signature["flow"] = Observable_flow;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkMerge: Signature["forkMerge"] = Observable_forkMerge;
export const fromAsyncFactory: Signature["fromAsyncFactory"] =
  Observable_fromAsyncFactory;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  Observable_fromAsyncIterable;
export const fromEnumerable: Signature["fromEnumerable"] =
  Observable_fromEnumerable;
export const fromEventSource: Signature["fromEventSource"] =
  Observable_fromEventSource;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromIterable: Signature["fromIterable"] = Observable_fromIterable;
export const fromOptional: Signature["fromOptional"] = Observable_fromOptional;
export const fromPromise: Signature["fromPromise"] = Observable_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Observable_fromReadonlyArray;
export const fromStore: Signature["fromStore"] = Observable_fromStore;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const isDeferred: Signature["isDeferred"] = Observable_isDeferred;
export const isPure: Signature["isPure"] = Observable_isPure;
export const isReplayObservable: Signature["isReplayObservable"] =
  Observable_isReplayObservable;
export const isRunnable: Signature["isRunnable"] = Observable_isRunnable;
export const keep: Signature["keep"] = Observable_keep;
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
export const onSubscribe: Signature["onSubscribe"] = Observable_onSubscribe;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const reduce: Signature["reduce"] = Observable_reduce;
export const repeat: Signature["repeat"] = Observable_repeat;
export const retry: Signature["retry"] = Observable_retry;
export const run: Signature["run"] = Observable_run;
export const scan: Signature["scan"] = Observable_scan;
export const scanMany: Signature["scanMany"] = Observable_scanMany;
export const share: Signature["share"] = Observable_share;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const spring: Signature["spring"] = Observable_spring;
export const startWith: Signature["startWith"] = Observable_startWith;
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
export const throws: Signature["throws"] = Observable_throws;
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
