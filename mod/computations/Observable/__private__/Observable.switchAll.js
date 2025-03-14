/// <reference types="./Observable.switchAll.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_isDisposed, SerialDisposableLike_current, SinkLike_complete, SinkLike_isCompleted, SinkLike_push, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createSwitchAllObserver = /*@__PURE__*/ (() => {
    const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");
    function onSwitchAllObserverInnerObservableComplete() {
        if (this[SinkLike_isCompleted]) {
            this[LiftedObserverLike_delegate][SinkLike_complete]();
        }
    }
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function SwitchAllObserver(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[SwitchAllObserver_currentRef] = pipe(SerialDisposable.create(), Disposable.addTo(delegate));
        return this;
    }, props({
        [SwitchAllObserver_currentRef]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const delegate = this[LiftedObserverLike_delegate];
            this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = pipe(next, Observable_forEach(bindMethod(delegate, SinkLike_push)), Observable_subscribeWithConfig(delegate, this), Disposable.addTo(delegate), DisposableContainer.onComplete(bind(onSwitchAllObserverInnerObservableComplete, this)));
        },
        [LiftedObserverLike_complete]() {
            if (this[SwitchAllObserver_currentRef][SerialDisposableLike_current][DisposableLike_isDisposed]) {
                this[LiftedObserverLike_delegate][SinkLike_complete]();
            }
        },
    }));
})();
const Observable_switchAll = ((options) => Observable_lift({
    [ObservableLift_isStateless]: false,
    [ComputationLike_isDeferred]: Computation.isDeferred(options?.innerType ?? {}),
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(options?.innerType ?? {}),
})(createSwitchAllObserver));
export default Observable_switchAll;
