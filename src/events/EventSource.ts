import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computations.js";
import { EventListenerLike, EventSourceLike } from "../events.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_buffer from "./EventSource/__private__/EventSource.buffer.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_decodeWithCharset from "./EventSource/__private__/EventSource.decodeWithCharset.js";
import EventSource_distinctUntilChanged from "./EventSource/__private__/EventSource.distinctUntilChanged.js";
import EventSource_fromIterable from "./EventSource/__private__/EventSource.fromIterable.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_mergeMany from "./EventSource/__private__/EventSource.mergeMany.js";
import EventSource_mergeWith from "./EventSource/__private__/EventSource.mergeWith.js";
import EventSource_pairwise from "./EventSource/__private__/EventSource.pairwise.js";
import EventSource_scan from "./EventSource/__private__/EventSource.scan.js";
import EventSource_skipFirst from "./EventSource/__private__/EventSource.skipFirst.js";
import EventSource_takeFirst from "./EventSource/__private__/EventSource.takeFirst.js";
import EventSource_takeWhile from "./EventSource/__private__/EventSource.takeWhile.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__private__/EventSource.toReadonlyArrayAsync.js";

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
  extends PureComputationModule<EventSourceComputation> {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;

  fromIterable<T>(): Function1<Iterable<T>, EventSourceLike<T>>;

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

  toReadonlyArrayAsync<T>(): Function1<
    EventSourceLike<T>,
    Promise<ReadonlyArray<T>>
  >;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const buffer: Signature["buffer"] = EventSource_buffer;
export const create: Signature["create"] = EventSource_create;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  EventSource_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  EventSource_distinctUntilChanged;
export const fromIterable: Signature["fromIterable"] = EventSource_fromIterable;
export const fromPromise: Signature["fromPromise"] = EventSource_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  EventSource_fromIterable;
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
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  EventSource_toReadonlyArrayAsync;
