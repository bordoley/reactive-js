/// <reference types="./DelegatingMulticastObservableMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../computations.js";
import { none, returns } from "../../functions.js";
const DelegatingMulticastObservableMixin = /*@__PURE__*/ (() => {
    const DelegatingMulticastObservableMixin_delegate = Symbol("DelegatingMulticastObservableMixin_delegate");
    return returns(mix(function DelegatingMulticastObservableMixin(delegate) {
        this[DelegatingMulticastObservableMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingMulticastObservableMixin_delegate]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            this[DelegatingMulticastObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default DelegatingMulticastObservableMixin;
