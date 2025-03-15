/// <reference types="./Observable.withLatestFrom.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, none, partial, pipe, tuple, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_notify, LiftedObserverLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { SinkLike_complete, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
const createWithLatestFromObserver = /*@__PURE__*/ (() => {
    const WithLatestFromObserver_hasLatest = Symbol("WithLatestFromObserver_hasLatest");
    const WithLatestFromObserver_otherLatest = Symbol("WithLatestFromObserver_otherLatest");
    const WithLatestFromObserver_selector = Symbol("WithLatestFromObserver_selector");
    function onWithLatestFromObserverOtherSubscriptionComplete() {
        if (!this[WithLatestFromObserver_hasLatest]) {
            this[SinkLike_complete]();
        }
    }
    function onOtherNotify(next) {
        this[WithLatestFromObserver_hasLatest] = true;
        this[WithLatestFromObserver_otherLatest] = next;
    }
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function WithLatestFromObserver(delegate, other, selector) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[WithLatestFromObserver_selector] = selector;
        pipe(other, Observable_forEach(bind(onOtherNotify, this)), Observable_subscribe(delegate), Disposable.addTo(this), DisposableContainer.onComplete(bind(onWithLatestFromObserverOtherSubscriptionComplete, this)));
        return this;
    }, props({
        [WithLatestFromObserver_hasLatest]: false,
        [WithLatestFromObserver_otherLatest]: none,
        [WithLatestFromObserver_selector]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const shouldEmit = this[WithLatestFromObserver_hasLatest];
            if (shouldEmit) {
                const v = this[WithLatestFromObserver_selector](next, this[WithLatestFromObserver_otherLatest]);
                this[LiftedObserverLike_notifyDelegate](v);
            }
        },
    }));
})();
const Observable_withLatestFrom = ((other, selector = tuple) => pipe(createWithLatestFromObserver, partial(other, selector), Observable_lift({
    [ObservableLift_isStateless]: Computation.isMulticasted(other),
    [ComputationLike_isDeferred]: !Computation.isMulticasted(other),
    [ComputationLike_isPure]: Computation.isPure(other),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(other),
})));
export default Observable_withLatestFrom;
