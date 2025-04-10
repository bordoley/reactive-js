import {
  ComputationModule,
  ComputationTypeLike,
  ComputationTypeLike_T,
  ComputationTypeLike_baseOfT,
  ConcurrentDeferredComputationModule,
  ConcurrentReactiveComputationModule,
  DeferredComputationModule,
  DeferredReactiveComputationModule,
  ProducerLike,
  ProducerWithSideEffectsLike,
  ReactiveComputationModule,
} from "../computations.js";
import { identity, identityLazy, returns } from "../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../utils.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";
import Producer_buffer from "./Producer/__private__/Producer.buffer.js";
import Producer_catchError from "./Producer/__private__/Producer.catchError.js";
import Producer_compute from "./Producer/__private__/Producer.compute.js";
import Producer_concat from "./Producer/__private__/Producer.concat.js";
import Producer_create from "./Producer/__private__/Producer.create.js";
import Producer_decodeWithCharset from "./Producer/__private__/Producer.decodeWithCharset.js";
import Producer_distinctUntilChanged from "./Producer/__private__/Producer.distinctUntilChanged.js";
import Producer_encodeUtf8 from "./Producer/__private__/Producer.encodeUtf8.js";
import Producer_forEach from "./Producer/__private__/Producer.forEach.js";
import Producer_forkMerge from "./Producer/__private__/Producer.forkMerge.js";
import {
  Producer_gen,
  Producer_genPure,
} from "./Producer/__private__/Producer.gen.js";
import {
  Producer_genAsync,
  Producer_genPureAsync,
} from "./Producer/__private__/Producer.genAsync.js";
import Producer_keep from "./Producer/__private__/Producer.keep.js";
import {
  Producer_combineLatest,
  Producer_zipLatest,
} from "./Producer/__private__/Producer.latest.js";
import Producer_map from "./Producer/__private__/Producer.map.js";
import Producer_merge from "./Producer/__private__/Producer.merge.js";
import {
  Producer_concatAll,
  Producer_mergeAll,
} from "./Producer/__private__/Producer.mergeAll.js";
import Producer_pairwise from "./Producer/__private__/Producer.pairwise.js";
import Producer_repeat from "./Producer/__private__/Producer.repeat.js";
import Producer_retry from "./Producer/__private__/Producer.retry.js";
import Producer_scan from "./Producer/__private__/Producer.scan.js";
import Producer_scanMany from "./Producer/__private__/Producer.scanMany.js";
import Producer_skipFirst from "./Producer/__private__/Producer.skipFirst.js";
import Producer_switchAll from "./Producer/__private__/Producer.switchAll.js";
import Producer_takeFirst from "./Producer/__private__/Producer.takeFirst.js";
import Producer_takeLast from "./Producer/__private__/Producer.takeLast.js";
import Producer_takeUntil from "./Producer/__private__/Producer.takeUntil.js";
import Producer_takeWhile from "./Producer/__private__/Producer.takeWhile.js";
import Producer_throwIfEmpty from "./Producer/__private__/Producer.throwIfEmpty.js";
import Producer_toAsyncIterable from "./Producer/__private__/Producer.toAsyncIterable.js";
import Producer_toObservable from "./Producer/__private__/Producer.toObservable.js";
import Producer_withEffect from "./Producer/__private__/Producer.withEffect.js";
import Producer_withLatestFrom from "./Producer/__private__/Producer.withLatestFrom.js";

/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationTypeLike {
  readonly [ComputationTypeLike_baseOfT]?: ProducerLike<
    this[typeof ComputationTypeLike_T]
  >;
}

export type Computation = ProducerComputation;

export interface ProducerModule
  extends ComputationModule<ProducerComputation>,
    ConcurrentDeferredComputationModule<ProducerComputation>,
    ReactiveComputationModule<ProducerComputation>,
    DeferredComputationModule<ProducerComputation>,
    DeferredReactiveComputationModule<ProducerComputation>,
    ConcurrentReactiveComputationModule<
      ProducerComputation,
      {
        options?: {
          bufferSize?: number;
        };
        toObservable?: {
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        };
      }
    > {
  create<T>(
    f: (consumer: ConsumerLike<T>) => void,
  ): ProducerWithSideEffectsLike<T>;
}

export type Signature = ProducerModule;

export const buffer: Signature["buffer"] = Producer_buffer;
export const broadcast: Signature["broadcast"] = Producer_broadcast;
export const catchError: Signature["catchError"] = Producer_catchError;
export const combineLatest: Signature["combineLatest"] = Producer_combineLatest;
export const compute: Signature["compute"] = Producer_compute;
export const concat: Signature["concat"] = Producer_concat;
export const concatAll: Signature["concatAll"] = Producer_concatAll;
export const create: Signature["create"] = Producer_create;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Producer_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Producer_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Producer_encodeUtf8;
export const forkMerge: Signature["forkMerge"] = Producer_forkMerge;
export const fromBroadcaster: Signature["fromBroadcaster"] =
  Broadcaster_toProducer;
export const fromObservable: Signature["fromObservable"] =
  Observable_toProducer as Signature["fromObservable"];
export const fromProducer: Signature["fromProducer"] =
  identityLazy as Signature["fromProducer"];
export const forEach: Signature["forEach"] = Producer_forEach;
export const gen: Signature["gen"] = Producer_gen;
export const genAsync: Signature["genAsync"] = Producer_genAsync;
export const genPure: Signature["genPure"] = Producer_genPure;
export const genPureAsync: Signature["genPureAsync"] = Producer_genPureAsync;
export const keep: Signature["keep"] = Producer_keep;
export const map: Signature["map"] = Producer_map;
export const merge: Signature["merge"] = Producer_merge;
export const mergeAll: Signature["mergeAll"] = Producer_mergeAll;
export const pairwise: Signature["pairwise"] = Producer_pairwise;
export const repeat: Signature["repeat"] = Producer_repeat;
export const retry: Signature["retry"] = Producer_retry;
export const scan: Signature["scan"] = Producer_scan;
export const scanMany: Signature["scanMany"] = Producer_scanMany;
export const skipFirst: Signature["skipFirst"] = Producer_skipFirst;
export const switchAll: Signature["switchAll"] = Producer_switchAll;
export const takeFirst: Signature["takeFirst"] = Producer_takeFirst;
export const takeLast: Signature["takeLast"] = Producer_takeLast;
export const takeUntil: Signature["takeUntil"] = Producer_takeUntil;
export const takeWhile: Signature["takeWhile"] = Producer_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Producer_throwIfEmpty;
export const toAsyncIterable: Signature["toAsyncIterable"] =
  Producer_toAsyncIterable;
export const toObservable: Signature["toObservable"] = Producer_toObservable;
export const toProducer: Signature["toProducer"] = /*@__PURE__*/ returns(
  identity,
) as Signature["toProducer"];
export const withEffect: Signature["withEffect"] = Producer_withEffect;
export const withLatestFrom: Signature["withLatestFrom"] =
  Producer_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Producer_zipLatest;
