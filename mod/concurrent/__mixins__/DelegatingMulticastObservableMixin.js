/// <reference types="./DelegatingMulticastObservableMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../computations.js";
import { ObservableLike_observe, } from "../../concurrent.js";
import { none, returns } from "../../functions.js";
const DelegatingMulticastObservableMixin = /*@__PURE__*/ (() => {
    const DelegatingMulticastObservableMixin_delegate = Symbol("DelegatingMulticastObservableMixin_delegate");
    return returns(mix(function DelegatingMulticastObservableMixin(instance, delegate) {
        instance[DelegatingMulticastObservableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingMulticastObservableMixin_delegate]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isPure]: true,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isInteractive]: false,
        [ObservableLike_observe](observer) {
            this[DelegatingMulticastObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default DelegatingMulticastObservableMixin;
