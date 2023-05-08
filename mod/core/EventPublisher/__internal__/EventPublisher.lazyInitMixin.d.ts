import { Mixin } from "../../../__internal__/mixins.js";
import { DisposableLike, EventPublisherLike } from "../../../core.js";
declare const EventPublisher_lazyInitMixin: <T>() => Mixin<EventPublisherLike<T>, DisposableLike>;
export default EventPublisher_lazyInitMixin;
