/// <reference types="./DeferredEventSourceCreateMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, EventSourceLike_subscribe, } from "../../computations.js";
import { error, none, returns } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
const DeferredEventSourceCreateMixin = /*@__PURE__*/ (() => {
    const EventSourceCreateMixin_effect = Symbol("EventSourceCreateMixin_effect");
    return returns(mix(function EventSourceCreateMixin(effect) {
        this[EventSourceCreateMixin_effect] = effect;
        return this;
    }, props({
        [EventSourceCreateMixin_effect]: none,
    }), proto({
        [ComputationLike_isDeferred]: true,
        [EventSourceLike_subscribe](listener) {
            try {
                this[EventSourceCreateMixin_effect](listener);
            }
            catch (e) {
                listener[DisposableLike_dispose](error(e));
            }
        },
    })));
})();
export default DeferredEventSourceCreateMixin;
