/// <reference types="./DelegatingMulticastObservableMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../concurrent.js";
import { none, returns } from "../../functions.js";
const DelegatingMulticastObservableMixin = /*@__PURE__*/ (() => {
    const DelegatingReplayObservableMixin_delegate = Symbol("DelegatingReplayObservableMixin_delegate");
    return returns(mix(function DelegatingReplayObservableMixin(instance, delegate) {
        instance[DelegatingReplayObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingReplayObservableMixin_delegate]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            this[DelegatingReplayObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default DelegatingMulticastObservableMixin;
