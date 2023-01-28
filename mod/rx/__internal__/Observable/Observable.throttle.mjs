/// <reference types="./Observable.throttle.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, none, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DisposableRef_create from '../../../util/__internal__/DisposableRef/DisposableRef.create.mjs';
import MutableRef_set from '../../../util/__internal__/MutableRef/MutableRef.set.mjs';
import { MutableRefLike_current } from '../../../util/__internal__/util.internal.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import ReactiveContainer_sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_lift from './Observable.lift.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_throttle = /*@__PURE__*/ (() => {
    const createThrottleObserver = (() => {
        const typedObserverMixin = Observer_mixin();
        const setupDurationSubscription = (observer, next) => {
            pipe(observer.durationSubscription, MutableRef_set(pipe(observer.durationFunction(next), Observable_forEach(observer.onNotify), Observable_subscribe(Observer_getScheduler(observer)))));
        };
        return createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
            init(Disposable_mixin, instance);
            init(typedObserverMixin, instance, Observer_getScheduler(delegate));
            instance.delegate = delegate;
            instance.durationFunction = durationFunction;
            instance.mode = mode;
            instance.durationSubscription = pipe(DisposableRef_create(Disposable_disposed), Disposable_addTo(delegate));
            instance.onNotify = (_) => {
                if (instance.hasValue) {
                    const value = instance.value;
                    instance.value = none;
                    instance.hasValue = false;
                    instance.delegate[SinkLike_notify](value);
                    setupDurationSubscription(instance, value);
                }
            };
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (instance.mode !== "first" &&
                    instance.hasValue &&
                    !Disposable_isDisposed(delegate)) {
                    pipe([instance.value], ReadonlyArray_toRunnableObservable(), ReactiveContainer_sinkInto(delegate));
                }
            }));
            return instance;
        }, props({
            delegate: none,
            value: none,
            hasValue: false,
            durationSubscription: none,
            durationFunction: none,
            mode: "interval",
            onNotify: none,
        }), {
            [SinkLike_notify](next) {
                this.value = next;
                this.hasValue = true;
                const durationSubscriptionDisposableIsDisposed = this.durationSubscription[MutableRefLike_current][DisposableLike_isDisposed];
                if (durationSubscriptionDisposableIsDisposed &&
                    this.mode !== "last") {
                    this.onNotify();
                }
                else if (durationSubscriptionDisposableIsDisposed) {
                    setupDurationSubscription(this, next);
                }
            },
        }));
    })();
    return (duration, options = {}) => {
        const { mode = "interval" } = options;
        const durationFunction = isNumber(duration)
            ? (_) => pipe([none], ReadonlyArray_toRunnableObservable({
                delay: duration,
                delayStart: true,
            }))
            : duration;
        return pipe(createThrottleObserver, partial(durationFunction, mode), Observable_lift(false, isNumber(duration)));
    };
})();

export { Observable_throttle as default };
