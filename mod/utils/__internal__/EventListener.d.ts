import { EventListenerLike } from "../../utils.js";
export declare const create: <T>(notify: (this: EventListenerLike<T>, a: T) => void) => EventListenerLike<T>;
