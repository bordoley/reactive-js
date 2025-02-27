import {
  Computation,
  Computation_T,
  Computation_type,
  PureStatelessComputationModule,
} from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_mergeMany from "./EventSource/__private__/EventSource.mergeMany.js";
import EventSource_mergeWith from "./EventSource/__private__/EventSource.mergeWith.js";

/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends Computation<EventSourceLike> {
  readonly [Computation_type]?: EventSourceLike<this[typeof Computation_T]>;
}

/**
 * @noInheritDoc
 */
export interface EventSourceModule
  extends PureStatelessComputationModule<
    EventSourceLike,
    EventSourceComputation
  > {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;

  fromPromise<T>(): Function1<Promise<T>, EventSourceLike<T>>;

  merge<T>(
    fst: EventSourceLike<T>,
    snd: EventSourceLike<T>,
    ...tail: readonly EventSourceLike<T>[]
  ): EventSourceLike<T>;

  mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;

  mergeWith<T>(
    snd: EventSourceLike<T>,
    ...tail: readonly EventSourceLike<T>[]
  ): Function1<EventSourceLike<T>, EventSourceLike<T>>;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const create: Signature["create"] = EventSource_create;
export const fromPromise: Signature["fromPromise"] = EventSource_fromPromise;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const merge: Signature["merge"] = EventSource_merge;
export const mergeMany: Signature["mergeMany"] = EventSource_mergeMany;
export const mergeWith: Signature["mergeWith"] = EventSource_mergeWith;
