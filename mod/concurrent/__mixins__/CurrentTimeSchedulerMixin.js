/// <reference types="./CurrentTimeSchedulerMixin.d.ts" />

import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { mix, props } from "../../__internal__/mixins.js";
import { SchedulerLike_now } from "../../concurrent.js";
const CurrentTimeSchedulerMixin = /*@__PURE__*/ (() => mix(function CurrentTimeSchedulerMixin(instance) {
    return instance;
}, props(), {
    get [SchedulerLike_now]() {
        return CurrentTime.now();
    },
}))();
export default CurrentTimeSchedulerMixin;
