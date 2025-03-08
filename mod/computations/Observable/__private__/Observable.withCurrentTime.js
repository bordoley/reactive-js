/// <reference types="./Observable.withCurrentTime.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike_notify, SchedulerLike_now, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    const WithCurrentTimeObserver_selector = Symbol("WithCurrentTimeObserver_selector");
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
        init(DelegatingDisposableMixin, instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        init(LiftedObserverMixin(), instance, delegate);
        instance[WithCurrentTimeObserver_selector] = selector;
        return instance;
    }, props({
        [WithCurrentTimeObserver_selector]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
            this[LiftedObserverLike_delegate][ObserverLike_notify](mapped);
        }),
    });
})();
const Observable_withCurrentTime = (selector) => pipe((createWithCurrentTimeObserver), partial(selector), Observable_liftPureDeferred);
export default Observable_withCurrentTime;
