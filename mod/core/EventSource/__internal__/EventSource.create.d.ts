import { EventListenerLike, EventSourceLike } from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
declare const EventSource_create: <T>(setup: SideEffect1<EventListenerLike<T>>) => EventSourceLike<T>;
export default EventSource_create;
