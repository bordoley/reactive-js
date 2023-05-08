import { DisposableLike, EventSourceLike } from "../../../core.js";
import { Function1, SideEffect1 } from "../../../functions.js";
declare const EventSource_addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
export default EventSource_addEventHandler;
