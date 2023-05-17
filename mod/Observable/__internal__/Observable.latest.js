/// <reference types="./Observable.latest.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __LatestCtx_completedCount, __LatestCtx_delegate, __LatestCtx_mode, __LatestCtx_observers, __LatestObserver_ctx, __LatestObserver_latest, __LatestObserver_ready, } from "../../__internal__/symbols.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, SinkLike_notify, } from "../../types.js";
import Observable_allAreDeferred from "./Observable.allAreDeferred.js";
import Observable_allAreEnumerable from "./Observable.allAreEnumerable.js";
import Observable_allAreRunnable from "./Observable.allAreRunnable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const zipMode = 2;
const Observable_latest = /*@__PURE__*/ (() => {
    const onCompleted = (instance) => () => {
        instance[__LatestCtx_completedCount]++;
        if (instance[__LatestCtx_completedCount] ===
            ReadonlyArray_getLength(instance[__LatestCtx_observers])) {
            instance[__LatestCtx_delegate][DisposableLike_dispose]();
        }
    };
    const createLatestObserver = createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function LatestObserver(instance, ctx, delegate) {
        init(Disposable_mixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[__LatestObserver_ctx] = ctx;
        return instance;
    }, props({
        [__LatestObserver_ready]: false,
        [__LatestObserver_latest]: none,
        [__LatestObserver_ctx]: none,
    }), {
        [SinkLike_notify](next) {
            Observer_assertState(this);
            const { [__LatestObserver_ctx]: ctx } = this;
            this[__LatestObserver_latest] = next;
            this[__LatestObserver_ready] = true;
            const { [__LatestCtx_mode]: mode, [__LatestCtx_observers]: observers, } = ctx;
            const isReady = observers.every(x => x[__LatestObserver_ready]);
            if (isReady) {
                const result = pipe(observers, ReadonlyArray_map(observer => observer[__LatestObserver_latest]));
                ctx[__LatestCtx_delegate][SinkLike_notify](result);
                if (mode === zipMode) {
                    for (const sub of observers) {
                        sub[__LatestObserver_ready] = false;
                        sub[__LatestObserver_latest] = none;
                    }
                }
            }
        },
    }));
    return (observables, mode) => {
        const onSubscribe = (delegate) => {
            const ctx = {
                [__LatestCtx_completedCount]: 0,
                [__LatestCtx_observers]: [],
                [__LatestCtx_delegate]: delegate,
                [__LatestCtx_mode]: mode,
            };
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(ctx, delegate), Disposable_onComplete(onCompleted(ctx)));
                ctx[__LatestCtx_observers].push(innerObserver);
                observable[ObservableLike_observe](innerObserver);
            }
        };
        const isDeferred = Observable_allAreDeferred(observables);
        const isEnumerable = Observable_allAreEnumerable(observables);
        const isRunnable = Observable_allAreRunnable(observables);
        return Observable_createWithConfig(onSubscribe, {
            [ObservableLike_isDeferred]: isDeferred,
            [ObservableLike_isEnumerable]: isEnumerable,
            [ObservableLike_isRunnable]: isRunnable,
        });
    };
})();
export default Observable_latest;
