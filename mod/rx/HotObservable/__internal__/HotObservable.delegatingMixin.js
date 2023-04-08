/// <reference types="./HotObservable.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingHotObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import { HotObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ReplayableLike_buffer, } from "../../../rx.js";
const HotObservable_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingHotObservableMixin(instance, delegate) {
        instance[DelegatingHotObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingHotObservableMixin_delegate]: none,
    }), {
        get [HotObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][HotObservableLike_observerCount];
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
export default HotObservable_delegatingMixin;
