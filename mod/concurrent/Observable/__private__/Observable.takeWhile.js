/// <reference types="./Observable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../../concurrent.js";
import { none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");
const createTakeWhileObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[TakeWhileObserver_predicate] = predicate;
    instance[TakeWhileObserver_inclusive] = inclusive ?? false;
    return instance;
}, props({
    [TakeWhileObserver_predicate]: none,
    [TakeWhileObserver_inclusive]: none,
}), {
    [ObserverLike_notify](next) {
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
            this[DelegatingDisposableLike_delegate][ObserverLike_notify](next);
        }
        if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
        }
    },
}))))();
const Observable_takeWhile = (predicate, options = {}) => pipe(createTakeWhileObserver, partial(predicate, options?.inclusive), Observable_liftPureDeferred);
export default Observable_takeWhile;
