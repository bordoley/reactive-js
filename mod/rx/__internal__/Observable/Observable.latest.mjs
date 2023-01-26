/// <reference types="./Observable.latest.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe, none, getLength } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import Observer$getScheduler from '../Observer/Observer.getScheduler.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$notify from '../Sink/Sink.notify.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable$allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable$allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable$create from './Observable.create.mjs';

const zipMode = 2;
const Observable$latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer$mixin();
    const add = (instance, observer) => {
        instance.observers.push(observer);
    };
    const onNotify = (instance) => {
        const { mode, observers } = instance;
        const isReady = observers.every(x => x.ready);
        if (isReady) {
            const result = pipe(observers, ReadonlyArray$map(observer => observer.latest));
            pipe(instance.delegate, Sink$notify(result));
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
            pipe(instance.delegate, Disposable$dispose());
        }
    };
    const createLatestObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable$mixin), function LatestObserver(instance, scheduler, ctx) {
        init(Disposable$mixin, instance);
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
            const scheduler = Observer$getScheduler(delegate);
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(scheduler, ctx), Disposable$addTo(delegate), Disposable$onComplete(onCompleteCb), Sink$sourceFrom(observable));
                add(ctx, innerObserver);
            }
        };
        const isEnumerable = Observable$allAreEnumerable(observables);
        const isRunnable = Observable$allAreRunnable(observables);
        return Observable$create(onSink, isEnumerable, isRunnable);
    };
})();

export { Observable$latest as default };
