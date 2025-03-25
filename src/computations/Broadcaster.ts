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
} from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike, EventListenerLike, PauseableLike } from "../utils.js";
import Broadcaster_addEventHandler from "./Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "./Broadcaster/__private__/Broadcaster.createPauseable.js";
import Broadcaster_distinctUntilChanged from "./Broadcaster/__private__/Broadcaster.distinctUntilChanged.js";
import Broadcaster_encodeUtf8 from "./Broadcaster/__private__/Broadcaster.encodeUtf8.js";
import Broadcaster_gen from "./Broadcaster/__private__/Broadcaster.gen.js";
import Broadcaster_keep from "./Broadcaster/__private__/Broadcaster.keep.js";
import Broadcaster_lastAsync from "./Broadcaster/__private__/Broadcaster.lastAsync.js";
import Broadcaster_map from "./Broadcaster/__private__/Broadcaster.map.js";
import Broadcaster_merge from "./Broadcaster/__private__/Broadcaster.merge.js";
import Broadcaster_pairwise from "./Broadcaster/__private__/Broadcaster.pairwise.js";
import Broadcaster_scan from "./Broadcaster/__private__/Broadcaster.scan.js";
import Broadcaster_toProducer from "./Broadcaster/__private__/Broadcaster.toProducer.js";
import Broadcaster_toReadonlyArrayAsync from "./Broadcaster/__private__/Broadcaster.toReadonlyArrayAsync.js";

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
  extends ComputationModule<BroadcasterComputation>,
    ConcurrentComputationModule<BroadcasterComputation>,
    ConcurrentReactiveComputationModule<BroadcasterComputation> {
  addEventHandler<T>(
    onNotify: SideEffect1<T>,
  ): Function1<BroadcasterLike<T>, DisposableLike>;

  create<T>(
    setup: SideEffect1<EventListenerLike<T>>,
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
}

export type Signature = BroadcasterModule;

export const addEventHandler: Signature["addEventHandler"] =
  Broadcaster_addEventHandler;
export const create: Signature["create"] = Broadcaster_create;
export const createPauseable: Signature["createPauseable"] =
  Broadcaster_createPauseable;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Broadcaster_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Broadcaster_encodeUtf8;
export const gen: Signature["gen"] = Broadcaster_gen;
export const genPure: Signature["genPure"] = Broadcaster_gen;
export const keep: Signature["keep"] = Broadcaster_keep;
export const lastAsync: Signature["lastAsync"] = Broadcaster_lastAsync;
export const map: Signature["map"] = Broadcaster_map;
export const merge: Signature["merge"] = Broadcaster_merge;
export const pairwise: Signature["pairwise"] = Broadcaster_pairwise;
export const scan: Signature["scan"] = Broadcaster_scan;
export const toProducer: Signature["toProducer"] = Broadcaster_toProducer;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Broadcaster_toReadonlyArrayAsync;
