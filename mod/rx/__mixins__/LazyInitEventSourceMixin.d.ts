import { Mixin } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { EventListenerLike, EventSourceLike } from "../../rx.js";
import { DisposableLike } from "../../utils.js";
export declare const LazyInitEventSourceMixin_publisher: unique symbol;
export interface LazyInitEventSourceLike<T> extends EventSourceLike<T> {
    readonly [LazyInitEventSourceMixin_publisher]: Optional<EventListenerLike<T>>;
}
declare const LazyInitEventSourceMixin: <T>() => Mixin<LazyInitEventSourceLike<T> & DisposableLike, DisposableLike>;
export default LazyInitEventSourceMixin;
