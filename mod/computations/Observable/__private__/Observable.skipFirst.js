/// <reference types="./Observable.skipFirst.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");
const createSkipFirstObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function SkipFirstObserver(delegate, skipCount) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    this[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);
    return this;
}, props({
    [SkipFirstObserver_count]: 0,
}), proto({
    [LiftedEventListenerLike_notify](next) {
        this[SkipFirstObserver_count] = max(this[SkipFirstObserver_count] - 1, -1);
        const shouldEmit = this[SkipFirstObserver_count] < 0;
        if (shouldEmit) {
            this[LiftedEventListenerLike_notifyDelegate](next);
        }
    },
})))();
const Observable_skipFirst = (options) => pipe((createSkipFirstObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_skipFirst;
