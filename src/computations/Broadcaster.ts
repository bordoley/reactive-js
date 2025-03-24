import {
  BroadcasterLike,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_multicastOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  ConcurrentReactiveComputationModule,
} from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike, EventListenerLike } from "../utils.js";
import Broadcaster_addEventHandler from "./Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "./Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_merge from "./Broadcaster/__private__/Broadcaster.merge.js";

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
  extends ConcurrentReactiveComputationModule<BroadcasterComputation> {
  addEventHandler<T>(
    onNotify: SideEffect1<T>,
  ): Function1<BroadcasterLike<T>, DisposableLike>;

  create<T>(
    setup: SideEffect1<EventListenerLike<T>>,
    options?: {
      readonly autoDispose?: boolean;
    },
  ): BroadcasterLike<T> & DisposableLike;
}

export type Signature = BroadcasterModule;

export const addEventHandler: Signature["addEventHandler"] =
  Broadcaster_addEventHandler;
export const create: Signature["create"] = Broadcaster_create;
export const merge: Signature["merge"] = Broadcaster_merge;

