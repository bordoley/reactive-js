import {
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
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_combineLatest from "./EventSource/__private__/EventSource.combineLatest.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_never from "./EventSource/__private__/EventSource.never.js";
import EventSource_withLatestFrom from "./EventSource/__private__/EventSource.withLatestFrom.js";
import EventSource_zipLatest from "./EventSource/__private__/EventSource.zipLatest.js";

/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends ComputationType {
  readonly [Computation_baseOfT]?: EventSourceLike<this[typeof Computation_T]>;

  readonly [Computation_pureDeferredOfT]?: never;
  readonly [Computation_deferredWithSideEffectsOfT]?: never;

  readonly [Computation_pureSynchronousOfT]?: never;
  readonly [Computation_synchronousWithSideEffectsOfT]?: never;

  readonly [Computation_multicastOfT]?: EventSourceLike<
    this[typeof Computation_T]
  >;
}

export type Computation = EventSourceComputation;

/**
 * @noInheritDoc
 */
export interface EventSourceModule
  extends ConcurrentReactiveComputationModule<EventSourceComputation> {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const combineLatest: Signature["combineLatest"] =
  EventSource_combineLatest;
export const create: Signature["create"] = EventSource_create;
export const fromPromise: Signature["fromPromise"] = EventSource_fromPromise;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const merge: Signature["merge"] = EventSource_merge;
export const never: Signature["never"] = EventSource_never;
export const withLatestFrom: Signature["withLatestFrom"] =
  EventSource_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = EventSource_zipLatest;
