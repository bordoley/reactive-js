import { createInstanceFactory } from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainerLike__forEach from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__forEachMixin from "../SinkLike/SinkLike.forEachMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__forEach: ForEach<RunnableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = SinkLike__forEachMixin<T>();

  return pipe(
    createInstanceFactory(typedForEachSinkMixin),
    StatefulContainerLike__forEach<RunnableLike, T, TReactive>(
      RunnableLike__liftT,
    ),
  );
})();

export default RunnableLike__forEach;
