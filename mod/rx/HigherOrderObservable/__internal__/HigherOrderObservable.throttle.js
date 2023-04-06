/// <reference types="./HigherOrderObservable.throttle.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ThrottleObserver_durationFunction, ThrottleObserver_durationSubscription, ThrottleObserver_hasValue, ThrottleObserver_mode, ThrottleObserver_onNotify, ThrottleObserver_value, } from "../../../__internal__/symbols.js";
import { SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { invoke, isNumber, none, partial, pipe, } from "../../../functions.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";
const createThrottleObserver = (() => {
    const typedObserverMixin = Observer_mixin();
    const setupDurationSubscription = (observer, next) => {
        observer[ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[ThrottleObserver_durationFunction](next), Observable_forEach(observer[ThrottleObserver_onNotify]), Observable_subscribeWithConfig(observer));
    };
    return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
        init(Disposable_mixin, instance);
        initObserverMixinFromDelegate(instance, delegate);
        instance[ThrottleObserver_durationFunction] = durationFunction;
        instance[ThrottleObserver_mode] = mode;
        instance[ThrottleObserver_durationSubscription] = pipe(SerialDisposable_create(Disposable_disposed), Disposable_addTo(delegate));
        instance[ThrottleObserver_onNotify] = (_) => {
            if (instance[ThrottleObserver_hasValue]) {
                const value = instance[ThrottleObserver_value];
                instance[ThrottleObserver_value] = none;
                instance[ThrottleObserver_hasValue] = false;
                delegate[ObserverLike_notify](value);
                setupDurationSubscription(instance, value);
            }
        };
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            if (instance[ThrottleObserver_mode] !== "first" &&
                instance[ThrottleObserver_hasValue] &&
                !delegate[DisposableLike_isDisposed]) {
                pipe(instance[ThrottleObserver_value], Optional_toObservable(), invoke(ObservableLike_observe, delegate));
            }
        }));
        return instance;
    }, props({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: "interval",
        [ThrottleObserver_onNotify]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[ThrottleObserver_value] = next;
            this[ThrottleObserver_hasValue] = true;
            const durationSubscriptionDisposableIsDisposed = this[ThrottleObserver_durationSubscription][SerialDisposableLike_current][DisposableLike_isDisposed];
            if (durationSubscriptionDisposableIsDisposed &&
                this[ThrottleObserver_mode] !== "last") {
                this[ThrottleObserver_onNotify]();
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
