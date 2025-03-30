import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike } from "../../utils.js";
export declare const DelegatingEventListenerLike_delegate: unique symbol;
export interface DelegatingEventListenerLike<T, TOut = T, TDelegateEventListener extends EventListenerLike<TOut> = EventListenerLike<TOut>> extends EventListenerLike<T> {
    readonly [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
}
type TReturn<T, TOut = T, TDelegateEventListener extends EventListenerLike<TOut> = EventListenerLike<TOut>> = Omit<DelegatingEventListenerLike<T, TOut, TDelegateEventListener>, keyof DisposableLike>;
type TPrototype<T, TOut = T, TDelegateEventListener extends EventListenerLike<TOut> = EventListenerLike<TOut>> = Omit<DelegatingEventListenerLike<T, TOut, TDelegateEventListener>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate>;
declare const DelegatingEventListenerMixin: <T, TOut = T, TDelegateEventListener extends EventListenerLike<TOut> = EventListenerLike<TOut>>() => Mixin1<TReturn<T, TOut, TDelegateEventListener>, TDelegateEventListener, TPrototype<T, TOut, TDelegateEventListener>>;
export default DelegatingEventListenerMixin;
