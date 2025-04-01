import {
  ComputationModule,
  ComputationTypeLike,
  Computation_T,
  Computation_baseOfT,
  DeferredReactiveComputationModule,
  PureComputationOperator,
  PureSynchronousObservableLike,
  ReactiveComputationModule,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
  SynchronousComputationModule,
  SynchronousObservableLike,
  SynchronousObservableWithSideEffectsLike,
} from "../computations.js";
import { Factory, Function1, Function2 } from "../functions.js";
import { SchedulerLike } from "../utils.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import { Observable_computeSynchronous } from "./Observable/__private__/Observable.compute.js";
import Observable_concat from "./Observable/__private__/Observable.concat.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import Observable_forkMerge from "./Observable/__private__/Observable.forkMerge.js";
import {
  Observable_gen,
  Observable_genPure,
} from "./Observable/__private__/Observable.gen.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import {
  Observable_combineLatest,
  Observable_zipLatest,
} from "./Observable/__private__/Observable.latest.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_merge from "./Observable/__private__/Observable.merge.js";
import {
  Observable_concatAll,
  Observable_mergeAll,
} from "./Observable/__private__/Observable.mergeAll.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_repeat from "./Observable/__private__/Observable.repeat.js";
import Observable_retry from "./Observable/__private__/Observable.retry.js";
import Observable_scan from "./Observable/__private__/Observable.scan.js";
import Observable_scanDistinct from "./Observable/__private__/Observable.scanDistinct.js";
import Observable_scanMany from "./Observable/__private__/Observable.scanMany.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_switchAll from "./Observable/__private__/Observable.switchAll.js";
import Observable_takeFirst from "./Observable/__private__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__private__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__private__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__private__/Observable.takeWhile.js";
import Observable_throttle from "./Observable/__private__/Observable.throttle.js";
import Observable_throwIfEmpty from "./Observable/__private__/Observable.throwIfEmpty.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Observable_withBackpressure from "./Observable/__private__/Observable.withBackpressure.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
import Observable_withEffect from "./Observable/__private__/Observble.withEffect.js";
import SynchronousObservable_currentTime from "./SynchronousObservable/__private__/SynchronousObservable.currentTime.js";
import SynchronousObservable_delay from "./SynchronousObservable/__private__/SynchronousObservable.delay.js";
import SynchronousObservable_keyFrame from "./SynchronousObservable/__private__/SynchronousObservable.keyFrame.js";
import Observable_spring from "./SynchronousObservable/__private__/SynchronousObservable.spring.js";
import SynchronousObservable_toRunnable from "./SynchronousObservable/__private__/SynchronousObservable.toRunnable.js";

/**
 * @noInheritDoc
 */
export interface SynchronousObservableComputation extends ComputationTypeLike {
  readonly [Computation_baseOfT]?: SynchronousObservableLike<
    this[typeof Computation_T]
  >;
}

export type Computation = SynchronousObservableComputation;

export type ThrottleMode = "first" | "last" | "interval";
export type ComputeMode = "batched" | "combine-latest";

export interface SynchronousObservableModule
  extends ComputationModule<
      SynchronousObservableComputation,
      {
        genPure: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
        toProducer: {
          readonly scheduler?: SchedulerLike;
        };
      }
    >,
    ReactiveComputationModule<SynchronousObservableComputation>,
    SequentialComputationModule<
      SynchronousObservableComputation,
      {
        gen: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
      }
    >,
    SequentialReactiveComputationModule<SynchronousObservableComputation>,
    SynchronousComputationModule<
      SynchronousObservableComputation,
      {
        toRunnable: {
          readonly maxMicroTaskTicks?: number;
        };
      }
    >,
    DeferredReactiveComputationModule<SynchronousObservableComputation> {
  compute<T>(
    computation: Factory<T>,
    options?: {
      readonly mode?: ComputeMode;
    },
  ): SynchronousObservableWithSideEffectsLike<T>;

  currentTime: PureSynchronousObservableLike<number>;

  delay(duration: number): PureSynchronousObservableLike;

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

  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): PureComputationOperator<SynchronousObservableComputation, T, T>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureComputationOperator<SynchronousObservableComputation, TA, TB>;
}

export type Signature = SynchronousObservableModule;

export const buffer: Signature["buffer"] =
  Observable_buffer as Signature["buffer"];
export const catchError: Signature["catchError"] =
  Observable_catchError as Signature["catchError"];
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest as Signature["combineLatest"];
export const compute: Signature["compute"] = Observable_computeSynchronous;
export const concat: Signature["concat"] =
  Observable_concat as Signature["concat"];
export const concatAll: Signature["concatAll"] =
  Observable_concatAll as Signature["concatAll"];
export const currentTime: Signature["currentTime"] =
  SynchronousObservable_currentTime;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset as Signature["decodeWithCharset"];
export const delay: Signature["delay"] = SynchronousObservable_delay;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged as Signature["distinctUntilChanged"];
export const encodeUtf8: Signature["encodeUtf8"] =
  Observable_encodeUtf8 as Signature["encodeUtf8"];
export const forEach: Signature["forEach"] =
  Observable_forEach as Signature["forEach"];
export const forkMerge: Signature["forkMerge"] =
  Observable_forkMerge as Signature["forkMerge"];
export const gen: Signature["gen"] = Observable_gen as Signature["gen"];
export const genPure: Signature["genPure"] =
  Observable_genPure as Signature["genPure"];
export const keep: Signature["keep"] = Observable_keep as Signature["keep"];
export const keyFrame: Signature["keyFrame"] = SynchronousObservable_keyFrame;
export const map: Signature["map"] = Observable_map as Signature["map"];
export const merge: Signature["merge"] = Observable_merge as Signature["merge"];
export const mergeAll: Signature["mergeAll"] =
  Observable_mergeAll as Signature["mergeAll"];
export const pairwise: Signature["pairwise"] =
  Observable_pairwise as Signature["pairwise"];
export const repeat: Signature["repeat"] =
  Observable_repeat as Signature["repeat"];
export const retry: Signature["retry"] = Observable_retry as Signature["retry"];
export const scan: Signature["scan"] = Observable_scan as Signature["scan"];
export const scanDistinct: Signature["scanDistinct"] =
  Observable_scanDistinct as Signature["scanDistinct"];
export const scanMany: Signature["scanMany"] =
  Observable_scanMany as Signature["scanMany"];
export const skipFirst: Signature["skipFirst"] =
  Observable_skipFirst as Signature["skipFirst"];
export const spring: Signature["spring"] = Observable_spring;
export const switchAll: Signature["switchAll"] =
  Observable_switchAll as Signature["switchAll"];
export const takeFirst: Signature["takeFirst"] =
  Observable_takeFirst as Signature["takeFirst"];
export const takeLast: Signature["takeLast"] =
  Observable_takeLast as Signature["takeLast"];
export const takeUntil: Signature["takeUntil"] =
  Observable_takeUntil as Signature["takeUntil"];
export const takeWhile: Signature["takeWhile"] =
  Observable_takeWhile as Signature["takeWhile"];
export const throttle: Signature["throttle"] =
  Observable_throttle as Signature["throttle"];
export const throwIfEmpty: Signature["throwIfEmpty"] =
  Observable_throwIfEmpty as Signature["throwIfEmpty"];
export const toProducer: Signature["toProducer"] = Observable_toProducer;
export const toRunnable: Signature["toRunnable"] =
  SynchronousObservable_toRunnable;
export const withBackpressure: Signature["withBackpressure"] =
  Observable_withBackpressure as Signature["withBackpressure"];
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime as Signature["withCurrentTime"];
export const withEffect: Signature["withEffect"] =
  Observable_withEffect as Signature["withEffect"];
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom as Signature["withLatestFrom"];
export const zipLatest: Signature["zipLatest"] =
  Observable_zipLatest as Signature["zipLatest"];
