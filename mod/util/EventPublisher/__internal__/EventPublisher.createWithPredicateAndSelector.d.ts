import { Function1, Predicate } from "../../../functions.js";
import { DisposableLike, EventListenerLike, EventListenerLike_isErrorSafe, EventPublisherLike_listenerCount, EventSourceLike } from "../../../util.js";
export interface EventKeepMapPublisherLike<T, TOut = T> extends EventSourceLike<TOut>, EventListenerLike<T>, DisposableLike {
    readonly [EventListenerLike_isErrorSafe]: true;
    readonly [EventPublisherLike_listenerCount]: number;
}
declare const EventPublisher_createWithPredicateAndSelector: <T, TOut>(predicate: Predicate<T>, selector: Function1<T, TOut>, options?: {
    readonly replay?: number;
}) => EventKeepMapPublisherLike<T, TOut>;
export default EventPublisher_createWithPredicateAndSelector;
