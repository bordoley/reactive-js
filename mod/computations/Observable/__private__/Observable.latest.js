/// <reference types="./Observable.latest.d.ts" />

import { Array_every, Array_length, Array_push, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as Computation from "../../../computations/Computation.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../../computations.js";
import { none, pick, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_complete, LiftedObserverLike_notify, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { SinkLike_complete, SinkLike_next, } from "../../../utils.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const zipMode = 2;
const Observable_latest = /*@__PURE__*/ (() => {
    const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
    const LatestCtx_delegate = Symbol("LatestCtx_delegate");
    const LatestCtx_mode = Symbol("LatestCtx_mode");
    const LatestCtx_observers = Symbol("LatestCtx_observers");
    const LatestObserver_ctx = Symbol("LatestObserver_ctx");
    const LatestObserver_latest = Symbol("LatestObserver_latest");
    const LatestObserver_ready = Symbol("LatestObserver_ready");
    const createLatestObserver = mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function LatestObserver(ctx, delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        this[LatestObserver_ctx] = ctx;
        return this;
    }, props({
        [LatestObserver_ready]: false,
        [LatestObserver_latest]: none,
        [LatestObserver_ctx]: none,
    }), proto({
        [LiftedObserverLike_notify](next) {
            const ctx = this[LatestObserver_ctx];
            const mode = ctx[LatestCtx_mode];
            const observers = ctx[LatestCtx_observers];
            this[LatestObserver_latest] = next;
            this[LatestObserver_ready] = true;
            const isReady = observers[Array_every](pick(LatestObserver_ready));
            if (isReady) {
                const value = pipe(observers, ReadonlyArray.map(pick(LatestObserver_latest)));
                ctx[LatestCtx_delegate][SinkLike_next](value);
                if (mode === zipMode) {
                    for (const sub of observers) {
                        sub[LatestObserver_ready] = false;
                        sub[LatestObserver_latest] = none;
                    }
                }
            }
        },
        [LiftedObserverLike_complete]() {
            const ctx = this[LatestObserver_ctx];
            ctx[LatestCtx_completedCount]++;
            if (ctx[LatestCtx_completedCount] ===
                ctx[LatestCtx_observers][Array_length]) {
                ctx[LatestCtx_delegate][SinkLike_complete]();
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
