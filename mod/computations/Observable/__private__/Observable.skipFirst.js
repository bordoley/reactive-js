/// <reference types="./Observable.skipFirst.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike_notify } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");
const createSkipFirstObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function SkipFirstObserver(delegate, skipCount) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    this[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);
    return this;
}, props({
    [SkipFirstObserver_count]: 0,
}), proto({
    [ObserverLike_notify]: Observer_assertObserverState(function (next) {
        this[SkipFirstObserver_count] = max(this[SkipFirstObserver_count] - 1, -1);
        if (this[SkipFirstObserver_count] < 0) {
            this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }
    }),
})))();
const Observable_skipFirst = (options) => pipe((createSkipFirstObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_skipFirst;
