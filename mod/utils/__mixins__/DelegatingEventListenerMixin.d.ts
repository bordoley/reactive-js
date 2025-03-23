import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, EventListenerLike } from "../../utils.js";
export declare const DelegatingEventListenerLike_delegate: unique symbol;
export interface DelegatingEventListenerLike<T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>> extends EventListenerLike<T> {
    readonly [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
}
declare const DelegatingEventListenerMixin: <T, TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>>() => Mixin1<Omit<DelegatingEventListenerLike<T, TDelegateEventListener>, keyof DisposableLike>, TDelegateEventListener>;
export default DelegatingEventListenerMixin;
