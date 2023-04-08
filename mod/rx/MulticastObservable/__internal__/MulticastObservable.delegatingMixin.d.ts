import { Mixin1 } from "../../../__internal__/mixins.js";
import { DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { MulticastObservableLike } from "../../../rx.js";
export type TDelegatingMulticastObservableReturn<T, TMulticastObservable extends MulticastObservableLike<T>> = MulticastObservableLike<T> & {
    [DelegatingMulticastObservableMixin_delegate]: TMulticastObservable;
};
declare const MulticastObservable_delegatingMixin: <T, TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>>() => Mixin1<TDelegatingMulticastObservableReturn<T, TMulticastObservable>, TMulticastObservable>;
export default MulticastObservable_delegatingMixin;
