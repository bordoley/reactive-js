import { DelegatingLike, Mixin1 } from "../../../__internal__/mixins.js";
import { MulticastObservableLike } from "../../../rx.js";
export interface DelegatingMulticastLike<T, TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>> extends DelegatingLike<TMulticastObservable>, MulticastObservableLike<T> {
}
declare const MulticastObservable_delegatingMixin: <T, TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>>() => Mixin1<DelegatingMulticastLike<T, TMulticastObservable>, TMulticastObservable>;
export default MulticastObservable_delegatingMixin;
