import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";

import Stream_mixin from "./Stream.mixin.js";

const Stream_create = /*@__PURE__*/ (() => {
  const createStreamInternal: <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    replay: number,
    maxBufferSize: number,
  ) => StreamLike<TReq, T> = createInstanceFactory(Stream_mixin());

  return <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number; readonly maxBufferSize?: number },
  ): StreamLike<TReq, T> => {
    const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options ?? {};
    return createStreamInternal(
      op as ContainerOperator<ObservableLike, unknown, unknown>,
      scheduler,
      replay,
      maxBufferSize,
    );
  };
})();

export default Stream_create;
