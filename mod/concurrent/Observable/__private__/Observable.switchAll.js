/// <reference types="./Observable.switchAll.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { bind, bindMethod, none, pipe } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SerialDisposableLike_current, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__private__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__private__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observer_createSwitchAllObserver = /*@__PURE__*/ (() => {
    const SwitchAllObserver_currentRef = Symbol("SwitchAllObserver_currentRef");
    const SwitchAllObserver_delegate = Symbol("SwitchAllObserver_delegate");
    function onDispose() {
        if (this[SwitchAllObserver_currentRef][SerialDisposableLike_current][DisposableLike_isDisposed]) {
            this[SwitchAllObserver_delegate][DisposableLike_dispose]();
        }
    }
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function SwitchAllObserver(instance, delegate) {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[SwitchAllObserver_delegate] = delegate;
        instance[SwitchAllObserver_currentRef] = pipe(SerialDisposable.create(Disposable.disposed), Disposable.addTo(delegate));
        pipe(instance, Disposable.onComplete(bind(onDispose, instance)));
        return instance;
    }, props({
        [SwitchAllObserver_currentRef]: none,
        [SwitchAllObserver_delegate]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            this[SwitchAllObserver_currentRef][SerialDisposableLike_current] =
                pipe(next, Observable_forEach(bindMethod(this[SwitchAllObserver_delegate], SinkLike_notify)), Observable_subscribeWithConfig(this[SwitchAllObserver_delegate], this), Disposable.addTo(this[SwitchAllObserver_delegate]), Disposable.onComplete(() => {
                    if (this[DisposableLike_isDisposed]) {
                        this[SwitchAllObserver_delegate][DisposableLike_dispose]();
                    }
                }));
        },
    }));
})();
const Observable_switchAll = ((options) => Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
})(Observer_createSwitchAllObserver));
export default Observable_switchAll;
