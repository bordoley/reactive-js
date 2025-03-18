/// <reference types="./Producer.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, } from "../computations.js";
import { bindMethod, error, newInstance, none, pipe, raise, returns, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackPressureError, ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../utils.js";
import * as EventSource from "./EventSource.js";
import * as Observable from "./Observable.js";
class CreateProducer {
    f;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(f) {
        this.f = f;
    }
    [ProducerLike_consume](consumer) {
        try {
            this.f(consumer);
        }
        catch (e) {
            consumer[DisposableLike_dispose](error(e));
        }
    }
}
export const create = f => newInstance(CreateProducer, f);
export const toEventSource = /*@__PURE__*/ (() => {
    const EventListenerToPauseableConsumer_delegate = Symbol("EventListenerToPauseableConsumer_delegate");
    const EventListenerToPauseableConsumer_mode = Symbol("EventListenerToPauseableConsumer_mode");
    const createPauseableConsumer = mixInstanceFactory(include(DelegatingDisposableMixin), function EventListenerToPauseableConsumer(listener, mode) {
        init(DelegatingDisposableMixin, this, listener);
        this[EventListenerToPauseableConsumer_delegate] = listener;
        this[EventListenerToPauseableConsumer_mode] = mode;
        pipe(mode, EventSource.addEventHandler(isPaused => {
            this[ConsumerLike_isReady] = !isPaused;
        }), Disposable.addTo(this));
        return this;
    }, props({
        [EventListenerToPauseableConsumer_delegate]: none,
        [EventListenerToPauseableConsumer_mode]: none,
        [SinkLike_isCompleted]: false,
        [ConsumerLike_isReady]: false,
    }), proto({
        [ConsumerLike_backpressureStrategy]: ThrowBackpressureStrategy,
        [ConsumerLike_capacity]: MAX_SAFE_INTEGER,
        [ConsumerLike_addOnReadyListener](callback) {
            return pipe(this[EventListenerToPauseableConsumer_mode], EventSource.addEventHandler(isPaused => {
                if (!isPaused) {
                    callback();
                }
            }), Disposable.addTo(this));
        },
        [EventListenerLike_notify](next) {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            else if (!this[ConsumerLike_isReady]) {
                raise(newInstance(BackPressureError, this));
            }
            this[EventListenerToPauseableConsumer_delegate][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[SinkLike_isCompleted] = true;
            this[DisposableLike_dispose]();
        },
    }));
    return returns((producer) => EventSource.createPauseable(mode => pipe(EventSource.create(listener => {
        const consumer = createPauseableConsumer(listener, mode);
        producer[ProducerLike_consume](consumer);
    }), Disposable.bindTo(mode))));
})();
export const toObservable = /*@__PURE__*/ returns((producer) => Observable.create(bindMethod(producer, ProducerLike_consume)));
