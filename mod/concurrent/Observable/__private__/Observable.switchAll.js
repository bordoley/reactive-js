/// <reference types="./Observable.switchAll.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike_notify, } from "../../../concurrent.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SerialDisposableLike_current, } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const createSwitchAllObserver = /*@__PURE__*/ (() => {
    const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");
    const SwitchAllObserver_delegate = Symbol("SwitchAllObserver_delegate");
    function onSwitchAllObserverComplete() {
        if (this[SwitchAllObserver_currentRef][SerialDisposableLike_current][DisposableLike_isDisposed]) {
            this[SwitchAllObserver_delegate][DisposableLike_dispose]();
        }
    }
    function onSwitchAllObserverInnerObservableComplete() {
        if (this[DisposableLike_isDisposed]) {
            this[SwitchAllObserver_delegate][DisposableLike_dispose]();
        }
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function SwitchAllObserver(instance, delegate) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[SwitchAllObserver_delegate] = delegate;
        instance[SwitchAllObserver_currentRef] = pipe(SerialDisposable.create(), Disposable.addTo(delegate));
        pipe(instance, DisposableContainer.onComplete(onSwitchAllObserverComplete));
        return instance;
    }, props({
        [SwitchAllObserver_currentRef]: none,
        [SwitchAllObserver_delegate]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            this[SwitchAllObserver_currentRef][SerialDisposableLike_current] = pipe(next, Observable_forEach(bindMethod(this[SwitchAllObserver_delegate], ObserverLike_notify)), Observable_subscribeWithConfig(this[SwitchAllObserver_delegate], this), Disposable.addTo(this[SwitchAllObserver_delegate]), DisposableContainer.onComplete(bind(onSwitchAllObserverInnerObservableComplete, this)));
        }),
    });
})();
const Observable_switchAll = ((options) => Observable_lift({
    [ObservableLift_isStateless]: false,
    ...(options?.innerType ?? {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: true,
    }),
})(createSwitchAllObserver));
export default Observable_switchAll;
