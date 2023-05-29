import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_buffer from "./EventSource/__internal__/EventSource.buffer.js";
import EventSource_create from "./EventSource/__internal__/EventSource.create.js";
import EventSource_createPublisher from "./EventSource/__internal__/EventSource.createPublisher.js";
import EventSource_createRefCountedPublisher from "./EventSource/__internal__/EventSource.createRefCountedPublisher.js";
import EventSource_distinctUntilChanged from "./EventSource/__internal__/EventSource.distinctUntilChanged.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_keepType from "./EventSource/__internal__/EventSource.keepType.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";
import EventSource_mapTo from "./EventSource/__internal__/EventSource.mapTo.js";
import EventSource_merge from "./EventSource/__internal__/EventSource.merge.js";
import EventSource_mergeMany from "./EventSource/__internal__/EventSource.mergeMany.js";
import EventSource_pairwise from "./EventSource/__internal__/EventSource.pairwise.js";
import EventSource_pick from "./EventSource/__internal__/EventSource.pick.js";
import EventSource_scan from "./EventSource/__internal__/EventSource.scan.js";
import EventSource_skipFirst from "./EventSource/__internal__/EventSource.skipFirst.js";
import EventSource_takeFirst from "./EventSource/__internal__/EventSource.takeFirst.js";
import EventSource_takeLast from "./EventSource/__internal__/EventSource.takeLast.js";
import EventSource_takeWhile from "./EventSource/__internal__/EventSource.takeWhile.js";
import EventSource_toObservable from "./EventSource/__internal__/EventSource.toObservable.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__internal__/EventSource.toReadonlyArray.js";
import { SideEffect1, identityLazy } from "./functions.js";
import {
  Container_T,
  Container_type,
  EventListenerLike,
  EventPublisherLike,
  EventSourceContainerModule,
  EventSourceLike,
  IndexedContainer,
  ReactiveContainerModule,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface EventSourceContainer extends IndexedContainer {
  readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
}

export type Type = EventSourceContainer;

/**
 * @noInheritDoc
 * @category Module
 */
export interface EventSourceModule
  extends EventSourceContainerModule<Type>,
    ReactiveContainerModule<Type> {
  /**
   * @category Constructor
   */
  create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;

  /**
   * @category Constructor
   */
  createPublisher<T>(): EventPublisherLike<T>;

  /**
   * @category Constructor
   */
  createRefCountedPublisher<T>(): EventPublisherLike<T>;

  /**
   * @category Constructor
   */
  merge<T>(
    fst: EventSourceLike<T>,
    snd: EventSourceLike<T>,
    ...tail: readonly EventSourceLike<T>[]
  ): EventSourceLike<T>;

  /**
   * @category Constructor
   */
  mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const buffer: Signature["buffer"] = EventSource_buffer;
export const create: Signature["create"] = EventSource_create;
export const createPublisher: Signature["createPublisher"] =
  EventSource_createPublisher;
export const createRefCountedPublisher: Signature["createRefCountedPublisher"] =
  EventSource_createRefCountedPublisher;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  EventSource_distinctUntilChanged;
export const keep: Signature["keep"] = EventSource_keep;
export const keepType: Signature["keepType"] = EventSource_keepType;
export const map: Signature["map"] = EventSource_map;
export const mapTo: Signature["mapTo"] = EventSource_mapTo;
export const merge: Signature["merge"] = EventSource_merge;
export const mergeMany: Signature["mergeMany"] = EventSource_mergeMany;
export const pairwise: Signature["pairwise"] = EventSource_pairwise;
export const pick: Signature["pick"] = EventSource_pick;
export const scan: Signature["scan"] = EventSource_scan;
export const skipFirst: Signature["skipFirst"] = EventSource_skipFirst;
export const takeFirst: Signature["takeFirst"] = EventSource_takeFirst;
export const takeLast: Signature["takeLast"] = EventSource_takeLast;
export const takeWhile: Signature["takeWhile"] = EventSource_takeWhile;
export const toEventSource: Signature["toEventSource"] = identityLazy;
export const toObservable: Signature["toObservable"] = EventSource_toObservable;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  EventSource_toReadonlyArrayAsync;
