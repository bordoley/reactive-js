import { createInstanceFactory } from "../../../__internal__/mixins";
import { Reduce } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import StatefulContainerLike__reduce from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import SinkLike__reduceMixin from "../SinkLike/SinkLike.reduceMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__reduce: Reduce<RunnableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = SinkLike__reduceMixin<
    RunnableLike,
    SinkLike<TAcc>,
    T,
    TAcc
  >(ReadonlyArrayLike__toRunnable());

  return pipe(
    createInstanceFactory(typedReduceSinkMixin),
    StatefulContainerLike__reduce<RunnableLike, T, TAcc, TReactive>(
      RunnableLike__liftT,
    ),
  );
})();

export default RunnableLike__reduce;
