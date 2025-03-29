/// <reference types="./ForEachSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const ForEachSink_effect = Symbol("ForEachSink_effect");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ForEachSink(delegate, effect) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[ForEachSink_effect] = effect;
        return this;
    }, props({
        [ForEachSink_effect]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[ForEachSink_effect](next);
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
        },
    }));
})();
