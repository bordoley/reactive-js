import {
  Computation,
  Computation_T,
  Computation_type,
  ConcurrentReactiveComputationModule,
} from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_mergeMany from "./EventSource/__private__/EventSource.mergeMany.js";

/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends Computation {
  readonly [Computation_type]?: EventSourceLike<this[typeof Computation_T]>;
}

/**
 * @noInheritDoc
 */
export interface EventSourceModule
  extends ConcurrentReactiveComputationModule<
    EventSourceLike,
    EventSourceComputation
  > {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const create: Signature["create"] = EventSource_create;
export const fromPromise: Signature["fromPromise"] = EventSource_fromPromise;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const mergeMany: Signature["mergeMany"] = EventSource_mergeMany;
