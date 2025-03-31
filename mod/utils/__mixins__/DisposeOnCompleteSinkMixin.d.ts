import { Mixin } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike_notify, SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
type TReturn<T> = Omit<SinkLike<T>, keyof DisposableLike | typeof EventListenerLike_notify>;
type TPrototype<T> = Pick<SinkLike<T>, typeof SinkLike_complete | typeof SinkLike_isCompleted>;
declare const DisposeOnCompleteSinkMixin: <T>() => Mixin<TReturn<T>, TPrototype<T>, DisposableLike>;
export default DisposeOnCompleteSinkMixin;
