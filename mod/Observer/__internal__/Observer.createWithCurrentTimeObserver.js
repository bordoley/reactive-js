/// <reference types="./Observer.createWithCurrentTimeObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __WithCurrentTimeObserver_selector } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { ObserverLike_notify, SchedulerLike_now, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__WithCurrentTimeObserver_selector] = selector;
        return instance;
    }, props({
        [__WithCurrentTimeObserver_selector]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const currentTime = this[SchedulerLike_now];
            const mapped = this[__WithCurrentTimeObserver_selector](currentTime, next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
        },
    }));
})();
export default Observer_createWithCurrentTimeObserver;
