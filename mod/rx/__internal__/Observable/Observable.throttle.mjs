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
        const ThrottleObserver_delegate = Symbol("ThrottleObserver_delegate");
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
            instance[ThrottleObserver_delegate] = delegate;
            instance[ThrottleObserver_durationFunction] = durationFunction;
            instance[ThrottleObserver_mode] = mode;
            instance[ThrottleObserver_durationSubscription] = pipe(DisposableRef_create(Disposable_disposed), Disposable_addTo(delegate));
            instance[ThrottleObserver_onNotify] = (_) => {
                if (instance[ThrottleObserver_hasValue]) {
                    const value = instance[ThrottleObserver_value];
                    instance[ThrottleObserver_value] = none;
                    instance[ThrottleObserver_hasValue] = false;
                    instance[ThrottleObserver_delegate][SinkLike_notify](value);
                    setupDurationSubscription(instance, value);
                }
            };
            pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
                if (instance[ThrottleObserver_mode] !== "first" &&
                    instance[ThrottleObserver_hasValue] &&
                    !Disposable_isDisposed(delegate)) {
                    pipe([instance[ThrottleObserver_value]], ReadonlyArray_toRunnableObservable(), ReactiveContainer_sinkInto(delegate));
                }
            }));
            return instance;
        }, props({
            [ThrottleObserver_delegate]: none,
            [ThrottleObserver_value]: none,
            [ThrottleObserver_hasValue]: false,
            [ThrottleObserver_durationSubscription]: none,
            [ThrottleObserver_durationFunction]: none,
            [ThrottleObserver_mode]: "interval",
            [ThrottleObserver_onNotify]: none,
        }), {
            [SinkLike_notify](next) {
                this[ThrottleObserver_value] = next;
                this[ThrottleObserver_hasValue] = true;
                const durationSubscriptionDisposableIsDisposed = this[ThrottleObserver_durationSubscription][MutableRefLike_current][DisposableLike_isDisposed];
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
