/// <reference types="./Observable.timeout.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __TimeoutObserver_duration, __timeoutError, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import { isNumber, none, partial, pipe, returns } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_throws from "./Observable.throws.js";
const Observable_timeout = /*@__PURE__*/ (() => {
    const setupDurationSubscription = (observer) => {
        observer[SerialDisposableLike_current] = pipe(observer[__TimeoutObserver_duration], Observable_subscribeWithConfig(observer, observer));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(Observer_delegatingMixin(), SerialDisposable_mixin(), Delegating_mixin()), function TimeoutObserver(instance, delegate, duration) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(SerialDisposable_mixin(), instance, Disposable_disposed);
        init(Delegating_mixin(), instance, delegate);
        instance[__TimeoutObserver_duration] = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        [__TimeoutObserver_duration]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            this[SerialDisposableLike_current][DisposableLike_dispose]();
            this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
    }));
    const raise = returns(__timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? Observable_throws({ delay: duration, raise })
            : Observable_concat(duration, Observable_throws({ raise }));
        return pipe(createTimeoutObserver, partial(durationObs), Observable_lift({
            [ObservableLike_isEnumerable]: false,
            [ObservableLike_isRunnable]: isNumber(duration) || duration[ObservableLike_isRunnable],
        }));
    };
})();
export default Observable_timeout;
