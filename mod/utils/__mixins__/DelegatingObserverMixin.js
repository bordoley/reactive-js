/// <reference types="./DelegatingObserverMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingConsumerMixin from "./DelegatingConsumerMixin.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
const DelegatingObserverMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingConsumerMixin(), DelegatingSchedulerMixin), function DelegatingObserverMixin(delegate) {
        init(DelegatingConsumerMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);
        return this;
    }));
})();
export default DelegatingObserverMixin;
