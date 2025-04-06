import {
  AsyncIterableLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike_subscribe,
  ProducerLike,
} from "../../../computations.js";
import { Optional, newInstance, pipe, returns } from "../../../functions.js";
import * as ConsumableEnumerator from "../../../utils/__internal__/ConsumableEnumerator.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { ThrowBackpressureStrategy } from "../../../utils.js";
import type * as Producer from "../../Producer.js";

class ProducerToAsyncIterable<T> implements AsyncIterableLike<T> {
  readonly [ComputationLike_isDeferred]: true = true as const;
  readonly [ComputationLike_isSynchronous]: false = false as const;

  readonly [ComputationLike_isPure]: false | Optional<true>;

  constructor(private p: ProducerLike<T>) {
    this[ComputationLike_isPure] = p[ComputationLike_isPure];
  }

  [Symbol.asyncIterator](): AsyncIterator<T, any, any> {
    const consumer = Consumer.createWithFlowControl<T>({
      backpressureStrategy: ThrowBackpressureStrategy,
      capacity: 1,
    });

    this.p[EventSourceLike_subscribe](consumer);

    return pipe(consumer, ConsumableEnumerator.toAsyncIterator());
  }
}

const Producer_toAsyncIterable: Producer.Signature["toAsyncIterable"] =
  /*@__PURE__*/
  returns(producer =>
    newInstance(ProducerToAsyncIterable, producer),
  ) as Producer.Signature["toAsyncIterable"];

export default Producer_toAsyncIterable;
