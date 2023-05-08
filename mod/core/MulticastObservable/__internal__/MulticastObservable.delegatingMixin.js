/// <reference types="./MulticastObservable.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { MulticastObservableLike_buffer, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../core.js";
import { none, returns, unsafeCast } from "../../../functions.js";
const MulticastObservable_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingMulticastObservableMixin(instance, delegate) {
        instance[__DelegatingMulticastObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingMulticastObservableMixin_delegate]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_buffer]() {
            unsafeCast(this);
            return this[__DelegatingMulticastObservableMixin_delegate][MulticastObservableLike_buffer];
        },
        [ObservableLike_observe](observer) {
            this[__DelegatingMulticastObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default MulticastObservable_delegatingMixin;
