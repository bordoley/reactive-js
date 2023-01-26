import { createInstanceFactory } from "../../../__internal__/mixins";
import { Reduce } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import StatefulContainer_reduce from "../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink_reduceMixin from "../Sink/Sink.reduceMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_reduce: Reduce<RunnableLike>["reduce"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedReduceSinkMixin = Sink_reduceMixin<
    RunnableLike,
    SinkLike<TAcc>,
    T,
    TAcc
  >(ReadonlyArray_toRunnable());

  return pipe(
    createInstanceFactory(typedReduceSinkMixin),
    StatefulContainer_reduce<RunnableLike, T, TAcc, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_reduce;
