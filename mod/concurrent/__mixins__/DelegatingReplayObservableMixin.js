/// <reference types="./DelegatingReplayObservableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, ReplayObservableLike_buffer, } from "../../concurrent.js";
import { none, returns } from "../../functions.js";
const DelegatingReplayObservableMixin = /*@__PURE__*/ (() => {
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
        get [ReplayObservableLike_buffer]() {
            unsafeCast(this);
            return this[DelegatingReplayObservableMixin_delegate][ReplayObservableLike_buffer];
        },
        [ObservableLike_observe](observer) {
            this[DelegatingReplayObservableMixin_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default DelegatingReplayObservableMixin;
