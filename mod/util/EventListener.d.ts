import { Method1 } from "../functions.js";
import { EventListenerLike } from "../util.js";
export declare const create: <T>(notify: Method1<EventListenerLike<T>, T, void>) => EventListenerLike<T>;
export declare const toErrorSafeEventListener: <T>() => import("../functions.js").Function1<EventListenerLike<T>, import("../util.js").ErrorSafeEventListenerLike<T>>;
