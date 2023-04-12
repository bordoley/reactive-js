import { Keep } from "../../../containers.js";
import { EventSourceLike } from "../../../util.js";
declare const EventSource_keep: Keep<EventSourceLike, {
    replay?: number;
}>["keep"];
export default EventSource_keep;
