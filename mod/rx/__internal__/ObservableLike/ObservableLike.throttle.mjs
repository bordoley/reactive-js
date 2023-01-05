/// <reference types="./ObservableLike.throttle.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { createDisposableRef } from '../../../__internal__/util/DisposableRefLike.mjs';
import { setCurrentRef, getCurrentRef } from '../../../__internal__/util/MutableRefLike.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe, none, isNumber, partial } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__disposed from '../../../util/__internal__/DisposableLike/DisposableLike.disposed.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import { getScheduler } from '../../ObserverLike.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__notify from '../SinkLike/SinkLike.notify.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__throttle = /*@__PURE__*/ (() => {
    const createThrottleObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        const setupDurationSubscription = (observer, next) => {
            pipe(observer.durationSubscription, setCurrentRef(pipe(observer.durationFunction(next), ObservableLike__forEach(observer.onNotify), ObservableLike__subscribe(getScheduler(observer)))));
        };
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
            init(DisposableLike__mixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.durationFunction = durationFunction;
            instance.mode = mode;
            instance.durationSubscription = pipe(createDisposableRef(DisposableLike__disposed), DisposableLike__addTo(delegate));
            instance.onNotify = (_) => {
                if (instance.hasValue) {
                    const value = instance.value;
                    instance.value = none;
                    instance.hasValue = false;
                    pipe(instance.delegate, SinkLike__notify(value));
                    setupDurationSubscription(instance, value);
                }
            };
            pipe(instance, DisposableLike__addTo(delegate), DisposableLike__onComplete(() => {
                if (instance.mode !== "first" &&
                    instance.hasValue &&
                    !DisposableLike__isDisposed(delegate)) {
                    pipe([instance.value], ReadonlyArrayLike__toRunnableObservable(), sinkInto(delegate));
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
                const durationSubscriptionDisposableIsDisposed = pipe(this.durationSubscription, getCurrentRef, DisposableLike__isDisposed);
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
            ? (_) => pipe([none], ReadonlyArrayLike__toRunnableObservable({
                delay: duration,
                delayStart: true,
            }))
            : duration;
        return pipe(createThrottleObserver, partial(durationFunction, mode), ObservableLike__lift(false, isNumber(duration)));
    };
})();

export { ObservableLike__throttle as default };
