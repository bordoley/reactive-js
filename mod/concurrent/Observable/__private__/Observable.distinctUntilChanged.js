/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const DistinctUntilChangedObserver_equality = Symbol("DistinctUntilChangedObserver_equality");
const DistinctUntilChangedObserver_prev = Symbol("DistinctUntilChangedObserver_prev");
const DistinctUntilChangedObserver_hasValue = Symbol("DistinctUntilChangedObserver_hasValue");
const createDistinctUntilChangedObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), DelegatingDisposableMixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[DistinctUntilChangedObserver_equality] = equality;
    return instance;
}, props({
    [DistinctUntilChangedObserver_equality]: none,
    [DistinctUntilChangedObserver_prev]: none,
    [DistinctUntilChangedObserver_hasValue]: false,
}), {
    [ObserverLike_notify](next) {
        const shouldEmit = !this[DistinctUntilChangedObserver_hasValue] ||
            !this[DistinctUntilChangedObserver_equality](this[DistinctUntilChangedObserver_prev], next);
        if (shouldEmit) {
            this[DistinctUntilChangedObserver_prev] = next;
            this[DistinctUntilChangedObserver_hasValue] = true;
            this[DelegatingDisposableLike_delegate][ObserverLike_notify](next);
        }
    },
}))))();
const Observable_distinctUntilChanged = (options) => pipe(createDistinctUntilChangedObserver, partial(options?.equality ?? strictEquality), Observable_liftPureDeferred);
export default Observable_distinctUntilChanged;
