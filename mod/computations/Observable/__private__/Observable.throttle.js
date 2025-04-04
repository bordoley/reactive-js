/// <reference types="./Observable.throttle.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, none, partial, pipe, returns, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SchedulerLike_inContinuation, SinkLike_isCompleted, } from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import Observable_delay from "../../Observable/__private__/Observable.delay.js";
import { LiftedSinkLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_lift from "./Observable.lift.js";
const ThrottleFirstMode = "first";
const ThrottleLastMode = "last";
const ThrottleIntervalMode = "interval";
const createThrottleSink = /*@__PURE__*/ (() => {
    const ThrottleSink_value = Symbol("ThrottleSink_value");
    const ThrottleSink_hasValue = Symbol("ThrottleSink_hasValue");
    const ThrottleSink_durationSubscription = Symbol("ThrottleSink_durationSubscription");
    const ThrottleSink_durationFunction = Symbol("ThrottleSink_durationFunction");
    const ThrottleSink_mode = Symbol("ThrottleSink_mode");
    function notifyThrottleObserverDelegate(_) {
        const delegate = this[DelegatingEventListenerLike_delegate];
        const delegateIsCompleted = delegate[SinkLike_isCompleted];
        const mode = this[ThrottleSink_mode];
        const hasValue = this[ThrottleSink_hasValue];
        const value = this[ThrottleSink_value];
        const scheduler = this[LiftedSinkLike_subscription];
        // We only want to notify when the durationSubscription has either completed
        // itself or was in disposed from DelegatingLiftedSinkLike_onCompleted
        // otherwise the subscription was probably externally disposed and
        // don't worry about it.
        const inContinuation = scheduler[SchedulerLike_inContinuation];
        this[ThrottleSink_value] = none;
        this[ThrottleSink_hasValue] = false;
        if (inContinuation &&
            hasValue &&
            !delegateIsCompleted &&
            mode !== ThrottleFirstMode) {
            delegate[EventListenerLike_notify](value);
        }
    }
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ThrottleSink(delegate, durationFunction, mode) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[ThrottleSink_durationFunction] = durationFunction;
        this[ThrottleSink_mode] = mode;
        this[ThrottleSink_durationSubscription] = Disposable.disposed;
        return this;
    }, props({
        [ThrottleSink_value]: none,
        [ThrottleSink_hasValue]: false,
        [ThrottleSink_durationSubscription]: none,
        [ThrottleSink_durationFunction]: none,
        [ThrottleSink_mode]: ThrottleIntervalMode,
    }), proto({
        [EventListenerLike_notify](next) {
            const durationSubscriptionIsDisposed = this[ThrottleSink_durationSubscription][DisposableLike_isDisposed];
            const delegate = this[DelegatingEventListenerLike_delegate];
            const mode = this[ThrottleSink_mode];
            const scheduler = this[LiftedSinkLike_subscription];
            if (durationSubscriptionIsDisposed && mode !== ThrottleLastMode) {
                delegate[EventListenerLike_notify](next);
            }
            else {
                this[ThrottleSink_value] = next;
                this[ThrottleSink_hasValue] = true;
            }
            if (durationSubscriptionIsDisposed) {
                this[ThrottleSink_durationSubscription] = pipe(this[ThrottleSink_durationFunction](next), EventSource.subscribe({ scheduler }), DisposableContainer.onComplete(bind(notifyThrottleObserverDelegate, this)), Disposable.addTo(this));
            }
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            this[ThrottleSink_durationSubscription][DisposableLike_dispose]();
        },
    }));
})();
const Observable_throttle = ((duration, options = {}) => {
    const { mode = ThrottleIntervalMode } = options;
    const durationObservable = returns(Observable_delay(duration));
    return pipe((createThrottleSink), partial(durationObservable, mode), Observable_lift());
});
export default Observable_throttle;
