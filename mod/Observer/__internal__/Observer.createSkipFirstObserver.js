/// <reference types="./Observer.createSkipFirstObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __SkipFirstObserver_count, __SkipFirstObserver_skipCount, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { ObserverLike_notify } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createSkipFirstObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function SkipFirstObserver(instance, delegate, skipCount) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__SkipFirstObserver_skipCount] = skipCount;
        return instance;
    }, props({
        [__SkipFirstObserver_skipCount]: 0,
        [__SkipFirstObserver_count]: 0,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[__SkipFirstObserver_count]++;
            if (this[__SkipFirstObserver_count] >
                this[__SkipFirstObserver_skipCount]) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
        },
    }));
})();
export default Observer_createSkipFirstObserver;
