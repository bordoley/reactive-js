/// <reference types="./Observable.throttle.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, call, isSome, none, partial, pipe, returns, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_isCompleted, } from "../../../utils.js";
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
        if (this[ThrottleSink_hasValue] && !delegateIsCompleted) {
            const value = this[ThrottleSink_value];
            this[ThrottleSink_value] = none;
            this[ThrottleSink_hasValue] = false;
            delegate[EventListenerLike_notify](value);
            setupDurationSubscription(this, value);
        }
    }
    const setupDurationSubscription = (thiz, next) => {
        const scheduler = thiz[LiftedSinkLike_subscription];
        thiz[ThrottleSink_durationSubscription][DisposableLike_dispose]();
        thiz[ThrottleSink_durationSubscription] = pipe(thiz[ThrottleSink_durationFunction](next), EventSource.subscribe({ scheduler }), 
        // This works because dispose is called in a scheduler
        // continuation immediately after the sink is completed.
        DisposableContainer.onComplete(bind(notifyThrottleObserverDelegate, thiz)), Disposable.addTo(thiz));
    };
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function ThrowIfEmptySink(delegate, durationFunction, mode) {
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
            this[ThrottleSink_value] = next;
            this[ThrottleSink_hasValue] = true;
            const durationSubscriptionIsDisposed = this[ThrottleSink_durationSubscription][DisposableLike_isDisposed];
            if (durationSubscriptionIsDisposed &&
                this[ThrottleSink_mode] !== ThrottleLastMode) {
                call(notifyThrottleObserverDelegate, this);
            }
            else if (durationSubscriptionIsDisposed) {
                setupDurationSubscription(this, next);
            }
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const delegate = this[DelegatingEventListenerLike_delegate];
            const delegateIsComplete = delegate[SinkLike_isCompleted];
            if (this[ThrottleSink_mode] !== ThrottleFirstMode &&
                this[ThrottleSink_hasValue] &&
                !delegateIsComplete &&
                isSome(this[ThrottleSink_value])) {
                const value = this[ThrottleSink_value];
                this[ThrottleSink_value] = none;
                this[ThrottleSink_hasValue] = false;
                delegate[EventListenerLike_notify](value);
            }
        },
    }));
})();
const Observable_throttle = ((duration, options = {}) => {
    const { mode = ThrottleIntervalMode } = options;
    const durationObservable = returns(Observable_delay(duration));
    return pipe((createThrottleSink), partial(durationObservable, mode), Observable_lift());
});
export default Observable_throttle;
