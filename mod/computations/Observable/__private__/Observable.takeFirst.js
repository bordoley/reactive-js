/// <reference types="./Observable.takeFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { DisposableLike_dispose, ObserverLike_notify, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const TakeFirstObserver_count = Symbol("TakeFirstObserver_count");
const createTakeFirstObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function TakeFirstObserver(instance, delegate, takeCount) {
    init(DelegatingDisposableMixin, instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    init(LiftedObserverMixin(), instance, delegate);
    instance[TakeFirstObserver_count] = clampPositiveInteger(takeCount ?? 1);
    if (takeCount === 0) {
        instance[DisposableLike_dispose]();
    }
    return instance;
}, props({
    [TakeFirstObserver_count]: 0,
}), {
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        this[TakeFirstObserver_count] = max(this[TakeFirstObserver_count] - 1, -1);
        this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        if (this[TakeFirstObserver_count] <= 0) {
            this[DisposableLike_dispose]();
        }
    }),
}))();
const Observable_takeFirst = (options) => pipe((createTakeFirstObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_takeFirst;
