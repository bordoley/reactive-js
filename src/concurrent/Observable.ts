import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computations.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  ReplayObservableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
} from "../concurrent.js";
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
import { EnumerableLike } from "../ix.js";
import { DispatcherLike } from "../rx.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_catchError from "./Observable/__internal__/Observable.catchError.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concatMany from "./Observable/__internal__/Observable.concatMany.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_currentTime from "./Observable/__internal__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_defer from "./Observable/__internal__/Observable.defer.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__internal__/Observable.encodeUtf8.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromIterable from "./Observable/__internal__/Observable.fromIterable.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_isDeferred from "./Observable/__internal__/Observable.isDeferred.js";
import Observable_isPure from "./Observable/__internal__/Observable.isPure.js";
import Observable_isRunnable from "./Observable/__internal__/Observable.isRunnable.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeMany from "./Observable/__internal__/Observable.mergeMany.js";
import Observable_multicast from "./Observable/__internal__/Observable.multicast.js";
import Observable_never from "./Observable/__internal__/Observable.never.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_run from "./Observable/__internal__/Observable.run.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_spring from "./Observable/__internal__/Observable.spring.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__internal__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_toReadonlyArray from "./Observable/__internal__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__internal__/Observable.toReadonlyArrayAsync.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";

export type PureObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn>
  ? RunnableLike<TOut>
  : TObservableIn extends RunnableWithSideEffectsLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends DeferredObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : ObservableLike<TOut>;

export type ObservableOperatorWithSideEffects<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends RunnableLike<TIn> | RunnableWithSideEffectsLike<TIn>
  ? RunnableWithSideEffectsLike<TOut>
  : TObservableIn extends
      | DeferredObservableLike<TIn>
      | MulticastObservableLike<TIn>
  ? DeferredObservableLike<TOut>
  : ObservableLike<TOut>;

export type DeferredObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => DeferredObservableLike<TOut>;

export type MulticastObservableOperator<TIn, TOut> = <
  TObservableIn extends ObservableLike<TIn>,
>(
  observable: TObservableIn,
) => TObservableIn extends MulticastObservableLike<TIn>
  ? MulticastObservableLike<TOut>
  : DeferredObservableLike<TOut>;

export interface ObservableComputation extends Computation {
  readonly [Computation_type]?: ObservableLike<this[typeof Computation_T]>;
}

export interface RunnableComputation extends Computation {
  readonly [Computation_type]?: RunnableLike<this[typeof Computation_T]>;
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
 * @category Module
 */
export interface ObservableModule
  extends PureComputationModule<ObservableComputation>,
    PureComputationModule<RunnableComputation> {
  animate<T = number>(
    configs: Animation<T> | readonly Animation<T>[],
  ): RunnableLike<T>;

  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): PureObservableOperator<T, T>;

  buffer<T>(options?: {
    count?: number;
  }): PureObservableOperator<T, readonly T[]>;

  catchError<T>(
    onError: SideEffect1<Error>,
  ): ObservableOperatorWithSideEffects<T, T>;

  combineLatest<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
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
  ): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
  ): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
  ): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
  ): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
  ): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
  ): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
    g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>,
  ): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
    g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>,
    h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>,
  ): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
    g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>,
    h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>,
    i: RunnableLike<TI> | RunnableWithSideEffectsLike<TI>,
  ): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
  ): MulticastObservableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
  ): MulticastObservableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
  ): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
  ): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
  ): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
    g: RunnableLike<TG> | MulticastObservableLike<TG>,
  ): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
    g: RunnableLike<TG> | MulticastObservableLike<TG>,
    h: RunnableLike<TH> | MulticastObservableLike<TH>,
  ): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
    g: RunnableLike<TG> | MulticastObservableLike<TG>,
    h: RunnableLike<TH> | MulticastObservableLike<TH>,
    i: RunnableLike<TI> | MulticastObservableLike<TI>,
  ): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  combineLatest<TA, TB>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
  ): DeferredObservableLike<Tuple2<TA, TB>>;
  combineLatest<TA, TB, TC>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
  ): DeferredObservableLike<Tuple3<TA, TB, TC>>;
  combineLatest<TA, TB, TC, TD>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
  ): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
  combineLatest<TA, TB, TC, TD, TE>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
  ): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
  ): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
    g:
      | RunnableLike<TG>
      | RunnableWithSideEffectsLike<TG>
      | DeferredObservableLike<TG>
      | MulticastObservableLike<TG>,
  ): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
    g:
      | RunnableLike<TG>
      | RunnableWithSideEffectsLike<TG>
      | DeferredObservableLike<TG>
      | MulticastObservableLike<TG>,
    h:
      | RunnableLike<TH>
      | RunnableWithSideEffectsLike<TH>
      | DeferredObservableLike<TH>
      | MulticastObservableLike<TH>,
  ): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
    g:
      | RunnableLike<TG>
      | RunnableWithSideEffectsLike<TG>
      | DeferredObservableLike<TG>
      | MulticastObservableLike<TG>,
    h:
      | RunnableLike<TH>
      | RunnableWithSideEffectsLike<TH>
      | DeferredObservableLike<TH>
      | MulticastObservableLike<TH>,
    i:
      | RunnableLike<TI>
      | RunnableWithSideEffectsLike<TI>
      | DeferredObservableLike<TI>
      | MulticastObservableLike<TI>,
  ): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  concat<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableLike<T>;
  concat<T>(
    fst: RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]
  ): RunnableWithSideEffectsLike<T>;
  concat<T>(
    fst:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>,
    snd:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>,
    ...tail: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
    )[]
  ): DeferredObservableLike<T>;
  concat<T>(
    fst: MulticastObservableLike<T>,
    snd:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>,
    ...tail: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
    )[]
  ): MulticastObservableLike<T>;

  concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
  concatMany<T>(
    observables: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[],
  ): RunnableWithSideEffectsLike<T>;
  concatMany<T>(
    observables: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
    )[],
  ): DeferredObservableLike<T>;
  concatMany<T>(
    observables: readonly [
      MulticastObservableLike<T>,
      ...(
        | RunnableLike<T>
        | RunnableWithSideEffectsLike<T>
        | DeferredObservableLike<T>
      )[],
    ],
  ): MulticastObservableLike<T>;

  concatWith<T>(
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): PureObservableOperator<T, T>;
  concatWith<T>(
    snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]
  ): <TObservable extends ObservableLike<T>>(
    obs: TObservable,
  ) => TObservable extends MulticastObservableLike<T>
    ? MulticastObservableLike<T>
    : TObservable extends RunnableLike<T> | RunnableWithSideEffectsLike<T>
    ? RunnableWithSideEffectsLike<T>
    : TObservable extends DeferredObservableLike<T>
    ? DeferredObservableLike<T>
    : ObservableLike<T>;
  concatWith<T>(
    snd:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>,
    ...tail: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
    )[]
  ): <TObservable extends ObservableLike<T>>(
    obs: TObservable,
  ) => TObservable extends MulticastObservableLike<T>
    ? MulticastObservableLike<T>
    : TObservable extends
        | RunnableLike<T>
        | RunnableWithSideEffectsLike<T>
        | DeferredObservableLike<T>
    ? DeferredObservableLike<T>
    : ObservableLike<T>;

  create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;

  currentTime: RunnableLike<number>;

  decodeWithCharset(options?: {
    readonly charset?: string;
  }): PureObservableOperator<ArrayBuffer, string>;

  defer<T>(f: Factory<MulticastObservableLike<T>>): DeferredObservableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): ObservableOperatorWithSideEffects<T, T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): PureObservableOperator<T, T>;

  empty<T>(): RunnableLike<T>;

  encodeUtf8(): PureObservableOperator<string, Uint8Array>;

  enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;

  firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  firstAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;

  fromEnumerable<T>(options?: {
    delay: number;
    delayStart?: boolean;
  }): Function1<EnumerableLike<T>, RunnableLike<T>>;

  fromIterable<T>(options?: {
    delay: number;
    delayStart?: boolean;
  }): Function1<Iterable<T>, DeferredObservableLike<T>>;

  ignoreElements<T>(): PureObservableOperator<unknown, T>;

  isDeferred<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
    [ObservableLike_isDeferred]: true;
  };

  isPure<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
    [ObservableLike_isPure]: true;
  };

  isRunnable<T>(obs: ObservableLike<T>): obs is ObservableLike<T> & {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isRunnable]: true;
  };

  keep<T>(predicate: Predicate<T>): PureObservableOperator<T, T>;

  lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<ObservableLike<T>, Promise<Optional<T>>>;

  map<TA, TB>(selector: Function1<TA, TB>): PureObservableOperator<TA, TB>;

  merge<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableLike<T>;
  merge<T>(
    fst: RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]
  ): RunnableWithSideEffectsLike<T>;
  merge<T>(
    fst: RunnableLike<T> | MulticastObservableLike<T>,
    snd: RunnableLike<T> | MulticastObservableLike<T>,
    ...tail: readonly (RunnableLike<T> | MulticastObservableLike<T>)[]
  ): MulticastObservableLike<T>;
  merge<T>(
    fst:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>,
    snd:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>,
    ...tail: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>
    )[]
  ): DeferredObservableLike<T>;

  mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
  mergeMany<T>(
    observables: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[],
  ): RunnableWithSideEffectsLike<T>;
  mergeMany<T>(
    observables: readonly (RunnableLike<T> | MulticastObservableLike<T>)[],
  ): MulticastObservableLike<T>;
  mergeMany<T>(
    observables: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>
    )[],
  ): DeferredObservableLike<T>;

  mergeWith<T>(
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): PureObservableOperator<T, T>;
  mergeWith<T>(
    snd: RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    ...tail: readonly (RunnableLike<T> | RunnableWithSideEffectsLike<T>)[]
  ): ObservableOperatorWithSideEffects<T, T>;
  mergeWith<T>(
    snd: RunnableLike<T> | MulticastObservableLike<T>,
    ...tail: readonly (RunnableLike<T> | MulticastObservableLike<T>)[]
  ): <TObservableIn>(
    observableIn: TObservableIn,
  ) => TObservableIn extends RunnableLike<T> | MulticastObservableLike<T>
    ? MulticastObservableLike<T>
    : DeferredObservableLike<T>;
  mergeWith<T>(
    snd:
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>,
    ...tail: readonly (
      | RunnableLike<T>
      | RunnableWithSideEffectsLike<T>
      | DeferredObservableLike<T>
      | MulticastObservableLike<T>
    )[]
  ): Function1<ObservableLike<T>, DeferredObservableLike<T>>;

  /**
   * @category Transform
   */
  multicast<T>(
    schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<
    | RunnableLike<T>
    | RunnableWithSideEffectsLike<T>
    | DeferredObservableLike<T>,
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
  ): Function1<RunnableLike<T> | RunnableWithSideEffectsLike<T>, TAcc>;

  run<T>(options?: {
    readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }): SideEffect1<RunnableLike<T> | RunnableWithSideEffectsLike<T>>;

  scan<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): PureObservableOperator<T, TAcc>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  spring(options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): RunnableLike<number>;

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
    : DeferredObservableLike<T>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): PureObservableOperator<T, T>;

  takeUntil<T>(notifier: RunnableLike): PureObservableOperator<T, T>;
  takeUntil<T>(
    notifier: RunnableWithSideEffectsLike,
  ): ObservableOperatorWithSideEffects<T, T>;
  takeUntil<T>(
    notifier: DeferredObservableLike,
  ): DeferredObservableOperator<T, T>;
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

  throws<T>(): RunnableWithSideEffectsLike<T>;
  throws<T>(options: {
    readonly raise: Factory<unknown>;
  }): RunnableWithSideEffectsLike<T>;

  toReadonlyArray<T>(): Function1<
    RunnableLike<T> | RunnableWithSideEffectsLike<T>,
    ReadonlyArray<T>
  >;

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
    other: RunnableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): PureObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: RunnableWithSideEffectsLike<TB>,
    selector: Function2<TA, TB, T>,
  ): ObservableOperatorWithSideEffects<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: DeferredObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): DeferredObservableOperator<TA, T>;
  withLatestFrom<TA, TB, T>(
    other: MulticastObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;

  zipLatest<TA, TB>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
  ): RunnableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
  ): RunnableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
  ): RunnableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
  ): RunnableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
  ): RunnableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
  ): RunnableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA>,
    b: RunnableLike<TB>,
    c: RunnableLike<TC>,
    d: RunnableLike<TD>,
    e: RunnableLike<TE>,
    f: RunnableLike<TF>,
    g: RunnableLike<TG>,
    h: RunnableLike<TH>,
  ): RunnableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
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
  ): RunnableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
  ): RunnableWithSideEffectsLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
  ): RunnableWithSideEffectsLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
  ): RunnableWithSideEffectsLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
  ): RunnableWithSideEffectsLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
  ): RunnableWithSideEffectsLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
    g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>,
  ): RunnableWithSideEffectsLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
    g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>,
    h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>,
  ): RunnableWithSideEffectsLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA> | RunnableWithSideEffectsLike<TA>,
    b: RunnableLike<TB> | RunnableWithSideEffectsLike<TB>,
    c: RunnableLike<TC> | RunnableWithSideEffectsLike<TC>,
    d: RunnableLike<TD> | RunnableWithSideEffectsLike<TD>,
    e: RunnableLike<TE> | RunnableWithSideEffectsLike<TE>,
    f: RunnableLike<TF> | RunnableWithSideEffectsLike<TF>,
    g: RunnableLike<TG> | RunnableWithSideEffectsLike<TG>,
    h: RunnableLike<TH> | RunnableWithSideEffectsLike<TH>,
    i: RunnableLike<TI> | RunnableWithSideEffectsLike<TI>,
  ): RunnableWithSideEffectsLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
  ): MulticastObservableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
  ): MulticastObservableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
  ): MulticastObservableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
  ): MulticastObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
  ): MulticastObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
    g: RunnableLike<TG> | MulticastObservableLike<TG>,
  ): MulticastObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
    g: RunnableLike<TG> | MulticastObservableLike<TG>,
    h: RunnableLike<TH> | MulticastObservableLike<TH>,
  ): MulticastObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: RunnableLike<TA> | MulticastObservableLike<TA>,
    b: RunnableLike<TB> | MulticastObservableLike<TB>,
    c: RunnableLike<TC> | MulticastObservableLike<TC>,
    d: RunnableLike<TD> | MulticastObservableLike<TD>,
    e: RunnableLike<TE> | MulticastObservableLike<TE>,
    f: RunnableLike<TF> | MulticastObservableLike<TF>,
    g: RunnableLike<TG> | MulticastObservableLike<TG>,
    h: RunnableLike<TH> | MulticastObservableLike<TH>,
    i: RunnableLike<TI> | MulticastObservableLike<TI>,
  ): MulticastObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipLatest<TA, TB>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
  ): DeferredObservableLike<Tuple2<TA, TB>>;
  zipLatest<TA, TB, TC>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
  ): DeferredObservableLike<Tuple3<TA, TB, TC>>;
  zipLatest<TA, TB, TC, TD>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
  ): DeferredObservableLike<Tuple4<TA, TB, TC, TD>>;
  zipLatest<TA, TB, TC, TD, TE>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
  ): DeferredObservableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
  ): DeferredObservableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
    g:
      | RunnableLike<TG>
      | RunnableWithSideEffectsLike<TG>
      | DeferredObservableLike<TG>
      | MulticastObservableLike<TG>,
  ): DeferredObservableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
    g:
      | RunnableLike<TG>
      | RunnableWithSideEffectsLike<TG>
      | DeferredObservableLike<TG>
      | MulticastObservableLike<TG>,
    h:
      | RunnableLike<TH>
      | RunnableWithSideEffectsLike<TH>
      | DeferredObservableLike<TH>
      | MulticastObservableLike<TH>,
  ): DeferredObservableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a:
      | RunnableLike<TA>
      | RunnableWithSideEffectsLike<TA>
      | DeferredObservableLike<TA>
      | MulticastObservableLike<TA>,
    b:
      | RunnableLike<TB>
      | RunnableWithSideEffectsLike<TB>
      | DeferredObservableLike<TB>
      | MulticastObservableLike<TB>,
    c:
      | RunnableLike<TC>
      | RunnableWithSideEffectsLike<TC>
      | DeferredObservableLike<TC>
      | MulticastObservableLike<TC>,
    d:
      | RunnableLike<TD>
      | RunnableWithSideEffectsLike<TD>
      | DeferredObservableLike<TD>
      | MulticastObservableLike<TD>,
    e:
      | RunnableLike<TE>
      | RunnableWithSideEffectsLike<TE>
      | DeferredObservableLike<TE>
      | MulticastObservableLike<TE>,
    f:
      | RunnableLike<TF>
      | RunnableWithSideEffectsLike<TF>
      | DeferredObservableLike<TF>
      | MulticastObservableLike<TF>,
    g:
      | RunnableLike<TG>
      | RunnableWithSideEffectsLike<TG>
      | DeferredObservableLike<TG>
      | MulticastObservableLike<TG>,
    h:
      | RunnableLike<TH>
      | RunnableWithSideEffectsLike<TH>
      | DeferredObservableLike<TH>
      | MulticastObservableLike<TH>,
    i:
      | RunnableLike<TI>
      | RunnableWithSideEffectsLike<TI>
      | DeferredObservableLike<TI>
      | MulticastObservableLike<TI>,
  ): DeferredObservableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
}

export type Signature = ObservableModule;

export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest;
export const concatMany: Signature["concatMany"] = Observable_concatMany;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const create: Signature["create"] = Observable_create;
export const currentTime: Signature["currentTime"] = Observable_currentTime;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const defer: Signature["defer"] = Observable_defer;
export const dispatchTo: Signature["dispatchTo"] = Observable_dispatchTo;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const enqueue: Signature["enqueue"] = Observable_enqueue;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const forEach: Signature["forEach"] = Observable_forEach;
export const fromIterable: Signature["fromIterable"] = Observable_fromIterable;
export const ignoreElements: Signature["ignoreElements"] =
  Observable_ignoreElements;
export const isDeferred: Signature["isDeferred"] = Observable_isDeferred;
export const isPure: Signature["isPure"] = Observable_isPure;
export const isRunnable: Signature["isRunnable"] = Observable_isRunnable;
export const keep: Signature["keep"] = Observable_keep;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const merge: Signature["merge"] = Observable_merge;
export const mergeMany: Signature["mergeMany"] = Observable_mergeMany;
export const multicast: Signature["multicast"] = Observable_multicast;
export const never: Signature["never"] = Observable_never;
export const onSubscribe: Signature["onSubscribe"] = Observable_onSubscribe;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const reduce: Signature["reduce"] = Observable_reduce;
export const run: Signature["run"] = Observable_run;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const spring: Signature["spring"] = Observable_spring;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const subscribeOn: Signature["subscribeOn"] = Observable_subscribeOn;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const throws: Signature["throws"] = Observable_throws;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Observable_toReadonlyArray;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Observable_toReadonlyArrayAsync;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Observable_zipLatest;
