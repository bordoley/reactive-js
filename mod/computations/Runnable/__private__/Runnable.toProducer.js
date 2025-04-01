/// <reference types="./Runnable.toProducer.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { returns } from "../../../functions.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Runnable_toProducer = 
/*@__PURE__*/ returns(runnable => DeferredReactiveSource.create(async (consumer) => {
    await Promise.resolve();
    // Note: Generally speaking one should not convert a runnable
    // to a non synchronous source since it is evaluated synchronously
    // as a firehose. You might think well can't we just queue up
    // promises, but in doing so you'd potentially cause a memory
    // explosion on the microtask queue, so instead we simply
    // callback synchronously to the consumer.
    runnable[RunnableLike_eval](consumer);
}, {
    [ComputationLike_isPure]: runnable[ComputationLike_isPure],
    [ComputationLike_isSynchronous]: false,
}));
export default Runnable_toProducer;
