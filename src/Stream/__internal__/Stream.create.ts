import { createInstanceFactory } from "../../__internal__/mixins.js";
import { Container, DeferredObservableContainer } from "../../containers.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
  StreamLike,
} from "../../types.js";

import Stream_mixin from "./Stream.mixin.js";

const Stream_create: <TReq, T>(
  op: Container.Operator<DeferredObservableContainer.Type, TReq, T>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
  },
) => StreamLike<TReq, T> & DisposableLike = /*@__PURE__*/ (() =>
  createInstanceFactory(Stream_mixin()))();

export default Stream_create;
