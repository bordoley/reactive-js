/// <reference types="./Producer.toAsyncIterable.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../../computations.js";
import { newInstance, pipe, returns } from "../../../functions.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ThrowBackpressureStrategy } from "../../../utils.js";
class ProducerToAsyncIterable {
    p;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(p) {
        this.p = p;
        this[ComputationLike_isPure] = p[ComputationLike_isPure];
    }
    [Symbol.asyncIterator]() {
        const consumer = Consumer.createWithFlowControl({
            backpressureStrategy: ThrowBackpressureStrategy,
            capacity: 1,
        });
        this.p[EventSourceLike_subscribe](consumer);
        return pipe(consumer, AsyncIterator.fromAsyncEnumerator());
    }
}
const Producer_toAsyncIterable = 
/*@__PURE__*/
returns(producer => newInstance(ProducerToAsyncIterable, producer));
export default Producer_toAsyncIterable;
