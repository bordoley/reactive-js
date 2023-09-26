import { Mixin } from "../../../__internal__/mixins.js";
import { Optional } from "../../../functions.js";
import { EventListenerLike, EventSourceLike } from "../../../rx.js";
import { DisposableLike } from "../../../utils.js";
export declare const LazyInitEventMixin_eventPublisher: unique symbol;
export interface LazyInitEventSource<T> extends EventSourceLike<T> {
    readonly [LazyInitEventMixin_eventPublisher]: Optional<EventListenerLike<T>>;
}
declare const EventSource_lazyInitPublisherMixin: <T>() => Mixin<LazyInitEventSource<T> & DisposableLike, DisposableLike>;
export default EventSource_lazyInitPublisherMixin;
