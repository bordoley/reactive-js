import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  DeferredSideEffectsObservableLike,
  SchedulerLike,
  StreamLike,
} from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const Stream_create: <TReq, T>(
  op: Function1<
    DeferredSideEffectsObservableLike<TReq>,
    DeferredSideEffectsObservableLike<T>
  >,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly replay?: number;
    readonly capacity?: number;
  },
) => StreamLike<TReq, T> & DisposableLike = /*@__PURE__*/ (() =>
  createInstanceFactory(StreamMixin()))();

export default Stream_create;
