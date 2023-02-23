import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Reduce } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_reduce from "../../../containers/StatefulContainer/__internal__/StatefulContainer.reduce.js";
import { pipe } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
import Sink_reduceMixin from "../../Sink/__internal__/Sink.reduceMixin.js";
import Runnable_lift from "./Runnable.lift.js";

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
    StatefulContainer_reduce<RunnableLike, T, TAcc>(Runnable_lift),
  );
})();

export default Runnable_reduce;
