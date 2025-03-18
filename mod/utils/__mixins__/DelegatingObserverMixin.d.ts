import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike } from "../../utils.js";
import { DelegatingConsumerLike } from "./DelegatingConsumerMixin.js";
export interface DelegatingObserverLike<T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>> extends DelegatingConsumerLike<T, TDelegateObserver>, ObserverLike<T> {
}
declare const DelegatingObserverMixin: <T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>>() => Mixin1<DelegatingObserverLike<T, TDelegateObserver>, TDelegateObserver, Pick<DelegatingObserverLike<T, TDelegateObserver>, keyof DisposableLike>>;
export default DelegatingObserverMixin;
