import { createInstanceFactory } from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainerLike__throwIfEmpty from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__throwIfEmptyMixin from "../SinkLike/SinkLike.throwIfEmptyMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin<T>();
    return pipe(
      createInstanceFactory(typedThrowIfEmptySinkMixin),
      StatefulContainerLike__throwIfEmpty<RunnableLike, T, TReactive>(
        RunnableLike__liftT,
      ),
    );
  })();

export default RunnableLike__throwIfEmpty;
