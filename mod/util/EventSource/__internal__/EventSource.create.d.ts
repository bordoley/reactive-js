import { SideEffect1 } from "../../../functions.js";
import { EventListenerLike, EventSourceLike } from "../../../util.js";
declare const EventSource_create: <T>(setup: SideEffect1<EventListenerLike<T>>, options?: {
    readonly replay?: number;
}) => EventSourceLike<T>;
export default EventSource_create;
