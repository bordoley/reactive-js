import { Mixin1 } from "../../../__internal__/mixins.js";
import { DelegatingHotObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { MulticastObservableLike } from "../../../rx.js";
type TReturn<T, TMulticastObservable extends MulticastObservableLike<T>> = MulticastObservableLike<T> & {
    [DelegatingHotObservableMixin_delegate]: TMulticastObservable;
};
declare const MulticastObservable_delegatingMixin: <T, TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>>() => Mixin1<TReturn<T, TMulticastObservable>, TMulticastObservable>;
export default MulticastObservable_delegatingMixin;
