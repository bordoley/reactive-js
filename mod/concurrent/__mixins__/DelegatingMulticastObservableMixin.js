/// <reference types="./DelegatingMulticastObservableMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../concurrent.js";
import { none, returns } from "../../functions.js";
const DelegatingMulticastObservableMixin = /*@__PURE__*/ (() => {
    const DelegatingMulticastObservableMixin_delegate = Symbol("DelegatingMulticastObservableMixin_delegate");
    return returns(mix(function DelegatingMulticastObservableMixin(instance, delegate) {
        instance[DelegatingMulticastObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingMulticastObservableMixin_delegate]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isMulticasted]: true,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            this[DelegatingMulticastObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default DelegatingMulticastObservableMixin;
