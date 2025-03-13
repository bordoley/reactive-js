/// <reference types="./Observable.keep.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
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
    [LiftedObserverLike_notify](next) {
        const shouldNotify = this[KeepObserver_predicate](next);
        const delegate = this[LiftedObserverLike_delegate];
        if (shouldNotify) {
            delegate[QueueableLike_enqueue](next);
        }
    },
})))();
const Observable_keep = (predicate) => pipe((createKeepObserver), partial(predicate), Observable_liftPure);
export default Observable_keep;
