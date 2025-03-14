/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBackpressureObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function BackpressureObserver(delegate, options) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, options);
    return this;
}, props(), {
    [LiftedObserverLike_notify](next) {
        this[LiftedObserverLike_notifyDelegate](next);
    },
}))();
const Observable_backpressureStrategy = (options) => pipe((createBackpressureObserver), partial(options), (Observable_liftPureDeferred));
export default Observable_backpressureStrategy;
