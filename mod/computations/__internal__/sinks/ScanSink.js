/// <reference types="./ScanSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { error, none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const ScanSink_acc = Symbol("ScanSink_acc");
    const ScanSink_reducer = Symbol("ScanSink_reducer");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ScanSink(delegate, reducer, initialValue) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[ScanSink_reducer] = reducer;
        try {
            this[ScanSink_acc] = initialValue();
        }
        catch (e) {
            this[DisposableLike_dispose](error(e));
        }
        return this;
    }, props({
        [ScanSink_acc]: none,
        [ScanSink_reducer]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const oldAcc = this[ScanSink_acc];
            const nextAcc = this[ScanSink_reducer](oldAcc, next);
            this[ScanSink_acc] = nextAcc;
            this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](nextAcc);
        },
    }));
})();
