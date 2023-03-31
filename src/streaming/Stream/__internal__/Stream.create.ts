import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";

import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Stream_mixin from "./Stream.mixin.js";

const Stream_create = /*@__PURE__*/ (() => {
  const createStreamInternal: <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    replay: number,
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ) => StreamLike<TReq, T> = createInstanceFactory(Stream_mixin());

  return <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly replay?: number;
      readonly capacity?: number;
    },
  ): StreamLike<TReq, T> => {
    const {
      backpressureStrategy = "overflow",
      capacity = MAX_SAFE_INTEGER,
      replay = 0,
    } = options ?? {};
    return createStreamInternal<TReq, T>(
      op,
      scheduler,
      replay,
      capacity,
      backpressureStrategy,
    );
  };
})();

export default Stream_create;
