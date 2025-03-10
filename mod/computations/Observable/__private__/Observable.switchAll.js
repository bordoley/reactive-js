/// <reference types="./Observable.switchAll.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, ObserverLike_notify, SerialDisposableLike_current, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createSwitchAllObserver = /*@__PURE__*/ (() => {
    const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");
    function onSwitchAllObserverComplete() {
        if (this[SwitchAllObserver_currentRef][SerialDisposableLike_current][DisposableLike_isDisposed]) {
            this[LiftedObserverLike_delegate][DisposableLike_dispose]();
        }
    }
    function onSwitchAllObserverInnerObservableComplete() {
        if (this[DisposableLike_isDisposed]) {
            this[LiftedObserverLike_delegate][DisposableLike_dispose]();
        }
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()), function SwitchAllObserver(delegate) {
        init(DisposableMixin, this);
        init(DelegatingObserverMixin(), this, delegate);
        init(LiftedObserverMixin(), this, delegate);
        this[SwitchAllObserver_currentRef] = pipe(SerialDisposable.create(), Disposable.addTo(delegate));
        pipe(this, DisposableContainer.onComplete(onSwitchAllObserverComplete));
        return this;
    }, props({
        [SwitchAllObserver_currentRef]: none,
    }), proto({
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = pipe(next, Observable_forEach(bindMethod(this[LiftedObserverLike_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(this[LiftedObserverLike_delegate], this), Disposable.addTo(this[LiftedObserverLike_delegate]), DisposableContainer.onComplete(bind(onSwitchAllObserverInnerObservableComplete, this)));
        }),
    }));
})();
const Observable_switchAll = ((options) => Observable_lift({
    [ObservableLift_isStateless]: false,
    [ComputationLike_isDeferred]: Computation.isDeferred(options?.innerType ?? {}),
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(options?.innerType ?? {}),
})(createSwitchAllObserver));
export default Observable_switchAll;
