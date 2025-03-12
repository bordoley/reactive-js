/// <reference types="./Observable.takeWhile.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "../../../utils/__mixins__/ObserverMixin.js";
import { QueueableLike_complete, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");
const createTakeWhileObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function TakeWhileObserver(delegate, predicate, inclusive) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    this[TakeWhileObserver_predicate] = predicate;
    this[TakeWhileObserver_inclusive] = inclusive ?? false;
    return this;
}, props({
    [TakeWhileObserver_predicate]: none,
    [TakeWhileObserver_inclusive]: none,
}), proto({
    [ObserverMixinBaseLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        const isInclusive = this[TakeWhileObserver_inclusive];
        const result = ((satisfiesPredicate || isInclusive) &&
            (delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
                delegate[QueueableLike_enqueue](next))) ||
            !satisfiesPredicate;
        if (!satisfiesPredicate) {
            this[QueueableLike_complete]();
        }
        return result;
    },
})))();
const Observable_takeWhile = (predicate, options = {}) => pipe((createTakeWhileObserver), partial(predicate, options?.inclusive), Observable_liftPureDeferred);
export default Observable_takeWhile;
