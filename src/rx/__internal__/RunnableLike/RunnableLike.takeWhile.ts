import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainerLike__takeWhile from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__takeWhileMixin from "../SinkLike/SinkLike.takeWhileMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeWhileSinkMixin = SinkLike__takeWhileMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeWhileSinkMixin),
      StatefulContainerLike__takeWhile<RunnableLike, T, TReactive>(
        RunnableLike__liftT,
      ),
    );
  })();

export default RunnableLike__takeWhile;
