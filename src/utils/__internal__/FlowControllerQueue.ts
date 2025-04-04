import {
  include,
  init,
  mixInstanceFactory,
} from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, FlowControllerQueueLike } from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControllerQueueMixin from "../__mixins__/FlowControllerQueueMixin.js";

export const create: <T>(options?: {
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}) => FlowControllerQueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, FlowControllerQueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
      }>,
    ): FlowControllerQueueLike<T> {
      init(DisposableMixin, this);
      init(FlowControllerQueueMixin<T>(), this, options);

      return this;
    },
  ))();
