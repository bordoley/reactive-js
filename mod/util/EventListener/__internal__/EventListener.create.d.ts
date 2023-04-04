import { Method1 } from "../../../functions.js";
import { EventListenerLike } from "../../../util.js";
declare const EventListener_create: <T>(notify: Method1<EventListenerLike<T>, T, void>) => EventListenerLike<T>;
export default EventListener_create;
