/// <reference types="./Observable.toProducer.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, ProducerLike_consume, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingQueueableMixin from "../../../utils/__mixins__/DelegatingQueueableMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import * as Computation from "../../Computation.js";
const Observable_toProducer = 
/*@__PURE__*/ (() => {
    const createProducerConsumerObserver = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, DelegatingQueueableMixin()), function ProducerConsumerObserver(scheduler, consumer) {
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(DelegatingQueueableMixin(), this, consumer);
        return this;
    });
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
