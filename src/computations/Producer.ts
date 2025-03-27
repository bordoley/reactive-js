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
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";
import Producer_buffer from "./Producer/__private__/Producer.buffer.js";
import Producer_catchError from "./Producer/__private__/Producer.catchError.js";
import Producer_concat from "./Producer/__private__/Producer.concat.js";
import Producer_create from "./Producer/__private__/Producer.create.js";
import Producer_decodeWithCharset from "./Producer/__private__/Producer.decodeWithCharset.js";
import Producer_distinctUntilChanged from "./Producer/__private__/Producer.distinctUntilChanged.js";
import Producer_encodeUtf8 from "./Producer/__private__/Producer.encodeUtf8.js";
import Producer_forEach from "./Producer/__private__/Producer.forEach.js";
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
import Producer_map from "./Producer/__private__/Producer.map.js";
import Producer_pairwise from "./Producer/__private__/Producer.pairwise.js";
import Producer_scan from "./Producer/__private__/Producer.scan.js";
import Producer_skipFirst from "./Producer/__private__/Producer.skipFirst.js";
import Producer_subscribe from "./Producer/__private__/Producer.subscribe.js";
import Producer_takeFirst from "./Producer/__private__/Producer.takeFirst.js";
import Producer_takeLast from "./Producer/__private__/Producer.takeLast.js";
import Producer_takeUntil from "./Producer/__private__/Producer.takeUntil.js";
import Producer_takeWhile from "./Producer/__private__/Producer.takeWhile.js";
import Producer_throwIfEmpty from "./Producer/__private__/Producer.throwIfEmpty.js";
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

export const buffer: Signature["buffer"] = Producer_buffer;
export const broadcast: Signature["broadcast"] = Producer_broadcast;
export const catchError: Signature["catchError"] = Producer_catchError;
export const concat: Signature["concat"] = Producer_concat;
export const create: Signature["create"] = Producer_create;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Producer_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Producer_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Producer_encodeUtf8;
export const forEach: Signature["forEach"] = Producer_forEach;
export const gen: Signature["gen"] = Producer_gen;
export const genAsync: Signature["genAsync"] = Producer_genAsync;
export const genPure: Signature["genPure"] = Producer_genPure;
export const genPureAsync: Signature["genPureAsync"] = Producer_genPureAsync;
export const keep: Signature["keep"] = Producer_keep;
export const lastAsync: Signature["lastAsync"] = Producer_lastAsync;
export const makeModule: Signature["makeModule"] = identity;
export const map: Signature["map"] = Producer_map;
export const pairwise: Signature["pairwise"] = Producer_pairwise;
export const scan: Signature["scan"] = Producer_scan;
export const skipFirst: Signature["skipFirst"] = Producer_skipFirst;
export const subscribe: Signature["subscribe"] = Producer_subscribe;
export const takeFirst: Signature["takeFirst"] = Producer_takeFirst;
export const takeLast: Signature["takeLast"] = Producer_takeLast;
export const takeUntil: Signature["takeUntil"] = Producer_takeUntil;
export const takeWhile: Signature["takeWhile"] = Producer_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Producer_throwIfEmpty;
export const toProducer: Signature["toProducer"] = /*@__PURE__*/ returns(
  identity,
) as Signature["toProducer"];
export const withLatestFrom: Signature["withLatestFrom"] =
  Producer_withLatestFrom;
