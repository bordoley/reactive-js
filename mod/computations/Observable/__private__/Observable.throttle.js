/// <reference types="./Observable.throttle.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { StoreLike_value } from "../../../computations.js";
import { bind, isSome, none, partial, pipe, pipeLazy, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { DispatcherLike_complete, DispatcherLike_state, DispatcherState_completed, DisposableLike_isDisposed, ObserverLike_notify, QueueableLike_enqueue, SerialDisposableLike_current, } from "../../../utils.js";
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
        const delegateIsCompleted = delegate[DispatcherLike_state][StoreLike_value] ===
            DispatcherState_completed;
        if (this[ThrottleObserver_hasValue] && !delegateIsCompleted) {
            const value = this[ThrottleObserver_value];
            this[ThrottleObserver_value] = none;
            this[ThrottleObserver_hasValue] = false;
            delegate[ObserverLike_notify](value);
            setupDurationSubscription(this, value);
        }
    }
    const setupDurationSubscription = (observer, next) => {
        observer[ThrottleObserver_durationSubscription][SerialDisposableLike_current] = pipe(observer[ThrottleObserver_durationFunction](next), Observable_forEach(bind(notifyThrottleObserverDelegate, observer)), Observable_subscribeWithConfig(observer[LiftedObserverLike_delegate], observer), Disposable.addTo(observer[LiftedObserverLike_delegate]));
    };
    function onThrottleObserverComplete() {
        const delegate = this[LiftedObserverLike_delegate];
        if (this[ThrottleObserver_mode] !== ThrottleFirstMode &&
            this[ThrottleObserver_hasValue] &&
            !delegate[DisposableLike_isDisposed] &&
            isSome(this[ThrottleObserver_value])) {
            const value = this[ThrottleObserver_value];
            this[ThrottleObserver_value] = none;
            this[ThrottleObserver_hasValue] = false;
            delegate[QueueableLike_enqueue](value);
        }
        delegate[DispatcherLike_complete]();
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin(), LiftedObserverMixin()), function ThrottleObserver(delegate, durationFunction, mode) {
        init(DisposableMixin, this);
        init(DelegatingObserverMixin(), this, delegate);
        init(LiftedObserverMixin(), this, delegate);
        this[ThrottleObserver_durationFunction] = durationFunction;
        this[ThrottleObserver_mode] = mode;
        this[ThrottleObserver_durationSubscription] = pipe(SerialDisposable.create(), Disposable.addTo(delegate));
        pipe(this, DisposableContainer.onComplete(onThrottleObserverComplete));
        return this;
    }, props({
        [ThrottleObserver_value]: none,
        [ThrottleObserver_hasValue]: false,
        [ThrottleObserver_durationSubscription]: none,
        [ThrottleObserver_durationFunction]: none,
        [ThrottleObserver_mode]: ThrottleIntervalMode,
    }), proto({
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
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
        }),
    }));
})();
const Observable_throttle = (duration, options = {}) => {
    const { mode = ThrottleIntervalMode } = options;
    const durationObservable = pipeLazy(none, Observable_fromValue({ delay: duration }));
    return pipe((createThrottleObserver), partial(durationObservable, mode), Observable_liftPureDeferred);
};
export default Observable_throttle;
