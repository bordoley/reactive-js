/// <reference types="./Observable.backpressureStrategy.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import * as DelegatingObserver from "../../../utils/__internal__/DelegatingObserver.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createBackpressureObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedObserverMixin()), function BackpressureObserver(delegate, options) {
    // Wrap the delegate in a delegating observer to prevent
    // notifications from bypassing the backpressure queue.
    // LiftedObserverMixin bypasses EventListnerLike_notify calls
    // when chained. The delegate here prevents it from doing so.
    const wrappedDelegate = DelegatingObserver.create(delegate);
    init(LiftedObserverMixin(), this, wrappedDelegate, options);
    return this;
}))();
const Observable_backpressureStrategy = (options) => pipe((createBackpressureObserver), partial(options), (Observable_liftPureDeferred));
export default Observable_backpressureStrategy;
