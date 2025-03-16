/// <reference types="./Observable.takeFirst.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { SinkLike_complete } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const TakeFirstObserver_count = Symbol("TakeFirstObserver_count");
const createTakeFirstObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function TakeFirstObserver(delegate, takeCount) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    this[TakeFirstObserver_count] = clampPositiveInteger(takeCount ?? 1);
    if (takeCount === 0) {
        this[SinkLike_complete]();
    }
    return this;
}, props({
    [TakeFirstObserver_count]: 0,
}), proto({
    [LiftedEventListenerLike_notify](next) {
        this[TakeFirstObserver_count];
        this[TakeFirstObserver_count]--;
        this[LiftedEventListenerLike_notifyDelegate](next);
        if (this[TakeFirstObserver_count] <= 0) {
            this[SinkLike_complete]();
        }
    },
})))();
const Observable_takeFirst = (options) => pipe((createTakeFirstObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_takeFirst;
