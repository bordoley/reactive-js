import { createInstanceFactory } from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainerLike__distinctUntilChanged from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__distinctUntilChangedMixin from "../SinkLike/SinkLike.distinctUntilChangedMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      SinkLike__distinctUntilChangedMixin<T>();

    return pipe(
      createInstanceFactory(typedDistinctUntilChangedSinkMixin),
      StatefulContainerLike__distinctUntilChanged<RunnableLike, T, TReactive>(
        RunnableLike__liftT,
      ),
    );
  })();

export default RunnableLike__distinctUntilChanged;
