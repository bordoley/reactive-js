/// <reference types="./EventSource.latest.d.ts" />

import { Array_every, Array_length, Array_push, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { EventSourceLike_addEventListener, } from "../../../computations.js";
import { none, pick, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const zipMode = 2;
const EventSource_latest = /*@__PURE__*/ (() => {
    const LatestCtx_completedCount = Symbol("LatestCtx_completedCount");
    const LatestCtx_delegate = Symbol("LatestCtx_delegate");
    const LatestCtx_mode = Symbol("LatestCtx_mode");
    const LatestCtx_eventListeners = Symbol("LatestCtx_eventListeners");
    function onLatestEventListenerCompleted() {
        const ctx = this[LatestEventListener_ctx];
        ctx[LatestCtx_completedCount]++;
        if (ctx[LatestCtx_completedCount] ===
            ctx[LatestCtx_eventListeners][Array_length]) {
            ctx[LatestCtx_delegate][DisposableLike_dispose]();
        }
    }
    const LatestEventListener_ctx = Symbol("LatestEventListener_ctx");
    const LatestEventListener_latest = Symbol("LatestEventListener_latest");
    const LatestEventListener_ready = Symbol("LatestEventListener_ready");
    const createLatestEventListener = mixInstanceFactory(include(DisposableMixin), function LatestEventListener(ctx) {
        init(DisposableMixin, this);
        this[LatestEventListener_ctx] = ctx;
        pipe(this, DisposableContainer.onComplete(onLatestEventListenerCompleted));
        return this;
    }, props({
        [LatestEventListener_ready]: false,
        [LatestEventListener_latest]: none,
        [LatestEventListener_ctx]: none,
    }), {
        [EventListenerLike_notify](next) {
            const ctx = this[LatestEventListener_ctx];
            const mode = ctx[LatestCtx_mode];
            const EventListeners = ctx[LatestCtx_eventListeners];
            this[LatestEventListener_latest] = next;
            this[LatestEventListener_ready] = true;
            const isReady = EventListeners[Array_every](pick(LatestEventListener_ready));
            if (isReady) {
                const result = pipe(EventListeners, ReadonlyArray.map(pick(LatestEventListener_latest)));
                ctx[LatestCtx_delegate][EventListenerLike_notify](result);
                if (mode === zipMode) {
                    for (const sub of EventListeners) {
                        sub[LatestEventListener_ready] = false;
                        sub[LatestEventListener_latest] = none;
                    }
                }
            }
        },
    });
    return (eventSources, mode) => {
        const onSubscribe = (delegate) => {
            const ctx = {
                [LatestCtx_completedCount]: 0,
                [LatestCtx_eventListeners]: [],
                [LatestCtx_delegate]: delegate,
                [LatestCtx_mode]: mode,
            };
            for (const observable of eventSources) {
                const innerEventListener = pipe(createLatestEventListener(ctx), Disposable.addTo(delegate));
                ctx[LatestCtx_eventListeners][Array_push](innerEventListener);
                observable[EventSourceLike_addEventListener](innerEventListener);
            }
        };
        return EventSource_create(onSubscribe);
    };
})();
export default EventSource_latest;
