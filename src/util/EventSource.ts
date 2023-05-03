import { Container } from "../containers.js";
import { Function1, SideEffect1 } from "../functions.js";
import { ToObservable } from "../rx.js";
import {
  DisposableLike,
  EventSourceContainer,
  EventSourceLike,
} from "../util.js";
import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__internal__/EventSource.create.js";
import EventSource_empty from "./EventSource/__internal__/EventSource.empty.js";
import EventSource_forEach from "./EventSource/__internal__/EventSource.forEach.js";
import EventSource_ignoreElements from "./EventSource/__internal__/EventSource.ignoreElements.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";
import EventSource_pick from "./EventSource/__internal__/EventSource.pick.js";
import EventSource_toObservable from "./EventSource/__internal__/EventSource.toObservable.js";

export const addEventHandler: <T>(
  handler: SideEffect1<T>,
) => Function1<EventSourceLike<T>, DisposableLike> =
  EventSource_addEventHandler;

/**
 * @category Constructor
 */
export const create = EventSource_create;

export const empty: Container.Empty<EventSourceContainer>["empty"] =
  EventSource_empty;
export const forEach: Container.ForEach<EventSourceContainer>["forEach"] =
  EventSource_forEach;
export const ignoreElements: Container.IgnoreElements<EventSourceContainer>["ignoreElements"] =
  EventSource_ignoreElements;
export const keep: Container.Keep<EventSourceContainer>["keep"] =
  EventSource_keep;
export const map: Container.Map<EventSourceContainer>["map"] = EventSource_map;
export const pick: Container.Pick<EventSourceContainer>["pick"] =
  EventSource_pick;
export const toObservable: ToObservable<EventSourceContainer>["toObservable"] =
  EventSource_toObservable;
