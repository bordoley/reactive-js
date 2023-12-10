import { createInstanceFactory } from "../__internal__/mixins.js";
import { Comparator } from "../functions.js";
import {
  QueueCollectionLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";

export const create: <T>(
  comparator: Comparator<T>,
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => QueueCollectionLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(PriorityQueueMixin()))();
