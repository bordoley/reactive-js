/// <reference types="./Observable.keep.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const KeepObserver_predicate = Symbol("KeepObserver_predicate");
const createKeepObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function KeepObserver(delegate, predicate) {
    init(DelegatingDisposableMixin, this, delegate);
    init(LiftedObserverMixin(), this, delegate, none);
    this[KeepObserver_predicate] = predicate;
    return this;
}, props({
    [KeepObserver_predicate]: none,
}), proto({
    [LiftedEventListenerLike_notify](next) {
        const shouldNotify = this[KeepObserver_predicate](next);
        if (shouldNotify) {
            this[LiftedEventListenerLike_notifyDelegate](next);
        }
    },
})))();
const Observable_keep = (predicate) => pipe((createKeepObserver), partial(predicate), Observable_liftPure);
export default Observable_keep;
