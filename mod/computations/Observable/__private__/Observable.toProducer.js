/// <reference types="./Observable.toProducer.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike_observe, ProducerLike_consume, } from "../../../computations.js";
import { newInstance, pipe } from "../../../functions.js";
import * as Consumer from "../../../utils/Consumer.js";
import * as Computation from "../../Computation.js";
const Observable_toProducer = 
/*@__PURE__*/ (() => {
    class ProducerFromObservable {
        o;
        s;
        [ComputationLike_isPure];
        [ComputationLike_isDeferred];
        [ComputationLike_isSynchronous];
        constructor(o, s) {
            this.o = o;
            this.s = s;
            this[ComputationLike_isPure] = Computation.isPure(o);
            this[ComputationLike_isSynchronous] = Computation.isSynchronous(o);
        }
        [ProducerLike_consume](consumer) {
            const observer = pipe(consumer, Consumer.toObserver(this.s));
            this.o[ObservableLike_observe](observer);
        }
    }
    return (scheduler) => (observable) => newInstance(ProducerFromObservable, observable, scheduler);
})();
export default Observable_toProducer;
