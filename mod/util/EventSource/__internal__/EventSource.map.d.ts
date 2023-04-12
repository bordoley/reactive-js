import { Map } from "../../../containers.js";
import { EventSourceLike } from "../../../util.js";
declare const EventSource_map: Map<EventSourceLike, {
    replay?: number;
}>["map"];
export default EventSource_map;
