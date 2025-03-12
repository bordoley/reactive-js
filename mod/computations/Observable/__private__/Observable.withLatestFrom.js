/// <reference types="./Observable.withLatestFrom.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, none, partial, pipe, tuple, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "../../../utils/__mixins__/ObserverMixin.js";
import { DispatcherLike_complete, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createWithLatestFromObserver = /*@__PURE__*/ (() => {
    const WithLatestFromObserver_hasLatest = Symbol("WithLatestFromObserver_hasLatest");
    const WithLatestFromObserver_otherLatest = Symbol("WithLatestFromObserver_otherLatest");
    const WithLatestFromObserver_selector = Symbol("WithLatestFromObserver_selector");
    function onWithLatestFromObserverOtherSubscriptionComplete() {
        if (!this[WithLatestFromObserver_hasLatest]) {
            this[DispatcherLike_complete]();
        }
    }
    function onOtherNotify(next) {
        this[WithLatestFromObserver_hasLatest] = true;
        this[WithLatestFromObserver_otherLatest] = next;
    }
    return mixInstanceFactory(include(ObserverMixin(), DelegatingDisposableMixin, LiftedObserverMixin()), function WithLatestFromObserver(delegate, other, selector) {
        init(DelegatingDisposableMixin, this, delegate);
        init(ObserverMixin(), this, delegate, delegate);
        init(LiftedObserverMixin(), this, delegate);
        this[WithLatestFromObserver_selector] = selector;
        pipe(other, Observable_forEach(bind(onOtherNotify, this)), Observable_subscribeWithConfig(delegate, delegate), Disposable.addTo(this), DisposableContainer.onComplete(bind(onWithLatestFromObserverOtherSubscriptionComplete, this)));
        return this;
    }, props({
        [WithLatestFromObserver_hasLatest]: false,
        [WithLatestFromObserver_otherLatest]: none,
        [WithLatestFromObserver_selector]: none,
    }), proto({
        [ObserverMixinBaseLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            const shouldEmit = !this[DisposableLike_isDisposed] &&
                this[WithLatestFromObserver_hasLatest];
            let v = none;
            return ((shouldEmit &&
                ((v = this[WithLatestFromObserver_selector](next, this[WithLatestFromObserver_otherLatest])),
                    delegate?.[ObserverMixinBaseLike_notify]?.(v) ??
                        delegate[QueueableLike_enqueue](v))) ||
                !shouldEmit);
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
