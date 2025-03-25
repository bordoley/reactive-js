import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike } from "../../utils.js";
export declare const DelegatingEventListenerLike_delegate: unique symbol;
export interface DelegatingEventListenerLike<T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>> extends EventListenerLike<T> {
    readonly [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
}
type TReturn<T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>> = Omit<DelegatingEventListenerLike<T, TDelegateEventListener>, keyof DisposableLike>;
type TPrototype<T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>> = Omit<DelegatingEventListenerLike<T, TDelegateEventListener>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate>;
declare const DelegatingEventListenerMixin: <T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>>() => Mixin1<TReturn<T, TDelegateEventListener>, TDelegateEventListener, TPrototype<T, TDelegateEventListener>>;
export default DelegatingEventListenerMixin;
