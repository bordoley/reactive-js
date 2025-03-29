import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  RunnableLike_eval,
} from "../../../computations.js";
import { returns } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Runnable_toProducer: Runnable.Signature["toProducer"] =
  /*@__PURE__*/ returns(runnable =>
    DeferredSource.create(
      async (consumer: ConsumerLike) => {
        await Promise.resolve();

        // Note: Generally speaking one should not convert a runnable
        // to a non synchronous source since it is evaluated synchronously
        // as a firehose. You might think well can't we just queue up
        // promises, but in doing so you'd potentially cause a memory
        // explosion on the microtask queue, so instead we simply
        // callback synchronously to the consumer.
        runnable[RunnableLike_eval](consumer);
      },
      {
        [ComputationLike_isPure]: runnable[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
      },
    ),
  ) as Runnable.Signature["toProducer"];

export default Runnable_toProducer;
