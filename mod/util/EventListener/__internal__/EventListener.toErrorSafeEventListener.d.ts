import { Function1 } from "../../../functions.js";
import { ErrorSafeEventListenerLike, EventListenerLike } from "../../../util.js";
declare const EventListener_toErrorSafeEventListener: <T>() => Function1<EventListenerLike<T>, ErrorSafeEventListenerLike<T>>;
export default EventListener_toErrorSafeEventListener;
