/// <reference types="./MulticastObservable.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replayBuffer, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const MulticastObservable_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin()), function DelegatingMulticastObservableMixin(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replayBuffer]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_replayBuffer];
        },
        get [ObservableLike_isEnumerable]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },
        get [ObservableLike_isRunnable]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default MulticastObservable_delegatingMixin;
