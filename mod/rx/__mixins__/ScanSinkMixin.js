/// <reference types="./ScanSinkMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { error, none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../rx.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const ScanSinkMixin_acc = Symbol("ScanSinkMixin_acc");
const ScanSinkMixin_reducer = Symbol("ScanSinkMixin_reducer");
const ScanSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDisposableMixin()), function ScanSinkMixin(instance, delegate, reducer, initialValue) {
    init(DelegatingDisposableMixin(), instance, delegate);
    instance[ScanSinkMixin_reducer] = reducer;
    try {
        const acc = initialValue();
        instance[ScanSinkMixin_acc] = acc;
    }
    catch (e) {
        instance[DisposableLike_dispose](error(e));
    }
    return instance;
}, props({
    [ScanSinkMixin_acc]: none,
    [ScanSinkMixin_reducer]: none,
}), {
    [SinkLike_notify](next) {
        const nextAcc = this[ScanSinkMixin_reducer](this[ScanSinkMixin_acc], next);
        this[ScanSinkMixin_acc] = nextAcc;
        this[DelegatingDisposableLike_delegate][SinkLike_notify](nextAcc);
    },
})))();
export default ScanSinkMixin;
