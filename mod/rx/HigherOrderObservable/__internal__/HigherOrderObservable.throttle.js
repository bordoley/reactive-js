/// <reference types="./HigherOrderObservable.throttle.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { isNumber, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, ThrottleMode_first, ThrottleMode_interval, ThrottleMode_last, } from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import DisposableRef_create from "../../../util/DisposableRef/__internal__/DisposableRef.create.js";
import MutableRef_set from "../../../util/MutableRef/__internal__/MutableRef.set.js";
import { MutableRefLike_current, } from "../../../util/__internal__/util.internal.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";
const createThrottleObserver = (() => {
    const typedObserverMixin = Observer_mixin();
    const ThrottleObserver_value = Symbol("ThrottleObserver_value");
    const ThrottleObserver_hasValue = Symbol("ThrottleObserver_hasValue");
    const ThrottleObserver_durationSubscription = Symbol("ThrottleObserver_durationSubscription");
    const ThrottleObserver_durationFunction = Symbol("ThrottleObserver_durationFunction");
    const ThrottleObserver_mode = Symbol("ThrottleObserver_mode");
    const ThrottleObserver_onNotify = Symbol("ThrottleObserver_onNotify");
    const setupDurationSubscription = (observer, next) => {
        pipe(observer[ThrottleObserver_durationSubscription], MutableRef_set(pipe(observer[ThrottleObserver_durationFunction](next), Observable_forEach(observer[ThrottleObserver_onNotify]), Observable_subscribe(Observer_getScheduler(observer)))));
    };
    return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        instance[ThrottleObserver_durationFunction] = durationFunction;
        instance[ThrottleObserver_mode] = mode;
        instance[ThrottleObserver_durationSubscription] = pipe(DisposableRef_create(Disposable_disposed), Disposable_addTo(delegate));
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
            if (instance[ThrottleObserver_mode] !== ThrottleMode_first &&
                instance[ThrottleObserver_hasValue] &&
                !Disposable_isDisposed(delegate)) {
                pipe([instance[ThrottleObserver_value]], ReadonlyArray_toRunnable(), Observable_observeWith(delegate));
            }
        }));
        return instance;
    }, props({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: ThrottleMode_interval,
        [ThrottleObserver_onNotify]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[ThrottleObserver_value] = next;
            this[ThrottleObserver_hasValue] = true;
            const durationSubscriptionDisposableIsDisposed = this[ThrottleObserver_durationSubscription][MutableRefLike_current][DisposableLike_isDisposed];
            if (durationSubscriptionDisposableIsDisposed &&
                this[ThrottleObserver_mode] !== ThrottleMode_last) {
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
    const { mode = ThrottleMode_interval } = options;
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
