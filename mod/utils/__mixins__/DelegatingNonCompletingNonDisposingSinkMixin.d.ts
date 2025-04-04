import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike_notify, SinkLike, SinkLike_isCompleted } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import { DelegatingSinkLike } from "./DelegatingSinkMixin.js";
type TReturn<T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>> = DelegatingSinkLike<T, TOut, TDelegateSink>;
type TPrototype<T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>> = Omit<DelegatingSinkLike<T, TOut, TDelegateSink>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate | typeof EventListenerLike_notify | typeof SinkLike_isCompleted>;
declare const DelegatingNonCompletingNonDisposingSinkMixin: <T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>>() => Mixin1<TReturn<T, TOut, TDelegateSink>, TDelegateSink, TPrototype<T, TOut, TDelegateSink>>;
export default DelegatingNonCompletingNonDisposingSinkMixin;
