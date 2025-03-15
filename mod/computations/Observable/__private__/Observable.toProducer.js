/// <reference types="./Observable.toProducer.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, ProducerLike_consume, } from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { EventListenerLike_notify, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
const Observable_toProducer = 
/*@__PURE__*/ (() => {
    const ProducerConsumerObserver_consumer = Symbol("ProducerConsumerObserver_consumer");
    const createProducerConsumerObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSchedulerMixin), function ProducerConsumerObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        this[ProducerConsumerObserver_consumer] = consumer;
        return this;
    }, props({
        [ProducerConsumerObserver_consumer]: none,
    }), proto({
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[ProducerConsumerObserver_consumer][QueueableLike_capacity];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[ProducerConsumerObserver_consumer][QueueableLike_backpressureStrategy];
        },
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[ProducerConsumerObserver_consumer][SinkLike_isCompleted];
        },
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[ProducerConsumerObserver_consumer][QueueableLike_isReady];
        },
        [QueueableLike_addOnReadyListener](callback) {
            return this[ProducerConsumerObserver_consumer][QueueableLike_addOnReadyListener](callback);
        },
        [EventListenerLike_notify](next) {
            this[ProducerConsumerObserver_consumer][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[ProducerConsumerObserver_consumer][SinkLike_complete]();
        },
    }));
    class Producer {
        o;
        s;
        [ComputationLike_isDeferred] = true;
        [ComputationLike_isSynchronous] = false;
        [ComputationLike_isPure];
        constructor(o, s) {
            this.o = o;
            this.s = s;
            this[ComputationLike_isPure] = Computation.isPure(o);
        }
        [ProducerLike_consume](consumer) {
            const observer = createProducerConsumerObserver(this.s, consumer);
            this.o[ObservableLike_observe](observer);
        }
    }
    return (scheduler) => (observable) => newInstance(Producer, observable, scheduler);
})();
export default Observable_toProducer;
