/// <reference types="./ScanSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const ScanSink_acc = Symbol("ScanSink_acc");
    const ScanSink_reducer = Symbol("ScanSink_reducer");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ScanSink(delegate, reducer, initialValue) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[ScanSink_reducer] = reducer;
        this[ScanSink_acc] = initialValue();
        return this;
    }, props({
        [ScanSink_acc]: none,
        [ScanSink_reducer]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const oldAcc = this[ScanSink_acc];
            const nextAcc = this[ScanSink_reducer](oldAcc, next);
            this[ScanSink_acc] = nextAcc;
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](nextAcc);
        },
    }));
})();
