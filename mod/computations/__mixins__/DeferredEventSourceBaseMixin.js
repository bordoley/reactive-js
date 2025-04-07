/// <reference types="./DeferredEventSourceBaseMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, EventSourceLike_subscribe, } from "../../computations.js";
import { pipe, returns } from "../../functions.js";
import * as DefaultScheduler from "../../utils/DefaultScheduler.js";
import * as AsyncIterator from "../../utils/__internal__/AsyncIterator.js";
import * as Observer from "../../utils/__internal__/Observer.js";
import { ThrowBackpressureStrategy, } from "../../utils.js";
const DeferredEventSourceBaseMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DeferredEventSourceBaseMixin() {
        return this;
    }, props(), proto({
        [ComputationLike_isDeferred]: true,
        [Symbol.asyncIterator](options) {
            const scheduler = options?.scheduler ?? DefaultScheduler.get();
            const observer = Observer.createWithFlowControl(scheduler, {
                backpressureStrategy: ThrowBackpressureStrategy,
                capacity: 1,
            });
            this[EventSourceLike_subscribe](observer);
            return pipe(observer, AsyncIterator.fromAsyncEnumerator());
        },
    })));
})();
export default DeferredEventSourceBaseMixin;
