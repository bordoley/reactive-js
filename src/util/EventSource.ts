import { Empty, Keep, Map } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EventSourceLike } from "../util.js";
import EventSource_empty from "./EventSource/__internal__/EventSource.empty.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";
import EventSource_toObservable from "./EventSource/__internal__/EventSource.toObservable.js";

export const empty: Empty<EventSourceLike>["empty"] = EventSource_empty;
export const keep: Keep<EventSourceLike>["keep"] = EventSource_keep;
export const map: Map<EventSourceLike>["map"] = EventSource_map;
export const toObservable: ToObservable<EventSourceLike>["toObservable"] =
  EventSource_toObservable;
