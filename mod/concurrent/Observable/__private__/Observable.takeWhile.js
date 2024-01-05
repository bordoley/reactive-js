/// <reference types="./Observable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");
const Observer_createTakeWhileObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[TakeWhileObserver_predicate] = predicate;
    instance[TakeWhileObserver_inclusive] = inclusive ?? false;
    return instance;
}, props({
    [TakeWhileObserver_predicate]: none,
    [TakeWhileObserver_inclusive]: none,
}), {
    [SinkLike_notify](next) {
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        }
        if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
        }
    },
}))))();
const Observable_takeWhile = (predicate, options = {}) => pipe(Observer_createTakeWhileObserver, partial(predicate, options?.inclusive ?? false), Observable_liftPure);
export default Observable_takeWhile;
