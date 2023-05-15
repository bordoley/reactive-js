import { Mixin } from "../../__internal__/mixins.js";
import { DisposableLike, EventPublisherLike } from "../../types.js";
declare const EventSource_lazyInitPublisherMixin: <T>() => Mixin<EventPublisherLike<T>, DisposableLike>;
export default EventSource_lazyInitPublisherMixin;
