/// <reference types="./Observable.latest.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allArePure from "./Observable.allArePure.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const zipMode = 2;
const Observable_latest = /*@__PURE__*/ (() => {
    const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
    const LatestCtx_delegate = Symbol("LatestCtx_delegate");
    const LatestCtx_mode = Symbol("LatestCtx_mode");
    const LatestCtx_observers = Symbol("LatestCtx_observers");
    const onCompleted = (instance) => () => {
        instance[LatestCtx_completedCount]++;
        if (instance[LatestCtx_completedCount] ===
            instance[LatestCtx_observers].length) {
            instance[LatestCtx_delegate][DisposableLike_dispose]();
        }
    };
    const LatestObserver_ctx = Symbol("LatestObserver_ctx");
    const LatestObserver_latest = Symbol("LatestObserver_latest");
    const LatestObserver_ready = Symbol("LatestObserver_ready");
    const createLatestObserver = createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function LatestObserver(instance, ctx, delegate) {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[LatestObserver_ctx] = ctx;
        return instance;
    }, props({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            const { [LatestObserver_ctx]: ctx } = this;
            this[LatestObserver_latest] = next;
            this[LatestObserver_ready] = true;
            const { [LatestCtx_mode]: mode, [LatestCtx_observers]: observers } = ctx;
            const isReady = observers.every(x => x[LatestObserver_ready]);
            if (isReady) {
                const result = pipe(observers, ReadonlyArray.map(observer => observer[LatestObserver_latest]));
                ctx[LatestCtx_delegate][SinkLike_notify](result);
                if (mode === zipMode) {
                    for (const sub of observers) {
                        sub[LatestObserver_ready] = false;
                        sub[LatestObserver_latest] = none;
                    }
                }
            }
        },
    }));
    return (observables, mode) => {
        const onSubscribe = (delegate) => {
            const ctx = {
                [LatestCtx_completedCount]: 0,
                [LatestCtx_observers]: [],
                [LatestCtx_delegate]: delegate,
                [LatestCtx_mode]: mode,
            };
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(ctx, delegate), Disposable.onComplete(onCompleted(ctx)));
                ctx[LatestCtx_observers].push(innerObserver);
                observable[ObservableLike_observe](innerObserver);
            }
        };
        const isDeferred = Observable_allAreDeferred(observables);
        const isPure = Observable_allArePure(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return Observable_createWithConfig(onSubscribe, {
            [ObservableLike_isDeferred]: isDeferred || (!isDeferred && !isPure && !isRunnable),
            [ObservableLike_isPure]: isPure,
            [ObservableLike_isRunnable]: isRunnable,
        });
    };
})();
export default Observable_latest;
