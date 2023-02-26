/// <reference types="./Observable.timeout.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isNumber, none, partial, pipe, returns } from "../../../functions.js";
import { SinkLike_notify, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import DisposableRef_mixin from "../../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import MutableRef_get from "../../../util/MutableRef/__internal__/MutableRef.get.js";
import { MutableRefLike_current, } from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_throws from "./Observable.throws.js";
const Observable_timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("Observable.timeout.error");
    const typedDisposableRefMixin = DisposableRef_mixin();
    const typedObserverMixin = Observer_mixin();
    const TimeoutObserver_duration = Symbol("TimeoutObserver_duration");
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer[TimeoutObserver_duration], Observable_subscribe(Observer_getScheduler(observer[DelegatingLike_delegate])));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_delegatingMixin(), typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(Disposable_delegatingMixin(), instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        instance[TimeoutObserver_duration] = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        [TimeoutObserver_duration]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            pipe(this, MutableRef_get, Disposable_dispose());
            this[DelegatingLike_delegate][SinkLike_notify](next);
        },
    }));
    const raise = returns(timeoutError);
    return (duration) => {
        const durationObs = isNumber(duration)
            ? Observable_throws({ delay: duration, delayStart: true, raise })
            : Observable_concat(duration, Observable_throws({ raise }));
        return pipe(createTimeoutObserver, partial(durationObs), Observable_lift(false, isNumber(duration) || Observable_isRunnable(duration)));
    };
})();
export default Observable_timeout;
