import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__internal__/EventSource.create.js";
import EventSource_createPublisher from "./EventSource/__internal__/EventSource.createPublisher.js";
import EventSource_createRefCountedPublisher from "./EventSource/__internal__/EventSource.createRefCountedPublisher.js";
import EventSource_forEach from "./EventSource/__internal__/EventSource.forEach.js";
import EventSource_ignoreElements from "./EventSource/__internal__/EventSource.ignoreElements.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";
import EventSource_pick from "./EventSource/__internal__/EventSource.pick.js";
import EventSource_toObservable from "./EventSource/__internal__/EventSource.toObservable.js";
import { Function1, SideEffect1 } from "./functions.js";
import {
  AsynchronousContainerBaseTypeClass,
  ContainerTypeClass,
  StatefulContainerBaseTypeClass,
} from "./type-classes.js";
import {
  DisposableLike,
  EventListenerLike,
  EventPublisherLike,
  EventSourceContainer,
  EventSourceLike,
} from "./types.js";

export type Type = EventSourceContainer;

export interface Signature
  extends ContainerTypeClass<Type>,
    StatefulContainerBaseTypeClass<Type>,
    AsynchronousContainerBaseTypeClass<Type> {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

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
}

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const create: Signature["create"] = EventSource_create;
export const createPublisher: Signature["createPublisher"] =
  EventSource_createPublisher;
export const createRefCountedPublisher: Signature["createRefCountedPublisher"] =
  EventSource_createRefCountedPublisher;
export const forEach: Signature["forEach"] = EventSource_forEach;
export const ignoreElements: Signature["ignoreElements"] =
  EventSource_ignoreElements;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const pick: Signature["pick"] = EventSource_pick;
export const toObservable: Signature["toObservable"] = EventSource_toObservable;
