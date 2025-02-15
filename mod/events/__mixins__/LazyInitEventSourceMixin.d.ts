import { Mixin } from "../../__internal__/mixins.js";
import { EventListenerLike, EventSourceLike } from "../../events.js";
import { Optional } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
export declare const LazyInitEventSourceLike_publisher: unique symbol;
/**
 * @noInheritDoc
 */
export interface LazyInitEventSourceLike<out T> extends EventSourceLike<T> {
    readonly [LazyInitEventSourceLike_publisher]: Optional<EventListenerLike<T>>;
}
declare const LazyInitEventSourceMixin: <T>() => Mixin<LazyInitEventSourceLike<T>, DisposableLike>;
export default LazyInitEventSourceMixin;
