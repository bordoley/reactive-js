import { Function1 } from "../../functions.js";
import { EventSourceLike } from "../../types.js";
declare const EventSource_flattenIterable: <T>() => Function1<EventSourceLike<Iterable<T>>, EventSourceLike<T>>;
export default EventSource_flattenIterable;
