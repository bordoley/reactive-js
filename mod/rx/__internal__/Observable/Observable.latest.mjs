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
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable_allAreEnumerable from './Observable.allAreEnumerable.mjs';
import Observable_allAreRunnable from './Observable.allAreRunnable.mjs';
import Observable_create from './Observable.create.mjs';

const zipMode = 2;
const Observable_latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = Observer_mixin();
    const LatestCtx_delegate = Symbol("LatestCtx_delegate");
    const LatestCtx_mode = Symbol("LatestCtx_mode");
    const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
    const LatestCtx_observers = Symbol("LatestCtx_observers");
    const add = (instance, observer) => {
        instance[LatestCtx_observers].push(observer);
    };
    const onNotify = (instance) => {
        const { [LatestCtx_mode]: mode, [LatestCtx_observers]: observers } = instance;
        const isReady = observers.every(x => x[LatestObserver_ready]);
        if (isReady) {
            const result = pipe(observers, ReadonlyArray_map(observer => observer[LatestObserver_latest]));
            instance[LatestCtx_delegate][SinkLike_notify](result);
            if (mode === zipMode) {
                for (const sub of observers) {
                    sub[LatestObserver_ready] = false;
                    sub[LatestObserver_latest] = none;
                }
            }
        }
    };
    const onCompleted = (instance) => {
        instance[LatestCtx_completedCount]++;
        if (instance[LatestCtx_completedCount] ===
            getLength(instance[LatestCtx_observers])) {
            pipe(instance[LatestCtx_delegate], Disposable_dispose());
        }
    };
    const LatestObserver_ready = Symbol("LatestObserver_ready");
    const LatestObserver_latest = Symbol("LatestObserver_latest");
    const LatestObserver_ctx = Symbol("LatestObserver_ctx");
    const createLatestObserver = createInstanceFactory(mix(include(typedObserverMixin, Disposable_mixin), function LatestObserver(instance, scheduler, ctx) {
        init(Disposable_mixin, instance);
        init(typedObserverMixin, instance, scheduler);
        instance[LatestObserver_ctx] = ctx;
        return instance;
    }, props({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
    }), {
        [SinkLike_notify](next) {
            const { [LatestObserver_ctx]: ctx } = this;
            this[LatestObserver_latest] = next;
            this[LatestObserver_ready] = true;
            onNotify(ctx);
        },
    }));
    return (observables, mode) => {
        const onSink = (delegate) => {
            const ctx = {
                [LatestCtx_completedCount]: 0,
                [LatestCtx_observers]: [],
                [LatestCtx_delegate]: delegate,
                [LatestCtx_mode]: mode,
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
