/// <reference types="./Observer.createThrottleObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __ThrottleObserver_durationFunction, __ThrottleObserver_durationSubscription, __ThrottleObserver_hasValue, __ThrottleObserver_mode, __ThrottleObserver_onNotify, __ThrottleObserver_value, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, SerialDisposableLike_current, } from "../../__internal__/types.js";
import { invoke, none, pipe, } from "../../functions.js";
import { DisposableLike_isDisposed, ObservableLike_observe, ObserverLike_notify, } from "../../types.js";
const Observer_createThrottleObserver = /*@__PURE__*/ (() => {
    const setupDurationSubscription = (observer, next) => {
        observer[__ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[__ThrottleObserver_durationFunction](next), Observable_forEach(observer[__ThrottleObserver_onNotify]), Observable_subscribeWithConfig(observer[DelegatingLike_delegate], observer), Disposable_addTo(observer[DelegatingLike_delegate]));
    };
    return createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function ThrottleObserver(instance, delegate, durationFunction, mode) {
        init(Delegating_mixin(), instance, delegate);
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[__ThrottleObserver_durationFunction] = durationFunction;
        instance[__ThrottleObserver_mode] = mode;
        instance[__ThrottleObserver_durationSubscription] = pipe(SerialDisposable_create(Disposable_disposed), Disposable_addTo(delegate));
        instance[__ThrottleObserver_onNotify] = (_) => {
            if (instance[__ThrottleObserver_hasValue]) {
                const value = instance[__ThrottleObserver_value];
                instance[__ThrottleObserver_value] = none;
                instance[__ThrottleObserver_hasValue] = false;
                delegate[ObserverLike_notify](value);
                setupDurationSubscription(instance, value);
            }
        };
        pipe(instance, Disposable_onComplete(() => {
            if (instance[__ThrottleObserver_mode] !== "first" &&
                instance[__ThrottleObserver_hasValue] &&
                !delegate[DisposableLike_isDisposed]) {
                pipe(instance[__ThrottleObserver_value], Optional_toRunnable(), invoke(ObservableLike_observe, delegate));
            }
        }));
        return instance;
    }, props({
        [__ThrottleObserver_value]: none,
        [__ThrottleObserver_hasValue]: false,
        [__ThrottleObserver_durationSubscription]: none,
        [__ThrottleObserver_durationFunction]: none,
        [__ThrottleObserver_mode]: "interval",
        [__ThrottleObserver_onNotify]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[__ThrottleObserver_value] = next;
            this[__ThrottleObserver_hasValue] = true;
            const durationSubscriptionDisposableIsDisposed = this[__ThrottleObserver_durationSubscription][SerialDisposableLike_current][DisposableLike_isDisposed];
            if (durationSubscriptionDisposableIsDisposed &&
                this[__ThrottleObserver_mode] !== "last") {
                this[__ThrottleObserver_onNotify]();
            }
            else if (durationSubscriptionDisposableIsDisposed) {
                setupDurationSubscription(this, next);
            }
        },
    }));
})();
export default Observer_createThrottleObserver;
