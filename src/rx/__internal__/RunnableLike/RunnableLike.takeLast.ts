import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import StatefulContainerLike__takeLast from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import SinkLike__takeLastMixin from "../SinkLike/SinkLike.takeLastMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__takeLast: TakeLast<RunnableLike>["takeLast"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeLastSinkMixin = SinkLike__takeLastMixin<
      RunnableLike<T>,
      SinkLike<T>,
      T
    >(ReadonlyArrayLike__toRunnable());

    return pipe(
      createInstanceFactory(typedTakeLastSinkMixin),
      StatefulContainerLike__takeLast<RunnableLike, T, TReactive>(
        RunnableLike__liftT,
      ),
    );
  })();

export default RunnableLike__takeLast;
