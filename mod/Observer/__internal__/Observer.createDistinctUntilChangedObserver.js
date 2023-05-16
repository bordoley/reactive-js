/// <reference types="./Observer.createDistinctUntilChangedObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __DistinctUntilChangedObserver_equality, __DistinctUntilChangedObserver_hasValue, __DistinctUntilChangedObserver_prev, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createDistinctUntilChangedObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__DistinctUntilChangedObserver_equality] = equality;
        return instance;
    }, props({
        [__DistinctUntilChangedObserver_equality]: none,
        [__DistinctUntilChangedObserver_prev]: none,
        [__DistinctUntilChangedObserver_hasValue]: false,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
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
export default Observer_createDistinctUntilChangedObserver;
