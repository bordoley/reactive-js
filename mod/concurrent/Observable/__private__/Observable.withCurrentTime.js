/// <reference types="./Observable.withCurrentTime.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SchedulerLike_now } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createWithCurrentTimeObserver = /*@__PURE__*/ (() => {
    const WithCurrentTimeObserver_selector = Symbol("WithCurrentTimeObserver_selector");
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function WithCurrentTimeObserver(instance, delegate, selector) {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);
        instance[WithCurrentTimeObserver_selector] = selector;
        return instance;
    }, props({
        [WithCurrentTimeObserver_selector]: none,
    }), {
        [SinkLike_notify](next) {
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
            this[DelegatingDisposableLike_delegate][SinkLike_notify](mapped);
        },
    })));
})();
const Observable_withCurrentTime = (selector) => pipe(createWithCurrentTimeObserver, partial(selector), Observable_liftPureDeferred);
export default Observable_withCurrentTime;
