/// <reference types="./MulticastObservable.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ReplayableLike_buffer, } from "../../../rx.js";
const MulticastObservable_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingMulticastObservableMixin(instance, delegate) {
        instance[DelegatingMulticastObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingMulticastObservableMixin_delegate]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [ReplayableLike_buffer]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][ReplayableLike_buffer];
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
