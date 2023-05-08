import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  BufferLike_capacity,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../core.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_create: <T>(
  scheduler: SchedulerLike,
  config: {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  },
) => ObserverLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(Observer_mixin()))();

export default Observer_create;
