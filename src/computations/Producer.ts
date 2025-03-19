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
  ProducerLike,
  ProducerWithSideEffectsLike,
  PureProducerLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
} from "../computations.js";
import { identity, returns } from "../functions.js";
import { ConsumerLike } from "../utils.js";
import AsyncIterable_broadcast from "./AsyncIterable/__private__/AsyncIterable.broadcast.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Producer_actionReducer from "./Producer/__private__/Producer.actionReducer.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";
import Producer_buffer from "./Producer/__private__/Producer.buffer.js";
import Producer_catchError from "./Producer/__private__/Producer.catchError.js";
import Producer_concat from "./Producer/__private__/Producer.concat.js";
import Producer_create from "./Producer/__private__/Producer.create.js";
import Producer_decodeWithCharset from "./Producer/__private__/Producer.decodeWithCharset.js";
import Producer_distinctUntilChanged from "./Producer/__private__/Producer.distinctUntilChanged.js";
import Producer_empty from "./Producer/__private__/Producer.empty.js";
import Producer_encodeUtf8 from "./Producer/__private__/Producer.encodeUtf8.js";
import Producer_firstAsync from "./Producer/__private__/Producer.firstAsync.js";
import Producer_forEach from "./Producer/__private__/Producer.forEach.js";
import Producer_fromAsyncFactory from "./Producer/__private__/Producer.fromAsyncFactory.js";
import Producer_fromReadonlyArray from "./Producer/__private__/Producer.fromReadonlyArray.js";
import Producer_fromValue from "./Producer/__private__/Producer.fromValue.js";
import {
  Producer_gen,
  Producer_genPure,
} from "./Producer/__private__/Producer.gen.js";
import {
  Producer_genAsync,
  Producer_genPureAsync,
} from "./Producer/__private__/Producer.genAsync.js";
import Producer_keep from "./Producer/__private__/Producer.keep.js";
import Producer_lastAsync from "./Producer/__private__/Producer.lastAsync.js";
import {
  Producer_combineLatest,
  Producer_zipLatest,
} from "./Producer/__private__/Producer.latest.js";
import Producer_map from "./Producer/__private__/Producer.map.js";
import Producer_merge from "./Producer/__private__/Producer.merge.js";
import Producer_never from "./Producer/__private__/Producer.never.js";
import Producer_pairwise from "./Producer/__private__/Producer.pairwise.js";
import Producer_reduceAsync from "./Producer/__private__/Producer.reduceAsync.js";
import Producer_repeat from "./Producer/__private__/Producer.repeat.js";
import Producer_retry from "./Producer/__private__/Producer.retry.js";
import Producer_scan from "./Producer/__private__/Producer.scan.js";
import Producer_scanMany from "./Producer/__private__/Producer.scanMany.js";
import Producer_skipFirst from "./Producer/__private__/Producer.skipFirst.js";
import Producer_subscribe from "./Producer/__private__/Producer.subscribe.js";
import Producer_switchAll from "./Producer/__private__/Producer.switchAll.js";
import Producer_takeFirst from "./Producer/__private__/Producer.takeFirst.js";
import Producer_takeLast from "./Producer/__private__/Producer.takeLast.js";
import Producer_takeUntil from "./Producer/__private__/Producer.takeUntil.js";
import Producer_takeWhile from "./Producer/__private__/Producer.takeWhile.js";
import Producer_throwIfEmpty from "./Producer/__private__/Producer.throwIfEmpty.js";
import Producer_toObservable from "./Producer/__private__/Producer.toObservable.js";
import Producer_toReadonlyArrayAsync from "./Producer/__private__/Producer.toReadonlyArrayAsync.js";
import Producer_withLatestFrom from "./Producer/__private__/Producer.withLatestFrom.js";

/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ProducerLike<this[typeof Computation_T]>;

  readonly [Computation_pureSynchronousOfT]?: never;
  readonly [Computation_synchronousWithSideEffectsOfT]?: never;

  readonly [Computation_pureDeferredOfT]?: PureProducerLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: ProducerWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_multicastOfT]?: never;
}

export type Computation = ProducerComputation;

export interface ProducerModule
  extends ComputationModule<ProducerComputation>,
    ConcurrentDeferredComputationModule<
      ProducerComputation,
      {
        genAsync: { maxYieldInterval?: number };
        genPureAsync: { maxYieldInterval?: number };
      }
    >,
    ConcurrentReactiveComputationModule<ProducerComputation>,
    SequentialComputationModule<ProducerComputation>,
    SequentialReactiveComputationModule<ProducerComputation>,
    ConcurrentComputationModule<ProducerComputation>,
    DeferredReactiveComputationModule<ProducerComputation> {
  create<T>(
    f: (consumer: ConsumerLike<T>) => void,
  ): ProducerWithSideEffectsLike<T>;
}

export type Signature = ProducerModule;

export const actionReducer: Signature["actionReducer"] = Producer_actionReducer;
export const broadcast: Signature["broadcast"] = Producer_broadcast;
export const buffer: Signature["buffer"] = Producer_buffer;
export const catchError: Signature["catchError"] = Producer_catchError;
export const combineLatest: Signature["combineLatest"] = Producer_combineLatest;
export const concat: Signature["concat"] = Producer_concat;
export const concatAll: Signature["concatAll"] = (() => () =>
  empty()) as unknown as Signature["concatAll"];
export const create: Signature["create"] = Producer_create;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Producer_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Producer_distinctUntilChanged;
export const empty: Signature["empty"] = Producer_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Producer_encodeUtf8;
export const firstAsync: Signature["firstAsync"] = Producer_firstAsync;
export const forEach: Signature["forEach"] = Producer_forEach;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  AsyncIterable_broadcast as unknown as Signature["fromAsyncIterable"];
export const fromProducer: Signature["fromProducer"] = returns(
  identity,
) as Signature["fromProducer"];
export const forkMerge: Signature["forkMerge"] = (() => () =>
  empty()) as unknown as Signature["forkMerge"];
export const fromAsyncFactory: Signature["fromAsyncFactory"] =
  Producer_fromAsyncFactory;
export const fromBroadcaster: Signature["fromBroadcaster"] =
  Broadcaster_toProducer;
export const fromObservable: Signature["fromObservable"] =
  Observable_toProducer as Signature["fromObservable"];
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Producer_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Producer_fromValue;
export const gen: Signature["gen"] = Producer_gen;
export const genAsync: Signature["genAsync"] = Producer_genAsync;
export const genPure: Signature["genPure"] = Producer_genPure;
export const genPureAsync: Signature["genPureAsync"] = Producer_genPureAsync;
export const keep: Signature["keep"] = Producer_keep;
export const lastAsync: Signature["lastAsync"] = Producer_lastAsync;
export const map: Signature["map"] = Producer_map;
export const merge: Signature["merge"] = Producer_merge;
export const mergeAll: Signature["mergeAll"] = (() => () =>
  empty()) as unknown as Signature["mergeAll"];
export const pairwise: Signature["pairwise"] = Producer_pairwise;
export const never: Signature["never"] = Producer_never;
export const reduceAsync: Signature["reduceAsync"] = Producer_reduceAsync;
export const repeat: Signature["repeat"] = Producer_repeat;
export const retry: Signature["retry"] = Producer_retry;
export const scan: Signature["scan"] = Producer_scan;
export const scanMany: Signature["scanMany"] = Producer_scanMany;
export const skipFirst: Signature["skipFirst"] = Producer_skipFirst;
export const subscribe: Signature["subscribe"] = Producer_subscribe;
export const switchAll: Signature["switchAll"] = Producer_switchAll;
export const takeFirst: Signature["takeFirst"] = Producer_takeFirst;
export const takeLast: Signature["takeLast"] = Producer_takeLast;
export const takeWhile: Signature["takeWhile"] = Producer_takeWhile;
export const takeUntil: Signature["takeUntil"] = Producer_takeUntil;
export const throwIfEmpty: Signature["throwIfEmpty"] = Producer_throwIfEmpty;
export const toObservable: Signature["toObservable"] = Producer_toObservable;
export const toProducer: Signature["toProducer"] = returns(
  identity,
) as Signature["toProducer"];
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Producer_toReadonlyArrayAsync;
export const withLatestFrom: Signature["withLatestFrom"] =
  Producer_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Producer_zipLatest;
