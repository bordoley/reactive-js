import {
  ComputationModule,
  ComputationTypeLike,
  ComputationTypeLike_T,
  ComputationTypeLike_baseOfT,
  ConcurrentDeferredComputationModule,
  ConcurrentReactiveComputationModule,
  DeferredReactiveComputationModule,
  ObservableLike,
  ObservableWithSideEffectsLike,
  PureComputationOperator,
  ReactiveComputationModule,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
} from "../computations.js";
import { Factory, Function2, identityLazy } from "../functions.js";
import { SchedulerLike } from "../utils.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import { Observable_computeDeferred } from "./Observable/__private__/Observable.compute.js";
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
import {
  Observable_genAsync,
  Observable_genPureAsync,
} from "./Observable/__private__/Observable.genAsync.js";
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
import Observable_scanMany from "./Observable/__private__/Observable.scanMany.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_subscribeOn from "./Observable/__private__/Observable.subscribeOn.js";
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

/**
 * @noInheritDoc
 */
export interface ObservableComputation extends ComputationTypeLike {
  readonly [ComputationTypeLike_baseOfT]?: ObservableLike<
    this[typeof ComputationTypeLike_T]
  >;
}

export type Computation = ObservableComputation;

export type ThrottleMode = "first" | "last" | "interval";
export type ComputeMode = "batched" | "combine-latest";

export interface ObservableModule
  extends ComputationModule<
      ObservableComputation,
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
    ConcurrentDeferredComputationModule<ObservableComputation>,
    ReactiveComputationModule<ObservableComputation>,
    SequentialComputationModule<
      ObservableComputation,
      {
        gen: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        };
      }
    >,
    SequentialReactiveComputationModule<ObservableComputation>,
    DeferredReactiveComputationModule<ObservableComputation>,
    ConcurrentReactiveComputationModule<ObservableComputation> {
  compute<T>(
    computation: Factory<T>,
    options?: {
      readonly mode?: ComputeMode;
    },
  ): ObservableWithSideEffectsLike<T>;

  subscribeOn<T>(
    scheduler: SchedulerLike,
  ): PureComputationOperator<ObservableComputation, T, T>;

  throttle<T>(
    duration: number,
    options?: { readonly mode?: ThrottleMode },
  ): PureComputationOperator<ObservableComputation, T, T>;

  withCurrentTime<TA, TB>(
    selector: Function2<number, TA, TB>,
  ): PureComputationOperator<ObservableComputation, TA, TB>;
}

export type Signature = ObservableModule;

export const buffer: Signature["buffer"] = Observable_buffer;
export const catchError: Signature["catchError"] = Observable_catchError;
export const combineLatest: Signature["combineLatest"] =
  Observable_combineLatest;
export const compute: Signature["compute"] = Observable_computeDeferred;
export const concat: Signature["concat"] = Observable_concat;
export const concatAll: Signature["concatAll"] = Observable_concatAll;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Observable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Observable_encodeUtf8;
export const forEach: Signature["forEach"] = Observable_forEach;
export const forkMerge: Signature["forkMerge"] = Observable_forkMerge;
export const fromBroadcaster: Signature["fromBroadcaster"] =
  Broadcaster_toProducer as Signature["fromBroadcaster"];
export const fromObservable: Signature["fromObservable"] =
  /*@__PURE__*/ identityLazy as Signature["fromObservable"];
export const fromProducer: Signature["fromProducer"] =
  identityLazy as Signature["fromProducer"];
export const gen: Signature["gen"] = Observable_gen;
export const genAsync: Signature["genAsync"] = Observable_genAsync;
export const genPure: Signature["genPure"] = Observable_genPure;
export const genPureAsync: Signature["genPureAsync"] = Observable_genPureAsync;
export const keep: Signature["keep"] = Observable_keep;
export const map: Signature["map"] = Observable_map;
export const merge: Signature["merge"] = Observable_merge;
export const mergeAll: Signature["mergeAll"] = Observable_mergeAll;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const repeat: Signature["repeat"] = Observable_repeat;
export const retry: Signature["retry"] = Observable_retry;
export const scan: Signature["scan"] = Observable_scan;
export const scanMany: Signature["scanMany"] = Observable_scanMany;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const subscribeOn: Signature["subscribeOn"] = Observable_subscribeOn;
export const switchAll: Signature["switchAll"] = Observable_switchAll;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeUntil: Signature["takeUntil"] = Observable_takeUntil;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const throttle: Signature["throttle"] = Observable_throttle;
export const throwIfEmpty: Signature["throwIfEmpty"] = Observable_throwIfEmpty;
export const toProducer: Signature["toProducer"] = Observable_toProducer;
export const withBackpressure: Signature["withBackpressure"] =
  Observable_withBackpressure;
export const withCurrentTime: Signature["withCurrentTime"] =
  Observable_withCurrentTime;
export const withEffect: Signature["withEffect"] = Observable_withEffect;
export const withLatestFrom: Signature["withLatestFrom"] =
  Observable_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Observable_zipLatest;
