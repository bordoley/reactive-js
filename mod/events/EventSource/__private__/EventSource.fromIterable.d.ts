import { EventSourceLike } from "../../../events.js";
import { Function1 } from "../../../functions.js";
declare const EventSource_fromIterable: <T>() => Function1<Iterable<T>, EventSourceLike<T>>;
export default EventSource_fromIterable;
