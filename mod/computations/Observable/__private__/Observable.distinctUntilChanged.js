/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const DistinctUntilChangedObserver_equality = Symbol("DistinctUntilChangedObserver_equality");
const DistinctUntilChangedObserver_prev = Symbol("DistinctUntilChangedObserver_prev");
const DistinctUntilChangedObserver_hasValue = Symbol("DistinctUntilChangedObserver_hasValue");
const createDistinctUntilChangedObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function DistinctUntilChangedObserver(delegate, equality) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    this[DistinctUntilChangedObserver_equality] = equality;
    return this;
}, props({
    [DistinctUntilChangedObserver_equality]: none,
    [DistinctUntilChangedObserver_prev]: none,
    [DistinctUntilChangedObserver_hasValue]: false,
}), proto({
    [LiftedEventListenerLike_notify](next) {
        const shouldEmit = !this[DistinctUntilChangedObserver_hasValue] ||
            !this[DistinctUntilChangedObserver_equality](this[DistinctUntilChangedObserver_prev], next);
        if (shouldEmit) {
            this[DistinctUntilChangedObserver_prev] = next;
            this[DistinctUntilChangedObserver_hasValue] = true;
            this[LiftedEventListenerLike_notifyDelegate](next);
        }
    },
})))();
const Observable_distinctUntilChanged = (options) => pipe((createDistinctUntilChangedObserver), partial(options?.equality ?? strictEquality), Observable_liftPureDeferred);
export default Observable_distinctUntilChanged;
