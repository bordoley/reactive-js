/// <reference types="./Observable.takeWhile.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { SinkLike_complete } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");
const createTakeWhileObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function TakeWhileObserver(delegate, predicate, inclusive) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    this[TakeWhileObserver_predicate] = predicate;
    this[TakeWhileObserver_inclusive] = inclusive ?? false;
    return this;
}, props({
    [TakeWhileObserver_predicate]: none,
    [TakeWhileObserver_inclusive]: none,
}), proto({
    [LiftedEventListenerLike_notify](next) {
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        const isInclusive = this[TakeWhileObserver_inclusive];
        if (satisfiesPredicate || isInclusive) {
            this[LiftedEventListenerLike_notifyDelegate](next);
        }
        if (!satisfiesPredicate) {
            this[SinkLike_complete]();
        }
    },
})))();
const Observable_takeWhile = (predicate, options = {}) => pipe((createTakeWhileObserver), partial(predicate, options?.inclusive), Observable_liftPureDeferred);
export default Observable_takeWhile;
