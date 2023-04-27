import { SideEffect1 } from "../../../functions.js";
import { EventListenerLike, EventSourceLike } from "../../../util.js";
declare const EventSource_create: <T>(setup: SideEffect1<EventListenerLike<T>>) => EventSourceLike<T>;
export default EventSource_create;
