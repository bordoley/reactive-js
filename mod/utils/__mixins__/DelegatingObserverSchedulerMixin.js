/// <reference types="./DelegatingObserverSchedulerMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { ObserverLike_mustNotifyInSchedulerContinuation, } from "../../utils.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
const DelegatingObserverSchedulerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSchedulerMixin), function DelegatingObserverSchedulerMixin(delegate) {
        init(DelegatingSchedulerMixin, this, delegate);
        this[ObserverLike_mustNotifyInSchedulerContinuation] =
            delegate[ObserverLike_mustNotifyInSchedulerContinuation];
        return this;
    }, props({
        [ObserverLike_mustNotifyInSchedulerContinuation]: true,
    })));
})();
export default DelegatingObserverSchedulerMixin;
