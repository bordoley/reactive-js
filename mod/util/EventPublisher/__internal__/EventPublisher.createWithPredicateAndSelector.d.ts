import { Function1, Predicate } from "../../../functions.js";
import { DisposableLike, EventListenerLike, EventSourceLike } from "../../../util.js";
export interface EventKeepMapPublisherLike<T, TOut = T> extends EventSourceLike<TOut>, EventListenerLike<T>, DisposableLike {
}
declare const EventPublisher_createWithPredicateAndSelector: <T, TOut>(predicate: Predicate<T>, selector: Function1<T, TOut>, options?: {
    readonly replay?: number;
}) => EventKeepMapPublisherLike<T, TOut>;
export default EventPublisher_createWithPredicateAndSelector;
