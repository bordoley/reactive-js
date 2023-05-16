/// <reference types="./Sink.scanMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, } from "../../__internal__/types.js";
import { error, none, returns } from "../../functions.js";
import { DisposableLike_dispose, SinkLike_notify, } from "../../types.js";
const Sink_scanMixin = /*@__PURE__*/ (() => returns(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function ScanSinkMixin(instance, delegate, reducer, initialValue) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[ReducerAccumulatorLike_reducer] = reducer;
    try {
        const acc = initialValue();
        instance[ReducerAccumulatorLike_acc] = acc;
    }
    catch (e) {
        instance[DisposableLike_dispose](error(e));
    }
    return instance;
}, props({
    [ReducerAccumulatorLike_acc]: none,
    [ReducerAccumulatorLike_reducer]: none,
}), {
    [SinkLike_notify](next) {
        const nextAcc = this[ReducerAccumulatorLike_reducer](this[ReducerAccumulatorLike_acc], next);
        this[ReducerAccumulatorLike_acc] = nextAcc;
        this[DelegatingLike_delegate][SinkLike_notify](nextAcc);
    },
})))();
export default Sink_scanMixin;
