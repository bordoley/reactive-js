/// <reference types="./Observable.timeout.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { TimeoutObserver_duration, timeoutError, } from "../../../__internal__/symbols.js";
import { SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import { isNumber, none, partial, pipe, returns } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike_isRunnable, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
import Observable_throws from "./Observable.throws.js";
const Observable_timeout = /*@__PURE__*/ (() => {
    const typedSerialDisposableMixin = SerialDisposable_mixin();
    const typedObserverMixin = Observer_mixin();
    const setupDurationSubscription = (observer) => {
        observer[SerialDisposableLike_current] = pipe(observer[TimeoutObserver_duration], Observable_subscribeWithCapacityAndBackpressureStrategy(observer[DispatcherLike_scheduler], observer[QueueableLike_capacity], observer[QueueableLike_backpressureStrategy]));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_delegatingMixin(), typedSerialDisposableMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity], delegate[QueueableLike_backpressureStrategy]);
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedSerialDisposableMixin, instance, Disposable_disposed);
        instance[TimeoutObserver_duration] = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        [TimeoutObserver_duration]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[SerialDisposableLike_current][DisposableLike_dispose]();
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    }));
    const raise = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? Observable_throws({ delay: duration, raise })
            : Observable_concat(duration, Observable_throws({ raise }));
        return pipe(createTimeoutObserver, partial(durationObs), Observable_lift(false, isNumber(duration) || duration[ObservableLike_isRunnable]));
    };
})();
export default Observable_timeout;
