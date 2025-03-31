import { Function1 } from "../../functions.js";
import { EventListenerLike, SinkLike } from "../../utils.js";
export declare const create: <T>(notify: (this: EventListenerLike<T>, a: T) => void) => EventListenerLike<T>;
export declare const toSink: <T>() => Function1<EventListenerLike<T>, SinkLike<T>>;
