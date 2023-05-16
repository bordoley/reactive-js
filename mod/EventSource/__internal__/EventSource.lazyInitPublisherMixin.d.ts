import { Mixin } from "../../__internal__/mixins.js";
import { __LazyInitEventMixin_eventPublisher } from "../../__internal__/symbols.js";
import { Optional } from "../../functions.js";
import { DisposableLike, EventListenerLike, EventSourceLike } from "../../types.js";
export declare const LazyInitEventMixin_eventPublisher: typeof __LazyInitEventMixin_eventPublisher;
export interface LazyInitEventSource<T> extends EventSourceLike<T> {
    readonly [LazyInitEventMixin_eventPublisher]: Optional<EventListenerLike<T>>;
}
declare const EventSource_lazyInitPublisherMixin: <T>() => Mixin<LazyInitEventSource<T> & DisposableLike, DisposableLike>;
export default EventSource_lazyInitPublisherMixin;
