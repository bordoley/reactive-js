import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__internal__/EventSource.create.js";
import EventSource_forEach from "./EventSource/__internal__/EventSource.forEach.js";
import EventSource_ignoreElements from "./EventSource/__internal__/EventSource.ignoreElements.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";
import EventSource_pick from "./EventSource/__internal__/EventSource.pick.js";
import EventSource_toSharedObservable from "./EventSource/__internal__/EventSource.toSharedObservable.js";
import { Function1, SideEffect1 } from "./functions.js";
import {
  AsynchronousContainerBaseTypeClass,
  ContainerTypeClass,
  StatefulContainerBaseTypeClass,
} from "./type-classes.js";
import {
  Container,
  Container_T,
  Container_type,
  DisposableLike,
  EventListenerLike,
  EventSourceLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
}

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
}

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const create: Signature["create"] = EventSource_create;
export const forEach: Signature["forEach"] = EventSource_forEach;
export const ignoreElements: Signature["ignoreElements"] =
  EventSource_ignoreElements;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const pick: Signature["pick"] = EventSource_pick;
export const toSharedObservable: Signature["toSharedObservable"] =
  EventSource_toSharedObservable;
