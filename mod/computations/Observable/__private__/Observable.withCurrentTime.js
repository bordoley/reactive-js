/// <reference types="./Observable.withCurrentTime.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_enqueue, SchedulerLike_now, } from "../../../utils.js";
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
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            const currentTime = this[SchedulerLike_now];
            const mapped = this[WithCurrentTimeObserver_selector](currentTime, next);
            return (delegate?.[LiftedObserverLike_notify]?.(mapped) ??
                delegate[QueueableLike_enqueue](mapped));
        },
    }));
})();
const Observable_withCurrentTime = (selector) => pipe((createWithCurrentTimeObserver), partial(selector), Observable_liftPureDeferred);
export default Observable_withCurrentTime;
