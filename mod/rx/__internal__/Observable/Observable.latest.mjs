/// <reference types="./Observable.latest.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observer_getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_notify from '../Sink/Sink.notify.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable_allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable_allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable_create from './Observable.create.mjs';

const zipMode = 2;
const Observable_latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const add = (instance, observer) => {
        instance.observers.push(observer);
    };
    const onNotify = (instance) => {
        const { mode, observers } = instance;
        const isReady = observers.every(x => x.ready);
        if (isReady) {
            const result = pipe(observers, ReadonlyArray_map(observer => observer.latest));
            pipe(instance.delegate, Sink_notify(result));
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
            pipe(instance.delegate, Disposable_dispose());
        }
    };
    const createLatestObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_mixin), function LatestObserver(instance, scheduler, ctx) {
        init(Disposable_mixin, instance);
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
            const scheduler = Observer_getScheduler(delegate);
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(scheduler, ctx), Disposable_addTo(delegate), Disposable_onComplete(onCompleteCb), Sink_sourceFrom(observable));
                add(ctx, innerObserver);
            }
        };
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return Observable_create(onSink, isEnumerable, isRunnable);
    };
})();

export { Observable_latest as default };
