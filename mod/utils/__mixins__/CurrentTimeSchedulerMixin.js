/// <reference types="./CurrentTimeSchedulerMixin.d.ts" />

import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { include, init, mix, props } from "../../__internal__/mixins.js";
import SchedulerMixin from "../../utils/__mixins__/SchedulerMixin.js";
import { SchedulerLike_now, } from "../../utils.js";
const CurrentTimeSchedulerMixin = /*@__PURE__*/ (() => mix(include(SchedulerMixin), function CurrentTimeSchedulerMixin(instance) {
    init(SchedulerMixin, instance);
    return instance;
}, props(), {
    get [SchedulerLike_now]() {
        return CurrentTime.now();
    },
}))();
export default CurrentTimeSchedulerMixin;
