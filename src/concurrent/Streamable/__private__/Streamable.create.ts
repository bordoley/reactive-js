import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  DeferredObservableLike,
  PureDeferredObservableLike,
  SchedulerLike,
  StreamLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Streamable from "../../Streamable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const Stream_create: <TReq, T>(
  op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>,
  scheduler: SchedulerLike,
  options?: {
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly replay?: number;
    readonly capacity?: number;
  },
) => StreamLike<TReq, T> = /*@__PURE__*/ (<TReq, T>() =>
  createInstanceFactory(StreamMixin<TReq, T>()))();

const Streamable_create: Streamable.Signature["create"] = <TReq, T>(
  op: Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>,
) => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Stream_create<TReq, T>(op, scheduler, options),
});

export default Streamable_create;
