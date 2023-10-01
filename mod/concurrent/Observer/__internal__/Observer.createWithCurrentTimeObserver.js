/// <reference types="./Observer.createWithCurrentTimeObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SchedulerLike_now } from "../../../concurrent.js";
import { none } from "../../../functions.js";
import { SinkLike_notify } from "../../../rx.js";
import { DelegatingDisposableLike_delegate, } from "../../../utils.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_assertState from "./Observer.assertState.js";
const Observer_createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    const WithCurrentTimeObserver_selector = Symbol("WithCurrentTimeObserver_selector");
    return createInstanceFactory(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[WithCurrentTimeObserver_selector] = selector;
        return instance;
    }, props({
        [WithCurrentTimeObserver_selector]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
            this[DelegatingDisposableLike_delegate][SinkLike_notify](mapped);
        },
    }));
})();
export default Observer_createWithCurrentTimeObserver;
