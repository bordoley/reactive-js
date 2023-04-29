import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";

import Stream_mixin from "./Stream.mixin.js";

const Stream_create: <TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
  },
) => StreamLike<TReq, T> & DisposableLike = /*@__PURE__*/ (() =>
  createInstanceFactory(Stream_mixin()))();

export default Stream_create;
