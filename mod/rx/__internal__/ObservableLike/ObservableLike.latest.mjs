/// <reference types="./ObservableLike.latest.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onComplete from '../../../util/__internal__/DisposableLike/DisposableLike.onComplete.mjs';
import ObserverLike__getScheduler from '../ObserverLike/ObserverLike.getScheduler.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import SinkLike__notify from '../SinkLike/SinkLike.notify.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';
import ObservableLike__allAreEnumerable from './ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './ObservableLike.allAreRunnable.mjs';
import ObservableLike__create from './ObservableLike.create.mjs';

const zipMode = 2;
const ObservableLike__latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const add = (instance, observer) => {
        instance.observers.push(observer);
    };
    const onNotify = (instance) => {
        const { mode, observers } = instance;
        const isReady = observers.every(x => x.ready);
        if (isReady) {
            const result = pipe(observers, ReadonlyArrayLike__map(observer => observer.latest));
            pipe(instance.delegate, SinkLike__notify(result));
            if (mode === zipMode) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
            }
        }
    };
    const onCompleted = (instance) => {
        instance.completedCount++;
        if (instance.completedCount === getLength(instance.observers)) {
            pipe(instance.delegate, DisposableLike__dispose());
        }
    };
    const createLatestObserver = createInstanceFactory(mix(include(typedObserverMixin, DisposableLike__mixin), function LatestObserver(instance, scheduler, ctx) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, scheduler);
        instance.ctx = ctx;
        return instance;
    }, props({
        ready: false,
        latest: none,
        ctx: none,
    }), {
        [SinkLike_notify](next) {
            const { ctx } = this;
            this.latest = next;
            this.ready = true;
            onNotify(ctx);
        },
    }));
    return (observables, mode) => {
        const onSink = (delegate) => {
            const ctx = {
                completedCount: 0,
                observers: [],
                delegate,
                mode,
            };
            const onCompleteCb = () => {
                onCompleted(ctx);
            };
            const scheduler = ObserverLike__getScheduler(delegate);
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(scheduler, ctx), DisposableLike__addTo(delegate), DisposableLike__onComplete(onCompleteCb), SinkLike__sourceFrom(observable));
                add(ctx, innerObserver);
            }
        };
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return ObservableLike__create(onSink, isEnumerable, isRunnable);
    };
})();

export { ObservableLike__latest as default };
