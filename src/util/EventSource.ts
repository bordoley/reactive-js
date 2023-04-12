import { Map } from "../containers.js";
import { EventSourceLike } from "../util.js";
import EventSource_map from "./EventSource/__internal__/EventSource.map.js";

export const map: Map<EventSourceLike>["map"] = EventSource_map;
