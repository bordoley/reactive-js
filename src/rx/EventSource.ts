import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computation.js";
import { Function1, SideEffect1 } from "../functions.js";
import { EventListenerLike, EventSourceLike } from "../rx.js";
import { DisposableLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_buffer from "./EventSource/__internal__/EventSource.buffer.js";
import EventSource_create from "./EventSource/__internal__/EventSource.create.js";
import EventSource_distinctUntilChanged from "./EventSource/__internal__/EventSource.distinctUntilChanged.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";
import EventSource_merge from "./EventSource/__internal__/EventSource.merge.js";
import EventSource_mergeMany from "./EventSource/__internal__/EventSource.mergeMany.js";
import EventSource_mergeWith from "./EventSource/__internal__/EventSource.mergeWith.js";
import EventSource_pairwise from "./EventSource/__internal__/EventSource.pairwise.js";
import EventSource_scan from "./EventSource/__internal__/EventSource.scan.js";
import EventSource_skipFirst from "./EventSource/__internal__/EventSource.skipFirst.js";
import EventSource_takeFirst from "./EventSource/__internal__/EventSource.takeFirst.js";
import EventSource_takeWhile from "./EventSource/__internal__/EventSource.takeWhile.js";

export interface EventSourceComputation extends Computation {
  readonly [Computation_type]?: EventSourceLike<this[typeof Computation_T]>;
}

export type Type = EventSourceComputation;

export interface EventSourceModule
  extends PureComputationModule<EventSourceComputation> {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;

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
export const buffer: Signature["buffer"] = EventSource_buffer;
export const create: Signature["create"] = EventSource_create;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  EventSource_distinctUntilChanged;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const merge: Signature["merge"] = EventSource_merge;
export const mergeMany: Signature["mergeMany"] = EventSource_mergeMany;
export const mergeWith: Signature["mergeWith"] = EventSource_mergeWith;
export const pairwise: Signature["pairwise"] = EventSource_pairwise;
export const scan: Signature["scan"] = EventSource_scan;
export const skipFirst: Signature["skipFirst"] = EventSource_skipFirst;
export const takeFirst: Signature["takeFirst"] = EventSource_takeFirst;
export const takeWhile: Signature["takeWhile"] = EventSource_takeWhile;
