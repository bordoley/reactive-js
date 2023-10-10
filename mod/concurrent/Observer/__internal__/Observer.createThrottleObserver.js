/// <reference types="./Observer.createThrottleObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, } from "../../../concurrent.js";
import { isSome, none, pipe, } from "../../../functions.js";
import { DisposableLike_isDisposed, QueueableLike_enqueue, SerialDisposableLike_current, SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import SerialDisposable_create from "../../../utils/SerialDisposable/__internal__/SerialDisposable.create.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_createThrottleObserver = /*@__PURE__*/ (() => {
    const ThrottleObserver_value = Symbol("ThrottleObserver_value");
    const ThrottleObserver_hasValue = Symbol("ThrottleObserver_hasValue");
    const ThrottleObserver_durationSubscription = Symbol("ThrottleObserver_durationSubscription");
    const ThrottleObserver_durationFunction = Symbol("ThrottleObserver_durationFunction");
    const ThrottleObserver_mode = Symbol("ThrottleObserver_mode");
    const ThrottleObserver_onNotify = Symbol("ThrottleObserver_onNotify");
    const ThrottleObserver_delegate = Symbol("ThrottleObserver_delegate");
    const setupDurationSubscription = (observer, next) => {
        observer[ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[ThrottleObserver_durationFunction](next), Observable_forEach(observer[ThrottleObserver_onNotify]), Observable_subscribeWithConfig(observer[ThrottleObserver_delegate], observer), Disposable.addTo(observer[ThrottleObserver_delegate]));
    };
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function ThrottleObserver(instance, delegate, durationFunction, mode) {
        init(DisposableMixin, instance);
        instance[ThrottleObserver_delegate] = delegate;
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[ThrottleObserver_durationFunction] = durationFunction;
        instance[ThrottleObserver_mode] = mode;
        instance[ThrottleObserver_durationSubscription] = pipe(SerialDisposable_create(Disposable.disposed), Disposable.addTo(delegate));
        instance[ThrottleObserver_onNotify] = (_) => {
            if (instance[ThrottleObserver_hasValue]) {
                const value = instance[ThrottleObserver_value];
                instance[ThrottleObserver_value] = none;
                instance[ThrottleObserver_hasValue] = false;
                delegate[SinkLike_notify](value);
                setupDurationSubscription(instance, value);
            }
        };
        pipe(instance, Disposable.onComplete(() => {
            if (instance[ThrottleObserver_mode] !== "first" &&
                instance[ThrottleObserver_hasValue] &&
                !delegate[DisposableLike_isDisposed] &&
                isSome(instance[ThrottleObserver_value])) {
                delegate[QueueableLike_enqueue](instance[ThrottleObserver_value]);
                delegate[DispatcherLike_complete]();
            }
        }));
        return instance;
    }, props({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_delegate]: none,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: "interval",
        [ThrottleObserver_onNotify]: none,
    }), {
        [SinkLike_notify](next) {
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
export default Observer_createThrottleObserver;
