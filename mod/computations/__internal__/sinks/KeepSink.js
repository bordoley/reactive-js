/// <reference types="./KeepSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const KeepSink_predicate = Symbol("KeepSink_predicate");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function KeepSink(delegate, predicate) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[KeepSink_predicate] = predicate;
        return this;
    }, props({
        [KeepSink_predicate]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const shouldNotify = this[KeepSink_predicate](next);
            if (shouldNotify) {
                this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](next);
            }
        },
    }));
})();
