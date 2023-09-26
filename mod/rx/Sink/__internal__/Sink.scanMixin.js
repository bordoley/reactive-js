/// <reference types="./Sink.scanMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, returns } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, DisposableLike_dispose, } from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
const ScanSinkMixin_acc = Symbol("ScanSinkMixin_acc");
const ScanSinkMixin_reducer = Symbol("ScanSinkMixin_reducer");
const Sink_scanMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin()), function ScanSinkMixin(instance, delegate, reducer, initialValue) {
    init(Disposable_delegatingMixin(), instance, delegate);
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
export default Sink_scanMixin;
