import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Comparator } from "../../../functions.js";
import {
  QueueCollectionLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import PriorityQueueMixin from "../../__mixins__/PriorityQueueMixin.js";

const Queue_createPriorityQueue: <T>(
  comparator: Comparator<T>,
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => QueueCollectionLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(PriorityQueueMixin()))();

export default Queue_createPriorityQueue;
