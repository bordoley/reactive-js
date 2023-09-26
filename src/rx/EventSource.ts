import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  SideEffect1,
  Tuple2,
} from "../functions.js";
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
import EventSource_pairwise from "./EventSource/__internal__/EventSource.pairwise.js";
import EventSource_scan from "./EventSource/__internal__/EventSource.scan.js";
import EventSource_skipFirst from "./EventSource/__internal__/EventSource.skipFirst.js";
import EventSource_takeFirst from "./EventSource/__internal__/EventSource.takeFirst.js";
import EventSource_takeWhile from "./EventSource/__internal__/EventSource.takeWhile.js";

export interface EventSourceModule {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  buffer<T>(options?: {
    count?: number;
  }): Function1<EventSourceLike<T>, EventSourceLike<readonly T[]>>;

  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): Function1<EventSourceLike<T>, EventSourceLike<T>>;

  keep<T>(
    predicate: Predicate<T>,
  ): Function1<EventSourceLike<T>, EventSourceLike<T>>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): Function1<EventSourceLike<TB>, EventSourceLike<TA>>;

  merge<T>(
    fst: EventSourceLike<T>,
    snd: EventSourceLike<T>,
    ...tail: readonly EventSourceLike<T>[]
  ): EventSourceLike<T>;

  mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;

  pairwise<T>(): Function1<EventSourceLike<T>, EventSourceLike<Tuple2<T, T>>>;

  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<EventSourceLike<T>, EventSourceLike<TAcc>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): Function1<EventSourceLike<T>, EventSourceLike<T>>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): Function1<EventSourceLike<T>, EventSourceLike<T>>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
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
export const pairwise: Signature["pairwise"] = EventSource_pairwise;
export const scan: Signature["scan"] = EventSource_scan;
export const skipFirst: Signature["skipFirst"] = EventSource_skipFirst;
export const takeFirst: Signature["takeFirst"] = EventSource_takeFirst;
export const takeWhile: Signature["takeWhile"] = EventSource_takeWhile;
