/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, strictEquality, } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "../../../utils/__mixins__/ObserverMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const DistinctUntilChangedObserver_equality = Symbol("DistinctUntilChangedObserver_equality");
const DistinctUntilChangedObserver_prev = Symbol("DistinctUntilChangedObserver_prev");
const DistinctUntilChangedObserver_hasValue = Symbol("DistinctUntilChangedObserver_hasValue");
const createDistinctUntilChangedObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function DistinctUntilChangedObserver(delegate, equality) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    this[DistinctUntilChangedObserver_equality] = equality;
    return this;
}, props({
    [DistinctUntilChangedObserver_equality]: none,
    [DistinctUntilChangedObserver_prev]: none,
    [DistinctUntilChangedObserver_hasValue]: false,
}), proto({
    [ObserverMixinBaseLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        const shouldEmit = !this[DistinctUntilChangedObserver_hasValue] ||
            !this[DistinctUntilChangedObserver_equality](this[DistinctUntilChangedObserver_prev], next);
        return ((shouldEmit &&
            ((this[DistinctUntilChangedObserver_prev] = next),
                (this[DistinctUntilChangedObserver_hasValue] = true),
                delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
                    delegate[QueueableLike_enqueue](next))) ||
            !shouldEmit);
    },
})))();
const Observable_distinctUntilChanged = (options) => pipe((createDistinctUntilChangedObserver), partial(options?.equality ?? strictEquality), Observable_liftPureDeferred);
export default Observable_distinctUntilChanged;
