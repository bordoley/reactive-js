/// <reference types="./HigherOrderObservable.throttle.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ThrottleObserver_durationFunction, __ThrottleObserver_durationSubscription, __ThrottleObserver_hasValue, __ThrottleObserver_mode, __ThrottleObserver_onNotify, __ThrottleObserver_value, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { invoke, isNumber, none, partial, pipe, } from "../../../functions.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";
const createThrottleObserver = (() => {
    const setupDurationSubscription = (observer, next) => {
        observer[__ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[__ThrottleObserver_durationFunction](next), Observable_forEach(observer[__ThrottleObserver_onNotify]), Observable_subscribeWithConfig(observer[DelegatingLike_delegate], observer));
    };
    return createInstanceFactory(mix(include(Observer_mixin(), Delegating_mixin()), function ThrottleObserver(instance, delegate, durationFunction, mode) {
        init(Delegating_mixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate, delegate);
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
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            if (instance[__ThrottleObserver_mode] !== "first" &&
                instance[__ThrottleObserver_hasValue] &&
                !delegate[DisposableLike_isDisposed]) {
                pipe(instance[__ThrottleObserver_value], Optional_toObservable(), invoke(ObservableLike_observe, delegate));
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
const throttleImpl = (lift, duration, mode) => {
    return pipe(createThrottleObserver, partial(duration, mode), lift);
};
const HigherOrderObservable_throttle = (fromReadonlyArray, lift) => (duration, options = {}) => {
    const { mode = "interval" } = options;
    const durationFunction = isNumber(duration)
        ? (_) => pipe([none], fromReadonlyArray({
            delay: duration,
            delayStart: true,
        }))
        : duration;
    return throttleImpl(isNumber(duration)
        ? // Note: This is only safe because we can control all the callers and know
            // all the valid subtypes of ObservableLike
            Runnable_lift
        : lift, durationFunction, mode);
};
export default HigherOrderObservable_throttle;
