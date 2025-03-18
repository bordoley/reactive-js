import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SinkLike } from "../../utils.js";
import { DelegatingEventListenerLike } from "./DelegatingEventListenerMixin.js";
export interface DelegatingSinkLike<T, TDelegateSink extends SinkLike<T> = SinkLike<T>> extends DelegatingEventListenerLike<T, TDelegateSink>, SinkLike<T> {
}
declare const DelegatingSinkMixin: <T, TDelegateSink extends SinkLike<T> = SinkLike<T>>() => Mixin1<DelegatingSinkLike<T, TDelegateSink>, TDelegateSink, DisposableLike>;
export default DelegatingSinkMixin;
