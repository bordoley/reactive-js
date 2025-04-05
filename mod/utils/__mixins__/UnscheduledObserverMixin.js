/// <reference types="./UnscheduledObserverMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { ObserverLike_mustNotifyInSchedulerContinuation, } from "../../utils.js";
const UnscheduledObserverMixin = /*@__PURE__*/ (() => {
    return returns(mix(function UnscheduledObserverMixin() {
        return this;
    }, props(), proto({
        [ObserverLike_mustNotifyInSchedulerContinuation]: false,
    })));
})();
export default UnscheduledObserverMixin;
