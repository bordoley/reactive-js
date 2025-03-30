import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike_notify, SinkLike } from "../../utils.js";
import { DelegatingEventListenerLike, DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
export interface DelegatingSinkLike<T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>> extends DelegatingEventListenerLike<T, TOut, TDelegateSink>, SinkLike<T> {
}
type TReturn<T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>> = Omit<DelegatingSinkLike<T, TOut, TDelegateSink>, keyof DisposableLike>;
type TPrototype<T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>> = Omit<DelegatingSinkLike<T, TOut, TDelegateSink>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate | typeof EventListenerLike_notify>;
declare const DelegatingSinkMixin: <T, TOut = T, TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>>() => Mixin1<TReturn<T, TOut, TDelegateSink>, TDelegateSink, TPrototype<T, TOut, TDelegateSink>>;
export default DelegatingSinkMixin;
