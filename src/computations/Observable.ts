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
import { Function1, Function2, identity, returns } from "../functions.js";
import { BackpressureStrategy, ConsumerLike, SchedulerLike } from "../utils.js";
import AsyncIterable_broadcast from "./AsyncIterable/__private__/AsyncIterable.broadcast.js";
import Broadcaster_toObservable from "./Broadcaster/__private__/Broadcaster.toObservable.js";
import Observable_actionReducer from "./Observable/__private__/Observable.actionReducer.js";
import Observable_backpressureStrategy from "./Observable/__private__/Observable.backpressureStrategy.js";
import Observable_broadcast from "./Observable/__private__/Observable.broadcast.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import Observable_concat from "./Observable/__private__/Observable.concat.js";
//import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_currentTime from "./Observable/__private__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__private__/Observable.empty.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_first from "./Observable/__private__/Observable.first.js";
import Observable_firstAsync from "./Observable/__private__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_fromAsyncFactory from "./Observable/__private__/Observable.fromAsyncFactory.js";
import Observable_fromReadonlyArray from "./Observable/__private__/Observable.fromReadonlyArray.js";
import Observable_fromValue from "./Observable/__private__/Observable.fromValue.js";
import {
  Observable_gen,
  Observable_genPure,
} from "./Observable/__private__/Observable.gen.js";
import {
  Observable_genAsync,
  Observable_genPureAsync,
} from "./Observable/__private__/Observable.genAsync.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_keyFrame from "./Observable/__private__/Observable.keyFrame.js";
import Observable_last from "./Observable/__private__/Observable.last.js";
import Observable_lastAsync from "./Observable/__private__/Observable.lastAsync.js";
import {
  Observable_combineLatest,
  Observable_zipLatest,
} from "./Observable/__private__/Observable.latest.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_merge from "./Observable/__private__/Observable.merge.js";
import Observable_never from "./Observable/__private__/Observable.never.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__private__/Observable.reduce.js";
import Observable_reduceAsync from "./Observable/__private__/Observable.reduceAsync.js";
import Observable_repeat from "./Observable/__private__/Observable.repeat.js";
import Observable_retry from "./Observable/__private__/Observable.retry.js";
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
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Observable_toReadonlyArray from "./Observable/__private__/Observable.toReadonlyArray.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_toRunnable from "./Observable/__private__/Observable.toRunnable.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
import Producer_toObservable from "./Producer/__private__/Producer.toObservable.js";

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

export const ThrottleFirstMode = ObservableThrottle_ThrottleFirstMode;
export const ThrottleLastMode = ObservableThrottle_ThrottleLastMode;
export const ThrottleIntervalMode = ObservableThrottle_ThrottleIntervalMode;

export type ThrottleMode =
  | typeof ThrottleFirstMode
  | typeof ThrottleLastMode
  | typeof ThrottleIntervalMode;

export interface ObservableModule
  extends ComputationModule<
      ObservableComputation,
      {
        empty: {
          readonly delay: number;
        };
        firstAsync: {
          readonly scheduler?: SchedulerLike;
        };
        fromIterable: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        fromReadonlyArray: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        fromValue: {
          readonly delay: number;
        };
        gen: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        genPure: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        lastAsync: {
          readonly scheduler?: SchedulerLike;
        };
        raise: {
          readonly delay?: number;
        };
        reduceAsync: {
          readonly scheduler?: SchedulerLike;
        };
        runAsync: {
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
    f: (consumer: ConsumerLike<T>) => void,
  ): ObservableWithSideEffectsLike<T>;

  currentTime: PureSynchronousObservableLike<number>;

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

  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): PureComputationOperator<ObservableComputation, T, T>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureComputationOperator<ObservableComputation, TA, TB>;
}

export type Signature = ObservableModule;

export const actionReducer: Signature["actionReducer"] =
  Observable_actionReducer;
export const backpressureStrategy: Signature["backpressureStrategy"] =
  Observable_backpressureStrategy;
export const broadcast: Signature["broadcast"] = Observable_broadcast;
export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest;
export const concat: Signature["concat"] = Observable_concat;
// FIXME
export const concatAll: Signature["concatAll"] = (() => () =>
  empty()) as Signature["concatAll"];
//export const create: Signature["create"] = Observable_create;
export const currentTime: Signature["currentTime"] = Observable_currentTime;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const first: Signature["first"] = Observable_first;
export const firstAsync: Signature["firstAsync"] = Observable_firstAsync;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkMerge: Signature["forkMerge"] = (() => () =>
  empty()) as unknown as Signature["forkMerge"];
export const fromAsyncFactory: Signature["fromAsyncFactory"] =
  Observable_fromAsyncFactory;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  AsyncIterable_broadcast as unknown as Signature["fromAsyncIterable"];
export const fromBroadcaster: Signature["fromBroadcaster"] =
  Broadcaster_toObservable;
export const fromObservable: Signature["fromObservable"] =
  /*@__PURE__*/ returns(identity) as Signature["fromObservable"];
export const fromProducer: Signature["fromProducer"] =
  Producer_toObservable as Signature["fromProducer"];
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Observable_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const gen: Signature["gen"] = Observable_gen;
export const genAsync: Signature["genAsync"] = Observable_genAsync;
export const genPure: Signature["genPure"] = Observable_genPure;
export const genPureAsync: Signature["genPureAsync"] = Observable_genPureAsync;
export const keep: Signature["keep"] = Observable_keep;
export const keyFrame: Signature["keyFrame"] = Observable_keyFrame;
export const last: Signature["last"] = Observable_last;
export const lastAsync: Signature["lastAsync"] = Observable_lastAsync;
export const map: Signature["map"] = Observable_map;
export const merge: Signature["merge"] = Observable_merge;
export const never: Signature["never"] = Observable_never;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const reduce: Signature["reduce"] = Observable_reduce;
export const reduceAsync: Signature["reduceAsync"] = Observable_reduceAsync;
export const repeat: Signature["repeat"] = Observable_repeat;
export const retry: Signature["retry"] = Observable_retry;
export const scan: Signature["scan"] = Observable_scan;
export const scanMany: Signature["scanMany"] = Observable_scanMany;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const spring: Signature["spring"] = Observable_spring;
export const subscribe: Signature["subscribe"] = Observable_subscribe;
export const subscribeOn: Signature["subscribeOn"] = Observable_subscribeOn;
export const switchAll: Signature["switchAll"] = Observable_switchAll;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const toObservable: Signature["toObservable"] = /*@__PURE__*/ returns(
  identity,
) as Signature["toObservable"];
export const toProducer: Signature["toProducer"] = Observable_toProducer;
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
