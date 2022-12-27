import { createInstanceFactory } from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { ObservableLike } from "../../../rx";
import { SchedulerLike } from "../../../scheduling";
import { StreamLike } from "../../../streaming";

import StreamLike__mixin from "./StreamLike.mixin";

const create = /*@__PURE__*/ (() => {
  const createStreamInternal: <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    replay: number,
  ) => StreamLike<TReq, T> = createInstanceFactory(StreamLike__mixin());

  return <TReq, T>(
    op: ContainerOperator<ObservableLike, TReq, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, T> => {
    const { replay = 0 } = options ?? {};
    return createStreamInternal(
      op as ContainerOperator<ObservableLike, unknown, unknown>,
      scheduler,
      replay,
    );
  };
})();

export default create;
