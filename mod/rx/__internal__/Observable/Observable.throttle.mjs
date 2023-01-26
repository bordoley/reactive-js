/// <reference types="./Observable.throttle.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, none, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$disposed from '../../../util/__internal__/Disposable/Disposable.disposed.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DisposableRef$create from '../../../util/__internal__/DisposableRef/DisposableRef.create.mjs';
import MutableRef$get from '../../../util/__internal__/MutableRef/MutableRef.get.mjs';
import MutableRef$set from '../../../util/__internal__/MutableRef/MutableRef.set.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$lift from './Observable.lift.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$throttle = /*@__PURE__*/ (() => {
    const createThrottleObserver = (() => {
        const typedObserverMixin = Observer$mixin();
        const setupDurationSubscription = (observer, next) => {
            pipe(observer.durationSubscription, MutableRef$set(pipe(observer.durationFunction(next), Observable$forEach(observer.onNotify), Observable$subscribe(Observer$getScheduler(observer)))));
        };
        return createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
            init(Disposable$mixin, instance);
            init(typedObserverMixin, instance, Observer$getScheduler(delegate));
            instance.delegate = delegate;
            instance.durationFunction = durationFunction;
            instance.mode = mode;
            instance.durationSubscription = pipe(DisposableRef$create(Disposable$disposed), Disposable$addTo(delegate));
            instance.onNotify = (_) => {
                if (instance.hasValue) {
                    const value = instance.value;
                    instance.value = none;
                    instance.hasValue = false;
                    pipe(instance.delegate, Sink$notify(value));
                    setupDurationSubscription(instance, value);
                }
            };
            pipe(instance, Disposable$addTo(delegate), Disposable$onComplete(() => {
                if (instance.mode !== "first" &&
                    instance.hasValue &&
                    !Disposable$isDisposed(delegate)) {
                    pipe([instance.value], ReadonlyArray$toRunnableObservable(), ReactiveContainer$sinkInto(delegate));
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
                const durationSubscriptionDisposableIsDisposed = pipe(this.durationSubscription, MutableRef$get, Disposable$isDisposed);
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
            ? (_) => pipe([none], ReadonlyArray$toRunnableObservable({
                delay: duration,
                delayStart: true,
            }))
            : duration;
        return pipe(createThrottleObserver, partial(durationFunction, mode), Observable$lift(false, isNumber(duration)));
    };
})();

export { Observable$throttle as default };
