import {
  BroadcasterLike,
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
  ConcurrentReactiveComputationModule,
  PureProducerLike,
} from "../computations.js";
import { Function1, identity, returns, SideEffect1 } from "../functions.js";
import {
  DisposableLike,
  ListenerLike,
  PauseableLike,
  SchedulerLike,
} from "../utils.js";
import AsyncIterable_broadcast from "./AsyncIterable/__private__/AsyncIterable.broadcast.js";
import Broadcaster_addEventHandler from "./Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "./Broadcaster/__private__/Broadcaster.createPauseable.js";
import Broadcaster_distinctUntilChanged from "./Broadcaster/__private__/Broadcaster.distinctUntilChanged.js";
import Broadcaster_empty from "./Broadcaster/__private__/Broadcaster.empty.js";
import Broadcaster_firstAsync from "./Broadcaster/__private__/Broadcaster.firstAsync.js";
import Broadcaster_forkMerge from "./Broadcaster/__private__/Broadcaster.forkMerge.js";
import Broadcaster_fromPromise from "./Broadcaster/__private__/Broadcaster.fromPromise.js";
import Broadcaster_fromReadonlyArray from "./Broadcaster/__private__/Broadcaster.fromReadonlyArray.js";
import Broadcaster_fromValue from "./Broadcaster/__private__/Broadcaster.fromValue.js";
import Broadcaster_gen from "./Broadcaster/__private__/Broadcaster.gen.js";
import Broadcaster_keep from "./Broadcaster/__private__/Broadcaster.keep.js";
import Broadcaster_lastAsync from "./Broadcaster/__private__/Broadcaster.lastAsync.js";
import {
  Broadcaster_combineLatest,
  Broadcaster_zipLatest,
} from "./Broadcaster/__private__/Broadcaster.latest.js";
import Broadcaster_map from "./Broadcaster/__private__/Broadcaster.map.js";
import Broadcaster_merge from "./Broadcaster/__private__/Broadcaster.merge.js";
import Broadcaster_never from "./Broadcaster/__private__/Broadcaster.never.js";
import Broadcaster_pairwise from "./Broadcaster/__private__/Broadcaster.pairwise.js";
import Broadcaster_reduceAsync from "./Broadcaster/__private__/Broadcaster.reduceAsync.js";
import Broadcaster_scan from "./Broadcaster/__private__/Broadcaster.scan.js";
import Broadcaster_skipFirst from "./Broadcaster/__private__/Broadcaster.skipFirst.js";
import Broadcaster_takeFirst from "./Broadcaster/__private__/Broadcaster.takeFirst.js";
import Broadcaster_takeUntil from "./Broadcaster/__private__/Broadcaster.takeUntil.js";
import Broadcaster_takeWhile from "./Broadcaster/__private__/Broadcaster.takeWhile.js";
import Broadcaster_toObservable from "./Broadcaster/__private__/Broadcaster.toObservable.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Broadcaster_toReadonlyArrayAsync from "./Broadcaster/__private__/Broadcaster.toReadonlyArrayAsync.js";
import Broadcaster_withLatestFrom from "./Broadcaster/__private__/Broadcaster.withLatestFrom.js";
import Observable_broadcast from "./Observable/__private__/Observable.broadcast.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";

/**
 * @noInheritDoc
 */
export interface BroadcasterComputation extends ComputationType {
  readonly [Computation_baseOfT]?: BroadcasterLike<this[typeof Computation_T]>;

  readonly [Computation_pureSynchronousOfT]?: never;
  readonly [Computation_synchronousWithSideEffectsOfT]?: never;

  readonly [Computation_pureDeferredOfT]?: never;
  readonly [Computation_deferredWithSideEffectsOfT]?: never;

  readonly [Computation_multicastOfT]?: BroadcasterLike<
    this[typeof Computation_T]
  >;
}

export type Computation = BroadcasterComputation;

/**
 * @noInheritDoc
 */
export interface BroadcasterModule
  extends ComputationModule<
      BroadcasterComputation,
      {
        empty: {
          autoDispose?: boolean;
        };
        fromReadonlyArray: {
          autoDispose?: boolean;
        };
        fromValue: {
          autoDispose?: boolean;
        };
        gen: {
          autoDispose?: boolean;
        };
        genPure: {
          autoDispose?: boolean;
        };
        raise: {
          autoDispose?: boolean;
        };
      }
    >,
    ConcurrentReactiveComputationModule<
      BroadcasterComputation,
      {
        fromAsyncIterable?: {
          readonly autoDispose?: boolean;
          readonly scheduler?: SchedulerLike;
        };
        never: {
          autoDispose?: boolean;
        };
      }
    >,
    ConcurrentComputationModule<BroadcasterComputation> {
  addEventHandler<T>(
    onNotify: SideEffect1<T>,
  ): Function1<BroadcasterLike<T>, DisposableLike>;

  create<T>(
    setup: SideEffect1<ListenerLike<T>>,
    options?: {
      readonly autoDispose?: boolean;
    },
  ): BroadcasterLike<T> & DisposableLike;

  createPauseable<T>(
    op: Function1<
      BroadcasterLike<boolean> & DisposableLike,
      BroadcasterLike<T>
    >,
    options?: {
      readonly autoDispose?: boolean;
    },
  ): PauseableLike & BroadcasterLike<T> & DisposableLike;

  fromPromise<T>(): Function1<Promise<T>, BroadcasterLike<T> & DisposableLike>;

  toProducer<T>(): Function1<BroadcasterLike<T>, PureProducerLike<T>>;
}

export type Signature = BroadcasterModule;

export const addEventHandler: Signature["addEventHandler"] =
  Broadcaster_addEventHandler;
export const combineLatest: Signature["combineLatest"] =
  Broadcaster_combineLatest;
export const create: Signature["create"] = Broadcaster_create;
export const createPauseable: Signature["createPauseable"] =
  Broadcaster_createPauseable;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Broadcaster_distinctUntilChanged;
export const empty: Signature["empty"] = Broadcaster_empty;
export const firstAsync: Signature["firstAsync"] = Broadcaster_firstAsync;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  AsyncIterable_broadcast as Signature["fromAsyncIterable"];
export const forkMerge: Signature["forkMerge"] = Broadcaster_forkMerge;
export const fromBroadcaster: Signature["fromBroadcaster"] = /*@__PURE__*/  returns(identity) as  Signature["fromBroadcaster"];
export const fromObservable: Signature["fromObservable"] = Observable_broadcast as Signature["fromObservable"];
export const fromProducer: Signature["fromProducer"] = Producer_broadcast as  Signature["fromProducer"];
export const fromPromise: Signature["fromPromise"] = Broadcaster_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Broadcaster_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Broadcaster_fromValue;
export const gen: Signature["gen"] = Broadcaster_gen;
export const genPure: Signature["genPure"] = Broadcaster_gen;
export const keep: Signature["keep"] = Broadcaster_keep;
export const lastAsync: Signature["lastAsync"] = Broadcaster_lastAsync;
export const map: Signature["map"] = Broadcaster_map;
export const merge: Signature["merge"] = Broadcaster_merge;
export const pairwise: Signature["pairwise"] = Broadcaster_pairwise;
export const never: Signature["never"] = Broadcaster_never;
export const reduceAsync: Signature["reduceAsync"] = Broadcaster_reduceAsync;
export const scan: Signature["scan"] = Broadcaster_scan;
export const skipFirst: Signature["skipFirst"] = Broadcaster_skipFirst;
export const takeFirst: Signature["takeFirst"] = Broadcaster_takeFirst;
export const takeWhile: Signature["takeWhile"] = Broadcaster_takeWhile;
export const takeUntil: Signature["takeUntil"] = Broadcaster_takeUntil;
export const toObservable: Signature["toObservable"] = Broadcaster_toObservable;
export const toProducer: Signature["toProducer"] = Broadcaster_toProducer;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Broadcaster_toReadonlyArrayAsync;
export const withLatestFrom: Signature["withLatestFrom"] =
  Broadcaster_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Broadcaster_zipLatest;
