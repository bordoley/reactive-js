/// <reference types="./Observer.createWithCurrentTimeObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __WithCurrentTimeObserver_selector } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { SchedulerLike_now, SinkLike_notify, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observer_mixin(), Disposable_delegatingMixin, Delegating_mixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Observer_mixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__WithCurrentTimeObserver_selector] = selector;
        return instance;
    }, props({
        [__WithCurrentTimeObserver_selector]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            const currentTime = this[SchedulerLike_now];
            const mapped = this[__WithCurrentTimeObserver_selector](currentTime, next);
            this[DelegatingLike_delegate][SinkLike_notify](mapped);
        },
    }));
})();
export default Observer_createWithCurrentTimeObserver;
