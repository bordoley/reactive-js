import { Function1, SideEffect1 } from "../../../functions.js";
import { DisposableLike, EventSourceLike } from "../../../util.js";
declare const EventSource_addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
export default EventSource_addEventHandler;
