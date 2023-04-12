import { Keep, Map } from "../containers.js";
import { EventSourceLike } from "../util.js";
import EventSource_keep from "./EventSource/__internal__/EventSource.keep.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";

export const keep: Keep<EventSourceLike>["keep"] =  EventSource_keep;
export const map: Map<EventSourceLike>["map"] = EventSource_map;
