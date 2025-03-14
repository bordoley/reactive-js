/// <reference types="./Observable.throttle.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, isSome, none, partial, pipe, pipeLazy, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_delegate, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DisposableLike_isDisposed, SerialDisposableLike_current, SinkLike_complete, SinkLike_isCompleted, SinkLike_next, } from "../../../utils.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
export const ThrottleFirstMode = "first";
export const ThrottleLastMode = "last";
export const ThrottleIntervalMode = "interval";
const createThrottleObserver = /*@__PURE__*/ (() => {
    const ThrottleObserver_value = Symbol("ThrottleObserver_value");
    const ThrottleObserver_hasValue = Symbol("ThrottleObserver_hasValue");
    const ThrottleObserver_durationSubscription = Symbol("ThrottleObserver_durationSubscription");
    const ThrottleObserver_durationFunction = Symbol("ThrottleObserver_durationFunction");
    const ThrottleObserver_mode = Symbol("ThrottleObserver_mode");
    function notifyThrottleObserverDelegate(_) {
        const delegate = this[LiftedObserverLike_delegate];
        const delegateIsCompleted = delegate[SinkLike_isCompleted];
        if (this[ThrottleObserver_hasValue] && !delegateIsCompleted) {
            const value = this[ThrottleObserver_value];
            this[ThrottleObserver_value] = none;
            this[ThrottleObserver_hasValue] = false;
            delegate[SinkLike_next](value);
            setupDurationSubscription(this, value);
        }
    }
    const setupDurationSubscription = (observer, next) => {
        const delegate = observer[LiftedObserverLike_delegate];
        observer[ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[ThrottleObserver_durationFunction](next), Observable_forEach(bind(notifyThrottleObserverDelegate, observer)), Observable_subscribeWithConfig(delegate, observer), Disposable.addTo(delegate));
    };
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function ThrottleObserver(delegate, durationFunction, mode) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[ThrottleObserver_durationFunction] = durationFunction;
        this[ThrottleObserver_mode] = mode;
        this[ThrottleObserver_durationSubscription] = pipe(SerialDisposable.create(), Disposable.addTo(delegate));
        return this;
    }, props({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: ThrottleIntervalMode,
    }), proto({
        [LiftedObserverLike_notify](next) {
            this[ThrottleObserver_value] = next;
            this[ThrottleObserver_hasValue] = true;
            const durationSubscriptionDisposableIsDisposed = this[ThrottleObserver_durationSubscription][SerialDisposableLike_current][DisposableLike_isDisposed];
            if (durationSubscriptionDisposableIsDisposed &&
                this[ThrottleObserver_mode] !== ThrottleLastMode) {
                notifyThrottleObserverDelegate.call(this);
            }
            else if (durationSubscriptionDisposableIsDisposed) {
                setupDurationSubscription(this, next);
            }
        },
        [LiftedObserverLike_complete]() {
            const delegate = this[LiftedObserverLike_delegate];
            if (this[ThrottleObserver_mode] !== ThrottleFirstMode &&
                this[ThrottleObserver_hasValue] &&
                !delegate[SinkLike_isCompleted] &&
                isSome(this[ThrottleObserver_value])) {
                const value = this[ThrottleObserver_value];
                this[ThrottleObserver_value] = none;
                this[ThrottleObserver_hasValue] = false;
                delegate[SinkLike_next](value);
            }
            delegate[SinkLike_complete]();
        },
    }));
})();
const Observable_throttle = (duration, options = {}) => {
    const { mode = ThrottleIntervalMode } = options;
    const durationObservable = pipeLazy(none, Observable_fromValue({ delay: duration }));
    return pipe((createThrottleObserver), partial(durationObservable, mode), Observable_liftPureDeferred);
};
export default Observable_throttle;
