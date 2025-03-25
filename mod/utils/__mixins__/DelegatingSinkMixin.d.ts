import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike_notify, SinkLike } from "../../utils.js";
import { DelegatingEventListenerLike, DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
export interface DelegatingSinkLike<T, TDelegateSink extends SinkLike<T> = SinkLike<T>> extends DelegatingEventListenerLike<T, TDelegateSink>, SinkLike<T> {
}
type TReturn<T, TDelegateSink extends SinkLike<T> = SinkLike<T>> = Omit<DelegatingSinkLike<T, TDelegateSink>, keyof DisposableLike>;
type TPrototype<T, TDelegateSink extends SinkLike<T> = SinkLike<T>> = Omit<DelegatingSinkLike<T, TDelegateSink>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate | typeof EventListenerLike_notify>;
declare const DelegatingSinkMixin: <T, TDelegateSink extends SinkLike<T> = SinkLike<T>>() => Mixin1<TReturn<T, TDelegateSink>, TDelegateSink, TPrototype<T, TDelegateSink>>;
export default DelegatingSinkMixin;
