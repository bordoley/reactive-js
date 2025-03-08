/// <reference types="./Observable.latest.d.ts" />

import { Array_every, Array_length, Array_push, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import DelegatingObserverMixin from "../../../computations/__mixins__/DelegatingObserverMixin.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, ObserverLike_notify, } from "../../../computations.js";
import { none, pick, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const zipMode = 2;
const Observable_latest = /*@__PURE__*/ (() => {
    const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
    const LatestCtx_delegate = Symbol("LatestCtx_delegate");
    const LatestCtx_mode = Symbol("LatestCtx_mode");
    const LatestCtx_observers = Symbol("LatestCtx_observers");
    function onLatestObserverCompleted() {
        const ctx = this[LatestObserver_ctx];
        ctx[LatestCtx_completedCount]++;
        if (ctx[LatestCtx_completedCount] === ctx[LatestCtx_observers][Array_length]) {
            ctx[LatestCtx_delegate][DisposableLike_dispose]();
        }
    }
    const LatestObserver_ctx = Symbol("LatestObserver_ctx");
    const LatestObserver_latest = Symbol("LatestObserver_latest");
    const LatestObserver_ready = Symbol("LatestObserver_ready");
    const createLatestObserver = mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function LatestObserver(instance, ctx, delegate) {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);
        instance[LatestObserver_ctx] = ctx;
        pipe(instance, DisposableContainer.onComplete(onLatestObserverCompleted));
        return instance;
    }, props({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            const ctx = this[LatestObserver_ctx];
            const mode = ctx[LatestCtx_mode];
            const observers = ctx[LatestCtx_observers];
            this[LatestObserver_latest] = next;
            this[LatestObserver_ready] = true;
            const isReady = observers[Array_every](pick(LatestObserver_ready));
            if (isReady) {
                const result = pipe(observers, ReadonlyArray.map(pick(LatestObserver_latest)));
                ctx[LatestCtx_delegate][ObserverLike_notify](result);
                if (mode === zipMode) {
                    for (const sub of observers) {
                        sub[LatestObserver_ready] = false;
                        sub[LatestObserver_latest] = none;
                    }
                }
            }
        }),
    });
    return (observables, mode) => {
        const onSubscribe = (delegate) => {
            const ctx = {
                [LatestCtx_completedCount]: 0,
                [LatestCtx_observers]: [],
                [LatestCtx_delegate]: delegate,
                [LatestCtx_mode]: mode,
            };
            for (const observable of observables) {
                const innerObserver = createLatestObserver(ctx, delegate);
                ctx[LatestCtx_observers][Array_push](innerObserver);
                observable[ObservableLike_observe](innerObserver);
            }
        };
        const isPure = Computation.areAllPure(observables);
        const isSynchronous = Computation.areAllSynchronous(observables);
        //const isMulticasted = Computation.areAllMulticasted(observables);
        return Observable_createWithConfig(onSubscribe, {
            [ComputationLike_isPure]: isPure,
            [ComputationLike_isSynchronous]: isSynchronous,
        });
    };
})();
export default Observable_latest;
