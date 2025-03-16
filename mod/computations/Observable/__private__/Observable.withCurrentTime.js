/// <reference types="./Observable.withCurrentTime.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { SchedulerLike_now } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    const WithCurrentTimeObserver_selector = Symbol("WithCurrentTimeObserver_selector");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function WithCurrentTimeObserver(delegate, selector) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[WithCurrentTimeObserver_selector] = selector;
        return this;
    }, props({
        [WithCurrentTimeObserver_selector]: none,
    }), proto({
        [LiftedEventListenerLike_notify](next) {
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
            this[LiftedEventListenerLike_notifyDelegate](mapped);
        },
    }));
})();
const Observable_withCurrentTime = (selector) => pipe((createWithCurrentTimeObserver), partial(selector), Observable_liftPureDeferred);
export default Observable_withCurrentTime;
