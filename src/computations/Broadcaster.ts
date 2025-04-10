import {
  BroadcasterLike,
  ComputationModule,
  ComputationTypeLike,
  ComputationTypeLike_T,
  ComputationTypeLike_baseOfT,
  ConcurrentReactiveComputationModule,
  ReactiveComputationModule,
} from "../computations.js";
import { Function1, SideEffect1, identityLazy } from "../functions.js";
import {
  BackpressureStrategy,
  DisposableLike,
  EventListenerLike,
} from "../utils.js";
import Broadcaster_addEventHandler from "./Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_distinctUntilChanged from "./Broadcaster/__private__/Broadcaster.distinctUntilChanged.js";
import Broadcaster_encodeUtf8 from "./Broadcaster/__private__/Broadcaster.encodeUtf8.js";
import Broadcaster_forkMerge from "./Broadcaster/__private__/Broadcaster.forkMerge.js";
import Broadcaster_fromObservable from "./Broadcaster/__private__/Broadcaster.fromObservable.js";
import Broadcaster_fromPromise from "./Broadcaster/__private__/Broadcaster.fromPromise.js";
import Broadcaster_genPure from "./Broadcaster/__private__/Broadcaster.genPure.js";
import Broadcaster_keep from "./Broadcaster/__private__/Broadcaster.keep.js";
import {
  Broadcaster_combineLatest,
  Broadcaster_zipLatest,
} from "./Broadcaster/__private__/Broadcaster.latest.js";
import Broadcaster_map from "./Broadcaster/__private__/Broadcaster.map.js";
import Broadcaster_merge from "./Broadcaster/__private__/Broadcaster.merge.js";
import Broadcaster_pairwise from "./Broadcaster/__private__/Broadcaster.pairwise.js";
import Broadcaster_scan from "./Broadcaster/__private__/Broadcaster.scan.js";
import Broadcaster_skipFirst from "./Broadcaster/__private__/Broadcaster.skipFirst.js";
import Broadcaster_takeFirst from "./Broadcaster/__private__/Broadcaster.takeFirst.js";
import Broadcaster_takeUntil from "./Broadcaster/__private__/Broadcaster.takeUntil.js";
import Broadcaster_takeWhile from "./Broadcaster/__private__/Broadcaster.takeWhile.js";
import Broadcaster_toObservable from "./Broadcaster/__private__/Broadcaster.toObservable.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Broadcaster_withLatestFrom from "./Broadcaster/__private__/Broadcaster.withLatestFrom.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";

/**
 * @noInheritDoc
 */
export interface BroadcasterComputation extends ComputationTypeLike {
  readonly [ComputationTypeLike_baseOfT]?: BroadcasterLike<
    this[typeof ComputationTypeLike_T]
  >;
}

export type Computation = BroadcasterComputation;

/**
 * @noInheritDoc
 */
export interface BroadcasterModule
  extends ComputationModule<BroadcasterComputation>,
    ReactiveComputationModule<BroadcasterComputation>,
    ConcurrentReactiveComputationModule<
      BroadcasterComputation,
      {
        fromObservable?: {
          autoDispose?: boolean;
        };
        toObservable?: {
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        };
      }
    > {
  addEventHandler<T>(
    onNotify: SideEffect1<T>,
  ): Function1<BroadcasterLike<T>, DisposableLike>;

  create<T>(
    setup: SideEffect1<EventListenerLike<T>>,
    options?: {
      readonly autoDispose?: boolean;
    },
  ): BroadcasterLike<T> & DisposableLike;

  fromPromise<T>(): Function1<Promise<T>, BroadcasterLike<T>>;
}

export type Signature = BroadcasterModule;

export const addEventHandler: Signature["addEventHandler"] =
  Broadcaster_addEventHandler;
export const combineLatest: Signature["combineLatest"] =
  Broadcaster_combineLatest;
export const create: Signature["create"] = Broadcaster_create;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Broadcaster_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Broadcaster_encodeUtf8;
export const forkMerge: Signature["forkMerge"] = Broadcaster_forkMerge;
export const fromBroadcaster: Signature["fromBroadcaster"] =
  identityLazy as Signature["fromBroadcaster"];
export const fromObservable: Signature["fromObservable"] =
  Broadcaster_fromObservable;
export const fromProducer: Signature["fromProducer"] =
  Producer_broadcast as Signature["fromProducer"];
export const fromPromise: Signature["fromPromise"] = Broadcaster_fromPromise;
export const genPure: Signature["genPure"] = Broadcaster_genPure;
export const keep: Signature["keep"] = Broadcaster_keep;
export const map: Signature["map"] = Broadcaster_map;
export const merge: Signature["merge"] = Broadcaster_merge;
export const pairwise: Signature["pairwise"] = Broadcaster_pairwise;
export const scan: Signature["scan"] = Broadcaster_scan;
export const skipFirst: Signature["skipFirst"] = Broadcaster_skipFirst;
export const takeFirst: Signature["takeFirst"] = Broadcaster_takeFirst;
export const takeUntil: Signature["takeUntil"] = Broadcaster_takeUntil;
export const takeWhile: Signature["takeWhile"] = Broadcaster_takeWhile;
export const toObservable: Signature["toObservable"] = Broadcaster_toObservable;
export const toProducer: Signature["toProducer"] = Broadcaster_toProducer;
export const withLatestFrom: Signature["withLatestFrom"] =
  Broadcaster_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = Broadcaster_zipLatest;
