import { Mixin1 } from "../../../__internal__/mixins.js";
import { DelegatingHotObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { HotObservableLike } from "../../../rx.js";
export type TDelegatingHotObservableReturn<T, THotObservable extends HotObservableLike<T>> = HotObservableLike<T> & {
    [DelegatingHotObservableMixin_delegate]: THotObservable;
};
declare const HotObservable_delegatingMixin: <T, THotObservable extends HotObservableLike<T> = HotObservableLike<T>>() => Mixin1<TDelegatingHotObservableReturn<T, THotObservable>, THotObservable>;
export default HotObservable_delegatingMixin;
