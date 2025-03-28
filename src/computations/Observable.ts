import {
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  ConcurrentComputationModule,
  ConcurrentDeferredComputationModule,
  ConcurrentReactiveComputationModule,
  DeferredReactiveComputationModule,
  ObservableLike,
  ObservableWithSideEffectsLike,
  PureAsynchronousComputationOperator,
  PureComputationOperator,
  PureObservableLike,
  PureSynchronousObservableLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
  SynchronousComputationModule,
  SynchronousObservableWithSideEffectsLike,
} from "../computations.js";
import { Function1, Function2 } from "../functions.js";
import { BackpressureStrategy, ObserverLike, SchedulerLike } from "../utils.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import Observable_concat from "./Observable/__private__/Observable.concat.js";
import Observable_currentTime from "./Observable/__private__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import {
  Observable_gen,
  Observable_genPure,
} from "./Observable/__private__/Observable.gen.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_scan from "./Observable/__private__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_subscribe from "./Observable/__private__/Observable.subscribe.js";
import Observable_takeFirst from "./Observable/__private__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__private__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__private__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__private__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__private__/Observable.throwIfEmpty.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";

/**
 * @noInheritDoc
 */
export interface ObservableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ObservableLike<this[typeof Computation_T]>;

  readonly [Computation_pureSynchronousOfT]?: PureSynchronousObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_pureDeferredOfT]?: PureObservableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: ObservableWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_multicastOfT]?: never;
}

export type Computation = ObservableComputation;

export interface ObservableModule
  extends ComputationModule<
      ObservableComputation,
      {
        genPure: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        lastAsync: {
          readonly scheduler?: SchedulerLike;
        };
        toReadonlyArrayAsync: {
          readonly scheduler?: SchedulerLike;
        };
      }
    >,
    ConcurrentDeferredComputationModule<
      ObservableComputation,
      {
        broadcast: {
          scheduler?: SchedulerLike;
        };
        toProducer: {
          scheduler?: SchedulerLike;
        };
      }
    >,
    ConcurrentReactiveComputationModule<ObservableComputation>,
    SequentialComputationModule<ObservableComputation>,
    SequentialReactiveComputationModule<ObservableComputation>,
    SynchronousComputationModule<
      ObservableComputation,
      {
        first: {
          readonly maxMicroTaskTicks?: number;
        };
        last: {
          readonly maxMicroTaskTicks?: number;
        };
        reduce: {
          readonly maxMicroTaskTicks?: number;
        };
        run: {
          readonly maxMicroTaskTicks?: number;
        };
        toReadonlyArray: {
          readonly maxMicroTaskTicks?: number;
        };
        toRunnable: {
          readonly maxMicroTaskTicks?: number;
        };
      }
    >,
    ConcurrentComputationModule<ObservableComputation>,
    DeferredReactiveComputationModule<
      ObservableComputation,
      {
        subscribe: {
          scheduler?: SchedulerLike;
        };
      }
    > {
  backpressureStrategy<T>(options: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }): PureComputationOperator<ObservableComputation, T, T>;

  create<T>(
    f: (observer: ObserverLike<T>) => void,
  ): ObservableWithSideEffectsLike<T>;

  currentTime: PureSynchronousObservableLike<number>;

  delay(duration: number): PureSynchronousObservableLike<number>;

  keyFrame(
    duration: number,
    options?: {
      readonly easing?: Function1<number, number>;
    },
  ): PureSynchronousObservableLike<number>;

  spring(options?: {
    readonly stiffness?: number;
    readonly damping?: number;
    readonly precision?: number;
  }): PureSynchronousObservableLike<number>;

  subscribeOn<T>(
    scheduler: SchedulerLike,
  ): PureAsynchronousComputationOperator<ObservableComputation, T, T>;
  /*
  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): PureComputationOperator<ObservableComputation, T, T>;
*/
  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureComputationOperator<ObservableComputation, TA, TB>;
}

export type Signature = ObservableModule;

export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const concat: Signature["concat"] = Observable_concat;
export const currentTime: Signature["currentTime"] = Observable_currentTime;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const forEach: Signature["forEach"] = Observable_forEach;
export const gen: Signature["gen"] = Observable_gen;
export const genPure: Signature["genPure"] = Observable_genPure;
export const keep: Signature["keep"] = Observable_keep;
export const map: Signature["map"] = Observable_map;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const toProducer: Signature["toProducer"] = Observable_toProducer;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
