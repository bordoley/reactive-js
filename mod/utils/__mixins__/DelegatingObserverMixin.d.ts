import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike } from "../../utils.js";
import { DelegatingConsumerLike } from "./DelegatingConsumerMixin.js";
export interface DelegatingObserverLike<T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>> extends DelegatingConsumerLike<T, TDelegateObserver>, ObserverLike<T> {
}
type TReturn<T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>> = Omit<DelegatingObserverLike<T, TDelegateObserver>, keyof DisposableLike>;
declare const DelegatingObserverMixin: <T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>>() => Mixin1<TReturn<T, TDelegateObserver>, TDelegateObserver>;
export default DelegatingObserverMixin;
