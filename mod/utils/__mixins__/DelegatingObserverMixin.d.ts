import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike } from "../../utils.js";
import { DelegatingConsumerLike } from "./DelegatingConsumerMixin.js";
export interface DelegatingObserverLike<T, TOut = T, TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>> extends DelegatingConsumerLike<T, TOut, TDelegateObserver>, ObserverLike<T> {
}
type TReturn<T, TOut = T, TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>> = Omit<DelegatingObserverLike<T, TOut, TDelegateObserver>, keyof DisposableLike>;
declare const DelegatingObserverMixin: <T, TOut = T, TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>>() => Mixin1<TReturn<T, TOut, TDelegateObserver>, TDelegateObserver>;
export default DelegatingObserverMixin;
