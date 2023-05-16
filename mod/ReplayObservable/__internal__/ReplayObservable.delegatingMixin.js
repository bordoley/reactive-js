/// <reference types="./ReplayObservable.delegatingMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { __DelegatingReplayObservableMixin_delegate } from "../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ReplayObservableLike_buffer, } from "../../types.js";
const ReplayObservable_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingReplayObservableMixin(instance, delegate) {
        instance[__DelegatingReplayObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingReplayObservableMixin_delegate]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [ReplayObservableLike_buffer]() {
            unsafeCast(this);
            return this[__DelegatingReplayObservableMixin_delegate][ReplayObservableLike_buffer];
        },
        [ObservableLike_observe](observer) {
            this[__DelegatingReplayObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default ReplayObservable_delegatingMixin;
