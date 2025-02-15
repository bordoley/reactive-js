/// <reference types="./Observable.withCurrentTime.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SchedulerLike_now, } from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    const WithCurrentTimeObserver_selector = Symbol("WithCurrentTimeObserver_selector");
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[WithCurrentTimeObserver_selector] = selector;
        return instance;
    }, props({
        [WithCurrentTimeObserver_selector]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertObserverState(this);
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
            this[DelegatingDisposableLike_delegate][ObserverLike_notify](mapped);
        },
    });
})();
const Observable_withCurrentTime = (selector) => pipe((createWithCurrentTimeObserver), partial(selector), Observable_liftPureDeferred);
export default Observable_withCurrentTime;
