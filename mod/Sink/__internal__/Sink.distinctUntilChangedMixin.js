/// <reference types="./Sink.distinctUntilChangedMixin.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { __DistinctUntilChangedObserver_equality, __DistinctUntilChangedObserver_hasValue, __DistinctUntilChangedObserver_prev, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
const Sink_distinctUntilChangedMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Delegating_mixin(), Disposable_delegatingMixin), function DistinctUntilChangedSink(instance, delegate, equality) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__DistinctUntilChangedObserver_equality] = equality;
        return instance;
    }, props({
        [__DistinctUntilChangedObserver_equality]: none,
        [__DistinctUntilChangedObserver_prev]: none,
        [__DistinctUntilChangedObserver_hasValue]: false,
    }), {
        [SinkLike_notify](next) {
            const shouldEmit = !this[__DistinctUntilChangedObserver_hasValue] ||
                !this[__DistinctUntilChangedObserver_equality](this[__DistinctUntilChangedObserver_prev], next);
            if (shouldEmit) {
                this[__DistinctUntilChangedObserver_prev] = next;
                this[__DistinctUntilChangedObserver_hasValue] = true;
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();
export default Sink_distinctUntilChangedMixin;
