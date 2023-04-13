import { Empty, Keep, Map } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EventSourceLike } from "../util.js";
import EventSource_toObservable from "./EventSource/EventSource.toObservable.js";
import EventSource_empty from "./EventSource/__internal__/EventSource.empty.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";

export const empty: Empty<EventSourceLike>["empty"] = EventSource_empty;
export const keep: Keep<EventSourceLike, { replay?: number }>["keep"] =
  EventSource_keep;
export const map: Map<EventSourceLike, { replay?: number }>["map"] =
  EventSource_map;
export const toObservable: ToObservable<EventSourceLike>["toObservable"] =
  EventSource_toObservable;
